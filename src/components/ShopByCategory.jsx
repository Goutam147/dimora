import React from 'react';

const categories = [
  { title: "Jewellery Sets", img: "/images/tennis_diamond_necklace.png" },
  { title: "Pendants", img: "/images/necklace_hero.jpg" },
  { title: "Rings", img: "/images/diamond_halo_ring.png" },
  { title: "Earrings", img: "/images/Diamond_Jhumka_earrings_close-up_202608261740.jpeg" },
  { title: "Bangles", img: "/images/Diamond_bangle_product_shot_202608271248.jpeg" },
  { title: "Nose Pins & Naths", img: "/images/Diamond_Nath_product_photography_202608261800.jpeg" }
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

        <div className="categories-row">
          {categories.map((cat, idx) => (
            <a key={idx} href="#products" className="cat-card">
              <div className="cat-img-wrap">
                <img src={cat.img} alt={cat.title} />
              </div>
              <span>{cat.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
