import { MapPin, Phone, MessageCircle, Mail, Navigation } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'
import { telHref, whatsappHref, mailHref } from '../utils/contactLinks'

const { doctors, disclaimer, locations, navLinks, timings } = clinicConfig
const year = new Date().getFullYear()

function FooterLocation({ location }) {
  const { label, address, contact, googleMapsDirectionsUrl } = location
  const whatsapp = whatsappHref(contact.whatsapp)

  return (
    <li className="space-y-3">
      <p className="font-medium text-white">{label}</p>
      <address className={`flex items-start gap-3 not-italic ${address.placeholder ? 'text-charcoal-400' : ''}`}>
        <MapPin size={16} className="mt-0.5 shrink-0 text-sage-300" aria-hidden="true" />
        <span>{address.lines.join(', ')}</span>
      </address>
      <p className="flex items-center gap-3">
        <Phone size={16} className="shrink-0 text-sage-300" aria-hidden="true" />
        {telHref(contact.phone) ? (
          <a href={telHref(contact.phone)} className="transition-colors hover:text-sage-300">
            {contact.phone}
          </a>
        ) : (
          <span className="text-charcoal-400">{contact.phoneDisplay}</span>
        )}
      </p>
      {whatsapp && (
        <p className="flex items-center gap-3">
          <MessageCircle size={16} className="shrink-0 text-sage-300" aria-hidden="true" />
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sage-300">
            WhatsApp: {contact.whatsapp}
          </a>
        </p>
      )}
      {contact.email && (
        <p className="flex items-center gap-3">
          <Mail size={16} className="shrink-0 text-sage-300" aria-hidden="true" />
          <a href={mailHref(contact.email)} className="transition-colors hover:text-sage-300">
            {contact.email}
          </a>
        </p>
      )}
      {googleMapsDirectionsUrl && (
        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-sage-300 transition-colors hover:text-white"
        >
          <Navigation size={16} aria-hidden="true" />
          Get Directions
        </a>
      )}
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-500 font-serif text-lg font-semibold text-white">
              C
            </span>
            <span className="font-serif text-xl font-semibold tracking-wide text-white">
              {clinicConfig.name.toUpperCase()}
            </span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-charcoal-300">{clinicConfig.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-charcoal-300 transition-colors hover:text-sage-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Our Doctors</h3>
          <ul className="mt-5 space-y-4 text-sm">
            {doctors.map((doctor) => (
              <li key={doctor.id}>
                <p className="font-medium text-white">{doctor.name}</p>
                <p className="text-charcoal-300">{doctor.qualification}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Our Clinics</h3>
          <ul className="mt-5 space-y-6 text-sm text-charcoal-300">
            {locations.map((location) => (
              <FooterLocation key={location.id} location={location} />
            ))}
          </ul>
          <p className="mt-6 text-sm text-charcoal-300">Timings: {timings.summary}</p>
        </div>
      </div>

      <div className="border-t border-charcoal-700">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs leading-relaxed text-charcoal-400 sm:px-8">
          <p className="max-w-4xl">
            <span className="font-semibold text-charcoal-200">Medical disclaimer: </span>
            {disclaimer}
          </p>
          <p>
            &copy; {year} {clinicConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
