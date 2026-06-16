import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsletterCta from '../common/NewsletterCta';

import blogMainImg from '../../assets/images/image (18).png';
import commenter1 from '../../assets/images/image (15).png';
import commenter2 from '../../assets/images/image (16).png';
import recentPost1 from '../../assets/images/image (19).png';
import recentPost2 from '../../assets/images/image (20).png';
import recentPost3 from '../../assets/images/image (21).png';

const recentArticles = [
  { id: 1, title: 'New Technology for System Security to improve security system.', date: 'January 1, 2024', img: recentPost1 },
  { id: 2, title: 'Analytical Solutions lorem ispsum take a trivial example.', date: 'January 1, 2024', img: recentPost2 },
  { id: 3, title: 'Everything you need to learn about IT Solution for your Company.', date: 'January 1, 2024', img: recentPost3 },
];

export default function BlogdetailsMainContent() {
  const [commentData, setCommentData] = useState({ name: '', email: '', message: '' });
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentData.name && commentData.email && commentData.message) {
      setIsCommentSubmitted(true);
      setCommentData({ name: '', email: '', message: '' });
      setTimeout(() => setIsCommentSubmitted(false), 4000);
    }
  };

  return (
    <main>
    <section className="breadcrumb">
      <div className="container">
        <h1 className="breadcrumb-title">Blog Details</h1>
        <ul className="page-navigator">
          <li><a href="/">Home</a></li>
          <li>Blog Details</li>
        </ul>
      </div>
    </section>

    <section className="section-space">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-8">
            <img
              src={blogMainImg}
              alt="Blog Detail Image"
              className="service-detail-img"
            />
            <ul className="meta-info d-flex mb-3">
              <li><i className="bi bi-person"></i> Admin</li>
              <li><i className="bi bi-calendar"></i> January 1, 2024</li>
            </ul>
            <h2>
              Everything you need to learn about IT Solution for your Company.
            </h2>
            <p>
              In today's rapidly evolving digital landscape, businesses must
              stay ahead of the curve by adopting the right IT solutions. From
              cloud computing to cybersecurity, the range of technology services
              available can transform how companies operate, communicate, and
              grow. Understanding which solutions best fit your organization's
              needs is the first step toward digital transformation.
            </p>
            <p>
              IT solutions encompass a broad spectrum of services designed to
              optimize business processes, enhance security, and improve overall
              efficiency. Whether you're a small startup or a large enterprise,
              investing in the right technology infrastructure can lead to
              significant cost savings, improved productivity, and a competitive
              advantage in your industry.
            </p>

            <blockquote className="blog-blockquote">
              <i className="bi bi-quote"></i>
              <p>
                Technology is best when it brings people together. The right IT
                solution doesn't just solve problems — it creates opportunities
                for growth and innovation.
              </p>
            </blockquote>

            <p>
              Choosing the right IT partner is crucial for success. A reliable
              technology provider will not only implement solutions but also
              offer ongoing support, training, and strategic guidance to ensure
              your business continues to thrive in an increasingly digital
              world. From managed IT services to custom software development,
              the possibilities are endless when you have the right team by your
              side.
            </p>

            <div className="blog-tags-share d-flex flex-wrap justify-content-between align-items-center">
              <div className="blog-tags d-flex align-items-center gap-2 flex-wrap">
                <strong>Tags:</strong>
                <a href="#" className="blog-tag">IT Solutions</a>
                <a href="#" className="blog-tag">Technology</a>
                <a href="#" className="blog-tag">Business</a>
              </div>
              <div className="blog-share d-flex align-items-center gap-2">
                <strong>Share:</strong>
                <a href="#" className="blog-share-icon"><i className="bi bi-facebook"></i></a>
                <a href="#" className="blog-share-icon"><i className="bi bi-twitter"></i></a>
                <a href="#" className="blog-share-icon"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div className="blog-comments mt-5">
              <h4 className="mb-4">Comments (2)</h4>
              
              <div className="blog-comment d-flex gap-3 mb-4">
                <img
                  src={commenter1}
                  alt="commenter"
                  className="blog-comment-avatar"
                />
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <h6 className="mb-0">Joshua Liddell</h6>
                    <span className="blog-comment-date">January 2, 2024</span>
                  </div>
                  <p className="mb-0">
                    Great insights on IT solutions! This article really helped
                    me understand what technology services my company needs to
                    grow. Keep up the excellent work.
                  </p>
                </div>
              </div>
              <div className="blog-comment d-flex gap-3 mb-4">
                <img
                  src={commenter2}
                  alt="commenter"
                  className="blog-comment-avatar"
                />
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <h6 className="mb-0">Arush Aggarwal</h6>
                    <span className="blog-comment-date">January 3, 2024</span>
                  </div>
                  <p className="mb-0">
                    Very informative article. The section about choosing the
                    right IT partner is spot on. Would love to see more content
                    like this about cybersecurity best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="blog-comment-form mt-5">
              <h5 className="mb-4">Get in touch with us to see how we can help you with your project</h5>
              <form onSubmit={handleCommentSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      style={{ minHeight: "52px" }}
                      value={commentData.name}
                      onChange={(e) => setCommentData({...commentData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      style={{ minHeight: "52px" }}
                      value={commentData.email}
                      onChange={(e) => setCommentData({...commentData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Enter Message..."
                      value={commentData.message}
                      onChange={(e) => setCommentData({...commentData, message: e.target.value})}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 mt-3">
                    <button type="submit" className="btn theme-btn">Submit Now</button>
                    {isCommentSubmitted && (
                      <span className="text-success ms-3 fw-medium">
                        Your comment was submitted for review!
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sidebar-widget mb-4">
              <h4>Search</h4>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Search..." />
                <button className="btn theme-btn" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>

            <div className="sidebar-widget mb-4">
              <h4>Categories</h4>
              <ul className="sidebar-menu">
                <li><Link to="/services">IT Management <i className="bi bi-arrow-right"></i></Link></li>
                <li><Link to="/services">Cloud Services <i className="bi bi-arrow-right"></i></Link></li>
                <li><Link to="/services">Cyber Security <i className="bi bi-arrow-right"></i></Link></li>
                <li><Link to="/services">Web Development <i className="bi bi-arrow-right"></i></Link></li>
                <li><Link to="/services">Data Analytics <i className="bi bi-arrow-right"></i></Link></li>
              </ul>
            </div>

            <div className="sidebar-widget mb-4">
              <h4>Recent Posts</h4>
              {recentArticles.map((article) => (
                <div className="d-flex gap-3 mb-3" key={article.id}>
                  <img
                    src={article.img}
                    alt={article.title}
                    className="rounded"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="mb-1" style={{ fontSize: "14px", fontWeight: "700" }}>
                      <Link to="/blog-details" className="text-decoration-none text-dark">
                        {article.title}
                      </Link>
                    </h6>
                    <small className="text-muted d-flex align-items-center gap-1">
                      <i className="bi bi-calendar text-success"></i>
                      {article.date}
                    </small>
                  </div>
                </div>
              ))}
            </div>

            <div className="sidebar-widget">
              <h4>Popular Tags</h4>
              <div className="d-flex flex-wrap gap-2">
                <a href="#" className="blog-tag">Technology</a>
                <a href="#" className="blog-tag">IT Solutions</a>
                <a href="#" className="blog-tag">Business</a>
                <a href="#" className="blog-tag">Software</a>
                <a href="#" className="blog-tag">Cloud</a>
                <a href="#" className="blog-tag">Security</a>
                <a href="#" className="blog-tag">Marketing</a>
                <a href="#" className="blog-tag">Data</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <NewsletterCta />
    </main>
  );
}






