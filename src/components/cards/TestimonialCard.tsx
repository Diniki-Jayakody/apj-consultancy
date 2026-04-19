import type { Testimonial } from '../../types'

export interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="card h-100 border-0 shadow-sm apj-card-hover">
      <div className="card-body p-4">
        <div className="text-apj-accent mb-3" aria-hidden>
          <i className="bi bi-quote fs-2" />
        </div>
        <blockquote className="blockquote mb-3">
          <p className="mb-0 text-secondary">&ldquo;{testimonial.quote}&rdquo;</p>
        </blockquote>
        <figcaption className="blockquote-footer mt-3 mb-0">
          <span className="fw-semibold text-apj-primary">{testimonial.author}</span>
          <span className="text-secondary"> · {testimonial.program}</span>
          <div className="small text-secondary">{testimonial.destination}</div>
        </figcaption>
      </div>
    </figure>
  )
}
