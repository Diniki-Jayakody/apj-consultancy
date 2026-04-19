import type { Testimonial } from '../../types'
import { ResponsiveImage } from '../media/ResponsiveImage'

export interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="card h-100 border-0 shadow-sm apj-card-hover apj-testimonial-card">
      <div className="card-body p-4 p-md-4">
        <div className="d-flex align-items-start gap-3 mb-3">
          <div className="flex-shrink-0">
            <ResponsiveImage
              src={testimonial.avatarSrc}
              alt={testimonial.avatarAlt}
              width={64}
              height={64}
              className="rounded-circle apj-testimonial-avatar apj-img-cover"
              sizes="64px"
            />
          </div>
          <div className="text-apj-accent pt-1" aria-hidden>
            <i className="bi bi-quote fs-3 lh-1" />
          </div>
        </div>
        <blockquote className="blockquote mb-3 ms-md-1">
          <p className="mb-0 text-secondary testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
        </blockquote>
        <figcaption className="blockquote-footer mt-3 mb-0 border-0 pt-0">
          <span className="fw-semibold text-apj-primary">{testimonial.author}</span>
          <span className="text-secondary"> · {testimonial.program}</span>
          <div className="small text-secondary">{testimonial.destination}</div>
        </figcaption>
      </div>
    </figure>
  )
}
