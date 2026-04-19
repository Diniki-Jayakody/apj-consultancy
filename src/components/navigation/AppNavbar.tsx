import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { appButtonClass } from '../../utils/buttonClasses'

const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
  `nav-link fw-semibold ${isActive ? 'active text-apj-primary' : 'text-secondary'}`

export function AppNavbar() {
  const [expanded, setExpanded] = useState(false)

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold text-apj-primary d-flex align-items-center gap-2" to="/" onClick={() => setExpanded(false)}>
            <span className="apj-brand-mark d-inline-flex align-items-center justify-content-center text-white fw-bold" aria-hidden>
              APJ
            </span>
            <span className="d-flex flex-column lh-sm">
              <span>APJ Consultancy</span>
              <span className="small text-secondary fw-normal">Study abroad, simplified</span>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-controls="apjNavbar"
            aria-expanded={expanded}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="apjNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-1">
              <li className="nav-item">
                <NavLink className={navLinkClass} to="/" end onClick={() => setExpanded(false)}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkClass} to="/about" onClick={() => setExpanded(false)}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkClass} to="/services" onClick={() => setExpanded(false)}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkClass} to="/destinations" onClick={() => setExpanded(false)}>
                  Destinations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkClass} to="/universities" onClick={() => setExpanded(false)}>
                  Universities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkClass} to="/application-process" onClick={() => setExpanded(false)}>
                  Process
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkClass} to="/testimonials" onClick={() => setExpanded(false)}>
                  Stories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkClass} to="/blog" onClick={() => setExpanded(false)}>
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkClass} to="/contact" onClick={() => setExpanded(false)}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item ms-lg-2">
                <Link
                  to="/consultation"
                  className={`${appButtonClass('primary', 'btn-sm w-100 mt-2 mt-lg-0')} text-decoration-none d-inline-block text-center`}
                  onClick={() => setExpanded(false)}
                >
                  Book consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
