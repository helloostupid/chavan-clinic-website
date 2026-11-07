import Announcements from '../components/Announcements'
import Hero from '../components/Hero'
import About from '../components/About'
import Doctors from '../components/Doctors'
import Specialities from '../components/Specialities'
import ClinicTimings from '../components/ClinicTimings'
import Location from '../components/Location'
import Contact from '../components/Contact'

export default function Home() {
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
    </main>
  )
}
