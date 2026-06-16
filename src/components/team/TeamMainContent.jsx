import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterCta from '../common/NewsletterCta';

import leadDesignerImg from '../../assets/images/emp1.png';
import marketingCoordImg from '../../assets/images/emp2.png';
import webDesignerImg from '../../assets/images/emp3.png';
import processAnalystImg from '../../assets/images/emp4.png';
import coFounderImg from '../../assets/images/emp6.png';
import developerImg from '../../assets/images/emp5.png';

const teamData = [
  { id: 1, name: 'Edoardo Romussi', role: 'Ui/Ux Designer', img: leadDesignerImg },
  { id: 2, name: 'Jessica James', role: 'Marketing Coordinator', img: marketingCoordImg },
  { id: 3, name: 'Adrian Williams', role: 'Web Designer', img: webDesignerImg },
  { id: 4, name: 'Laci Pletcher', role: 'Process Analyst', img: processAnalystImg },
  { id: 5, name: 'Alex Brown', role: 'Co-Founder', img: coFounderImg },
  { id: 6, name: 'Rebecca Davis', role: 'Web Developer', img: developerImg },
];

export default function TeamMainContent() {

  return (
    <main>
      <section className="breadcrumb">
      <div className="container">
        <h1 className="breadcrumb-title">Team</h1>
        <ul className="page-navigator">
          <li><a href="/">Home</a></li>
          <li>Team</li>
        </ul>
      </div>
    </section>

    <section className="team-sec bg-light-green section-space">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h6 className="section-kicker">Our Team</h6>
            <h2 className="inner-title">Meet Our Expert Team Members</h2>
          </div>
        </div>
        <div className="row">
          {teamData.map((member) => (
            <div className="col-md-6 col-lg-4" key={member.id}>
              <div className="single-team">
                <div className="member-img">
                  <img src={member.img} alt={member.name} />
                  <ul className="team-social">
                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                  </ul>
                </div>
                <div className="member-info">
                  <h5 className="member-name">
                    <Link to="/team">{member.name}</Link>
                  </h5>
                  <span className="member-cat">{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <NewsletterCta />
    </main>
  );
}
