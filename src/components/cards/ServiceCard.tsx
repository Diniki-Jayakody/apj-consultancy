import type { ServiceItem } from '../../types'

export interface ServiceCardProps {
  service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card h-100 border-0 shadow-sm apj-card-hover">
      <div className="card-body p-4">
        <div className="d-inline-flex align-items-center justify-content-center rounded-3 bg-apj-light text-apj-primary mb-3 apj-icon-tile">
          <i className={`bi ${service.iconClass} fs-4`} aria-hidden />
        </div>
        <h3 className="h5 fw-bold text-apj-primary">{service.title}</h3>
        <p className="text-secondary mb-0">{service.description}</p>
      </div>
    </div>
  )
}
