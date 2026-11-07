import { User, GraduationCap, Stethoscope, CheckCircle2 } from 'lucide-react'

export default function DoctorCard({ doctor }) {
  const isPlaceholderText = (text) => text.startsWith('[')

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-sage-100">
        {doctor.photo ? (
          <img
            src={doctor.photo}
            alt={`Photograph of ${doctor.name}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-sage-600">
            <span className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-sage-400 bg-white/60">
              <User size={40} aria-hidden="true" />
            </span>
            <span className="text-sm font-medium">Photograph to be added</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h3 className="text-2xl">{doctor.name}</h3>

        <div className="mt-4 flex flex-col gap-3 text-sm">
          <p className="flex items-center gap-2 text-charcoal-600">
            <GraduationCap size={18} className="shrink-0 text-sage-600" aria-hidden="true" />
            <span className="font-medium">{doctor.qualification}</span>
          </p>
          <p className="flex items-center gap-2 text-charcoal-600">
            <Stethoscope size={18} className="shrink-0 text-sage-600" aria-hidden="true" />
            <span className="font-medium">{doctor.speciality}</span>
          </p>
        </div>

        <p
          className={`mt-5 leading-relaxed ${
            isPlaceholderText(doctor.introduction) ? 'italic text-charcoal-300' : 'text-charcoal-500'
          }`}
        >
          {doctor.introduction}
        </p>

        <div className="mt-6 border-t border-charcoal-100 pt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal-700">Areas of consultation</h4>
          <ul className="mt-4 space-y-3">
            {doctor.consultationAreas.map((area) => (
              <li key={area} className="flex items-start gap-3 text-sm text-charcoal-600">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-sage-500" aria-hidden="true" />
                <span className={isPlaceholderText(area) ? 'italic text-charcoal-300' : ''}>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
