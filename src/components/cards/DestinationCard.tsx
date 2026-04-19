import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Destination } from '../../types'
import { appButtonClass } from '../../utils/buttonClasses'

export interface DestinationCardProps {
  destination: Destination
  footer?: ReactNode
}

export function DestinationCard({ destination, footer }: DestinationCardProps) {
  return (
    <div className="card h-100 border-0 shadow-sm apj-card-hover">
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="display-6" aria-hidden>
            {destination.flagEmoji}
          </span>
          <div>
            <h3 className="h5 fw-bold text-apj-primary mb-0">{destination.name}</h3>
            <p className="text-secondary small mb-0">Popular pathways</p>
          </div>
        </div>
        <p className="text-secondary">{destination.summary}</p>
        <ul className="small text-secondary mb-4">
          {destination.highlights.map((h) => (
            <li key={h} className="mb-1">
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
