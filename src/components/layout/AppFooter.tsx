import { Link } from 'react-router-dom'

const footerLink = 'link-secondary text-decoration-none'

export function AppFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-apj-primary text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="apj-brand-mark bg-apj-gold text-apj-primary d-inline-flex align-items-center justify-content-center fw-bold" aria-hidden>
                APJ
              </span>
              <div className="fw-bold">APJ Consultancy</div>
            </div>
            <p className="text-white-50 small mb-4">
              Independent educational guidance for ambitious students—grounded in transparency, timelines, and outcomes.
            </p>
            <div className="d-flex gap-3">
              <a className="text-white-50" href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin fs-5" />
              </a>
              <a className="text-white-50" href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram fs-5" />
              </a>
              <a className="text-white-50" href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook fs-5" />
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h2 className="h6 text-uppercase text-white-50 mb-3">Explore</h2>
            <ul className="list-unstyled small d-grid gap-2">
              <li>
                <Link className={footerLink} to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className={footerLink} to="/destinations">
                  Destinations
                </Link>
              </li>
              <li>
                <Link className={footerLink} to="/universities">
                  Universities
                </Link>
              </li>
              <li>
                <Link className={footerLink} to="/application-process">
                  Application process
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h2 className="h6 text-uppercase text-white-50 mb-3">Company</h2>
            <ul className="list-unstyled small d-grid gap-2">
              <li>
                <Link className={footerLink} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={footerLink} to="/testimonials">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className={footerLink} to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className={footerLink} to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className={`${footerLink} text-apj-gold`} to="/consultation">
                  Book consultation
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h2 className="h6 text-uppercase text-white-50 mb-3">Contact</h2>
            <ul className="list-unstyled small text-white-50 d-grid gap-2">
              <li className="d-flex gap-2">
                <i className="bi bi-geo-alt text-apj-gold" aria-hidden />
                <span>
                  120 Bishopsgate
                  <br />
                  London EC2N 4AY, UK
                </span>
              </li>
              <li className="d-flex gap-2">
                <i className="bi bi-envelope text-apj-gold" aria-hidden />
                <a className="link-light text-decoration-none" href="mailto:hello@apjconsultancy.com">
                  hello@apjconsultancy.com
                </a>
              </li>
              <li className="d-flex gap-2">
                <i className="bi bi-telephone text-apj-gold" aria-hidden />
                <a className="link-light text-decoration-none" href="tel:+442071234567">
                  +44 20 7123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2 small text-white-50">
          <p className="mb-0">&copy; {year} APJ Consultancy. All rights reserved.</p>
          <p className="mb-0">Regulated guidance practices vary by destination—verify requirements with official sources.</p>
        </div>
      </div>
    </footer>
  )
}
