import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img
            src="/diamora_logo.png"
            alt="Dimora Jewellery Logo"
            className="footer-logo"
          />
          <p>
            Dimora is a premier luxury jewellery brand offering 100% certified Gold, Solitaire, Diamond & Platinum collections.
          </p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#gold">Today's Gold Rate</a>
          <a href="#stores">Store Locator</a>
          <a href="#scheme">Gold Savings Scheme</a>
          <a href="#track">Track Order</a>
        </div>
        <div className="footer-col">
          <h4>Customer Care</h4>
          <a href="#contact">Contact Us</a>
          <a href="#returns">14-Day Returns & Exchange</a>
          <a href="#shipping">Shipping Policy</a>
          <a href="#faqs">FAQs</a>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <p>© 2026 Dimora Jewellery India. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
