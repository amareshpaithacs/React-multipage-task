import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SliderLib from 'react-slick';

import avatar1 from '../../assets/images/image (2).png';
import avatar2 from '../../assets/images/image (3).png';
import avatar3 from '../../assets/images/image (4).png';
import avatar4 from '../../assets/images/image (5).png';
import avatar5 from '../../assets/images/image (6).png';
import heroMain from '../../assets/images/image (7).png';
import heroChart from '../../assets/images/image (8).png';
import heroCircle from '../../assets/icons/circle-image.png';

import aboutMain from '../../assets/images/image (9).png';
import aboutFloat from '../../assets/images/image (11).png';

import project1 from '../../assets/images/image (12).png';
import project2 from '../../assets/images/image (13).png';
import project3 from '../../assets/images/image (18).png';
import project4 from '../../assets/images/image (19).png';
import project5 from '../../assets/images/image (20).png';
import project6 from '../../assets/images/image (21).png';
import processImage from '../../assets/images/image (10).png';

import brand1 from '../../assets/images/brand1.png';
import brand2 from '../../assets/images/brand2.png';
import brand3 from '../../assets/images/brand3.png';
import brand4 from '../../assets/images/brand4.png';
import brand5 from '../../assets/images/brand5.png';

import tAvatar1 from '../../assets/images/image (15).png';
import tAvatar2 from '../../assets/images/image (16).png';
import tAvatar3 from '../../assets/images/image (17).png';
import blogMain from '../../assets/images/image (18).png';
import blog1 from '../../assets/images/image (19).png';
import blog2 from '../../assets/images/image (20).png';
import blog3 from '../../assets/images/image (21).png';
import ourblog1 from '../../assets/images/ourblog1.png';

const Slider = SliderLib.default || SliderLib;

