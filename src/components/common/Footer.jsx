import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../assets/images/image (1).png';
import thumb1 from '../../assets/images/image (20).png';
import thumb2 from '../../assets/images/image (21).png';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false)

  // Track scroll position to show/hide the back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 140)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row gy-5">
            {/* About column */}
            <div className="col-md-6 col-xl-3">
              <Link to="/" className="footer-logo">
                <img src={brandLogo} alt="ITCO logo" />
              </Link>
              <p>
                We build web and mobile software for businesses that want to
                work smarter. Based in New York, working with clients worldwide.
              </p>
              <div className="footer-social d-flex gap-2">
                <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              </div>
            </div>

            {/* Services column */}
            <div className="col-md-6 col-xl-2 offset-xl-1">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><Link to="/services">Web Development</Link></li>
                <li><Link to="/services">Mobile Apps</Link></li>
                <li><Link to="/services">Data & Analytics</Link></li>
                <li><Link to="/services">IT Consulting</Link></li>
                <li><Link to="/services">Cloud Setup</Link></li>
              </ul>
            </div>

            {/* Useful links */}
            <div className="col-md-6 col-xl-2 offset-xl-1">
              <h4>Company</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/team">Our Work</Link></li>
                <li><Link to="/blog-details">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Recent posts */}
            <div className="col-md-6 col-xl-3">
              <h4>Recent Posts</h4>
              <article className="footer-post d-flex gap-3">
                <img src={thumb1} alt="Post thumb" />
                <div>
                  <span><i className="bi bi-calendar3"></i> Feb 3, 2024</span>
                  <h5>
                    <Link to="/blog-details">How we cut page load time from 8s to 1.2s</Link>
                  </h5>
                </div>
              </article>
              <article className="footer-post d-flex gap-3">
                <img src={thumb2} alt="Post thumb" />
                <div>
                  <span><i className="bi bi-calendar3"></i> Mar 10, 2024</span>
                  <h5>
                    <Link to="/blog-details">React Native vs Flutter — what we tell clients</Link>
                  </h5>
                </div>
              </article>
            </div>
          </div>

          <hr />
          <p className="copyright text-center mb-0">
            © <a href="#">ITCO</a> 2024. All rights reserved.
          </p>
        </div>
      </footer>

      <a 
        href="#" 
        className={`scroll-top ${showScroll ? 'show' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="bi bi-chevron-up"></i>
      </a>
    </>
  )
}





