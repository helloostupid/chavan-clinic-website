import { Clock, CalendarOff, Info } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'

const { doctors, locations, timings } = clinicConfig

function locationLabel(locationId) {
  return locations.find((location) => location.id === locationId)?.label ?? locationId
}

function DoctorSlots({ doctor, slots }) {
  return (
    <ul className="space-y-3">
      {doctor.locationIds.map((locationId) => {
        const time = slots[locationId]

        return (
          <li
            key={locationId}
            className="flex flex-col gap-1 md:gap-1.5"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-charcoal-500">
              {locationLabel(locationId)}
            </span>

            {Array.isArray(time) ? (
              <ul className="space-y-1">
                {time.map((slot, index) => (
                  <li
                    key={`${locationId}-${index}`}
                    className="font-medium text-charcoal-800"
                  >
                    {slot}
                  </li>
                ))}
              </ul>
            ) : (
              <span
                className={
                  time === 'To be confirmed'
                    ? 'italic text-charcoal-300'
                    : 'font-medium text-charcoal-800'
                }
              >
                {time ?? 'To be confirmed'}
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default function ClinicTimings() {
  return (
    <section id="timings" className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage-600">Consultation Hours</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Clinic Timings</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal-500">
            Consultation timings for each doctor, with the clinic where they consult. Please call ahead to confirm
            before visiting.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-soft">
          <div className="hidden grid-cols-[1fr_1.4fr_1fr] gap-4 bg-sage-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white md:grid">
            <span>Day</span>
            {doctors.map((doctor) => (
              <span key={doctor.id}>{doctor.name}</span>
            ))}
          </div>

          <ul className="divide-y divide-charcoal-100">
            {timings.schedule.map((entry) => (
              <li
                key={entry.day}
                className="grid gap-4 px-6 py-5 transition-colors duration-200 hover:bg-sage-50 sm:px-8 md:grid-cols-[1fr_1.4fr_1fr] md:items-start md:gap-4"
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
                  doctors.map((doctor) => (
                    <div key={doctor.id} className="space-y-2 md:space-y-0">
                      <p className="text-sm font-semibold text-charcoal-700 md:hidden">{doctor.name}</p>
                      <DoctorSlots doctor={doctor} slots={entry.slots[doctor.id] ?? {}} />
                    </div>
                  ))
                )}
              </li>
            ))}
          </ul>
        </div>

        {timings.notes.length > 0 && (
          <ul className="mt-6 space-y-3 rounded-2xl border border-sage-200 bg-white p-6 shadow-soft">
            {timings.notes.map((note) => (
              <li key={note} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-600">
                <Info size={18} className="mt-0.5 shrink-0 text-sage-600" aria-hidden="true" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
