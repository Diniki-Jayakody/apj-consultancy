import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { appButtonClass } from '../../utils/buttonClasses'

export interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  primaryTo: string
  primaryLabel: string
  secondaryTo?: string
  secondaryLabel?: string
  badge?: ReactNode
}

export function Hero({ eyebrow, title, subtitle, primaryTo, primaryLabel, secondaryTo, secondaryLabel, badge }: HeroProps) {
  return (
    <section className="hero-apj text-white">
      <div className="container py-5 py-lg-6">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-7">
            {eyebrow ? <p className="text-apj-gold fw-semibold text-uppercase small letter-spacing mb-2">{eyebrow}</p> : null}
            {badge}
            <h1 className="display-4 fw-bold mb-3">{title}</h1>
            <p className="lead text-white-50 mb-4">{subtitle}</p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Link to={primaryTo} className={appButtonClass('secondary', 'text-decoration-none text-center')}>
                {primaryLabel}
              </Link>
              {secondaryTo && secondaryLabel ? (
                <Link to={secondaryTo} className={appButtonClass('outline', 'text-decoration-none text-center hero-outline-btn')}>
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
            <div className="d-flex flex-wrap gap-4 mt-4 pt-2 small text-white-50">
              <div>
                <div className="fw-semibold text-white">Trusted guidance</div>
                <div>Transparent timelines</div>
              </div>
              <div>
                <div className="fw-semibold text-white">Global destinations</div>
                <div>UK · Canada · Australia · USA</div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg hero-card text-dark">
              <div className="card-body p-4 p-md-5">
                <h2 className="h5 fw-bold text-apj-primary mb-3">Start with a clarity call</h2>
                <p className="text-secondary mb-4">
                  Tell us your goals and constraints. We will map realistic options, timelines, and next steps—no pressure, no jargon.
                </p>
                <ul className="list-unstyled mb-0 small text-secondary">
                  <li className="d-flex gap-2 mb-2">
                    <i className="bi bi-check-circle-fill text-apj-accent" aria-hidden />
                    <span>Personalized shortlisting framework</span>
                  </li>
                  <li className="d-flex gap-2 mb-2">
                    <i className="bi bi-check-circle-fill text-apj-accent" aria-hidden />
                    <span>Document checklist & review cadence</span>
                  </li>
                  <li className="d-flex gap-2">
                    <i className="bi bi-check-circle-fill text-apj-accent" aria-hidden />
                    <span>Visa readiness checkpoints</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
