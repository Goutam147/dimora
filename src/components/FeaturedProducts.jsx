import React from 'react';

const products = [
  {
    id: 1,
    name: "Royal Floral Antique Gold Ring",
    badge: "22K GOLD",
    isDiamond: false,
    weight: "BIS 916 | 8.45g",
    price: "₹57,880",
    oldPrice: "₹62,000",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Eleganza Solitaire Diamond Pendant",
    badge: "VVS DIAMOND",
    isDiamond: true,
    weight: "18K Gold | 0.50 ct",
    price: "₹84,500",
    oldPrice: "₹95,000",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Traditional Temple Gold Choker Set",
    badge: "22K GOLD",
    isDiamond: false,
    weight: "BIS 916 | 24.12g",
    price: "₹1,65,400",
    oldPrice: "₹1,78,000",
    img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Forever Love Diamond Engagement Ring",
    badge: "SOLITAIRE",
    isDiamond: true,
    weight: "Platinum 950 | VVS1",
    price: "₹1,12,000",
    oldPrice: "₹1,25,000",
    img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80"
  }
];

export default function FeaturedProducts({ onAddToCart, onToggleWishlist }) {
  return (
    <section className="featured-products-section" id="products">
      <div className="container">
        <div className="section-title-wrap">
          <h2>FEATURED PRODUCTS</h2>
          <p>Bestselling Gold & Diamond Designs</p>
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
