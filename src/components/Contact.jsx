import { Phone, MessageCircle, Mail, MapPin, Navigation } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const { contact, address } = clinicConfig

const whatsappDigits = contact.whatsapp.replace(/\D/g, '')

const contactItems = [
  {
    key: 'phone',
    icon: Phone,
    label: 'Phone',
    value: contact.phone || contact.phoneDisplay,
    href: contact.phone ? `tel:${contact.phone}` : null,
    cta: 'Call now',
  },
  {
    key: 'whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: contact.whatsapp || contact.whatsappDisplay,
    href: whatsappDigits ? `https://wa.me/${whatsappDigits}` : null,
    external: true,
    cta: 'Message on WhatsApp',
  },
  {
    key: 'email',
    icon: Mail,
    label: 'Email',
    value: contact.email || 'To be added',
    href: contact.email ? `mailto:${contact.email}` : null,
    cta: 'Send an email',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Chavan Clinic"
            description="Call, message or write to the clinic. For directions, use the Get Directions link."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {contactItems.map((item, index) => {
            const Icon = item.icon
            const isPlaceholder = !item.href
            const inner = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-100 text-sage-700 transition-colors group-hover:bg-sage-600 group-hover:text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-charcoal-500">{item.label}</p>
                <p className={`mt-2 break-words text-lg font-medium ${isPlaceholder ? 'italic text-charcoal-300' : 'text-charcoal-900'}`}>
                  {item.value}
                </p>
                {item.href && (
                  <p className="mt-4 text-sm font-semibold text-sage-700 transition-transform group-hover:translate-x-1">
                    {item.cta} &rarr;
                  </p>
                )}
              </>
            )

            return (
              <Reveal key={item.key} delay={index * 120} className="h-full">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="group flex h-full flex-col rounded-3xl border border-charcoal-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex h-full flex-col rounded-3xl border border-dashed border-charcoal-300 bg-white p-8">
                    {inner}
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-6 flex flex-col gap-6 rounded-3xl border border-charcoal-100 bg-white p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
                <MapPin size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-charcoal-500">Clinic Address</p>
                <address
                  className={`mt-2 not-italic leading-relaxed ${address.placeholder ? 'text-charcoal-400' : 'text-charcoal-800'}`}
                >
                  {address.lines.join(', ')}
                </address>
              </div>
            </div>
            {clinicConfig.googleMapsDirectionsUrl && (
              <a
                href={clinicConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-sage-600 px-6 py-3 font-semibold text-sage-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-600 hover:text-white"
              >
                <Navigation size={18} aria-hidden="true" />
                Get Directions
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
