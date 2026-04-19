import { Section } from '../components/section/Section'
import { SectionHeading } from '../components/section/SectionHeading'
import { ServiceCard } from '../components/cards/ServiceCard'
import { CtaBanner } from '../components/cta/CtaBanner'
import { usePageMeta } from '../hooks/usePageMeta'
import { services } from '../services/mockData'

export function ServicesPage() {
  usePageMeta('Services', 'University placement, visa guidance, career counseling, and scholarship support from APJ Consultancy.')

  return (
    <>
      <section className="bg-apj-light border-bottom">
        <div className="container py-5 py-lg-6">
          <p className="text-apj-accent fw-semibold text-uppercase small letter-spacing mb-2">Services</p>
          <h1 className="display-5 fw-bold text-apj-primary mb-3">Support that travels with you—from shortlist to arrival week.</h1>
          <p className="lead text-secondary col-lg-9 mb-0">
            Each service can be engaged standalone or as a bundle. Most students combine placement + visa guidance for a seamless handoff between offer and
            enrollment.
          </p>
        </div>
      </section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Core offerings"
          title="Four pillars. One coherent plan."
          lead="Reusable service cards keep messaging consistent across the site—whether you are browsing on mobile or desktop."
        />
        <div className="row g-4">
          {services.map((s) => (
            <div key={s.id} className="col-md-6">
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Not sure what you need yet?"
        subtitle="Book a consultation and we will recommend a scope that matches your stage—exploratory, application season, or visa sprint."
        primaryTo="/consultation"
        primaryLabel="Book consultation"
        secondaryTo="/application-process"
        secondaryLabel="See the process"
      />
    </>
  )
}
