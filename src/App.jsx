import { useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MedicalInformation from './pages/MedicalInformation'
import { LanguageProvider } from './context/LanguageProvider'
import { useLanguage } from './hooks/useLanguage'
import { translate } from './config/translations'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const targetId = decodeURIComponent(hash.slice(1))
    const animationFrame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [pathname, hash])
  return null
}

function AppLayout() {
  const { language } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          document.getElementById('main-content')?.focus()
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sage-600 focus:px-5 focus:py-3 focus:text-white"
      >
        {translate(language, 'access.skip')}
      </a>
      <ScrollToTop />
      <Navbar />
      <div id="main-content" tabIndex="-1" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medical-info" element={<MedicalInformation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <AppLayout />
      </LanguageProvider>
    </HashRouter>
  )
}
