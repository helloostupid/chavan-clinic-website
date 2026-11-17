import { ArrowRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Announcements from '../components/Announcements'
import ClinicTimings from '../components/ClinicTimings'
import Contact from '../components/Contact'
import Doctors from '../components/Doctors'
import Hero from '../components/Hero'
import Location from '../components/Location'
import Specialities from '../components/Specialities'
import { translate } from '../config/translations'
import { useLanguage } from '../hooks/useLanguage'

export default function Home() {
  const { language } = useLanguage()
  const t = (key) => translate(language, key)

  return (
    <main>
      <Announcements />
      <Hero />
      <About />
      <Doctors />
      <Specialities />
      <ClinicTimings />
      <Location />
      <Contact />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Link
            to="/medical-info"
            className="group flex items-center justify-between gap-5 rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift sm:p-8"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700">
                <BookOpen size={23} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-lg font-semibold text-charcoal-900">{t('information.title')}</span>
                <span className="mt-1 block text-sm text-charcoal-600">{t('home.infoText')}</span>
              </span>
            </span>
            <ArrowRight
              size={20}
              className="shrink-0 text-red-700 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </main>
  )
}
