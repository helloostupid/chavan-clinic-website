import { Clock, CalendarOff, Info } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const doctorColumns = clinicConfig.doctors.map((doctor) => ({
  key: doctor.id,
  name: doctor.name,
}))

export default function ClinicTimings() {
  const { schedule, notes } = clinicConfig.timings

  return (
    <section id="timings" className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Consultation Hours"
            title="Clinic Timings"
            description="Consultation timings for each doctor. Please call ahead to confirm before visiting."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-soft">
            <div className="hidden grid-cols-[1.1fr_1fr_1fr] gap-4 bg-sage-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white md:grid">
              <span>Day</span>
              {doctorColumns.map((column) => (
                <span key={column.key}>{column.name}</span>
              ))}
            </div>

            <ul className="divide-y divide-charcoal-100">
              {schedule.map((entry) => (
                <li
                  key={entry.day}
                  className="grid gap-3 px-6 py-5 transition-colors duration-200 hover:bg-sage-50 sm:px-8 md:grid-cols-[1.1fr_1fr_1fr] md:items-center md:gap-4"
                >
                  <div className="flex items-center justify-between md:block">
                    <span className="flex items-center gap-2 font-semibold text-charcoal-900">
                      <Clock size={18} className="text-sage-600 md:hidden" aria-hidden="true" />
                      {entry.day}
                    </span>
                    {entry.closed && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-error-100 px-3 py-1 text-xs font-semibold text-error-600 md:hidden">
                        <CalendarOff size={14} aria-hidden="true" />
                        Closed
                      </span>
                    )}
                  </div>

                  {entry.closed ? (
                    <p className="hidden items-center gap-2 text-sm font-semibold text-error-600 md:col-span-2 md:flex">
                      <CalendarOff size={16} aria-hidden="true" />
                      Closed
                    </p>
                  ) : (
                    doctorColumns.map((column) => (
                      <p key={column.key} className="flex items-center justify-between text-charcoal-700 md:block">
                        <span className="text-sm text-charcoal-500 md:hidden">{column.name}</span>
                        <span
                          className={
                            entry[column.key] === 'To be confirmed' ? 'italic text-charcoal-300' : 'font-medium'
                          }
                        >
                          {entry[column.key]}
                        </span>
                      </p>
                    ))
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {notes.length > 0 && (
          <Reveal delay={200}>
            <ul className="mt-8 space-y-3 rounded-2xl border border-sage-200 bg-white p-6 shadow-soft">
              {notes.map((note) => (
                <li key={note} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-600">
                  <Info size={18} className="mt-0.5 shrink-0 text-sage-600" aria-hidden="true" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  )
}
