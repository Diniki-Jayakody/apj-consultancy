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
    <section className="py-5">
      <div className="container">
        <div className="card border-0 shadow apj-cta text-white overflow-hidden">
          <div className="card-body p-4 p-md-5 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4">
            <div>
              <h2 className="h3 fw-bold mb-2">{title}</h2>
              <p className="mb-0 text-white-50">{subtitle}</p>
            </div>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Link to={primaryTo} className={appButtonClass('secondary', 'text-decoration-none text-center')}>
                {primaryLabel}
              </Link>
              {secondaryTo && secondaryLabel ? (
                <Link to={secondaryTo} className={appButtonClass('outline', 'text-decoration-none text-center cta-outline')}>
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
