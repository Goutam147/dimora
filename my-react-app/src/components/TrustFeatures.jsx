import React from 'react';

export default function TrustFeatures() {
  return (
    <section className="trust-features-bar">
      <div className="container trust-container">
        <div className="trust-box">
          <span className="trust-icon">🛡️</span>
          <div className="trust-info">
            <strong>100% Certified</strong>
            <small>IGI & SGL Certified Diamonds</small>
          </div>
        </div>
        <div className="trust-box">
          <span className="trust-icon">👑</span>
          <div className="trust-info">
            <strong>BIS 916 Hallmarked</strong>
            <small>Pure Gold Quality Standard</small>
          </div>
        </div>
        <div className="trust-box">
          <span className="trust-icon">🚚</span>
          <div className="trust-info">
            <strong>Free Insured Shipping</strong>
            <small>Doorstep Secure Delivery</small>
          </div>
        </div>
        <div className="trust-box">
          <span className="trust-icon">🔄</span>
          <div className="trust-info">
            <strong>14-Day Return & Exchange</strong>
            <small>Lifetime Buyback Guarantee</small>
          </div>
        </div>
      </div>
    </section>
  );
}
