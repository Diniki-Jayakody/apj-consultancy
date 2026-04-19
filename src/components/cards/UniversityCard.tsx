import type { University } from '../../types'

export interface UniversityCardProps {
  university: University
}

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <div className="card h-100 border-0 shadow-sm apj-card-hover">
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex align-items-start gap-3">
          <div
            className="rounded-3 bg-apj-primary text-white fw-bold d-flex align-items-center justify-content-center flex-shrink-0 apj-uni-logo"
            aria-hidden
          >
            {university.initials}
          </div>
          <div>
            <h3 className="h5 fw-bold text-apj-primary mb-1">{university.name}</h3>
            <p className="small text-apj-accent fw-semibold mb-2">{university.country}</p>
            <p className="text-secondary small mb-0">{university.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
