import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactMainContent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', phone: '', message: '' });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 4000);
    }
  };

  return (
    <main>
    <section className="breadcrumb">
      <div className="container">
        <h1 className="breadcrumb-title">Contact Us</h1>
        <ul className="page-navigator">
          <li><a href="/">Home</a></li>
          <li>Contact Us</li>
        </ul>
      </div>
    </section>

    <div className="contact-map-location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.4966722429335!2d-75.80948658444869!3d42.075406879206916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dae40aa864a7e7%3A0x7a4c41ecda420673!2s66%20Golden%20St%2C%20Kirkwood%2C%20NY%2013795%2C%20USA!5e0!3m2!1sen!2sbd!4v1680634171309!5m2!1sen!2sbd"
        width="100%"
        height="650"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <section className="contact-section section-space">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-6">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Enter Message..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn contact-submit">Send Message</button>
                </div>
                {submitSuccess && (
                  <div className="col-12 mt-3">
                    <div className="alert alert-success py-2 mb-0" role="alert">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="contact-info-content">
              <span className="section-kicker">Contact Us</span>
              <h2 className="inner-title">Get In Touch With Us</h2>
              <p className="section-text">
                These are the phrases we stay via way of means of in the whole lot
                we do. Each brand we build, and we create.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-icon"><i className="bi bi-geo-alt-fill"></i></span>
                  <div>
                    <h5>Location</h5>
                    <p>7 Green Lake Street Crawfordsville, IN 47933</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-icon"><i className="bi bi-telephone"></i></span>
                  <div>
                    <h5>Call Now</h5>
                    <p>+1801.234.5678+1784.386.8687</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-icon"><i className="bi bi-envelope"></i></span>
                  <div>
                    <h5>Email Us</h5>
                    <p>mehedi@company.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default ContactMainContent;


