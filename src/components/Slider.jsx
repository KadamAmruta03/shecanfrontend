import React from 'react';
import './Slider.css';
export default function Slider() {
  const images = [
    "https://i.pinimg.com/1200x/31/3a/f4/313af4638d69a689d908b3f3e170a054.jpg",
    "https://i.pinimg.com/1200x/86/fe/b1/86feb12e7f229eee71c7d7c743eeb008.jpg",
    "https://i.pinimg.com/474x/4b/b3/f3/4bb3f3ffd867ec055be29e4dfd85455a.jpg"
  ];
  return (
    <section className="slider-viewport">
      <div className="slider-content">
        <h2>Education Is Empowerment</h2>
      </div>
      <div className="slider-track">
        {images.map((url, idx) => (
          <div className="slide" key={`orig-${idx}`}>
            <img src={url} alt={`Empowerment Showcase ${idx + 1}`} />
          </div>
        ))}
        {images.map((url, idx) => (
          <div className="slide" key={`loop-${idx}`}>
            <img src={url} alt={`Empowerment Showcase Loop ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}