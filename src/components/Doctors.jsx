import { clinicConfig } from '../config/clinicConfig'
import SectionHeading from './SectionHeading'
import DoctorCard from './DoctorCard'
import Reveal from './Reveal'
import { useLanguage } from '../hooks/useLanguage'
import { translate } from '../config/translations'

export default function Doctors() {
  const { language } = useLanguage()
  const t = (key) => translate(language, key)

  return (
    <section id="doctors" className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t('doctors.eyebrow')}
            title={t('doctors.title')}
            description={t('doctors.description')}
          />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {clinicConfig.doctors.map((doctor, index) => (
            <Reveal key={doctor.id} delay={index * 150} className="h-full">
              <DoctorCard doctor={doctor} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
