import { CalendarOff, Clock, Info } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'
import { useLanguage } from '../hooks/useLanguage'
import { translate } from '../config/translations'
import SectionHeading from './SectionHeading'

function groupSchedule(schedule) {
  return schedule.reduce((groups, entry) => {
    const previous = groups[groups.length - 1]
    const samePattern =
      previous &&
      previous.closed === entry.closed &&
      JSON.stringify(previous.slots) === JSON.stringify(entry.slots)

    if (samePattern) {
      previous.endDay = entry.day
    } else {
      groups.push({
        startDay: entry.day,
        endDay: entry.day,
        closed: entry.closed,
        slots: entry.slots,
      })
    }

    return groups
  }, [])
}

function formatTime(time, closedLabel) {
  if (Array.isArray(time)) return time.join(' · ')
  return time || closedLabel
}

export default function ClinicTimings() {
  const { language } = useLanguage()
  const t = (key) => translate(language, key)
  const groups = groupSchedule(clinicConfig.timings.schedule)

  return (
    <section id="timings" className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('timings.eyebrow')}
          title={t('timings.title')}
          description={t('timings.description')}
        />

        <div className="mt-12 space-y-5">
          {groups.map((group) => {
            const start = t(`timings.${group.startDay.toLowerCase()}`)
            const end = t(`timings.${group.endDay.toLowerCase()}`)
            const dayRange = group.startDay === group.endDay ? start : `${start} – ${end}`

            return (
              <article
                key={`${group.startDay}-${group.endDay}`}
                className="overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-soft"
              >
                <div
                  className={`flex items-center justify-between gap-4 px-6 py-4 sm:px-8 ${
                    group.closed ? 'bg-red-100' : 'bg-blue-100'
                  }`}
                >
                  <h3
                    className={`flex items-center gap-3 text-lg font-semibold ${
                      group.closed ? 'text-red-900' : 'text-blue-900'
                    }`}
                  >
                    <Clock size={20} aria-hidden="true" />
                    {dayRange}
                  </h3>
                  {group.closed && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-red-800">
                      <CalendarOff size={16} aria-hidden="true" />
                      {t('timings.closed')}
                    </span>
                  )}
                </div>

                {group.closed ? (
                  <p className="px-6 py-7 font-semibold text-red-800 sm:px-8">{t('timings.closed')}</p>
                ) : (
                  <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
                    {clinicConfig.locations.map((location) => {
                      const attendingDoctors = clinicConfig.doctors.filter((doctor) =>
                        doctor.locationIds.includes(location.id),
                      )

                      return (
                        <div
                          key={location.id}
                          className="rounded-2xl border border-charcoal-100 bg-sand-50 p-5 sm:p-6"
                        >
                          <h4 className="text-lg font-semibold text-blue-900">{t(`location.${location.id}`)}</h4>
                          <ul className="mt-4 space-y-4">
                            {attendingDoctors.map((doctor) => (
                              <li key={doctor.id}>
                                <p className="text-sm font-semibold text-charcoal-700">
                                  {t(`doctor.${doctor.id}.name`)}
                                </p>
                                <p className="mt-1 flex items-start gap-2 text-lg font-bold text-blue-900">
                                  <Clock size={17} className="mt-1 shrink-0 text-blue-700" aria-hidden="true" />
                                  {formatTime(group.slots?.[doctor.id]?.[location.id], t('timings.closed'))}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <p className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-relaxed text-blue-900">
          <Info size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          {t('timings.callAhead')}
        </p>
      </div>
    </section>
  )
}
