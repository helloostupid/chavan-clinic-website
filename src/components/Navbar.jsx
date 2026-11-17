import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { clinicConfig } from '../config/clinicConfig'
import { useLanguage } from '../hooks/useLanguage'
import { translate } from '../config/translations'

const { navLinks } = clinicConfig

function ClinicBrand() {
  return (
    <span className="flex shrink-0 items-center gap-2" aria-label="Chavan Clinic">
      <img
        src={`${import.meta.env.BASE_URL}clinic-mark.svg`}
        alt=""
        aria-hidden="true"
        className="h-10 w-10 object-contain"
      />
      <span className="whitespace-nowrap text-sm font-extrabold tracking-tight sm:text-base">
        <span className="text-red-700">CHAVAN</span> <span className="text-blue-700">CLINIC</span>
      </span>
    </span>
  )
}

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage()
  const location = useLocation()
  const { pathname, hash } = location
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const t = (key) => translate(language, key)

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

  useEffect(() => setOpen(false), [pathname, hash])

  const closeMenu = () => setOpen(false)
  const isCurrentLink = (link) => {
    if (link.to.includes('#')) return pathname === '/' && hash === link.to.slice(link.to.indexOf('#'))
    if (link.to === '/') return pathname === '/' && !hash
    return pathname === link.to
  }
  const solidHeader = scrolled || open || pathname !== '/'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solidHeader ? 'bg-white/95 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8"
      >
        <Link to="/" onClick={closeMenu} aria-label="Chavan Clinic home">
          <ClinicBrand />
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                aria-current={isCurrentLink(link) ? 'page' : undefined}
                className={
                  `whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium transition-colors ${
                    isCurrentLink(link)
                      ? 'bg-red-50 text-red-800'
                      : 'text-charcoal-700 hover:bg-red-50 hover:text-red-800'
                  }`
                }
              >
                {t(`nav.${link.key}`)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/#contact"
            className="hidden whitespace-nowrap items-center gap-2 rounded-full bg-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-red-800 xl:inline-flex"
          >
            {t('nav.contactUs')}
          </Link>
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t('language.label')}
            className="rounded-full border border-blue-200 px-3 py-2 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-50"
          >
            {t('language.switchTo')}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal-800 transition-colors hover:bg-red-50 xl:hidden"
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
        <ul className="space-y-1 border-t border-charcoal-100 bg-white px-5 pb-6 pt-3">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={closeMenu}
                aria-current={isCurrentLink(link) ? 'page' : undefined}
                className={
                  `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isCurrentLink(link)
                      ? 'bg-red-50 text-red-800'
                      : 'text-charcoal-800 hover:bg-red-50 hover:text-red-800'
                  }`
                }
              >
                {t(`nav.${link.key}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
