import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { clinicConfig } from '../config/clinicConfig'

const { navLinks } = clinicConfig

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white/95 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-600 font-serif text-lg font-semibold text-white">
            C
          </span>
          <span className="whitespace-nowrap font-serif text-xl font-semibold tracking-wide text-charcoal-900">
            {clinicConfig.name.toUpperCase()}
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:bg-sage-100 hover:text-sage-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden whitespace-nowrap items-center gap-2 rounded-full bg-sage-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-sage-700 xl:inline-flex"
          >
            <Phone size={16} aria-hidden="true" />
            Contact Us
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal-800 transition-colors hover:bg-sage-100 xl:hidden"
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ease-out xl:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-1 border-t border-charcoal-100 px-5 pb-6 pt-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-base font-medium text-charcoal-800 transition-colors hover:bg-sage-50 hover:text-sage-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
