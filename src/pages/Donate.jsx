import React, { useState, useEffect, useRef } from 'react';
import './Donate.css';
export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(1500);
  const [customAmount, setCustomAmount] = useState('');
  const [showToast, setShowToast] = useState(false);
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);
  const handleDonate = () => {
    setShowToast(true);
  };
  const presetTiers = [
    { amount: 500, label: '₹500', desc: '5 girls receive pads for 1 month' },
    { amount: 1500, label: '₹1,500', desc: '15 girls receive pads for 3 months' },
    { amount: 5000, label: '₹5,000', desc: '25 girls continue school with dignity' },
    { amount: 10000, label: '₹10,000', desc: 'An entire classroom is free from shame' }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateStats();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);
  const animateStats = () => {
    const el1 = document.getElementById('stat-1in5');
    const shuffleFrames = [
      '4 in 9', '3 in 7', '2 in 8', '5 in 9', '3 in 6',
      '4 in 7', '2 in 9', '3 in 8', '2 in 6', '1 in 4',
      '2 in 7', '1 in 3', '2 in 5', '1 in 5'
    ];
    let i = 0;
    const t1 = setInterval(() => {
      if (el1) el1.textContent = shuffleFrames[i];
      i++;
      if (i >= shuffleFrames.length) clearInterval(t1);
    }, 90);
    const el2 = document.getElementById('stat-crore');
    let count = 0;
    const target = 12;
    setTimeout(() => {
      const t2 = setInterval(() => {
        count += 1;
        if (el2) el2.textContent = count + ' Crore+';
        if (count >= target) clearInterval(t2);
      }, 80);
    }, 200);
  };
  return (
    <div className="donate-page">
      <div className="donate-container">
        {}
        <div className="donate-editorial">
          <span className="editorial-category">Support She Can Foundation</span>
          <h1 className="editorial-title">No Girl Should Drop Out of School Because of Her Period.</h1>
          <div className="editorial-body">
            <p className="lead-paragraph"><strong>Dear Donor,</strong></p>
            <p className="lead-paragraph">
              Every month, a 13-year-old girl in a small village is forced to miss five days of school. Not because she doesn't want to learn. Not because she is lazy. But because she cannot afford something as basic as a sanitary pad.
            </p>
            <p>
              She hides at home in shame. She uses rags, newspapers, even sand — risking her health and her dignity. Slowly, her dreams of education, freedom, and self-respect begin to fade.
            </p>
            <blockquote className="editorial-quote">
              What if it was your sister? Your daughter?
            </blockquote>
            <p>
              She misses school. She hides in shame. All because she cannot afford a simple sanitary pad.
            </p>
          </div>
          {/* Featured Editorial Photojournalism Image */}
          <div className="editorial-featured-image-container">
            <img src="/images/edu.jpg" alt="Hygiene Awareness and Livelihood Campaign" className="editorial-featured-image" />
            <span className="image-caption">Empowering Indian schoolgirls through comprehensive hygiene training and dignity kit distribution.</span>
          </div>
          {/* Hard Truth Section */}
          <div className="editorial-stats-section" ref={statsRef}>
            <h2 className="section-title">The Hard Truth</h2>
            <div className="stats-list">
              <div className="stat-item">
                <span className="stat-number" id="stat-1in5">1 in 5</span>
                <span className="stat-label">Girls in India drops out of school because of periods.</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" id="stat-crore">12 Crore+</span>
                <span className="stat-label">Women and girls in India still lack access to proper menstrual hygiene.</span>
              </div>
            </div>
            <p className="stats-consequence">
              The result? Shame. Deadly Diseases. Lost education. Lost opportunities. But, dear donor — you hold the power to change this.
            </p>
          </div>
          {/* Impact Comparison */}
          <div className="editorial-impact-details">
            <h2 className="section-title">How You Can Save Her Dignity</h2>
            <p>
              At She Can Foundation (registered under the Indian Society Act, 1860), we have already helped 1,20,000+ girls across India with free sanitary pads, awareness workshops, and dignity kits. But for every 1 girl we reach, 5 more are still waiting. Right now, she waits… for you.
            </p>
            <div className="comparison-list">
              <div className="comparison-item">
                <strong>An everyday coffee (₹300)</strong>
                <span>The next time you spend ₹300 on a coffee, remember: That same amount can provide 3 girls with sanitary pads kit for an entire month.</span>
              </div>
              <div className="comparison-item">
                <strong>A streaming subscription (₹500)</strong>
                <span>The next time you spend ₹500 on a monthly streaming subscription, remember: That same amount can provide 5 girls with sanitary pads kit for an entire month.</span>
              </div>
              <div className="comparison-item">
                <strong>A dining experience (₹1,000)</strong>
                <span>The next time you buy a ₹1,000 dinner, remember: That same amount can keep 10 girls in school, safe, and dignified.</span>
              </div>
              <div className="comparison-item">
                <strong>A movie ticket night (₹2,000)</strong>
                <span>The next time you spend ₹2,000 on a weekend movie ticket and snacks, remember: That same amount can keep 20 girls safe, dignified, and in school.</span>
              </div>
            </div>
            <p className="impact-conclusion">
              Your gift today is not charity. It is the difference between a girl living in shame or living with dignity.
            </p>
          </div>
        </div>
        {/* Right Fintech Donation Widget */}
        <div className="donate-widget-area">
          <div className="donation-card">
            <div className="card-header">
              <h2>Donate Now</h2>
              <p>One Small Gift = A Lifetime of Dignity</p>
            </div>
            {/* Presets */}
            <div className="preset-pills-container">
              <div className="preset-pills-grid">
                {presetTiers.map((tier) => (
                  <button
                    key={tier.amount}
                    className={`preset-pill-btn ${selectedAmount === tier.amount ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedAmount(tier.amount);
                      setCustomAmount('');
                    }}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
              <div className="active-impact-display">
                <span className="impact-caption">YOUR IMPACT</span>
                <p className="impact-description">
                  {presetTiers.find(t => t.amount === selectedAmount)?.desc || 'Sponsors life-changing hygiene kits and dignity support.'}
                </p>
              </div>
            </div>
            {/* Custom Input */}
            <div className="custom-input-underline-group">
              <label htmlFor="custom-amount">Or enter a custom amount</label>
              <div className="underline-input-wrapper">
                <span className="rupee-icon">₹</span>
                <input
                  id="custom-amount"
                  type="number"
                  placeholder="Other Amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) {
                      setSelectedAmount(parseInt(e.target.value) || 0);
                    }
                  }}
                />
              </div>
            </div>
            <p className="widget-waiting-text">
              Dear donor, without you, she waits. With you, she rises. The choice is yours — and her future depends on it.
            </p>
            <p className="widget-signature-text">
              Be the reason she dreams again. Donate today.
              <br />
              <strong>With hope, She Can Foundation</strong>
            </p>
            <p className="click-to-donate-hint">
              Click on the button below to donate to Us
            </p>
            <div className="widget-actions-modern">
              <button className="checkout-btn-primary" onClick={handleDonate}>
                Donate ₹{selectedAmount}
              </button>
              <div className="secure-separator">
                <span className="line"></span>
                <span className="text">secured by razorpay</span>
                <span className="line"></span>
              </div>
              <div className="razorpay-direct-wrapper">
                <img
                  src="/images/razor.png"
                  alt="Razorpay"
                  className="razorpay-logo-inline"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <button className="checkout-btn-secondary" onClick={handleDonate}>
                  Pay via Razorpay Secure
                </button>
              </div>
            </div>
            <p className="secure-badge">
              Secure 256-bit encrypted transaction
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Reflection */}
      <section className="bottom-editorial-reflection">
        <div className="reflection-container">
          <p>
            Imagine for a moment that you are struggling to make ends meet. You're worried about how you'll pay for basic necessities like food, shelter, and healthcare. Now, imagine that someone steps forward and offers a helping hand - a small donation that can make all the difference in your life. That feeling of relief and gratitude is immeasurable.
          </p>
          <p className="emphasis-text">
            By donating to a cause you care about, you have the power to make that difference in someone's life. You can provide hope and support to those who need it most, and create a ripple effect of kindness and generosity in the world. So, if you have the means to give, think about the impact you can make. Your donation may just be the lifeline that someone desperately needs.
          </p>
          <p className="editorial-callout">
            Don't let her story end in silence. Be the reason she stands tall.
          </p>
        </div>
      </section>
      {/* Success Toast */}
      {showToast && (
        <div className="custom-toast-notification">
          <div className="toast-icon">✓</div>
          <div className="toast-content">
            <h4>Donation Successful</h4>
            <p>Thank you! Your demo donation of ₹{selectedAmount} has been processed successfully. (Demo Webpage Mode)</p>
          </div>
          <button className="toast-close" onClick={() => setShowToast(false)}>×</button>
        </div>
      )}
    </div>
  );
}