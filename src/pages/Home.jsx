import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';
function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    const animate = () => {
      const endNum = parseInt(end.toString().replace(/,/g, ''), 10);
      if (isNaN(endNum)) return;
      const totalFrames = Math.round(duration / 16);
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuad = (t) => t * (2 - t);
        const current = Math.round(endNum * easeOutQuad(progress));
        setCount(current);
        if (frame >= totalFrames) {
          clearInterval(timer);
          setCount(endNum);
        }
      }, 16);
    };
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration]);
  const formatNumber = (num) => {
    if (num === 120000) return "1,20,000";
    return num.toLocaleString('en-IN');
  };
  return <span ref={elementRef}>{formatNumber(count)}{suffix}</span>;
}
export default function Home({ setActivePage }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/images/ngo6.jpg',
    '/images/ngo7.jpg',
    '/images/ngo8.jpg',
    '/images/ngo2.jpg',
    '/images/ngo5.jpg'
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-slider-container">
          <div
            className="hero-slider-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="hero-slide"
              >
                <img src={img} alt={`Slide ${idx + 1}`} className="slide-image" />
              </div>
            ))}
          </div>
        </div>
        <div className="hero-content">
          <h1 style={{ fontSize: '5.5rem', fontWeight: 'bold', lineHeight: '0.9' }}>
            <span style={{ color: '#ffffff' }}>Welcome to </span>
            <span style={{ color: '#ab0101' }}>She Can! Foundation</span>
          </h1>
          <p style={{ color: '#ffffff' }}>NGO Registered Under the Indian Society Act, 1860</p>
          <button
            className="hero-donate-btn"
            onClick={() => setActivePage && setActivePage('donate')}
          >
            donate now
          </button>
        </div>
      </section>
      <section className="about-intro">
        <p>
          We are She Can Foundation, a non-governmental organization registered under the Indian Society Act, 1860, dedicated to empowering women and creating a more equitable society. We provide support, resources, and training to women in communities across the globe, working closely with local organizations, governments, and communities to ensure that our programs are effective and sustainable.
        </p>
        <p>
          Through advocacy campaigns and initiatives, we raise awareness of women's issues. We rely on the support of individuals, corporations, and other organizations to achieve our vision. We believe that by working together, we can revolutionize society and create a better world for all.
        </p>
        <span className="learn-more-link" onClick={() => setActivePage && setActivePage('story')}>
          learn more {'>'}
        </span>
      </section>
      <section className="home-impact-section">
        <h2>OUR IMPACT</h2>
        <div className="home-impact-grid">
          <div className="home-impact-item">
            <span className="home-impact-number">
              <AnimatedCounter end={120} suffix="K+" />
            </span>
            <p className="home-impact-text">Girls Reached with Free Sanitary Pads & Dignity Kits</p>
          </div>
          <div className="home-impact-item">
            <span className="home-impact-number">
              <AnimatedCounter end={50} suffix="K+" />
            </span>
            <p className="home-impact-text">Volunteers & Interns Mentored and Empowered</p>
          </div>
          <div className="home-impact-item">
            <span className="home-impact-number">
              <AnimatedCounter end={100} suffix="%" />
            </span>
            <p className="home-impact-text">Government Registered Non-Profit<br />(Under the Indian Societies Registration Act of 1860)</p>
          </div>
        </div>
      </section>
      <section className="join-team-section">
        <div className="join-team-container">
          <div className="join-team-left">
            <ScrollReveal animation="reveal-left">
              <h2>
                Join our <br />
                <span className="accent-text">TEAM</span>
              </h2>
              <p>
                Join our team and make a difference in the lives of women in need. At She Can Foundation, we are committed to creating positive change and empowering women in communities across the globe. By joining our team, you will have the opportunity to contribute your time, skills, and ideas to help make a real impact in the lives of women. Whether you are passionate about education, health, or providing support during times of crisis, there is a place for you on our team. Join us today and be a part of an organization that is dedicated to creating a more equitable society, one woman at a time.
              </p>
              <span className="learn-more-link" onClick={() => setActivePage && setActivePage('donate')}>
                learn more {'>'}
              </span>
            </ScrollReveal>
          </div>
          <div className="join-team-right">
            <div className="image-grid-2x2">
              <img src="/images/ngo3.jpg" alt="Team Activity 1" className="grid-image" />
              <img src="/images/ngo10.jpg" alt="Team Activity 2" className="grid-image" />
              <img src="/images/ngo11.jpg" alt="Team Activity 3" className="grid-image" />
              <img src="/images/ngo12.jpg" alt="Team Activity 4" className="grid-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="role-selector-section">
        <ScrollReveal animation="fade-up">
          <h3>Ways to Contribute</h3>
        </ScrollReveal>
        <div className="role-selector-grid">
          <div className="role-card" style={{ backgroundImage: 'url(/images/volunteer.jpg)' }}>
            <div className="role-card-overlay"></div>
            <div className="role-card-content">
              <span className="role-icon"></span>
              <h4>Volunteer /<br />Community Advocate</h4>
              <p>Lead localized menstrual hygiene drives, spread awareness workshops, and distribute dignity kits to schoolgirls.</p>
            </div>
          </div>
          <div className="role-card" style={{ backgroundImage: 'url(/images/intern.jpg)' }}>
            <div className="role-card-overlay"></div>
            <div className="role-card-content">
              <span className="role-icon"></span>
              <h4>Fundraising &<br />Strategy Intern</h4>
              <p>Gain hands-on corporate outreach experience, manage donation campaigns, and build leadership skills.</p>
            </div>
          </div>
          <div className="role-card" style={{ backgroundImage: 'url(/images/corporate.jpg)' }}>
            <div className="role-card-overlay"></div>
            <div className="role-card-content">
              <span className="role-icon"></span>
              <h4>Corporate &<br />Institutional Partner</h4>
              <p>Align your CSR goals with our sustainable livelihood or health verticals to create nationwide structural change.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="founder-quote-section">
        <div className="founder-quote-container">
          <span className="quote-mark open-quote">“</span>
          <blockquote className="founder-quote-text">
            Together, we can break down barriers and empower women. At She Can Foundation, we believe that if we all do our part, there is no challenge too great to overcome. Join us in our mission to create a world where every woman has the opportunity to thrive and succeed.
          </blockquote>
          <span className="quote-mark close-quote">”</span>
          <div className="founder-info">
            <h4 className="founder-name">REETA MISHRA</h4>
            <p className="founder-title">Founder & President, She Can Foundation</p>
          </div>
        </div>
      </section>
    </div>
  );
}