import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsletterCta from '../common/NewsletterCta';

import videoPanelBg from '../../assets/images/ourblog1.png';
import iconContent from '../../assets/images/image (12).png';
import iconSecurity from '../../assets/images/image (13).png';
import iconSoftware from '../../assets/images/image (18).png';
import iconCloud from '../../assets/images/image (19).png'; // Replacing duplicate Content Management
import iconMarketing from '../../assets/images/image (20).png';
import iconSupport from '../../assets/images/image (21).png';

const servicesData = [
  { id: 1, title: 'Content Management', icon: iconContent, iconClass: 'bi bi-clipboard-data' },
  { id: 2, title: 'Information Security', icon: iconSecurity, iconClass: 'bi bi-shield-lock' },
  { id: 3, title: 'Software Development', icon: iconSoftware, iconClass: 'bi bi-code-slash' },
  { id: 4, title: 'Cloud Integration', icon: iconCloud, iconClass: 'bi bi-cloud-arrow-up' },
  { id: 5, title: 'Digital Marketing', icon: iconMarketing, iconClass: 'bi bi-megaphone' },
  { id: 6, title: 'Tech Support Pro', icon: iconSupport, iconClass: 'bi bi-headset' },
];

export default function ServicesMainContent() {
  const [panelEmail, setPanelEmail] = useState('');
  const [panelSubscribed, setPanelSubscribed] = useState(false);

  const handlePanelSubscribe = (e) => {
    e.preventDefault();
    if (panelEmail) {
      setPanelSubscribed(true);
      setPanelEmail('');
      setTimeout(() => setPanelSubscribed(false), 3500);
    }
  };

  return (
    <main>
    <section className="breadcrumb">
      <div className="container">
        <h1 className="breadcrumb-title">Our Services</h1>
        <ul className="page-navigator">
          <li><Link to="/">Home</Link></li>
          <li>Services</li>
        </ul>
      </div>
    </section>

    <section className="service-sec2 section-space">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 text-center">
            <h6 className="section-kicker">What We Do</h6>
            <h2 className="inner-title">Services That Help You Grow</h2>
          </div>
        </div>
        <div className="row g-4">
          {servicesData.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.id}>
              <div className="service-style2">
                <div className="service-style2-img">
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className="service-style2-body">
                  <div className="service-style2-content">
                    <h5><Link to="/services">{service.title}</Link></h5>
                    <p>
                      We focus on the best practices it solutions and for
                      services.
                    </p>
                    <Link className="read-more" to="/services">
                      Read More <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="service-style2-icon">
                    <i className={service.iconClass}></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="newsletter-section">
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-lg-7">
            <div
              className="video-panel"
              style={{ backgroundImage: `url(${videoPanelBg})` }}
            >
              <a href="#" className="play-circle"><i className="bi bi-play-fill"></i></a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="newsletter-panel h-100 d-flex flex-column justify-content-center">
              <h2>Subscribe to Our Newsletter</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <form className="input-group" onSubmit={handlePanelSubscribe}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={panelEmail}
                  onChange={(e) => setPanelEmail(e.target.value)}
                  required
                />
                <button className="btn theme-btn" type="submit">
                  Subscribe Now
                </button>
              </form>
              {panelSubscribed && (
                <div className="text-success mt-2">Thanks! You are now subscribed.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pricing-section section-space">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-kicker">Our Pricing</h6>
          <h2 className="inner-title">Find the Right Plan</h2>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <article className="price-card">
              <h5>Basic Plan</h5>
              <div className="price"><sup>$</sup>110<span>/Per Month</span></div>
              <Link to="/contact" className="btn theme-btn">Discover More</Link>
              <ul>
                <li>Key Words Optimized</li>
                <li>Top 10 Ranking Guarantee</li>
                <li>Weekly Reporting</li>
                <li>Key Words Optimized</li>
                <li>Top 10 Ranking Guarantee</li>
                <li>Unlimited users</li>
              </ul>
            </article>
          </div>
          <div className="col-md-6 col-lg-4">
            <article className="price-card active">
              <h5>Popular</h5>
              <div className="price"><sup>$</sup>210<span>/Per Month</span></div>
              <Link to="/contact" className="btn theme-btn">Discover More</Link>
              <ul>
                <li>Key Words Optimized</li>
                <li>Top 10 Ranking Guarantee</li>
                <li>Weekly Reporting</li>
                <li>Key Words Optimized</li>
                <li>Top 10 Ranking Guarantee</li>
                <li>Unlimited users</li>
              </ul>
            </article>
          </div>
          <div className="col-md-6 col-lg-4">
            <article className="price-card">
              <h5>Custom</h5>
              <div className="price"><sup>$</sup>310<span>/Per Month</span></div>
              <Link to="/contact" className="btn theme-btn">Discover More</Link>
              <ul>
                <li>Key Words Optimized</li>
                <li>Top 10 Ranking Guarantee</li>
                <li>Weekly Reporting</li>
                <li>Key Words Optimized</li>
                <li>Top 10 Ranking Guarantee</li>
                <li>Unlimited users</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>

    <NewsletterCta />
    </main>
  );
}



