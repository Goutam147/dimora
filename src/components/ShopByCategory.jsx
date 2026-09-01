import React from 'react';
import SectionHeader from './SectionHeader';

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
        <SectionHeader
          title="SHOP BY CATEGORY"
          subtitle="Explore our diverse selections. Find your style"
        />

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
