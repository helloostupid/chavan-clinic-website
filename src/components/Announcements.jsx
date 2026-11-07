import { AlertTriangle, CheckCircle2, Info, X } from 'lucide-react'
import { useState } from 'react'
import { clinicConfig } from '../config/clinicConfig'

const toneStyles = {
  info: { container: 'bg-teal-50 text-teal-700 border-teal-100', icon: Info },
  warning: { container: 'bg-warning-100 text-warning-600 border-warning-600/20', icon: AlertTriangle },
  success: { container: 'bg-success-100 text-success-600 border-success-600/20', icon: CheckCircle2 },
}

export default function Announcements() {
  const [dismissed, setDismissed] = useState(false)
  const { enabled, tone, title, message } = clinicConfig.announcement
  if (!enabled || dismissed) return null

  const style = toneStyles[tone] ?? toneStyles.info
  const Icon = style.icon

  return (
    <div className="bg-sand-50 px-5 pt-24 sm:px-8">
      <div
        role="status"
        className={`mx-auto flex max-w-5xl items-start gap-4 rounded-2xl border px-5 py-4 shadow-soft sm:items-center ${style.container}`}
      >
        <Icon size={22} className="mt-0.5 shrink-0 sm:mt-0" aria-hidden="true" />
        <p className="flex-1 text-sm leading-relaxed text-charcoal-800 sm:text-base">
          <span className="font-semibold">{title}: </span>
          {message}
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-charcoal-600 transition-colors hover:bg-white/70"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
