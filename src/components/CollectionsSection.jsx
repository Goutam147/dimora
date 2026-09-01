import React, { useRef } from 'react';
import SectionHeader from './SectionHeader';

const collectionsData = [
  { id: 1, title: "Yuva Collection", subtitle: "Trendy & Everyday Wear", img: "/images/Woman_wearing_diamond_drop_earrings_202608261759.jpeg", link: "#yuva" },
  { id: 2, title: "Apurva Collection", subtitle: "Antique Heritage Craftsmanship", img: "/images/Woman_wearing_ornate_diamond_Nath_202608261801.jpeg", link: "#apurva" },
  { id: 3, title: "Sita Kalyanam", subtitle: "Grand Royal Bridal Jewellery", img: "/images/Woman_wearing_diamond_earrings_202608261739.jpeg", link: "#sita-kalyanam" },
  { id: 4, title: "Eleganza Collection", subtitle: "Polki & Diamond Artistry", img: "/images/Model_wearing_diamond_nose_hoop_202608261801.jpeg", link: "#eleganza" },
  { id: 5, title: "Ratna Collection", subtitle: "Precious Gemstones", img: "/images/necklace_hero.jpg", link: "#ratna" }
];

export default function CollectionsSection() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="collections-section" id="collections">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          title="COLLECTIONS"
          subtitle="Designed to perfection for every celebration!"
        />

        {/* Collections Carousel Container with Arrows */}
        <div className="collections-carousel-wrapper">
          <button
            onClick={scrollLeft}
            className="carousel-arrow prev-coll-arrow"
            aria-label="Previous Collection"
          >
            ‹
          </button>

          <div className="collections-cards-grid" ref={carouselRef}>
            {collectionsData.map((item) => (
              <a key={item.id} href={item.link} className="collection-card">
                <div className="collection-img-box">
                  <img src={item.img} alt={item.title} className="collection-img" />
                </div>
                <div className="collection-info">
                  <h3 className="collection-title">{item.title}</h3>
                  <p className="collection-subtitle">{item.subtitle}</p>
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="carousel-arrow next-coll-arrow"
            aria-label="Next Collection"
          >
            ›
          </button>
        </div>

        {/* View All Collection Button */}
        <div className="explore-more-wrap">
          <a href="#all-collections" className="explore-more-btn">
            View All Collection
          </a>
        </div>
      </div>
    </section>
  );
}
