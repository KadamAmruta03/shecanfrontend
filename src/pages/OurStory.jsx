import React, { useEffect, useRef } from 'react';
import './OurStory.css';
export default function OurStory() {
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
    <div className="our-story-page">
      <section className="story-main-content">
        {}
        <div className="story-row text-left-img-right">
          <div className="story-text-block">
            <span className="section-eyebrow">Overview</span>
            <h2 ref={addToRefs} className="animated-heading">What is She Can?</h2>
            <p>
              She Can Foundation is a non-profit organization dedicated to empowering women and creating a more equitable society. We provide support, resources, and training to women in communities across the globe, and we raise awareness of women's issues through advocacy campaigns and initiatives.
            </p>
            <p>
              We believe that every woman deserves the opportunity to thrive and succeed, regardless of her background or circumstances, and we work tirelessly to create a world where that is possible. We are committed to breaking down barriers and creating lasting change, and we invite you to join us in our mission to empower women and create a better future for all.
            </p>
          </div>
          {/* Added ref and slide-from-right class */}
          <div ref={addToRefs} className="story-img-block slide-from-right">
            <img src="/images/ngo13.jpg" alt="What is She Can Foundation" className="story-image" />
          </div>
        </div>
        {/* Section 2: How it started? (Image Left, Text Right) */}
        <div className="story-row img-left-text-right">
          {/* Added ref and slide-from-left class */}
          <div ref={addToRefs} className="story-img-block slide-from-left">
            <img src="/images/ngo14.jpg" alt="How She Can Foundation Started" className="story-image" />
          </div>
          <div className="story-text-block">
            <span className="section-eyebrow">Our Journey</span>
            <h2 ref={addToRefs} className="animated-heading">How it started?</h2>
            <p>
              She Can Foundation was founded by a group of individuals who shared a common vision of creating a world where every woman has the opportunity to thrive and succeed. The idea for the organization was born out of a desire to make a real difference in the lives of women in communities across the globe.
            </p>
            <p>
              We recognized that there are countless barriers that prevent women from reaching their full potential, and we wanted to create an organization that could help break down those barriers and provide women with the resources and support they need to succeed. With a shared passion and a determination to create positive change, we set out to make our vision a reality, and She Can Foundation was born.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}