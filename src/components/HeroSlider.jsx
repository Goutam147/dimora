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
    img: "/images/necklace_hero.jpg",
    alt: "Royal Diamond & Gemstone Necklace Collection",
    link: "#necklaces"
  },
  {
    id: 3,
    img: "/images/ring_hero.jpg",
    alt: "Exclusive Solitaire Ring Collection",
    link: "#solitaires"
  },
  {
    id: 4,
    img: "/images/craftsmanship_macro.png",
    alt: "Fine Jewellery Craftsmanship & Heritage",
    link: "#craftsmanship"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance in px
  const minSwipeDistance = 35;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Touch Swipe Handlers for Finger Scrolling
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="bg-white overflow-hidden p-0" id="hero">
      {/* Hero Banner Image Box */}
      <div
        className="relative w-full h-[240px] sm:h-[380px] md:h-[480px] bg-[#F4F4F4] overflow-hidden select-none cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <a href={slide.link} className="block w-full h-full">
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Pill-Style Bottom Pagination Dots Container */}
      <div className="flex items-center justify-center gap-2 py-1.5 md:py-3 bg-white">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer border-none outline-none ${
              index === currentSlide
                ? 'w-8 h-2 bg-[#B82A45] shadow-xs'
                : 'w-2 h-2 bg-[#F8DFD2] hover:bg-[#E79F67]'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
