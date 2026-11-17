import { MapPin, Navigation, MapPinOff } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { useLanguage } from '../hooks/useLanguage'
import { translate } from '../config/translations'

function LocationCard({ location, t }) {
  const { address, googleMapsEmbedUrl, googleMapsDirectionsUrl } = location
  const label = t(`location.${location.id}`)

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-soft">
      <div className="relative h-72 bg-sage-50">
        {googleMapsEmbedUrl ? (
          <iframe
            src={googleMapsEmbedUrl}
            title={t('locations.mapTitle', { clinic: label })}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-sage-600 shadow-soft">
              <MapPinOff size={24} aria-hidden="true" />
            </span>
            <p className="font-serif text-xl text-charcoal-900">{t('locations.mapMissing')}</p>
            <p className="max-w-xs text-sm leading-relaxed text-charcoal-500">
              {t('locations.mapInstructions')}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
            <MapPin size={22} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-2xl">{label}</h3>
            <address
              className={`mt-2 not-italic leading-relaxed ${address.placeholder ? 'text-charcoal-400' : 'text-charcoal-600'}`}
            >
              {address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            {address.placeholder}
          </div>
        </div>

        <div className="mt-auto pt-8">
          {googleMapsDirectionsUrl ? (
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage-600 px-6 py-3.5 font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-700 hover:shadow-lift"
            >
              <Navigation size={18} aria-hidden="true" />
              {t('locations.directions')}
            </a>
          ) : (
            <p className="rounded-full bg-charcoal-50 px-6 py-3.5 text-center text-sm font-medium text-charcoal-500">
              {t('locations.directionsMissing')}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Location() {
  const { locations } = clinicConfig
  const { language } = useLanguage()
  const t = (key, values) => translate(language, key, values)

  return (
    <section id="find-us" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t('locations.eyebrow')}
            title={t('locations.title')}
            description={t('locations.description')}
          />
        </Reveal>

        <div className={`mt-16 grid gap-8 ${locations.length > 1 ? 'lg:grid-cols-2' : 'mx-auto max-w-3xl'}`}>
          {locations.map((location, index) => (
            <Reveal key={location.id} delay={index * 150} className="h-full">
              <LocationCard location={location} t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
