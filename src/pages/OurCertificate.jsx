import React, { useEffect, useRef } from 'react';
import './OurCertificate.css';
export default function OurCertificate() {
  const animatedRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    animatedRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  const addToRefs = (el) => {
    if (el && !animatedRefs.current.includes(el)) {
      animatedRefs.current.push(el);
    }
  };
  return (
    <div className="our-certificate-page">
      <section className="cert-main-container">
        <div className="cert-spotlight-grid">
          {}
          <div ref={addToRefs} className="cert-image-column slide-from-left">
            <img 
              src="/images/regi.png" 
              alt="Indian Society Registration Certificate" 
              className="cert-document-image" 
            />
          </div>
          {}
          <div className="cert-info-column">
            <span className="cert-badge">Official Credential</span>
            {}
            <h1 ref={addToRefs} className="animated-heading">
              Indian Society<br />Registration Certificate
            </h1>
            <div className="cert-description-box">
              <p>
                We are proud to be registered under the Indian Society Act, 1860, and we are committed to operating with transparency and accountability. Our registration is a testament to our dedication to creating positive change in the world and to our commitment to empowering women and creating a more equitable society.
              </p>
              <p>
                As a registered non-profit organization, we are held to a high standard of integrity and professionalism, and we take that responsibility very seriously. We are honored to have received this certificate from the government, and we are committed to upholding the values of the She Can Foundation as we continue our mission to empower women and create a better world for all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}