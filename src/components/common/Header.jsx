import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logoDark from '../../assets/images/image (1).png'
import logoLight from '../../assets/images/image.png'

/* Header with sticky navbar behavior */
function Header() {
  const { pathname } = useLocation()
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky state based on scroll position
      if (window.scrollY > 140) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    // Run once on mount to catch initial scroll
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* highlight the Services dropdown toggle when on /services */
  const servicesCls =
    pathname === '/services'
      ? 'nav-link dropdown-toggle active'
      : 'nav-link dropdown-toggle'

  /* highlight the Pages dropdown toggle when on /team */
  const pagesCls =
    pathname === '/team'
      ? 'nav-link dropdown-toggle active'
      : 'nav-link dropdown-toggle'

  /* highlight the Blog dropdown toggle when on /blog-details */
  const blogCls =
    pathname === '/blog-details'
      ? 'nav-link dropdown-toggle active'
      : 'nav-link dropdown-toggle'

  return (
    <header className="site-header">

      {/* Top info bar */}
      <div className="topbar d-none d-md-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <ul className="top-info d-flex align-items-center gap-4 mb-0">
                <li>
                  <i className="bi bi-geo-alt-fill"></i>Jones Street, New York, USA
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  <a href="mailto:Info@example.com">Info@example.com</a>
                </li>
                <li>
                  <i className="bi bi-telephone"></i>
                  <a href="tel:+70264566579">+70 264 566 579</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <ul className="top-social d-flex justify-content-end gap-3 mb-0">
                <li><a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a></li>
                <li><a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a></li>
                <li><a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a></li>
                <li><a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`navbar navbar-expand-lg main-navbar ${isSticky ? 'is-sticky' : ''}`} id="mainNavbar">
        <div className="container-fluid nav-shell">
          <Link className="navbar-brand" to="/">
            <img className="logo-dark" src={logoDark} alt="ITCO logo" />
            <img className="logo-light" src={logoLight} alt="ITCO logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className={servicesCls} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className={({ isActive }) => isActive ? 'dropdown-item active' : 'dropdown-item'}
                      to="/services"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li><Link to="/services" className="dropdown-item">Service Details</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className={pagesCls} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className={({ isActive }) => isActive ? 'dropdown-item active' : 'dropdown-item'}
                      to="/team"
                    >
                      Team
                    </NavLink>
                  </li>
                  <li><Link to="/team" className="dropdown-item">Projects</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className={blogCls} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/blog-details" className="dropdown-item">Blog</Link></li>
                  <li>
                    <NavLink
                      className={({ isActive }) => isActive ? 'dropdown-item active' : 'dropdown-item'}
                      to="/blog-details"
                    >
                      Blog Details
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <Link className="btn theme-btn d-none d-xl-inline-flex" to="/contact">
              Get A Free Quote
            </Link>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header


