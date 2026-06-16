import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SliderLib from 'react-slick';
import NewsletterCta from '../common/NewsletterCta';

import aboutPrimary from '../../assets/images/image (9).png';
import aboutSecondary from '../../assets/images/image (11).png';
import processImg from '../../assets/images/image (10).png';
import userAvatar1 from '../../assets/images/image (15).png';
import userAvatar2 from '../../assets/images/image (16).png';
import userAvatar3 from '../../assets/images/image (17).png';

import teamMember1 from '../../assets/images/emp1.png';
import teamMember2 from '../../assets/images/emp2.png';
import teamMember3 from '../../assets/images/emp3.png';
import teamMember4 from '../../assets/images/emp4.png';

const Slider = SliderLib.default || SliderLib;

const SocialLinks = () => (
  <ul className="team-social">
    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
    <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
    <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
  </ul>
);

export default function AboutMainContent() {
  // Testimonial data
  const customerFeedback = [
    { id: 1, avatar: userAvatar1, name: 'Joshua Liddell', role: 'Company Owner' },
    { id: 2, avatar: userAvatar2, name: 'Arush Aggarwal', role: 'Senior Manager' },
    { id: 3, avatar: userAvatar3, name: 'Rosy Flower Gaggero', role: 'CEO & Founder' },
    { id: 4, avatar: userAvatar1, name: 'Joshua Liddell', role: 'Company Owner' },
    { id: 5, avatar: userAvatar2, name: 'Arush Aggarwal', role: 'Senior Manager' },
    { id: 6, avatar: userAvatar3, name: 'Rosy Flower Gaggero', role: 'CEO & Founder' },
  ];

  return (
    <main>
      <section className="breadcrumb">
        <div className="container">
          <h1 className="breadcrumb-title">About</h1>
          <ul className="page-navigator">
            <li><a href="/">Home</a></li>
            <li>About</li>
          </ul>
        </div>
      </section>

      <section className="about-sec section-space">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="content-images">
                <div className="content-img-primary">
                  <img src={aboutPrimary} alt="Company office" />
                </div>
                <div className="content-img-secondary">
                  <img src={aboutSecondary} alt="Team collaboration" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-body">
                <h6 className="section-kicker">About Your Company</h6>
                <h2 className="inner-title">
                  We Execute Our ideas From The Start to Finish
                </h2>
                <p className="section-text">
                  Solve Business Problems And Automate Workflows With Artificial
                  Work Intelligence-Based Solutions. Unlock The Hidden Power Of
                  The Data You Already Have And Hand Hampers The Creativity.
                </p>
                <ul className="check-list">
                  <li>
                    <i className="bi bi-check-square-fill"></i>Development of
                    Financial Models
                  </li>
                  <li>
                    <i className="bi bi-check-square-fill"></i>Nifty team is a
                    diverse network of consultants
                  </li>
                  <li>
                    <i className="bi bi-check-square-fill"></i>Industry
                    professionals with a global mindset
                  </li>
                </ul>
                <a className="theme-btn" href="/about">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="business-section section-space light-bg">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                className="section-body h-100 d-flex justify-content-center flex-column"
              >
                <h6 className="section-kicker">Buisness Process</h6>
                <h2 className="inner-title">
                  Easy Way Build Success your Buisness Pla
                </h2>
                <p className="section-text">
                  Solve Business Problems And Automate Workflows With Artificial
                  Intelligence-Based Solutions. Unlock The Hidden Power Of The
                  Data You Already Have And Hand.
                </p>
                <div className="progress-item">
                  <div className="d-flex justify-content-between">
                    <h5>Productivity</h5>
                    <span>80%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="d-flex justify-content-between">
                    <h5>Digital Marketing</h5>
                    <span>75%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="d-flex justify-content-between">
                    <h5>Technology</h5>
                    <span>90%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="process-img"
                src={processImg}
                alt="Business process"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats-section">
        <div className="container">
          <div className="stats-wrap row g-0 text-center">
            <div className="col-md-4">
              <div className="stat-box">
                <div className="info-icon"><i className="bi bi-people-fill"></i></div>
                <h3>36+</h3>
                <p>Team Member</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box">
                <div className="info-icon"><i className="bi bi-check2-square"></i></div>
                <h3>25K+</h3>
                <p>Complete Project</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box border-0">
                <div className="info-icon">
                  <i className="bi bi-hand-thumbs-up-fill"></i>
                </div>
                <h3>99K+</h3>
                <p>Client Review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section section-space">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 text-center">
              <h6 className="section-kicker">Clients Testimonials</h6>
              <h2 className="inner-title">What Our Customers Say</h2>
            </div>
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
              { breakpoint: 768, settings: { slidesToShow: 1 } }
            ]} 
            className="testimonial-slider"
          >
            {customerFeedback.map((review) => (
              <div className="testimonial-slide" key={review.id}>
                <div className="testimonial-card-alt">
                  <div className="feedback">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                    <p className="comment">
                      &ldquo;I requested a UI update gig and received job
                      excellent from Maria! talented young UI/UX designer who will
                      beat your expectation! and quick feedback. Will definitely
                      work with again!&rdquo;
                    </p>
                  </div>
                  <div className="customer-info">
                    <div className="customer-img">
                      <img src={review.avatar} alt={review.name} />
                    </div>
                    <div className="customer-title">
                      <h5>{review.name}</h5>
                      <span>{review.role}</span>
                    </div>
                  </div>
                  <div className="company-logo"><i className="bi bi-vector-pen"></i></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="team-sec section-space light-bg">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-6">
              <h6 className="section-kicker">Our Team Members</h6>
              <h2 className="inner-title">Building A Smarter future Through IT</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="single-team">
                <div className="member-img">
                  <img src={teamMember1} alt="Edoardo Romussi" />
                  <SocialLinks />
                </div>
                <div className="member-info">
                  <h5 className="member-name"><Link to="/team">Edoardo Romussi</Link></h5>
                  <span className="member-cat">Ui/Ux Designer</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="single-team">
                <div className="member-img">
                  <img src={teamMember2} alt="Jessica James" />
                  <SocialLinks />
                </div>
                <div className="member-info">
                  <h5 className="member-name"><Link to="/team">Jessica James</Link></h5>
                  <span className="member-cat">Marketing Coordinator</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="single-team">
                <div className="member-img">
                  <img src={teamMember3} alt="Adrian Williams" />
                  <SocialLinks />
                </div>
                <div className="member-info">
                  <h5 className="member-name"><Link to="/team">Adrian Williams</Link></h5>
                  <span className="member-cat">Web Designer</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="single-team">
                <div className="member-img">
                  <img src={teamMember4} alt="Laci Pletcher" />
                  <SocialLinks />
                </div>
                <div className="member-info">
                  <h5 className="member-name"><Link to="/team">Laci Pletcher</Link></h5>
                  <span className="member-cat">Process Analyst</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterCta />
    </main>
  )
}







