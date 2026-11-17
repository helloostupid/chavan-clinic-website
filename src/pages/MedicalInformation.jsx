import { QrCode } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { clinicConfig } from '../config/clinicConfig'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../hooks/useLanguage'
import { translate } from '../config/translations'

function localizedText(value, language) {
  if (typeof value === 'string') return value
  return value?.[language] || value?.en || ''
}

function isSafeWebUrl(value) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

function isSafeVideoEmbed(value) {
  if (!isSafeWebUrl(value)) return false
  const host = new URL(value).hostname
  return ['youtube.com', 'www.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host)
}

function ResourceCard({ resource, language, t }) {
  const title = localizedText(resource.title, language)
  const description = localizedText(resource.description, language)
  const url = isSafeWebUrl(resource.url) ? resource.url : null

  return (
    <article className="flex flex-col gap-6 rounded-3xl border border-charcoal-100 bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:p-8">
      <div className="flex h-36 w-full shrink-0 items-center justify-center rounded-2xl bg-blue-50 sm:w-36">
        {url ? (
          <QRCodeSVG
            value={url}
            size={112}
            level="M"
            title={t('information.qrAlt', { title })}
            bgColor="#eff8fc"
            fgColor="#16465b"
          />
        ) : (
          <QrCode size={44} className="text-blue-700" aria-hidden="true" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-xl">{title}</h3>
        {description && <p className="mt-2 leading-relaxed text-charcoal-600">{description}</p>}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full bg-red-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-800"
          >
            {t('information.openResource')}
          </a>
        )}
      </div>
    </article>
  )
}

function DoctorVideo({ video, language }) {
  const title = localizedText(video.title, language)
  const embedUrl = isSafeVideoEmbed(video.embedUrl) ? video.embedUrl : null

  return (
    <article className="overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-soft">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title={title}
          className="aspect-video w-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className="flex aspect-video items-center justify-center bg-blue-50 px-6 text-center text-sm text-blue-900">
          {title}
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg">{title}</h3>
        {video.doctor && <p className="mt-1 text-sm text-charcoal-500">{video.doctor}</p>}
        {video.url && isSafeWebUrl(video.url) && (
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex font-semibold text-blue-800 underline-offset-4 hover:underline"
          >
            {translate(language, 'information.openResource')}
          </a>
        )}
      </div>
    </article>
  )
}

export default function MedicalInformation() {
  const { language } = useLanguage()
  const t = (key, values) => translate(language, key, values)
  const { resources, doctorVideos } = clinicConfig.medicalInfo

  return (
    <div className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('information.eyebrow')}
          title={t('information.title')}
          description={t('information.description')}
        />

        <section className="mt-14">
          <SectionHeading
            align="left"
            title={t('information.resourcesTitle')}
            description={t('information.resourcesDescription')}
          />
          {resources.length ? (
            <div className="mt-7 grid gap-5 lg:grid-cols-2">
              {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} language={language} t={t} />
              ))}
            </div>
          ) : (
            <p className="mt-7 rounded-2xl border border-dashed border-blue-200 bg-white p-6 text-charcoal-600">
              {t('information.emptyResources')}
            </p>
          )}
        </section>

        <section className="mt-16">
          <SectionHeading
            align="left"
            title={t('information.videosTitle')}
            description={t('information.videosDescription')}
          />
          {doctorVideos.length ? (
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {doctorVideos.map((video) => (
                <DoctorVideo key={video.id} video={video} language={language} />
              ))}
            </div>
          ) : (
            <p className="mt-7 rounded-2xl border border-dashed border-blue-200 bg-white p-6 text-charcoal-600">
              {t('information.emptyVideos')}
            </p>
          )}
        </section>

        <p className="mt-12 rounded-2xl bg-blue-50 p-5 text-sm leading-relaxed text-blue-900">
          {t('information.disclaimer')}
        </p>
      </div>
    </div>
  )
}
