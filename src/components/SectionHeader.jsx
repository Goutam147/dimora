import React from 'react';

export default function SectionHeader({ title, subtitle, hideOrnament = false }) {
  return (
    <div className="section-title-wrap">
      {!hideOrnament && (
        <div className="diamond-ornament-wrap">
          <span className="ornament-line"></span>
          <div className="diamond-icon-box">
            <div className="sparkles">
              <span className="sparkle sp-left"></span>
              <span className="sparkle sp-mid"></span>
              <span className="sparkle sp-right"></span>
            </div>
            <svg width="28" height="24" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 27L1 11L7 1H25L31 11L16 27Z" stroke="#C57835" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
              <path d="M1 11H31" stroke="#C57835" strokeWidth="1.6" />
              <path d="M7 1L11.5 11L16 27L20.5 11L25 1" stroke="#C57835" strokeWidth="1.6" />
              <path d="M16 1L11.5 11L16 27L20.5 11L16 1" stroke="#C57835" strokeWidth="1.6" />
            </svg>
          </div>
          <span className="ornament-line"></span>
        </div>
      )}
      <h2 className="category-heading">{title}</h2>
      {subtitle && <p className="category-subheading">{subtitle}</p>}
    </div>
  );
}
