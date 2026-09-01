import React from 'react';

export default function ExploreJewellery() {
  return (
    <section className="explore-jewellery-section" id="explore">
      <div className="container">
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

          <h2 className="category-heading">EXPLORE JEWELLERY</h2>
          <p className="category-subheading">Discover exquisite pieces for every style. Start shopping!</p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="explore-grid-layout">
          {/* Left Column Card (Tall Portrait) */}
          <div className="explore-column">
            <a href="#diamond-jewellery" className="explore-card tall-card">
              <div className="explore-img-box">
                <img
                  src="/images/necklace_hero.jpg"
                  alt="Exquisite Diamond Jewellery"
                  className="explore-img"
                />
              </div>
            </a>
            <span className="explore-card-label">Diamond Jewellery</span>
          </div>

          {/* Middle Column (2 Stacked Landscape Cards) */}
          <div className="explore-middle-col">
            <a href="#gold-jewellery" className="explore-card stack-card">
              <div className="explore-img-box">
                <img
                  src="/images/craftsmanship_macro.png"
                  alt="Gold Jewellery Collection"
                  className="explore-img"
                />
              </div>
              <span className="explore-card-label">Gold Jewellery</span>
            </a>

            <a href="#gemstone-jewellery" className="explore-card stack-card">
              <div className="explore-img-box">
                <img
                  src="/images/Diamond_Jhumka_earrings_close-up_202608261740.jpeg"
                  alt="Gemstone Jewellery"
                  className="explore-img"
                />
              </div>
              <span className="explore-card-label">Gemstone Jewellery</span>
            </a>
          </div>

          {/* Right Column Card (Tall Portrait - Platinum) */}
          <div className="explore-column">
            <a href="#platinum-jewellery" className="explore-card tall-card dark-platinum-theme">
              <div className="explore-img-box">
                <img
                  src="/images/ring_hero.jpg"
                  alt="Platinum Jewellery Collection"
                  className="explore-img"
                />
                <div className="platinum-brand-watermark">
                  <span className="plat-symbol">Pt</span>
                  <small className="plat-text">MEN OF PLATINUM</small>
                </div>
              </div>
            </a>
            <span className="explore-card-label">Platinum Jewellery</span>
          </div>
        </div>

        {/* Discover More Button */}
        <div className="explore-more-wrap compact-explore-wrap">
          <a href="#explore-all-jewellery" className="explore-more-btn">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
