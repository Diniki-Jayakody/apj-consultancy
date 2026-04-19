import type { ServiceItem } from '../../types'
import { ResponsiveImage } from '../media/ResponsiveImage'

export interface ServiceCardProps {
  service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card h-100 border-0 shadow-sm apj-card-hover apj-service-card overflow-hidden">
      <div className="position-relative apj-service-card-media">
        <ResponsiveImage src={service.imageSrc} alt={service.imageAlt} className="apj-img-cover w-100 h-100" sizes="(max-width: 768px) 100vw, 400px" />
        <div className="apj-service-card-scrim" aria-hidden />
        <div className="position-absolute bottom-0 start-0 m-3">
          <span className="d-inline-flex align-items-center justify-content-center rounded-3 bg-white text-apj-primary shadow apj-icon-tile apj-icon-tile--raised">
            <i className={`bi ${service.iconClass} fs-4`} aria-hidden />
          </span>
        </div>
      </div>
      <div className="card-body p-4 p-md-4 d-flex flex-column">
        <h3 className="h5 fw-bold text-apj-primary mb-2">{service.title}</h3>
        <p className="text-secondary mb-0 flex-grow-1 service-card-text">{service.description}</p>
      </div>
    </div>
  )
}
