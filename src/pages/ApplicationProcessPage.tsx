import { CtaBanner } from '../components/cta/CtaBanner'
import { Section } from '../components/section/Section'
import { SectionHeading } from '../components/section/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'
import { processSteps } from '../services/mockData'

export function ApplicationProcessPage() {
  usePageMeta('Application process', 'Step-by-step international admissions and visa readiness process from APJ Consultancy.')

  return (
    <>
      <section className="bg-apj-light border-bottom">
        <div className="container py-5 py-lg-6">
          <p className="text-apj-accent fw-semibold text-uppercase small letter-spacing mb-2">Process</p>
          <h1 className="display-5 fw-bold text-apj-primary mb-3">A visual flow you can follow—week by week.</h1>
          <p className="lead text-secondary col-lg-9 mb-0">
            Peak season rewards students who sequence work correctly. Here is the APJ rhythm, from first call to pre-departure readiness.
          </p>
        </div>
      </section>

      <Section tone="white" aria-labelledby="steps-heading">
        <SectionHeading
          id="steps-heading"
          eyebrow="End-to-end"
          title="Five milestones. Continuous support between them."
          lead="Steps are not rigid contracts—they adapt to your intake—but the order protects you from expensive reversals."
        />

        <div className="apj-timeline">
          {processSteps.map((step, idx) => (
            <div key={step.id} className="apj-timeline-item">
              <div className="apj-timeline-marker" aria-hidden>
                <span className="apj-timeline-step">{step.step}</span>
              </div>
              <div className={`card border-0 shadow-sm ${idx === processSteps.length - 1 ? '' : 'mb-4'}`}>
                <div className="card-body p-4 p-md-4">
                  <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                    <h2 className="h5 fw-bold text-apj-primary mb-2 mb-md-0">{step.title}</h2>
                    <span className="badge align-self-start align-self-md-center text-bg-light border">Stage {step.step}</span>
                  </div>
                  <p className="text-secondary mb-0">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <h2 className="h4 fw-bold text-apj-primary mb-3">What “done” looks like at each gate</h2>
            <p className="text-secondary mb-3">
              We use shared checklists in consultations so you can see progress at a glance: documents collected, essays at draft stage, applications
              submitted, and visa evidence mapped to official guidance.
            </p>
            <ul className="text-secondary mb-0">
              <li className="mb-2">You always know the next deliverable—and who owns it.</li>
              <li className="mb-2">Parents can join select checkpoints (with your consent) for finance and visa evidence.</li>
              <li>If timelines slip, we re-sequence without losing quality.</li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="h6 fw-bold text-apj-primary mb-3">Typical cadence (illustrative)</h3>
                <ol className="small text-secondary mb-0 ps-3">
                  <li className="mb-2">Weeks 1–2: profile, exams, shortlist</li>
                  <li className="mb-2">Weeks 3–6: essays + references + submissions</li>
                  <li className="mb-2">Weeks 7–10: decisions + deposit strategy</li>
                  <li>Weeks 11+: visa evidence + pre-departure</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Prefer a plan before you commit?"
        subtitle="Book a consultation and we will translate your intake into a month-by-month plan with realistic buffers."
        primaryTo="/consultation"
        primaryLabel="Book consultation"
        secondaryTo="/contact"
        secondaryLabel="Ask a question"
      />
    </>
  )
}
