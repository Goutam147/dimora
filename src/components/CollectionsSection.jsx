import React, { useState } from 'react';

const collectionsData = [
  {
    id: 1,
    title: "BELLA",
    subtext: "COLLECTIONS",
    img: "/images/Diamond_drop_earrings_displayed_202608261740.jpeg",
    link: "#bella"
  },
  {
    id: 2,
    title: "AMOLI",
    subtext: "The Heritage Collection",
    img: "/images/Diamond_bangle_product_shot_202608271248.jpeg",
    link: "#amoli"
  },
  {
    id: 3,
    title: "YUVA",
    subtext: "Modern Lifestyle Jewellery",
    img: "/images/tennis_diamond_necklace.png",
    link: "#yuva"
  },
  {
    id: 4,
    title: "APURVA",
    subtext: "Antique Temple Gold",
    img: "/images/Ornate_diamond_Nath_product_photography_202608261758.jpeg",
    link: "#apurva"
  }
];

export default function CollectionsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : collectionsData.length - 3));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev < collectionsData.length - 3 ? prev + 1 : 0));
  };

  const visibleCards = collectionsData.slice(startIndex, startIndex + 3);

  return (
    <section className="collections-section" id="collections">
      <div className="container relative-container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="diamond-ornament-wrap">
            <span className="ornament-line"></span>
            <div className="diamond-icon-box">
              <div className="sparkles">
                <span className="sparkle sp-left"></span>
                <span className="sparkle sp-mid"></span>
                <span className="sparkle sp-right"></span>
              </div>
              <svg width="28" height="24" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 27L1 11L7 1H25L31 11L16 27Z" stroke="#C57835" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
                <path d="M1 11H31" stroke="#C57835" strokeWidth="1.6" />
                <path d="M7 1L11.5 11L16 27L20.5 11L25 1" stroke="#C57835" strokeWidth="1.6" />
                <path d="M16 1L11.5 11L16 27L20.5 11L16 1" stroke="#C57835" strokeWidth="1.6" />
              </svg>
            </div>
            <span className="ornament-line"></span>
          </div>

          <h2 className="category-heading">COLLECTIONS</h2>
          <p className="category-subheading">Find your style. Explore our diverse collections!</p>
        </div>

        {/* Collections Cards Carousel */}
        <div className="collections-carousel-wrapper">
          <button className="carousel-arrow prev-coll-arrow" onClick={prevSlide} aria-label="Previous">
            ❮
          </button>

          <div className="collections-cards-grid">
            {visibleCards.map((card) => (
              <a key={card.id} href={card.link} className="collection-card">
                <div className="collection-img-box">
                  <img src={card.img} alt={card.title} className="collection-img" />
                  <div className="collection-branding-watermark">
                    <span className="coll-brand-name">{card.title}</span>
                    <small className="coll-brand-sub">{card.subtext}</small>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <button className="carousel-arrow next-coll-arrow" onClick={nextSlide} aria-label="Next">
            ❯
          </button>
        </div>

        {/* View All Collection Button */}
        <div className="explore-more-wrap">
          <a href="#explore-collections" className="explore-more-btn">
            View All Collection
          </a>
        </div>
      </div>
    </section>
  );
}
