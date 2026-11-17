import { useEffect, useState } from 'react'
import { ArrowRight, Clock, Stethoscope, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'
import { clinicConfig } from '../config/clinicConfig'
import { useLanguage } from '../hooks/useLanguage'
import { translate } from '../config/translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = (key) => translate(language, key)
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const slides = clinicConfig.doctors.filter((doctor) => doctor.photo)

  useEffect(() => {
    if (paused || slides.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 6000)

    return () => window.clearInterval(intervalId)
  }, [paused, slides.length])

  const showSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length)
  }

  return (
    <section className="relative overflow-hidden bg-sand-50 pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-28">
        <div className="animate-fade-up">
          <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">{t('hero.tagline')}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-600">{t('hero.intro')}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-500">{t('hero.detail')}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/#doctors"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-700 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-lift"
            >
              {t('hero.doctors')}
              <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/#timings"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal-200 bg-white px-7 py-3.5 text-base font-semibold text-charcoal-800 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-800 hover:shadow-lift"
            >
              <Clock size={18} aria-hidden="true" />
              {t('hero.timings')}
            </Link>
          </div>

          <ul className="mt-12 grid max-w-xl grid-cols-2 gap-4">
            <li className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
                <Stethoscope size={20} aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-charcoal-700">{t('hero.physician')}</span>
            </li>
            <li className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Brain size={20} aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-charcoal-700">{t('hero.psychiatry')}</span>
            </li>
          </ul>
        </div>

        <div
          className="relative animate-fade-up [animation-delay:150ms]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
          }}
        >
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] bg-sage-100" aria-hidden="true" />
          <div
            className="relative h-[360px] overflow-hidden rounded-[2rem] bg-white shadow-lift sm:h-[460px] lg:h-[540px]"
            aria-roledescription="carousel"
            aria-label={t('hero.doctorPhotos')}
          >
            {slides.map((doctor, index) => {
              const doctorName = t(`doctor.${doctor.id}.name`)
              return (
                <div
                  key={doctor.id}
                  className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
                    index === activeSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                  aria-hidden={index !== activeSlide}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${doctor.photo}`}
                    alt={doctorName}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: doctor.id === 'vivek' ? '30% center' : 'center' }}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/35 to-transparent px-6 pb-16 pt-20 text-white sm:px-8">
                    <p className="text-xl font-semibold text-white">{doctorName}</p>
                    <p className="mt-1 text-sm text-white/90">{t(`doctor.${doctor.id}.speciality`)}</p>
                  </div>
                </div>
              )
            })}

            {slides.length > 1 && (
              <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
                {slides.map((doctor, index) => (
                  <button
                    key={doctor.id}
                    type="button"
                    onClick={() => showSlide(index)}
                    aria-label={`${t('hero.showImage')} ${index + 1}`}
                    aria-pressed={index === activeSlide}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeSlide ? 'w-7 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/90'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
