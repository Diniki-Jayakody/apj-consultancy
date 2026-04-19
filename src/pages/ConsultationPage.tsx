import { ConsultationForm } from '../components/forms/ConsultationForm'
import { Section } from '../components/section/Section'
import { SectionHeading } from '../components/section/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'

export function ConsultationPage() {
  usePageMeta('Book a consultation', 'Book a study abroad consultation with APJ Consultancy—university shortlisting, visa guidance, and scholarship support.')

  return (
    <>
      <section className="bg-apj-light border-bottom">
        <div className="container py-5 py-lg-6">
          <p className="text-apj-accent fw-semibold text-uppercase small letter-spacing mb-2">Consultation</p>
          <h1 className="display-5 fw-bold text-apj-primary mb-3">Tell us where you are—and where you want to go.</h1>
          <p className="lead text-secondary col-lg-9 mb-0">
            This form validates locally and shows a confirmation state for demo purposes. Connect it to your CRM, email provider, or scheduling tool when you
            go live.
          </p>
        </div>
      </section>

      <Section tone="white">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <SectionHeading
              eyebrow="What to expect"
              title="A structured first conversation"
              lead="Bring transcripts, test plans (if any), budget range, and your top questions. We will leave you with a prioritized next-step list."
            />
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h6 fw-bold text-apj-primary mb-3">You will walk away with</h2>
                <ul className="small text-secondary mb-0 ps-3">
                  <li className="mb-2">A realistic destination comparison for your profile</li>
                  <li className="mb-2">A month-by-month plan with buffers</li>
                  <li className="mb-2">A clear scope proposal if you want ongoing support</li>
                  <li>No obligation to continue—just clarity.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <ConsultationForm />
          </div>
        </div>
      </Section>
    </>
  )
}
