import { TestimonialCard } from '../components/cards/TestimonialCard'
import { CtaBanner } from '../components/cta/CtaBanner'
import { Section } from '../components/section/Section'
import { SectionHeading } from '../components/section/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'
import { testimonials } from '../services/mockData'

export function TestimonialsPage() {
  usePageMeta('Testimonials', 'Student success stories and reflections from APJ Consultancy clients.')

  return (
    <>
      <section className="bg-apj-light border-bottom">
        <div className="container py-5 py-lg-6">
          <p className="text-apj-accent fw-semibold text-uppercase small letter-spacing mb-2">Testimonials</p>
          <h1 className="display-5 fw-bold text-apj-primary mb-3">Students who wanted structure—and got it.</h1>
          <p className="lead text-secondary col-lg-9 mb-0">
            Outcomes vary by profile and season. What you can expect from APJ is disciplined communication, honest tradeoffs, and a plan you can execute without
            guesswork.
          </p>
        </div>
      </section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Voices"
          title="Success stories from recent cohorts"
          lead="These quotes are representative placeholders for a production site—swap in verified student attributions and programs."
        />
        <div className="row g-4">
          {testimonials.map((t) => (
            <div key={t.id} className="col-md-6">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Your story is next."
        subtitle="If you value clear milestones and calm decision-making, we should talk."
        primaryTo="/consultation"
        primaryLabel="Book consultation"
        secondaryTo="/application-process"
        secondaryLabel="Review the process"
      />
    </>
  )
}
