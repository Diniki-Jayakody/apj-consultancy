import { Section } from '../components/section/Section'
import { SectionHeading } from '../components/section/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'
import { stats, teamMembers } from '../services/mockData'

export function AboutPage() {
  usePageMeta('About', 'Meet APJ Consultancy—mission, vision, and the counselors guiding international students to strong outcomes.')

  return (
    <>
      <section className="bg-apj-light border-bottom">
        <div className="container py-5 py-lg-6">
          <p className="text-apj-accent fw-semibold text-uppercase small letter-spacing mb-2">About APJ</p>
          <h1 className="display-5 fw-bold text-apj-primary mb-3">Independent guidance with institutional discipline.</h1>
          <p className="lead text-secondary col-lg-9 mb-0">
            APJ Consultancy exists because studying abroad should feel ambitious—not reckless. We combine admissions craft with visa realism, so families can
            plan with confidence.
          </p>
        </div>
      </section>

      <Section tone="white">
        <div className="row g-4 align-items-start">
          <div className="col-lg-6">
            <SectionHeading eyebrow="Introduction" title="Who we are" lead="A boutique consultancy focused on outcomes, transparency, and respectful communication." />
            <p className="text-secondary">
              Founded by counselors who have sat on both sides of the admissions desk, APJ helps students articulate credible goals, choose programs that match
              their trajectory, and navigate complex documentation without losing momentum.
            </p>
            <p className="text-secondary mb-0">
              We are not a &ldquo;guaranteed admission&rdquo; shop. We are a partner for students who want a plan they can defend—to universities, visa
              officers, and themselves.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h2 className="h6 text-apj-accent text-uppercase mb-2">Mission</h2>
                    <p className="mb-0 text-secondary">
                      Reduce uncertainty for international applicants by pairing structured planning with honest feedback—especially at decision-heavy moments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h2 className="h6 text-apj-accent text-uppercase mb-2">Vision</h2>
                    <p className="mb-0 text-secondary">
                      A world where mobility is accessible, ethical, and aligned with long-term careers—not short-term trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="light" aria-labelledby="stats-heading">
        <SectionHeading id="stats-heading" eyebrow="Impact" title="Numbers that reflect consistency—not hype." align="center" />
        <div className="row g-3 justify-content-center text-center">
          {stats.map((s) => (
            <div key={s.label} className="col-6 col-md-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="display-6 fw-bold text-apj-primary">{s.value}</div>
                  <div className="text-secondary small">{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" aria-labelledby="team-heading">
        <SectionHeading
          id="team-heading"
          eyebrow="Team"
          title="Counselors who respect your time—and your ambition."
          lead="Meet the leads you will work with during strategy, applications, and visa readiness."
        />
        <div className="row g-4">
          {teamMembers.map((m) => (
            <div key={m.id} className="col-md-6 col-xl-3">
              <div className="card h-100 border-0 shadow-sm apj-card-hover">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="rounded-circle bg-apj-light text-apj-primary fw-bold d-flex align-items-center justify-content-center apj-avatar" aria-hidden>
                      {m.name
                        .split(' ')
                        .map((p) => p[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                    <div>
                      <h2 className="h6 fw-bold text-apj-primary mb-0">{m.name}</h2>
                      <p className="small text-apj-accent mb-0">{m.role}</p>
                    </div>
                  </div>
                  <p className="text-secondary small mb-0">{m.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
