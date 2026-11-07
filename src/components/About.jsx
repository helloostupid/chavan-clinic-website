import { HeartHandshake, Users, ShieldCheck } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const highlights = [
  {
    icon: Users,
    title: 'Two doctors, one clinic',
    text: 'Physician and psychiatric care under one roof, with both doctors involved in your care where needed.',
  },
  {
    icon: HeartHandshake,
    title: 'Listening first',
    text: 'Every consultation starts with understanding your concerns, your history and what matters to you.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional standards',
    text: 'Care delivered with clear communication, respect for your privacy and qualified medical judgement.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title={`Welcome to ${clinicConfig.name}`}
              description={`${clinicConfig.name} is a private medical clinic run by Dr. Vivek Chavan, a physician, and Dr. Shwetali Chavan, a psychiatrist. We provide thoughtful consultations for both physical and mental health, with the aim of making every visit clear, comfortable and unhurried.`}
            />
          </Reveal>

          <ul className="grid gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 120}>
                  <li className="flex gap-5 rounded-2xl border border-charcoal-100 bg-sand-50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-charcoal-500">{item.text}</p>
                    </div>
                  </li>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
