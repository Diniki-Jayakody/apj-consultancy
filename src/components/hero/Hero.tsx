import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { heroBackgroundImage } from '../../services/mockData'
import { appButtonClass } from '../../utils/buttonClasses'
import { ResponsiveImage } from '../media/ResponsiveImage'

export interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  primaryTo: string
  primaryLabel: string
  secondaryTo?: string
  secondaryLabel?: string
  badge?: ReactNode
  /** Optional override for the full-bleed background photo */
  backgroundImageSrc?: string
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryTo,
  primaryLabel,
  secondaryTo,
  secondaryLabel,
  badge,
  backgroundImageSrc = heroBackgroundImage.src,
}: HeroProps) {
  return (
    <section className="hero-apj text-white position-relative overflow-hidden">
      <div className="hero-apj-media" aria-hidden>
        <ResponsiveImage
          src={backgroundImageSrc}
          alt=""
          className="apj-img-cover w-100 h-100"
          loading="eager"
          fetchPriority="high"
          width={2000}
          height={1125}
        />
      </div>
      <div className="hero-apj-overlay" aria-hidden />
      <div className="hero-apj-grain" aria-hidden />

      <div className="container position-relative hero-apj-content py-5 py-lg-6">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-7">
            {eyebrow ? <p className="text-apj-gold fw-semibold text-uppercase small letter-spacing mb-2">{eyebrow}</p> : null}
            {badge}
            <h1 className="display-4 fw-bold mb-3 text-white hero-title-shadow">{title}</h1>
            <p className="lead text-white-75 mb-4 hero-subtitle-max">{subtitle}</p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Link to={primaryTo} className={appButtonClass('secondary', 'text-decoration-none text-center apj-btn-elevated')}>
                {primaryLabel}
              </Link>
              {secondaryTo && secondaryLabel ? (
                <Link to={secondaryTo} className={appButtonClass('outline', 'text-decoration-none text-center hero-outline-btn apj-btn-ghost')}>
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
            <div className="d-flex flex-wrap gap-4 mt-4 pt-2 small text-white-65">
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
            <div className="card border-0 shadow-lg hero-card text-dark apj-glass-panel">
              <div className="card-body p-4 p-md-5">
                <h2 className="h5 fw-bold text-apj-primary mb-3">Start with a clarity call</h2>
                <p className="text-secondary mb-4">
                  Tell us your goals and constraints. We will map realistic options, timelines, and next steps—no pressure, no jargon.
                </p>
                <ul className="list-unstyled mb-0 small text-secondary">
                  <li className="d-flex gap-2 mb-2">
                    <i className="bi bi-check-circle-fill text-apj-accent flex-shrink-0 mt-1" aria-hidden />
                    <span>Personalized shortlisting framework</span>
                  </li>
                  <li className="d-flex gap-2 mb-2">
                    <i className="bi bi-check-circle-fill text-apj-accent flex-shrink-0 mt-1" aria-hidden />
                    <span>Document checklist & review cadence</span>
                  </li>
                  <li className="d-flex gap-2">
                    <i className="bi bi-check-circle-fill text-apj-accent flex-shrink-0 mt-1" aria-hidden />
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
