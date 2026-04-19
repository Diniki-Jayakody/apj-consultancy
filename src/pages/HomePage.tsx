import { Link } from 'react-router-dom'
import { CtaBanner } from '../components/cta/CtaBanner'
import { BlogPostCard } from '../components/cards/BlogPostCard'
import { DestinationCard } from '../components/cards/DestinationCard'
import { ServiceCard } from '../components/cards/ServiceCard'
import { TestimonialCard } from '../components/cards/TestimonialCard'
import { Hero } from '../components/hero/Hero'
import { Section } from '../components/section/Section'
import { SectionHeading } from '../components/section/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'
import { blogPosts, destinations, services, testimonials } from '../services/mockData'
import { appButtonClass } from '../utils/buttonClasses'

export function HomePage() {
  usePageMeta(
    'Home',
    'APJ Consultancy helps students apply to top universities in the UK, Canada, Australia, and the USA—with transparent timelines and visa-ready guidance.',
  )

  const previewDestinations = destinations.slice(0, 2)
  const previewStories = testimonials.slice(0, 2)
  const previewPosts = blogPosts.slice(0, 3)

  return (
    <>
      <Hero
        eyebrow="Independent educational consultancy"
        title="Admissions strategy that respects your timeline—and your story."
        subtitle="From shortlisting and essays to visa readiness, APJ Consultancy helps you present a coherent plan to universities and immigration officers alike."
        primaryTo="/consultation"
        primaryLabel="Book a consultation"
        secondaryTo="/services"
        secondaryLabel="Explore services"
      />

      <Section tone="light" aria-labelledby="services-heading">
        <SectionHeading
          id="services-heading"
          eyebrow="What we do"
          title="Services designed for clarity, not chaos."
          lead="Every engagement starts with a roadmap: milestones, owners, and deliverables—so you always know what happens next."
          action={
            <Link to="/services" className={`${appButtonClass('outline')} text-decoration-none`}>
              View all services
            </Link>
          }
        />
        <div className="row g-4">
          {services.map((s) => (
            <div key={s.id} className="col-md-6 col-xl-3">
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" aria-labelledby="destinations-heading">
        <SectionHeading
          id="destinations-heading"
          eyebrow="Study destinations"
          title="Choose a country with confidence—not guesswork."
          lead="We help you compare outcomes: employability, costs, visa pathways, and campus fit—then build an application list that matches your risk tolerance."
          align="center"
        />
        <div className="row g-4 justify-content-center">
          {previewDestinations.map((d) => (
            <div key={d.id} className="col-lg-6">
              <DestinationCard destination={d} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/destinations" className={`${appButtonClass('primary')} text-decoration-none`}>
            See all destinations
          </Link>
        </div>
      </Section>

      <Section tone="muted" aria-labelledby="why-heading">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <SectionHeading
              id="why-heading"
              eyebrow="Why APJ"
              title="We optimize for decisions you will not regret later."
              lead="Our counselors combine admissions experience with pragmatic visa planning—because an offer letter is only half the journey."
            />
            <ul className="list-unstyled d-grid gap-3 mb-0">
              <li className="d-flex gap-3">
                <span className="badge rounded-pill bg-white text-apj-primary border px-3 py-2">01</span>
                <div>
                  <div className="fw-bold text-apj-primary">Evidence-led shortlisting</div>
                  <p className="text-secondary mb-0 small">Programs chosen for outcomes—not brand hype alone.</p>
                </div>
              </li>
              <li className="d-flex gap-3">
                <span className="badge rounded-pill bg-white text-apj-primary border px-3 py-2">02</span>
                <div>
                  <div className="fw-bold text-apj-primary">Editorial rigor on essays</div>
                  <p className="text-secondary mb-0 small">Tight feedback loops so your voice stays authentic—and your claims stay defensible.</p>
                </div>
              </li>
              <li className="d-flex gap-3">
                <span className="badge rounded-pill bg-white text-apj-primary border px-3 py-2">03</span>
                <div>
                  <div className="fw-bold text-apj-primary">Visa checkpoints baked in</div>
                  <p className="text-secondary mb-0 small">Financial evidence and timelines reviewed early—reducing last-minute surprises.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h2 className="h5 fw-bold text-apj-primary mb-3">A process you can trust</h2>
                <p className="text-secondary">
                  You will always know what we need from you, when it is due, and why it matters. If priorities shift, we re-sequence the plan together—no
                  hidden steps, no mystery fees buried in fine print.
                </p>
                <div className="d-flex flex-column gap-2 small text-secondary">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-shield-check text-apj-accent" aria-hidden />
                    <span>Document handling with privacy-first habits</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-calendar-week text-apj-accent" aria-hidden />
                    <span>Weekly progress checkpoints during peak season</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-people text-apj-accent" aria-hidden />
                    <span>Parents welcome on calls (with student consent)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" aria-labelledby="testimonials-heading">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Student voices"
          title="Outcomes built on disciplined execution."
          lead="A few recent reflections from students who valued structured guidance during high-stakes seasons."
        />
        <div className="row g-4">
          {previewStories.map((t) => (
            <div key={t.id} className="col-md-6">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/testimonials" className={`${appButtonClass('outline')} text-decoration-none`}>
            Read more stories
          </Link>
        </div>
      </Section>

      <Section tone="light" aria-labelledby="blog-heading">
        <SectionHeading
          id="blog-heading"
          eyebrow="Insights"
          title="Practical articles for applicants (and families)."
          lead="No fluff—just frameworks you can reuse while you build your application."
        />
        <div className="row g-4">
          {previewPosts.map((p) => (
            <div key={p.id} className="col-md-4">
              <BlogPostCard post={p} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/blog" className={`${appButtonClass('primary')} text-decoration-none`}>
            Visit the blog
          </Link>
        </div>
      </Section>

      <CtaBanner
        title="Ready for a calm, structured start?"
        subtitle="Book a consultation and we will map your next 30 days—programs, tests (if any), and documents—before you invest months of effort."
        primaryTo="/consultation"
        primaryLabel="Book consultation"
        secondaryTo="/contact"
        secondaryLabel="Contact the team"
      />
    </>
  )
}
