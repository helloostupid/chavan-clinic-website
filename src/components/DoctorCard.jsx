import { User, GraduationCap, Stethoscope } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { translate } from '../config/translations'

export default function DoctorCard({ doctor }) {
  const { language } = useLanguage()
  const t = (key) => translate(language, key)
  const isPlaceholderText = (text) => text.startsWith('[')
  const prefix = `doctor.${doctor.id}`
  const doctorName = t(`${prefix}.name`)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-sage-100">
        {doctor.photo ? (
          <img
            src={doctor.photo}
            alt={doctorName}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-sage-600">
            <span className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-sage-400 bg-white/60">
              <User size={40} aria-hidden="true" />
            </span>
            <span className="text-sm font-medium">{t('doctors.photoPlaceholder')}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h3 className="text-2xl">{doctorName}</h3>

        <div className="mt-4 flex flex-col gap-3 text-sm">
          <p className="flex items-center gap-2 text-charcoal-600">
            <GraduationCap size={18} className="shrink-0 text-sage-600" aria-hidden="true" />
            <span className="font-medium">{t(`${prefix}.qualification`)}</span>
          </p>
          <p className="flex items-center gap-2 text-charcoal-600">
            <Stethoscope size={18} className="shrink-0 text-sage-600" aria-hidden="true" />
            <span className="font-medium">{t(`${prefix}.speciality`)}</span>
          </p>
        </div>

        <p
          className={`mt-5 leading-relaxed ${
            isPlaceholderText(doctor.introduction) ? 'italic text-charcoal-300' : 'text-charcoal-500'
          }`}
        >
          {t(`${prefix}.introduction`)}
        </p>

      </div>
    </article>
  )
}
