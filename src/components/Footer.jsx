import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img
            src="https://cdn.joyalukkas.in/media/jas-assets/static/logo.png"
            alt="Joyalukkas"
            className="footer-logo"
          />
          <p>
            Joyalukkas is an ISO certified international jewellery group operating over 160 showrooms across 11 countries worldwide.
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
          <p>© 2026 Joyalukkas India Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
