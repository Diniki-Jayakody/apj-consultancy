import { ContactForm } from '../components/forms/ContactForm'
import { Section } from '../components/section/Section'
import { SectionHeading } from '../components/section/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'

export function ContactPage() {
  usePageMeta('Contact', 'Contact APJ Consultancy for study abroad guidance, partnerships, and media inquiries.')

  return (
    <>
      <section className="bg-apj-light border-bottom">
        <div className="container py-5 py-lg-6">
          <p className="text-apj-accent fw-semibold text-uppercase small letter-spacing mb-2">Contact</p>
          <h1 className="display-5 fw-bold text-apj-primary mb-3">We respond quickly—especially during intake season.</h1>
          <p className="lead text-secondary col-lg-9 mb-0">
            Prefer WhatsApp or a scheduled call? Use the form and mention it—we will route your request to the right counselor.
          </p>
        </div>
      </section>

      <Section tone="white">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <SectionHeading eyebrow="Details" title="London HQ + remote consultations" lead="Global students welcome. We coordinate across time zones for discovery calls and document reviews." />
            <ul className="list-unstyled d-grid gap-3 text-secondary">
              <li className="d-flex gap-3">
                <span className="text-apj-accent">
                  <i className="bi bi-geo-alt fs-5" aria-hidden />
                </span>
                <div>
                  <div className="fw-semibold text-apj-primary">Office</div>
                  <div>120 Bishopsgate, London EC2N 4AY, UK</div>
                </div>
              </li>
              <li className="d-flex gap-3">
                <span className="text-apj-accent">
                  <i className="bi bi-envelope fs-5" aria-hidden />
                </span>
                <div>
                  <div className="fw-semibold text-apj-primary">Email</div>
                  <a className="link-apj" href="mailto:hello@apjconsultancy.com">
                    hello@apjconsultancy.com
                  </a>
                </div>
              </li>
              <li className="d-flex gap-3">
                <span className="text-apj-accent">
                  <i className="bi bi-telephone fs-5" aria-hidden />
                </span>
                <div>
                  <div className="fw-semibold text-apj-primary">Phone</div>
                  <a className="link-apj" href="tel:+442071234567">
                    +44 20 7123 4567
                  </a>
                </div>
              </li>
              <li className="d-flex gap-3">
                <span className="text-apj-accent">
                  <i className="bi bi-clock fs-5" aria-hidden />
                </span>
                <div>
                  <div className="fw-semibold text-apj-primary">Hours</div>
                  <div>Mon–Fri, 09:00–18:00 GMT (seasonal weekend clinics)</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-7">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section tone="light" aria-labelledby="map-heading">
        <SectionHeading id="map-heading" eyebrow="Location" title="Map placeholder" lead="Embed Google Maps or Mapbox here in production." />
        <div className="ratio ratio-21x9 rounded-3 overflow-hidden shadow-sm bg-white border">
          <div className="d-flex align-items-center justify-content-center text-secondary">
            <div className="text-center p-4">
              <i className="bi bi-map fs-1 text-apj-accent d-block mb-2" aria-hidden />
              <div className="fw-semibold text-apj-primary">Interactive map</div>
              <div className="small">Replace this block with an embedded map component.</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