export const HomeMainContent = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const services = [
    { id: 1, icon: 'bi bi-code-slash', title: 'Web Development', desc: 'We build fast, responsive web apps — from simple landing pages to full SaaS platforms.' },
    { id: 2, icon: 'bi bi-phone', title: 'Mobile Apps', desc: 'iOS and Android apps built with React Native. We handle design, dev, and store submission.', offset: true },
    { id: 3, icon: 'bi bi-graph-up-arrow', title: 'Data & Analytics', desc: 'Custom dashboards and reporting tools that connect to your existing data sources.' },
    { id: 4, icon: 'bi bi-gear', title: 'IT Consulting', desc: "Not sure what to build or how? We sit down with your team and help you make smart tech decisions.", offset: true },
  ];

  const projects = [
    { id: 1, img: project1, title: 'Online Store Rebuild', category: 'E-commerce' },
    { id: 2, img: project2, title: 'Patient Portal', category: 'Healthcare' },
    { id: 3, img: project3, title: 'Fleet Tracker Dashboard', category: 'Logistics' },
    { id: 4, img: project4, title: 'Budget Planner App', category: 'Finance' },
    { id: 5, img: project5, title: 'Sales CRM', category: 'Business Tools' },
    { id: 6, img: project6, title: 'Restaurant POS System', category: 'Hospitality' },
  ];

  const pricingPlans = [
    { id: 1, name: 'Starter', price: 99, active: false, features: ['1 project at a time', 'Up to 3 revisions', 'Email support', '2-week delivery', 'Basic hosting setup', 'Source code included'] },
    { id: 2, name: 'Professional', price: 249, active: true, features: ['Up to 3 active projects', 'Unlimited revisions', 'Priority support', 'Faster turnaround', 'CI/CD pipeline setup', 'Monthly check-in call'] },
    { id: 3, name: 'Enterprise', price: 599, active: false, features: ['Unlimited projects', 'Dedicated developer', 'Slack channel access', 'SLA guarantee', 'Custom integrations', 'Quarterly strategy review'] },
  ];

  const testimonials = [
    { id: 1, avatar: tAvatar1, text: "We'd been stuck using spreadsheets for years. The dashboard they built us saves our team at least three hours every week. Honestly wish we'd done it sooner.", name: 'Rachel Morgan', role: 'Operations Director' },
    { id: 2, avatar: tAvatar2, text: "They delivered on time, stayed within budget, and were easy to work with throughout. That might sound basic, but it's actually pretty rare. Would hire again.", name: 'Arush Aggarwal', role: 'Senior Manager' },
    { id: 3, avatar: tAvatar3, text: "The mobile app they built for us has a 4.8 rating on the App Store. Our users love it and so do we. They got what we were trying to build from the very first call.", name: 'Rosy Flower Gaggero', role: 'CEO And Founder' },
    { id: 4, avatar: tAvatar1, text: "Honestly one of the smoothest projects I've managed. Clear timelines, quick responses, and the final product was exactly what we asked for — no corners cut.", name: 'Joshua Liddell', role: 'Company Owner' },
    { id: 5, avatar: tAvatar2, text: "Their team understood our industry without us having to explain everything twice. The CRM they built has genuinely changed how our sales team works day to day.", name: 'Priya Sharma', role: 'Product Manager' },
    { id: 6, avatar: tAvatar3, text: "We came in with a rough idea and they helped us shape it into something real. The process was collaborative and the final result exceeded what we had in mind.", name: 'David Nkosi', role: 'Co-Founder' },
  ];

  const blogPosts = [
    { id: 1, img: blog1, date: 'Jan 15, 2024', title: 'Why your startup should set up error monitoring before launch' },
    { id: 2, img: blog2, date: 'Feb 3, 2024', title: 'How we cut page load time from 8s to 1.2s for a client' },
    { id: 3, img: blog3, date: 'Mar 10, 2024', title: 'React Native vs Flutter — what we tell clients in 2024' },
  ];

  const brands = [brand1, brand2, brand3, brand4, brand5];

  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="section-kicker">IT services for growing businesses</span>
                <h1>We build software that helps your business grow</h1>
                <p>
                  From custom web apps to IT consulting, we work with startups and
                  mid-sized companies to ship reliable tech on time and within budget.
                </p>
                <div className="d-flex align-items-center flex-wrap gap-4">
                  <Link to="/about" className="btn theme-btn">See What We Do</Link>
                  <a href="#" className="video-link">
                    <span><i className="bi bi-play-fill"></i></span>
                    Watch Overview
                  </a>
                </div>
                <div className="team-proof mt-5">
                  <div className="avatar-stack d-flex">
                    <img src={avatar1} alt="team member" />
                    <img src={avatar2} alt="team member" />
                    <img src={avatar3} alt="team member" />
                    <img src={avatar4} alt="team member" />
                    <img src={avatar5} alt="team member" />
                  </div>
                  <div className="team-proof-text">
                    <h5 className="mb-0">120+</h5>
                    <span>Projects delivered</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-images">
                <img className="hero-wave-circle" src={heroCircle} alt="" aria-hidden="true" />
                <div className="hero-img-frame">
                  <img className="hero-main" src={heroMain} alt="our team at work" />
                </div>
                <div className="hero-chart">
                  <img src={heroChart} alt="project stats" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="about-images">
                <img className="about-main" src={aboutMain} alt="our office" />
                <img className="about-float" src={aboutFloat} alt="team collaboration" />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="section-kicker">A bit about us</span>
              <h2 className="section-title">A small team with a big focus on quality</h2>
              <p className="section-text">
                We started in 2018 with three developers and a shared belief that
                good software doesn't have to be complicated. Today we work with
                clients across finance, retail, and healthcare to build tools that
                actually solve real problems.
              </p>
              <ul className="check-list mb-4">
                <li><i className="bi bi-check-square-fill"></i>Custom software built around your workflow</li>
                <li><i className="bi bi-check-square-fill"></i>Clear communication — no jargon, no surprises</li>
                <li><i className="bi bi-check-square-fill"></i>Ongoing support after your project ships</li>
              </ul>
              <Link to="/about" className="btn theme-btn">Meet the Team</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section section-space light-bg">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <span className="section-kicker">What we offer</span>
              <h2 className="section-title">Services we've been doing for years</h2>
              <p className="section-text">
                We don't try to do everything. We focus on a handful of things
                and do them well. Most of our clients come back for a second or third project.
              </p>
              <Link to="/services" className="btn theme-btn">View All Services</Link>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                {services.map((service) => (
                  <div className="col-sm-6" key={service.id}>
                    <article className={`service-box${service.offset ? ' mt-lg-5' : ''}`}>
                      <i className={service.icon}></i>
                      <h4>{service.title}</h4>
                      <p>{service.desc}</p>
                      <Link to="/services"><i className="bi bi-arrow-right"></i></Link>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-lg-7">
              <div className="video-panel" style={{ backgroundImage: `url(${ourblog1})` }}>
                <a href="#" className="play-circle">
                  <i className="bi bi-play-fill"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="newsletter-panel h-100 d-flex flex-column justify-content-center">
                <h2>Get updates from our team</h2>
                <p>
                  We send out a short newsletter every couple of weeks — new projects,
                  tech tips, and the occasional behind-the-scenes post. No spam, unsubscribe anytime.
                </p>
                <form className="input-group" onSubmit={handleSubscribe}>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn theme-btn" type="submit">Subscribe</button>
                </form>
                {subscribed && (
                  <p className="text-success mt-2 mb-0" style={{ fontSize: '0.9rem' }}>
                    <i className="bi bi-check-circle-fill me-1"></i> Thanks for subscribing!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section section-space">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-7">
              <span className="section-kicker">Recent work</span>
              <h2 className="section-title">A few projects we're proud of</h2>
            </div>
          </div>
          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.id}>
                <article className="project-card">
                  <img src={project.img} alt={project.title} />
                  <div className="project-info">
                    <div>
                      <h5><Link to="/team">{project.title}</Link></h5>
                      <span>{project.category}</span>
                    </div>
                    <Link to="/team" className="project-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section-space light-bg">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <span className="section-kicker">How we work</span>
              <h2 className="section-title">We keep things simple and ship on time</h2>
              <p className="section-text">
                We scope the work properly upfront, check in regularly, and don't disappear
                after launch. Most issues come from poor communication — we fix that from day one.
              </p>
              
              {[
                { label: 'On-time delivery', value: 94 },
                { label: 'Client satisfaction', value: 97 },
                { label: 'Code test coverage', value: 88 },
              ].map((bar) => (
                <div className="progress-item" key={bar.label}>
                  <div className="d-flex justify-content-between">
                    <h5>{bar.label}</h5>
                    <span>{bar.value}%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: `${bar.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <img className="process-img" src={processImage} alt="developer working" />
            </div>
          </div>

          <div className="stats-wrap row g-0 text-center">
            {[
              { number: '8+', label: 'Years in business' },
              { number: '120+', label: 'Projects delivered' },
              { number: '97%', label: 'Client retention' },
            ].map((stat) => (
              <div className="col-md-4" key={stat.label}>
                <div className="stat-box">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section section-space">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-kicker">Pricing</span>
            <h2 className="section-title">Simple, honest pricing</h2>
          </div>
          <div className="row g-4">
            {pricingPlans.map((plan) => (
              <div className="col-md-6 col-lg-4" key={plan.id}>
                <article className={`price-card${plan.active ? ' active' : ''}`}>
                  <h5>{plan.name}</h5>
                  <div className="price"><sup>$</sup>{plan.price}<span>/mo</span></div>
                  <Link to="/contact" className="btn theme-btn">Get Started</Link>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="brand-section">
        <div className="container">
          <h5 className="text-center">
            Trusted by companies across <span>12 countries</span>
          </h5>
          <div id="brandCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="brand-row">
                  {brands.map((brand, i) => (
                    <img key={i} src={brand} alt={`client logo ${i + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section section-space">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-kicker">Clients Testimonials</span>
            <h2 className="section-title">What Our Customers Say</h2>
          </div>
          <Slider 
            dots={true} 
            arrows={false} 
            infinite={true} 
            speed={600} 
            slidesToShow={3} 
            slidesToScroll={1} 
            responsive={[
              { breakpoint: 992, settings: { slidesToShow: 2 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
            ]} 
            className="testimonial-slider"
          >
            {testimonials.map((t) => (
              <div className="testimonial-slide" key={t.id}>
                <div className="testimonial-card-alt">
                  <div className="feedback">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                    <p className="comment">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                  <div className="customer-info">
                    <div className="customer-img">
                      <img src={t.avatar} alt={t.name} />
                    </div>
                    <div className="customer-title">
                      <h5>{t.name}</h5>
                      <span>{t.role}</span>
                    </div>
                  </div>
                  <div className="company-logo"><i className="bi bi-vector-pen"></i></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="blog-section section-space light-bg">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-7">
              <span className="section-kicker">From the blog</span>
              <h2 className="section-title">Things we've written about lately</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <article className="blog-feature">
                <img src={blogMain} alt={blogPosts[0].title} />
                <div className="blog-body">
                  <ul className="blog-meta d-flex gap-4">
                    <li><i className="bi bi-person"></i> Admin</li>
                    <li><i className="bi bi-calendar3"></i> {blogPosts[0].date}</li>
                  </ul>
                  <h3><Link to="/blog-details">{blogPosts[0].title}</Link></h3>
                </div>
              </article>
            </div>
            <div className="col-lg-6">
              <div className="blog-list">
                {blogPosts.slice(1).map((post) => (
                  <article className="blog-mini d-sm-flex gap-4" key={post.id}>
                    <img src={post.img} alt={post.title} />
                    <div>
                      <ul className="blog-meta d-flex gap-3">
                        <li><i className="bi bi-person"></i> Admin</li>
                        <li><i className="bi bi-calendar3"></i> {post.date}</li>
                      </ul>
                      <h3><Link to="/blog-details">{post.title}</Link></h3>
                      <Link to="/blog-details" className="read-more">
                        Read More <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomeMainContent;





