import React from 'react';

export default function DiamondJewellery() {
  return (
    <section className="diamond-jewellery-section" id="diamond">
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

          <h2 className="category-heading">DIAMOND JEWELLERY</h2>
          <p className="category-subheading">Shine with pride. Explore our diamond jewellery!</p>
        </div>

        {/* Diamond Grid Layout */}
        <div className="diamond-grid-layout">
          {/* Left Hero Card */}
          <div className="diamond-hero-card dark-green-theme">
            <img
              src="/images/Woman_wearing_diamond_earrings_202608261740.jpeg"
              alt="Pride Diamond Collection"
              className="diamond-card-bg"
            />
            <div className="diamond-card-overlay">
              <div className="pride-logo-text">
                <span className="brand-tag">PRIDE</span>
                <small className="collection-subtext">diamond collection</small>
              </div>
              <h3 className="diamond-card-title">Crafted for those who wear their brilliance with pride</h3>
              <a href="#shop" className="shop-pill-btn">SHOP NOW</a>
            </div>
          </div>

          {/* Right Column (Top Banner + 3 Small Cards) */}
          <div className="diamond-right-column">
            {/* Top Terracotta Banner */}
            <div className="diamond-top-banner terracotta-theme">
              <img
                src="/images/tennis_diamond_necklace.png"
                alt="Pride Diamond Necklace"
                className="diamond-card-bg"
              />
              <div className="diamond-card-overlay">
                <div className="pride-logo-text">
                  <span className="brand-tag">PRIDE</span>
                  <small className="collection-subtext">diamond collection</small>
                </div>
                <h3 className="diamond-card-title">Timeless brilliance, crafted to shine.</h3>
                <a href="#shop" className="shop-pill-btn">SHOP NOW</a>
              </div>
            </div>

            {/* Bottom 3 Small Product Cards */}
            <div className="diamond-small-cards-row">
              <div className="small-diamond-card">
                <img src="/images/Diamond_drop_earrings_displayed_202608261741.jpeg" alt="Diamond Earrings" />
              </div>
              <div className="small-diamond-card">
                <img src="/images/Diamond_Jhumka_earrings_close-up_202608261740.jpeg" alt="Diamond Set" />
              </div>
              <div className="small-diamond-card">
                <img src="/images/Diamond_bangle_product_shot_202608271248.jpeg" alt="Diamond Bracelet" />
              </div>
            </div>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="explore-more-wrap">
          <a href="#explore-diamond" className="explore-more-btn">
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
