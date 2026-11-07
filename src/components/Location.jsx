import { MapPin, Navigation, MapPinOff } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Location() {
  const { address, googleMapsEmbedUrl, googleMapsDirectionsUrl } = clinicConfig

  return (
    <section id="find-us" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Location"
            title="Visit Chavan Clinic"
            description="Find the clinic on the map, then open directions in Google Maps for turn-by-turn guidance."
          />
        </Reveal>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Reveal className="h-full">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-3xl border border-charcoal-100 bg-sage-50 shadow-soft lg:min-h-[480px]">
              {googleMapsEmbedUrl ? (
                <iframe
                  src={googleMapsEmbedUrl}
                  title={`Map showing the location of ${clinicConfig.name}`}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full min-h-[360px] flex-col items-center justify-center gap-4 p-8 text-center lg:min-h-[480px]">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-sage-600 shadow-soft">
                    <MapPinOff size={28} aria-hidden="true" />
                  </span>
                  <p className="font-serif text-2xl text-charcoal-900">Map location to be added</p>
                  <p className="max-w-sm text-sm leading-relaxed text-charcoal-500">
                    Add the Google Maps embed link in the clinic configuration file to show the live map here.
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={150} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-charcoal-100 bg-sand-50 p-8 shadow-soft sm:p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-sage-700">
                <MapPin size={28} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl">{clinicConfig.name}</h3>
              <address
                className={`mt-4 not-italic leading-relaxed ${
                  address.placeholder ? 'text-charcoal-400' : 'text-charcoal-600'
                }`}
              >
                {address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              {address.placeholder && (
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-warning-600">
                  Placeholder address, to be updated
                </p>
              )}

              <div className="mt-auto pt-8">
                {googleMapsDirectionsUrl ? (
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage-600 px-6 py-3.5 font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-700 hover:shadow-lift"
                  >
                    <Navigation size={18} aria-hidden="true" />
                    Get Directions
                  </a>
                ) : (
                  <p className="rounded-full bg-charcoal-50 px-6 py-3.5 text-center text-sm font-medium text-charcoal-500">
                    Directions link to be added
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
