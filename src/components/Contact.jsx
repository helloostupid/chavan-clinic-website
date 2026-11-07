import { Phone, MessageCircle, Mail, Navigation } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'
import { telHref, whatsappHref, mailHref } from '../utils/contactLinks'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

function ContactRow({ icon: Icon, label, value, href, external = false }) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-700 transition-colors group-hover:bg-sage-600 group-hover:text-white">
        <Icon size={20} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-wider text-charcoal-500">{label}</span>
        <span className={`block break-words font-medium ${href ? 'text-charcoal-900' : 'italic text-charcoal-300'}`}>
          {value}
        </span>
      </span>
    </>
  )

  if (!href) {
    return <li className="flex items-center gap-4 rounded-2xl border border-dashed border-charcoal-200 p-4">{content}</li>
  }

  return (
    <li>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="group flex items-center gap-4 rounded-2xl border border-charcoal-100 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-soft"
      >
        {content}
      </a>
    </li>
  )
}

function ClinicContactCard({ location }) {
  const { label, address, contact, googleMapsDirectionsUrl } = location
  const whatsapp = whatsappHref(contact.whatsapp)

  return (
    <div className="flex h-full flex-col rounded-3xl border border-charcoal-100 bg-sand-50 p-8 shadow-soft sm:p-10">
      <h3 className="text-2xl">{label}</h3>
      <address
        className={`mt-3 not-italic leading-relaxed ${address.placeholder ? 'text-charcoal-400' : 'text-charcoal-600'}`}
      >
        {address.lines.join(', ')}
      </address>

      <ul className="mt-8 grid gap-4">
        <ContactRow
          icon={Phone}
          label="Phone"
          value={contact.phone || contact.phoneDisplay}
          href={telHref(contact.phone)}
        />
        <ContactRow
          icon={MessageCircle}
          label="WhatsApp"
          value={contact.whatsapp || contact.whatsappDisplay}
          href={whatsapp}
          external
        />
        <ContactRow icon={Mail} label="Email" value={contact.email || 'To be added'} href={mailHref(contact.email)} />
      </ul>

      {googleMapsDirectionsUrl && (
        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-full border border-sage-600 px-6 py-3 pt-3 font-semibold text-sage-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-600 hover:text-white"
        >
          <Navigation size={18} aria-hidden="true" />
          Get Directions
        </a>
      )}
    </div>
  )
}

export default function Contact() {
  const { locations } = clinicConfig

  return (
    <section id="contact" className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Chavan Clinic"
            description="Call, message or write to the clinic you wish to visit."
          />
        </Reveal>

        <div className={`mt-16 grid gap-8 ${locations.length > 1 ? 'lg:grid-cols-2' : 'mx-auto max-w-3xl'}`}>
          {locations.map((location, index) => (
            <Reveal key={location.id} delay={index * 150} className="h-full">
              <ClinicContactCard location={location} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
