import { Link } from 'react-router-dom'
import { appButtonClass } from '../../utils/buttonClasses'

export interface CtaBannerProps {
  title: string
  subtitle: string
  primaryTo: string
  primaryLabel: string
  secondaryTo?: string
  secondaryLabel?: string
}

export function CtaBanner({ title, subtitle, primaryTo, primaryLabel, secondaryTo, secondaryLabel }: CtaBannerProps) {
  return (
    <section className="py-5 apj-section-cta">
      <div className="container">
        <div className="card border-0 shadow-lg apj-cta text-white overflow-hidden rounded-4 apj-cta-shell">
          <div className="card-body p-4 p-md-5 p-lg-5 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4 apj-cta-inner">
            <div className="pe-lg-4">
              <h2 className="h3 fw-bold mb-2">{title}</h2>
              <p className="mb-0 text-white-75">{subtitle}</p>
            </div>
            <div className="d-flex flex-column flex-sm-row gap-3 flex-shrink-0">
              <Link to={primaryTo} className={appButtonClass('secondary', 'text-decoration-none text-center apj-btn-elevated')}>
                {primaryLabel}
              </Link>
              {secondaryTo && secondaryLabel ? (
                <Link to={secondaryTo} className={appButtonClass('outline', 'text-decoration-none text-center cta-outline apj-btn-ghost')}>
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
