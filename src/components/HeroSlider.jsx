import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    img: "/images/diamora_hero_widescreen_banner.png",
    alt: "Dimora Luxury Diamond Jewellery Banner",
    link: "#collection"
  },
  {
    id: 2,
    img: "/images/craftsmanship_macro.png",
    alt: "Fine Jewellery Craftsmanship & Heritage",
    link: "#craftsmanship"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero-banner-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <a href={slide.link}>
              <img src={slide.img} alt={slide.alt} className="hero-banner-img" />
            </a>
          </div>
        ))}
      </div>

      <button className="slider-arrow prev-arrow" onClick={prevSlide} aria-label="Previous">❮</button>
      <button className="slider-arrow next-arrow" onClick={nextSlide} aria-label="Next">❯</button>

      <div className="slider-dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
