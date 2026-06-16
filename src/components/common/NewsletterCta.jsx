import React, { useState } from 'react';

const NewsletterCta = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    if (emailInput) {
      setIsSubscribed(true);
      setEmailInput('');
      setTimeout(() => setIsSubscribed(false), 3500);
    }
  };

  return (
    <section className="newsletter-cta">
      <div className="container">
        <div className="newsletter-cta-inner">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xl-5">
              <h4 className="newsletter-cta-text">
                Subscribe to Our Newsletter for the daily Updates
              </h4>
            </div>
            <div className="col-lg-7 col-xl-6 offset-xl-1">
              <form className="d-flex gap-2 newsletter-cta-form" onSubmit={handleCtaSubmit}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                />
                <button type="submit" className="theme-btn">Subscribe</button>
              </form>
              {isSubscribed && (
                <div className="text-success mt-2">
                  <small><i className="bi bi-check-circle-fill me-1"></i> You've successfully subscribed.</small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCta;
