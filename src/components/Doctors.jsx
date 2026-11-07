import { clinicConfig } from '../config/clinicConfig'
import SectionHeading from './SectionHeading'
import DoctorCard from './DoctorCard'
import Reveal from './Reveal'

export default function Doctors() {
  return (
    <section id="doctors" className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Team"
            title="Meet Our Doctors"
            description="Two qualified medical professionals, one shared commitment to careful and compassionate care."
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
