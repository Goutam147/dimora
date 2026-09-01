import React from 'react';

export default function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="container nav-container">
        <ul className="nav-links">
          <li className="nav-link-item"><a href="#new-arrivals">New Arrivals</a></li>
          <li className="nav-link-item express-item">
            <a href="#express">
              <span className="truck-icon">🚚</span> Express Delivery
            </a>
          </li>
          <li className="nav-link-item has-dropdown">
            <a href="#earrings">Earrings</a>
            <div className="mega-menu">
              <div className="mega-col">
                <span className="mega-col-title">By Style</span>
                <a href="#products"><img src="https://cdn.joyalukkas.in/media/wysiwyg/Drops_1.png" alt="" /> Drops</a>
                <a href="#products"><img src="https://cdn.joyalukkas.in/media/wysiwyg/Jhumkas_1.png" alt="" /> Jhumkas</a>
                <a href="#products"><img src="https://cdn.joyalukkas.in/media/wysiwyg/Hoops_1.png" alt="" /> Hoops</a>
                <a href="#products"><img src="https://cdn.joyalukkas.in/media/wysiwyg/Dangler_1.png" alt="" /> Danglers</a>
                <a href="#products"><img src="https://cdn.joyalukkas.in/media/wysiwyg/Chandbali_2.png" alt="" /> Chandbali</a>
                <a href="#products"><img src="https://cdn.joyalukkas.in/media/wysiwyg/studs_2.png" alt="" /> Studs</a>
                <a href="#products"><img src="https://cdn.joyalukkas.in/media/wysiwyg/Suidaga.png" alt="" /> Suidhaga</a>
              </div>
              <div className="mega-col">
                <span className="mega-col-title">By Price</span>
                <a href="#products">Under ₹10,000</a>
                <a href="#products">₹10,000 - ₹20,000</a>
                <a href="#products">₹20,000 - ₹50,000</a>
                <a href="#products">Above ₹50,000</a>
              </div>
              <div className="mega-col">
                <span className="mega-col-title">By Metal</span>
                <a href="#products">22K Gold Earrings</a>
                <a href="#products">Diamond Earrings</a>
                <a href="#products">Platinum Earrings</a>
              </div>
            </div>
          </li>
          <li className="nav-link-item"><a href="#pendants">Pendants</a></li>
          <li className="nav-link-item"><a href="#rings">Rings</a></li>
          <li className="nav-link-item"><a href="#diamond">Diamond Jewellery</a></li>
          <li className="nav-link-item"><a href="#more">More Jewellery</a></li>
          <li className="nav-link-item"><a href="#gifting">Gifting</a></li>
          <li className="nav-link-item"><a href="#wedding">Wedding Collections</a></li>
          <li className="nav-link-item offers-pill-item">
            <a href="#offers" className="offers-pill">
              <span className="percent-badge">%</span> Offers
            </a>
          </li>
          <li className="nav-link-item gold-rate-item">
            <a href="#gold-rate">Today's Gold Rate</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
