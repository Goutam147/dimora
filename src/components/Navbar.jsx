import React from 'react';

export default function Navbar() {
  return (
    <nav className="main-navbar hidden md:block">
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
                <a href="#products"><img src="/images/Diamond_drop_earrings_displayed_202608261741.jpeg" alt="" /> Drops</a>
                <a href="#products"><img src="/images/Diamond_Jhumka_earrings_close-up_202608261740.jpeg" alt="" /> Jhumkas</a>
                <a href="#products"><img src="/images/Diamond_hoop_earrings_displayed_202608261741.jpeg" alt="" /> Hoops</a>
                <a href="#products"><img src="/images/Diamond_drop_earrings_displayed_202608261740.jpeg" alt="" /> Danglers</a>
                <a href="#products"><img src="/images/Woman_wearing_diamond_drop_earrings_202608261759.jpeg" alt="" /> Chandbali</a>
                <a href="#products"><img src="/images/Diamond_stud_earrings_in_setting_202608261741.jpeg" alt="" /> Studs</a>
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
