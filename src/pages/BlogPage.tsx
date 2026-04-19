import { BlogPostCard } from '../components/cards/BlogPostCard'
import { CtaBanner } from '../components/cta/CtaBanner'
import { Section } from '../components/section/Section'
import { SectionHeading } from '../components/section/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'
import { blogPosts } from '../services/mockData'

export function BlogPage() {
  usePageMeta('Blog', 'Application tips, destination comparisons, and visa guidance from APJ Consultancy.')

  return (
    <>
      <section className="bg-apj-light border-bottom">
        <div className="container py-5 py-lg-6">
          <p className="text-apj-accent fw-semibold text-uppercase small letter-spacing mb-2">Blog</p>
          <h1 className="display-5 fw-bold text-apj-primary mb-3">Insights for applicants who like checklists more than hype.</h1>
          <p className="lead text-secondary col-lg-9 mb-0">
            This listing uses mock articles—no backend required. In production, connect to a CMS or markdown pipeline and add canonical URLs for SEO.
          </p>
        </div>
      </section>

      <Section tone="white" aria-labelledby="posts-heading">
        <SectionHeading id="posts-heading" eyebrow="Latest" title="Featured posts" lead="Short reads you can finish between classes." />
        <div className="row g-4">
          {blogPosts.map((p) => (
            <div key={p.id} className="col-md-6 col-lg-4">
              <BlogPostCard post={p} />
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Want guidance tailored to your profile?"
        subtitle="Book a consultation and we will connect blog advice to your specific timeline and destination choices."
        primaryTo="/consultation"
        primaryLabel="Book consultation"
        secondaryTo="/contact"
        secondaryLabel="Contact us"
      />
    </>
  )
}
