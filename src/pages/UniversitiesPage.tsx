import { UniversityCard } from '../components/cards/UniversityCard'
import { CtaBanner } from '../components/cta/CtaBanner'
import { Section } from '../components/section/Section'
import { SectionHeading } from '../components/section/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'
import { universities } from '../services/mockData'

export function UniversitiesPage() {
  usePageMeta('Partner universities', 'Explore partner and pathway universities supported by APJ Consultancy across major study destinations.')

  return (
    <>
      <section className="bg-apj-light border-bottom">
        <div className="container py-5 py-lg-6">
          <p className="text-apj-accent fw-semibold text-uppercase small letter-spacing mb-2">Universities</p>
          <h1 className="display-5 fw-bold text-apj-primary mb-3">A curated network—built for fit, not volume.</h1>
          <p className="lead text-secondary col-lg-9 mb-0">
            We maintain strong relationships with a focused set of institutions and pathways. Logos below are stylized initials for demo purposes; swap in
            official marks when partnerships are finalized.
          </p>
        </div>
      </section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Partners"
          title="Representative university profiles"
          lead="Each card pairs a concise positioning statement with country context—ideal for scanning on mobile."
        />
        <div className="row g-4">
          {universities.map((u) => (
            <div key={u.id} className="col-md-6">
              <UniversityCard university={u} />
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Want a shortlist tailored to your grades and goals?"
        subtitle="Share your profile in a consultation and we will translate it into reach, match, and safety options—with rationale you can explain to family."
        primaryTo="/consultation"
        primaryLabel="Book consultation"
        secondaryTo="/services"
        secondaryLabel="View services"
      />
    </>
  )
}
