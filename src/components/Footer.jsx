import { Link } from 'react-router-dom'
import { MapPin, Phone, MessageCircle, Mail, Navigation } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'
import { translate } from '../config/translations'
import { useLanguage } from '../hooks/useLanguage'
import { telHref, whatsappHref, mailHref } from '../utils/contactLinks'

const { doctors, locations, navLinks } = clinicConfig
const year = new Date().getFullYear()

function FooterLocation({ location, t }) {
  const { address, contact, googleMapsDirectionsUrl } = location
  const label = t(`location.${location.id}`)
  const whatsapp = whatsappHref(contact.whatsapp)

  return (
    <li className="space-y-3">
      <p className="font-medium text-white">{label}</p>
      <address className={`flex items-start gap-3 not-italic ${address.placeholder ? 'text-charcoal-400' : ''}`}>
        <MapPin size={16} className="mt-0.5 shrink-0 text-blue-300" aria-hidden="true" />
        <span>{address.lines.join(', ')}</span>
      </address>
      <p className="flex items-center gap-3">
        <Phone size={16} className="shrink-0 text-blue-300" aria-hidden="true" />
        {telHref(contact.phone) ? (
          <a href={telHref(contact.phone)} className="transition-colors hover:text-blue-300">
            {contact.phone}
          </a>
        ) : (
          <span className="text-charcoal-400">{contact.phoneDisplay || t('contact.toBeAdded')}</span>
        )}
      </p>
      {whatsapp && (
        <p className="flex items-center gap-3">
          <MessageCircle size={16} className="shrink-0 text-blue-300" aria-hidden="true" />
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-300">
            {t('contact.whatsapp')}: {contact.whatsapp}
          </a>
        </p>
      )}
      {contact.email && (
        <p className="flex items-center gap-3">
          <Mail size={16} className="shrink-0 text-blue-300" aria-hidden="true" />
          <a href={mailHref(contact.email)} className="transition-colors hover:text-blue-300">
            {contact.email}
          </a>
        </p>
      )}
      {googleMapsDirectionsUrl && (
        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-blue-300 transition-colors hover:text-white"
        >
          <Navigation size={16} aria-hidden="true" />
          {t('locations.directions')}
        </a>
      )}
    </li>
  )
}

export default function Footer() {
  const { language } = useLanguage()
  const t = (key) => translate(language, key)

  return (
    <footer className="bg-charcoal-900 text-charcoal-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="text-sm font-extrabold tracking-tight" aria-label="Chavan Clinic home">
            <span className="text-red-300">CHAVAN</span> <span className="text-blue-300">CLINIC</span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-charcoal-300">{t('hero.tagline')}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t('footer.quickLinks')}</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-charcoal-300 transition-colors hover:text-blue-300">
                  {t(`nav.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t('footer.ourDoctors')}</h3>
          <ul className="mt-5 space-y-4 text-sm">
            {doctors.map((doctor) => (
              <li key={doctor.id}>
                <p className="font-medium text-white">{t(`doctor.${doctor.id}.name`)}</p>
                <p className="text-charcoal-300">{t(`doctor.${doctor.id}.qualification`)}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t('footer.ourClinics')}</h3>
          <ul className="mt-5 space-y-6 text-sm text-charcoal-300">
            {locations.map((location) => (
              <FooterLocation key={location.id} location={location} t={t} />
            ))}
          </ul>
          <p className="mt-6 text-sm text-charcoal-300">{t('timings.callAhead')}</p>
        </div>
      </div>

      <div className="border-t border-charcoal-700">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs leading-relaxed text-charcoal-400 sm:px-8">
          <p>
            &copy; {year} {clinicConfig.name}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
