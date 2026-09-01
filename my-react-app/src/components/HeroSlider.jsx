import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    img: "https://cdn.joyalukkas.in/media/wysiwyg/Spreading_Joy_Web_Banner_for_JA_website-02_1.jpg",
    alt: "Spreading Joy - How Joyalukkas Became the World's Favourite Jeweller",
    link: "#buy-book"
  },
  {
    id: 2,
    img: "https://cdn.joyalukkas.in/media/wysiwyg/40_offer_banner_with_No_Flag_Desktop_2560_x_930_2.png",
    alt: "Biggest Jewellery Sale of the Year - Flat 40% OFF on Making Charges",
    link: "#sale"
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
