import React from 'react';

const categories = [
  { id: 1, title: "Jewellery Sets", img: "/images/tennis_diamond_necklace.png", link: "#sets" },
  { id: 2, title: "Pendants", img: "/images/necklace_hero.jpg", link: "#pendants" },
  { id: 3, title: "Rings", img: "/images/diamond_halo_ring.png", link: "#rings" },
  { id: 4, title: "Earrings", img: "/images/Diamond_Jhumka_earrings_close-up_202608261740.jpeg", link: "#earrings" },
  { id: 5, title: "Bangles", img: "/images/pave_gold_bracelet.png", link: "#bangles" },
  { id: 6, title: "Mangalsutra", img: "/images/Woman_wearing_diamond_drop_earrings_202608261759.jpeg", link: "#mangalsutra" }
];

export default function ShopByCategory() {
  return (
    <section className="category-grid-section">
      <div className="container">
        <div className="section-title-wrap">
          {/* Diamond Ornament Line matching reference screenshot */}
          <div className="diamond-ornament-wrap">
            <span className="ornament-line"></span>
            <div className="diamond-icon-box">
              {/* Sparkle lines */}
              <div className="sparkles">
                <span className="sparkle sp-left"></span>
                <span className="sparkle sp-mid"></span>
                <span className="sparkle sp-right"></span>
              </div>
              {/* Diamond SVG */}
              <svg width="28" height="24" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 27L1 11L7 1H25L31 11L16 27Z" stroke="#C57835" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
                <path d="M1 11H31" stroke="#C57835" strokeWidth="1.6" />
                <path d="M7 1L11.5 11L16 27L20.5 11L25 1" stroke="#C57835" strokeWidth="1.6" />
                <path d="M16 1L11.5 11L16 27L20.5 11L16 1" stroke="#C57835" strokeWidth="1.6" />
              </svg>
            </div>
            <span className="ornament-line"></span>
          </div>

          <h2 className="category-heading">SHOP BY CATEGORY</h2>
          <p className="category-subheading">Explore our diverse selections. Find your style</p>
        </div>

        {/* 3 Column x 2 Row Rectangular Grid */}
        <div className="categories-3col-grid">
          {categories.map((cat) => (
            <a key={cat.id} href={cat.link} className="cat-rect-card">
              <div className="cat-rect-img-box">
                <img src={cat.img} alt={cat.title} className="cat-rect-img" />
              </div>
              <span className="cat-rect-title">{cat.title}</span>
            </a>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="view-all-btn-wrap">
          <a href="#all-categories" className="view-all-categories-btn">
            View All Categories
          </a>
        </div>
      </div>
    </section>
  );
}
