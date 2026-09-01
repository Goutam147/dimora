import React from 'react';
import SectionHeader from './SectionHeader';

export default function DiamondJewellery() {
  return (
    <section className="diamond-jewellery-section" id="diamond">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          title="DIAMOND JEWELLERY"
          subtitle="Shine with pride. Explore our diamond jewellery!"
        />

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
              <a href="#explore-pride" className="shop-pill-btn">SHOP NOW</a>
            </div>
          </div>

          {/* Right Column (Top Banner + 3 Small Cards) */}
          <div className="diamond-right-column">
            {/* Top Wide Banner Card */}
            <div className="diamond-top-banner terracotta-theme">
              <img
                src="/images/necklace_hero.jpg"
                alt="Emerald Collection"
                className="diamond-card-bg"
              />
              <div className="diamond-card-overlay flex-row justify-between items-center">
                <div>
                  <h3 className="diamond-banner-title">Captivating Emeralds for Every Mood</h3>
                  <p className="diamond-banner-sub">Timeless grace in every drop</p>
                </div>
                <a href="#explore-emeralds" className="shop-pill-btn">SHOP NOW</a>
              </div>
            </div>

            {/* Bottom 3 Small Product Cards */}
            <div className="diamond-small-cards-row">
              <div className="small-product-card">
                <div className="small-card-img-box">
                  <img
                    src="/images/tennis_diamond_necklace.png"
                    alt="Solitaire Ring"
                    className="small-card-img"
                  />
                </div>
                <span className="small-card-title">Solitaire Rings</span>
              </div>

              <div className="small-product-card">
                <div className="small-card-img-box">
                  <img
                    src="/images/diamond_halo_ring.png"
                    alt="Diamond Necklace"
                    className="small-card-img"
                  />
                </div>
                <span className="small-card-title">Diamond Necklaces</span>
              </div>

              <div className="small-product-card">
                <div className="small-card-img-box">
                  <img
                    src="/images/Diamond_Nath_product_photography_202608261800.jpeg"
                    alt="Diamond Earrings"
                    className="small-card-img"
                  />
                </div>
                <span className="small-card-title">Diamond Earrings</span>
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
