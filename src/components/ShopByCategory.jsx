import React from 'react';

const categories = [
  { title: "Jewellery Sets", img: "https://cdn.joyalukkas.in/media/wysiwyg/Jewellery_Set_1.png" },
  { title: "Pendants", img: "https://cdn.joyalukkas.in/media/wysiwyg/pendant.png" },
  { title: "Rings", img: "https://cdn.joyalukkas.in/media/wysiwyg/Rings.png" },
  { title: "Earrings", img: "https://cdn.joyalukkas.in/media/wysiwyg/Earrings_2.jpg" },
  { title: "Bangles", img: "https://cdn.joyalukkas.in/media/wysiwyg/Bangles.png" },
  { title: "Mangalsutras", img: "https://cdn.joyalukkas.in/media/wysiwyg/Mangalasutras.png" }
];

export default function ShopByCategory() {
  return (
    <section className="category-grid-section">
      <div className="container">
        <div className="section-title-wrap">
          <h2>SHOP BY CATEGORY</h2>
          <p>Explore our diverse selections. Find your style</p>
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
