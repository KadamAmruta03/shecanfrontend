import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import OurCertificate from './pages/OurCertificate';
import Donate from './pages/Donate';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'story':
        return <OurStory />;
      case 'certificate':
        return <OurCertificate />;
      case 'donate':
        return <Donate />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', color: '#ffffff' }}>
      {}
      <Header activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        {renderPage()}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}