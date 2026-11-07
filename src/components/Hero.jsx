import { ArrowRight, Clock, Stethoscope, Brain } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'

const HERO_IMAGE =
  'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-sand-50 pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-28">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white px-4 py-1.5 text-sm font-medium text-sage-700 shadow-soft">
            <span className="h-2 w-2 rounded-full bg-sage-500" aria-hidden="true" />
            {clinicConfig.name.toUpperCase()}
          </p>
          <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">{clinicConfig.tagline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-600">{clinicConfig.introduction}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-500">
            We offer physician consultations for general medical care and psychiatric consultations for mental
            health, led by two qualified doctors.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#doctors"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-sage-600 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-700 hover:shadow-lift"
            >
              Our Doctors
              <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#timings"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal-200 bg-white px-7 py-3.5 text-base font-semibold text-charcoal-800 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-sage-400 hover:text-sage-700 hover:shadow-lift"
            >
              <Clock size={18} aria-hidden="true" />
              View Clinic Timings
            </a>
          </div>

          <ul className="mt-12 grid max-w-xl grid-cols-2 gap-4">
            <li className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
                <Stethoscope size={20} aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-charcoal-700">Physician Consultations</span>
            </li>
            <li className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Brain size={20} aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-charcoal-700">Psychiatric Consultations</span>
            </li>
          </ul>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] bg-sage-100" aria-hidden="true" />
          <img
            src={HERO_IMAGE}
            alt="Stethoscope resting on a clean white desk in a calm clinic setting"
            width="940"
            height="650"
            fetchPriority="high"
            className="relative h-[360px] w-full rounded-[2rem] object-cover shadow-lift sm:h-[460px] lg:h-[540px]"
          />
        </div>
      </div>
    </section>
  )
}
