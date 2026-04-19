import { DestinationCard } from '../components/cards/DestinationCard'
import { CtaBanner } from '../components/cta/CtaBanner'
import { Section } from '../components/section/Section'
import { SectionHeading } from '../components/section/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'
import { destinations } from '../services/mockData'

export function DestinationsPage() {
  usePageMeta('Study destinations', 'Compare studying in the UK, Canada, Australia, and the USA with APJ Consultancy.')

  return (
    <>
      <section className="bg-apj-light border-bottom">
        <div className="container py-5 py-lg-6">
          <p className="text-apj-accent fw-semibold text-uppercase small letter-spacing mb-2">Destinations</p>
          <h1 className="display-5 fw-bold text-apj-primary mb-3">Pick a country for your goals—not just your mood board.</h1>
          <p className="lead text-secondary col-lg-9 mb-0">
            We help you evaluate costs, employability, visa pathways, and campus culture. Below is a snapshot of the regions we support most often.
          </p>
        </div>
      </section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Regions"
          title="UK, Canada, Australia, and the USA—deep expertise, pragmatic advice."
          lead="Each destination has different strengths. We help you choose with tradeoffs explicit, so you can decide as a household."
        />
        <div className="row g-4">
          {destinations.map((d) => (
            <div key={d.id} className="col-md-6">
              <DestinationCard
                destination={d}
                footer={
                  <div>
                    <div className="small fw-semibold text-apj-primary mb-2">Popular subjects</div>
                    <div className="d-flex flex-wrap gap-2">
                      {d.popularSubjects.map((s) => (
                        <span key={s} className="badge rounded-pill text-bg-light border">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Want a side-by-side comparison for your profile?"
        subtitle="Bring your transcripts, test plan, and budget range—we will translate that into a destination strategy you can act on."
        primaryTo="/consultation"
        primaryLabel="Book consultation"
        secondaryTo="/universities"
        secondaryLabel="Browse universities"
      />
    </>
  )
}
