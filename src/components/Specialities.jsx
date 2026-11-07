import { HeartPulse, Brain, CheckCircle2 } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const icons = {
  physician: HeartPulse,
  psychiatry: Brain,
}

const accents = {
  physician: 'bg-sage-100 text-sage-700',
  psychiatry: 'bg-teal-50 text-teal-700',
}

export default function Specialities() {
  return (
    <section id="specialities" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Medical Specialities"
            description="Two areas of consultation, each led by a dedicated doctor."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {clinicConfig.specialities.map((speciality, index) => {
            const Icon = icons[speciality.id]
            return (
              <Reveal key={speciality.id} delay={index * 150} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-charcoal-100 bg-sand-50 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-10">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accents[speciality.id]}`}>
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl">{speciality.title}</h3>
                  <p
                    className={`mt-4 leading-relaxed ${
                      speciality.description.startsWith('[') ? 'italic text-charcoal-300' : 'text-charcoal-500'
                    }`}
                  >
                    {speciality.description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-charcoal-100 pt-6">
                    {speciality.services.map((service) => (
                      <li key={service} className="flex items-start gap-3 text-charcoal-600">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-sage-500" aria-hidden="true" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
