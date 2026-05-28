import React from 'react';
import './Footer.css';

export default function Footer({ setActivePage }) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page) => {
    if (setActivePage) {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand-col">
          <h3 className="footer-logo">
            She Can! <span className="accent-red">Foundation</span>
          </h3>
          <p className="footer-desc">
            A non-governmental organization registered under the Indian Society Act, 1860, dedicated to empowering women and creating a more equitable society through education, health, and sustainable livelihood support.
          </p>
          <div className="footer-status">
            <span>NGO Registered Under the Indian Society Act, 1860</span>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => handleLinkClick('home')}>Home</li>
            <li onClick={() => handleLinkClick('story')}>Our Story</li>
            <li onClick={() => handleLinkClick('certificate')}>Certificate</li>
            <li className="donate-quicklink" onClick={() => handleLinkClick('donate')}>Donate Now</li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4>Get In Touch</h4>
          <p className="contact-detail">
            <strong>Email:</strong> <br />
            <a href="mailto:president@shecanfoundation.org">president@shecanfoundation.org</a>
          </p>
          <p className="contact-detail">
            <strong>Contact:</strong> <br />
            <a href="tel:+918283841830">+91- 8283841830</a>
          </p>
          <p className="contact-detail">
            <strong>Location:</strong> <br />
            <span>Punjab / Delhi NCR, India</span>
          </p>
        </div>

        <div className="footer-social-col">
          <h4>Follow Our Journey</h4>
          <p className="social-subtext">Join our community online to stay updated on our drives and impact stories.</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/shecanfoundation.ngo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04 1.851.321 2.433.924 3.033.6.6 1.183.882 1.81.921.85.039 1.123.047 3.297.047 2.172 0 2.444-.01 3.298-.048 1.851-.04 2.433-.321 3.033-.924.6-.6.882-1.183.921-1.81.039-.85.047-1.123.047-3.297 0-2.172-.01-2.444-.048-3.298a5.964 5.964 0 0 0-.923-3.033 3.927 3.927 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.999 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/shecanfoundation/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {currentYear} She Can Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
