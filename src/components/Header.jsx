import React from 'react';

export default function Header({ wishlistCount, cartCount }) {
  return (
    <header className="main-header" id="mainHeader">
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="/" className="brand-logo">
          <img
            src="/diamora_logo.png"
            alt="Dimora Jewellery Logo"
            className="logo-img"
          />
        </a>

        {/* Header Utilities */}
        <div className="header-utilities">
          <a href="#stores" className="header-util">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#990011" strokeWidth="1.8">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Store</span>
          </a>
          <a href="tel:+916827422224" className="header-util">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#990011" strokeWidth="1.8">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91 6827 422 224</span>
          </a>
        </div>

        {/* Search Box */}
        <div className="header-search">
          <div className="search-box">
            <input type="text" placeholder="Search for Platinum Chain, Solitaires..." autoComplete="off" />
            <button className="search-icon-btn" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>

        {/* Country Selector */}
        <div className="country-pill">
          <span className="flag-icon">🇮🇳</span>
          <span className="country-name">India</span>
          <span className="pill-arrow">∨</span>
        </div>

        {/* Gold Scheme Badge */}
        <div className="gold-scheme-badge">
          <div className="badge-text">
            <small>Gold</small>
            <span>Scheme</span>
          </div>
          <div className="gold-stack-icon">🪙</div>
        </div>

        {/* Header Action Icons */}
        <div className="header-actions">
          <a href="#account" className="icon-link" title="Account">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.6">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </a>
          <a href="#wishlist" className="icon-link" title="Wishlist">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.6">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="badge-count">{wishlistCount}</span>
          </a>
          <a href="#cart" className="icon-link" title="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.6">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="badge-count">{cartCount}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
