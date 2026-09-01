import React, { useState, useRef, useEffect } from 'react';

export default function Header({ wishlistCount, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="main-header" id="mainHeader">
      <div className="container header-container flex items-center justify-between py-3 relative">
        {/* Brand Logo */}
        <a href="/" className="brand-logo shrink-0">
          <img
            src="/diamora_logo.png"
            alt="Dimora Jewellery Logo"
            className="logo-img h-11 object-contain"
          />
        </a>

        {/* Header Utilities */}
        <div className="header-utilities flex items-center gap-5 text-xs text-[#666666]">
          <a href="#stores" className="header-util flex items-center gap-1.5 hover:text-[#C5283C] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5283C" strokeWidth="1.8">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="font-medium text-[#333333]">Store</span>
          </a>
          <a href="tel:+919888888887" className="header-util flex items-center gap-1.5 hover:text-[#C5283C] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5283C" strokeWidth="1.8">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="font-medium text-[#333333]">+91 9888888887</span>
          </a>
        </div>

        {/* Search Box */}
        <div className="header-search hidden lg:block flex-1 max-w-[320px] mx-4">
          <div className="search-box relative flex items-center border border-[#E2D5C8] rounded-md bg-white overflow-hidden">
            <input
              type="text"
              placeholder="Search for Platinum Chain, Solitaires..."
              className="w-full px-3.5 py-1.5 text-xs outline-none text-[#111111] placeholder-[#888888]"
              autoComplete="off"
            />
            <button className="search-icon-btn px-3 py-1.5 text-[#666666] hover:text-[#C5283C]" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>

        {/* India Country Selector Pill */}
        <div className="country-pill border border-[#D0D0D0] bg-white px-3 py-1.5 rounded-full flex items-center gap-2 cursor-pointer hover:border-[#C5283C] transition-colors shadow-2xs">
          {/* Circular India Flag SVG */}
          <svg width="20" height="20" viewBox="0 0 36 36" className="rounded-full overflow-hidden shrink-0 shadow-2xs">
            <rect width="36" height="12" fill="#FF9933" />
            <rect y="12" width="36" height="12" fill="#FFFFFF" />
            <rect y="24" width="36" height="12" fill="#138808" />
            <circle cx="18" cy="18" r="4.5" fill="none" stroke="#000080" strokeWidth="0.9" />
          </svg>
          <span className="font-sans text-xs font-semibold text-[#C5283C]">India</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        {/* Gold Scheme Badge */}
        <div className="gold-scheme-badge flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
          <div className="badge-text flex flex-col text-right text-[0.72rem] font-bold leading-tight text-[#111111]">
            <small className="text-[0.65rem] text-[#666666] font-normal">Gold</small>
            <span>Scheme</span>
          </div>
          <div className="gold-stack-icon text-xl">🪙</div>
        </div>

        {/* Header Action Icons & 3-Line Menu */}
        <div className="header-actions flex items-center gap-4 relative" ref={menuRef}>
          {/* Account Icon */}
          <a href="#account" className="icon-link relative text-[#111111] hover:text-[#C5283C] transition-colors" title="Account">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </a>

          {/* Wishlist Icon */}
          <a href="#wishlist" className="icon-link relative text-[#111111] hover:text-[#C5283C] transition-colors" title="Wishlist">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="badge-count absolute -top-1.5 -right-2 bg-[#C5283C] text-white text-[0.6rem] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          </a>

          {/* Cart Icon */}
          <a href="#cart" className="icon-link relative text-[#111111] hover:text-[#C5283C] transition-colors" title="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="badge-count absolute -top-1.5 -right-2 bg-[#C5283C] text-white text-[0.6rem] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </a>

          {/* 3-Line Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 hover:bg-[#FAF3EB] rounded transition-colors text-[#111111] cursor-pointer ml-1"
            aria-label="Toggle Quick Links Menu"
            title="More Options"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="7" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Floating Dropdown Card (Shown when Clicking 3 Lines) */}
          {menuOpen && (
            <div className="absolute top-[130%] right-0 z-50 bg-white rounded-lg shadow-xl border border-[#E8E8E8] p-3.5 w-[225px] transition-all duration-200">
              {/* Top Pointer Arrow */}
              <div className="absolute -top-2 right-4 w-3.5 h-3.5 bg-white rotate-45 border-l border-t border-[#E8E8E8] z-20"></div>

              <div className="flex flex-col gap-1 relative z-10">
                {/* Item 1: Diamond Certificate */}
                <a
                  href="#diamond-certificate"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3.5 py-2.5 px-3 rounded-md hover:bg-[#FDF6EE] transition-colors group"
                >
                  <div className="shrink-0 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" stroke="#B82A45" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 27L4 12L10 4H22L28 12L16 27Z" />
                      <path d="M4 12H28" />
                      <path d="M10 4L16 12L22 4" />
                      <path d="M16 12V27" />
                      <path d="M2 7L5 9" />
                      <path d="M5 3L7 6" />
                      <path d="M30 7L27 9" />
                      <path d="M27 3L25 6" />
                    </svg>
                  </div>
                  <span className="font-sans text-[0.88rem] font-normal text-[#111111] group-hover:text-[#B82A45] transition-colors leading-tight">
                    Diamond Certificate
                  </span>
                </a>

                {/* Item 2: Gold Rate */}
                <a
                  href="#gold-rate"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3.5 py-2.5 px-3 rounded-md hover:bg-[#FDF6EE] transition-colors group"
                >
                  <div className="shrink-0 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" stroke="#B82A45" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="16" cy="16" r="12.5" />
                      <circle cx="16" cy="16" r="10.2" strokeDasharray="1.5 2" />
                      <path d="M12 11h8M12 14.5h7M12 11v9M12 14.5c2.5 0 4-1 4-2.5S14.5 9.5 12 9.5M16 14.5l5 6.5" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="font-sans text-[0.88rem] font-normal text-[#111111] group-hover:text-[#B82A45] transition-colors leading-tight">
                    Gold Rate
                  </span>
                </a>

                {/* Item 3: Advance Booking */}
                <a
                  href="#advance-booking"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3.5 py-2.5 px-3 rounded-md hover:bg-[#FDF6EE] transition-colors group"
                >
                  <div className="shrink-0 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" stroke="#B82A45" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="8" width="22" height="19" rx="3" />
                      <line x1="5" y1="14" x2="27" y2="14" />
                      <line x1="10" y1="5" x2="10" y2="9" strokeWidth="2.2" />
                      <line x1="22" y1="5" x2="22" y2="9" strokeWidth="2.2" />
                    </svg>
                  </div>
                  <span className="font-sans text-[0.88rem] font-normal text-[#111111] group-hover:text-[#B82A45] transition-colors leading-tight">
                    Advance Booking
                  </span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
