import { HeartHandshake, Users, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { useLanguage } from '../hooks/useLanguage'
import { translate } from '../config/translations'

export default function About() {
  const { language } = useLanguage()
  const t = (key) => translate(language, key)
  const highlights = [
    { icon: Users, title: 'about.highlight1.title', text: 'about.highlight1.text' },
    { icon: HeartHandshake, title: 'about.highlight2.title', text: 'about.highlight2.text' },
    { icon: ShieldCheck, title: 'about.highlight3.title', text: 'about.highlight3.text' },
  ]

  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={t('about.eyebrow')}
              title={t('about.title')}
              description={t('about.description')}
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
                      <h3 className="text-xl">{t(item.title)}</h3>
                      <p className="mt-2 leading-relaxed text-charcoal-500">{t(item.text)}</p>
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
