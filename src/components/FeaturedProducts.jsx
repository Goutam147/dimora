import React from 'react';

const products = [
  {
    id: 1,
    name: "Royal Diamond Jhumka Earrings",
    badge: "VVS DIAMOND",
    isDiamond: true,
    weight: "18K Gold | 12.45g",
    price: "₹57,880",
    oldPrice: "₹62,000",
    img: "/images/Diamond_Jhumka_earrings_close-up_202608261740.jpeg"
  },
  {
    id: 2,
    name: "Solitaire Diamond Halo Ring",
    badge: "SOLITAIRE",
    isDiamond: true,
    weight: "Platinum 950 | VVS1",
    price: "₹84,500",
    oldPrice: "₹95,000",
    img: "/images/diamond_halo_ring.png"
  },
  {
    id: 3,
    name: "Tennis Diamond Choker Necklace",
    badge: "22K GOLD",
    isDiamond: false,
    weight: "BIS 916 | 24.12g",
    price: "₹1,65,400",
    oldPrice: "₹1,78,000",
    img: "/images/tennis_diamond_necklace.png"
  },
  {
    id: 4,
    name: "Pavé Gold & Diamond Cuff Bracelet",
    badge: "EXCLUSIVE",
    isDiamond: true,
    weight: "18K Gold | 14.20g",
    price: "₹1,12,000",
    oldPrice: "₹1,25,000",
    img: "/images/pave_gold_bracelet.png"
  }
];

export default function FeaturedProducts({ onAddToCart, onToggleWishlist }) {
  return (
    <section className="featured-products-section" id="products">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="category-heading">FEATURED PRODUCTS</h2>
          <p className="category-subheading">Bestselling Gold & Diamond Designs</p>
        </div>

        <div className="products-grid">
          {products.map((prod) => (
            <div key={prod.id} className="product-item">
              <div className={`prod-badge ${prod.isDiamond ? 'diamond' : ''}`}>
                {prod.badge}
              </div>
              <button className="fav-btn" onClick={() => onToggleWishlist(prod)}>♥</button>
              <div className="prod-img">
                <img src={prod.img} alt={prod.name} />
              </div>
              <div className="prod-details">
                <span className="prod-weight">{prod.weight}</span>
                <h3 className="prod-name">{prod.name}</h3>
                <div className="prod-price-row">
                  <span className="price-now">{prod.price}</span>
                  <span className="price-was">{prod.oldPrice}</span>
                </div>
                <button
                  className="add-to-cart-btn"
                  onClick={() => onAddToCart(prod)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
