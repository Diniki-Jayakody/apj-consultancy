import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Destination } from '../../types'
import { appButtonClass } from '../../utils/buttonClasses'
import { ResponsiveImage } from '../media/ResponsiveImage'

export interface DestinationCardProps {
  destination: Destination
  footer?: ReactNode
}

export function DestinationCard({ destination, footer }: DestinationCardProps) {
  return (
    <div className="card h-100 border-0 shadow-sm apj-card-hover apj-destination-card overflow-hidden">
      <div className="position-relative apj-destination-card-media">
        <ResponsiveImage
          src={destination.imageSrc}
          alt={destination.imageAlt}
          className="apj-img-cover w-100 h-100"
          sizes="(max-width: 768px) 100vw, 600px"
        />
        <div className="apj-destination-card-overlay" aria-hidden />
        <div className="position-absolute top-0 start-0 end-0 p-3 d-flex align-items-start justify-content-between gap-2">
          <span className="apj-flag-pill" aria-hidden>
            {destination.flagEmoji}
          </span>
          <span className="badge rounded-pill text-bg-light border shadow-sm text-apj-primary fw-semibold small">Study abroad</span>
        </div>
        <div className="position-absolute bottom-0 start-0 end-0 p-3">
          <h3 className="h5 fw-bold text-white mb-0 text-shadow-soft">{destination.name}</h3>
          <p className="small text-white-75 mb-0">Popular pathways</p>
        </div>
      </div>
      <div className="card-body p-4 d-flex flex-column">
        <p className="text-secondary">{destination.summary}</p>
        <ul className="list-unstyled small text-secondary mb-4 apj-checklist">
          {destination.highlights.map((h) => (
            <li key={h} className="mb-2">
              <i className="bi bi-check2-circle text-apj-accent me-2" aria-hidden />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          {footer ?? (
            <Link to="/destinations" className={`${appButtonClass('outline', 'btn-sm')} text-decoration-none`}>
              Explore destinations
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
