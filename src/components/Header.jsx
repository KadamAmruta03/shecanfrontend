import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
export default function Header({ activePage, setActivePage }) {
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const navLinksRef = useRef({});
  const navItems = [
    { key: 'home', label: 'Home', page: 'home' },
    { key: 'story', label: 'Our Story', page: 'story' },
    { key: 'certificate', label: 'Our Certificate', page: 'certificate' },
    { key: 'donate', label: 'Donate', page: 'donate' },
  ];
  const updateIndicator = (pageKey) => {
    const activeLink = navLinksRef.current[pageKey];
    if (!activeLink) return;
    const offsetLeft = activeLink.offsetLeft;
    const width = activeLink.offsetWidth;
    setIndicatorStyle({
      width: width,
      left: offsetLeft,
    });
  };
  useEffect(() => {
    updateIndicator(activePage);
    const timer = setTimeout(() => {
      updateIndicator(activePage);
    }, 150);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    updateIndicator(activePage);
  }, [activePage]);
  useEffect(() => {
    const handleResize = () => {
      updateIndicator(activePage);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activePage]);
  return (
    <header className="main-header">
      {}
      <div className="logo-container" onClick={() => setActivePage('home')}>
        <img
          src="/images/logo.jpeg"
          alt="She Can! Foundation Logo"
          className="logo-img"
        />
      </div>
      {}
      <nav className="nav-capsule">
        {}
        <div
          className="nav-indicator"
          style={{
            width: `${indicatorStyle.width}px`,
            transform: `translateX(${indicatorStyle.left}px)`,
          }}
        />
        {}
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                ref={(el) => (navLinksRef.current[item.page] = el)}
                className={`nav-link ${activePage === item.page ? 'active' : ''}`}
                onClick={() => setActivePage(item.page)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}