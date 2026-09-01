import React, { useState, useRef, useEffect } from 'react';

const searchPhrases = [
  "Search for Silver Chain...",
  "Search for Solitaire Diamond Rings...",
  "Search for Platinum Chains...",
  "Search for Royal Diamond Necklaces...",
  "Search for 22K Gold Bangles...",
  "Search for Gemstone Drop Earrings...",
  "Search for Bridal Mangalsutra..."
];

export default function Header({ wishlistCount, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const menuRef = useRef(null);

  // Typewriter Auto-Typing Search Placeholder State
  const [placeholderText, setPlaceholderText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Close desktop menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto-typing typewriter effect logic
  useEffect(() => {
    if (isFocused || inputValue) return;

    const currentPhrase = searchPhrases[phraseIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 1600;
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setPlaceholderText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setPlaceholderText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % searchPhrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, isFocused, inputValue]);

  return (
    <header className="main-header bg-white border-b border-[#EFEFEF]" id="mainHeader">
      <div className="max-w-[1340px] mx-auto px-4 py-1.5 md:py-2">
        {/* ROW 1: BRAND LOGO + UTILITIES / ACTIONS */}
        <div className="flex items-center justify-between gap-3 relative">
          {/* Mobile Drawer Hamburger Button (Visible on Mobile) */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="md:hidden text-[#C5283C] p-1 focus:outline-none"
            aria-label="Open Mobile Drawer Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Brand Logo */}
          <a href="/" className="brand-logo shrink-0 flex items-center">
            <img
              src="/diamora_logo.png"
              alt="Dimora Jewellery Logo"
              className="logo-img h-8 md:h-11 object-contain"
            />
          </a>

          {/* Desktop Utilities (Store & Phone - Hidden on Mobile View) */}
          <div className="header-utilities hidden md:flex items-center gap-5 text-xs text-[#666666]">
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

          {/* Desktop Search Box (Hidden on Mobile) */}
          <div className="header-search hidden md:block flex-1 max-w-[340px] mx-4">
            <div className="search-box relative flex items-center border border-[#E2D5C8] rounded-md bg-white overflow-hidden shadow-2xs focus-within:border-[#C5283C] transition-colors">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={inputValue ? '' : `${placeholderText}`}
                className="w-full px-3.5 py-1.5 text-xs outline-none text-[#111111] placeholder-[#888888] font-sans"
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

          {/* Right Group: India Country Pill + Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* India Country Selector Pill */}
            <div className="country-pill border border-[#D0D0D0] bg-white px-2 py-0.5 md:px-2.5 md:py-1 rounded-full flex items-center gap-1 cursor-pointer hover:border-[#C5283C] transition-colors shadow-2xs">
              <svg width="16" height="16" viewBox="0 0 36 36" className="rounded-full overflow-hidden shrink-0">
                <rect width="36" height="12" fill="#FF9933" />
                <rect y="12" width="36" height="12" fill="#FFFFFF" />
                <rect y="24" width="36" height="12" fill="#138808" />
                <circle cx="18" cy="18" r="4.5" fill="none" stroke="#000080" strokeWidth="0.9" />
              </svg>
              <span className="font-sans text-xs font-semibold text-[#C5283C]">India</span>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            {/* Desktop Gold Scheme Badge */}
            <div className="gold-scheme-badge hidden lg:flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
              <div className="badge-text flex flex-col text-right text-[0.72rem] font-bold leading-tight text-[#111111]">
                <small className="text-[0.65rem] text-[#666666] font-normal">Gold</small>
                <span>Scheme</span>
              </div>
              <div className="gold-stack-icon text-xl">🪙</div>
            </div>

            {/* Account Icon (Desktop) */}
            <a href="#account" className="icon-link hidden md:flex relative text-[#111111] hover:text-[#C5283C] transition-colors" title="Account">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </a>

            {/* Wishlist Heart Icon */}
            <a href="#wishlist" className="icon-link relative text-[#111111] hover:text-[#C5283C] transition-colors p-0.5" title="Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5283C" strokeWidth="1.7">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="badge-count absolute -top-1 -right-1 bg-[#C5283C] text-white text-[0.58rem] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            </a>

            {/* Cart Icon */}
            <a href="#cart" className="icon-link relative text-[#111111] hover:text-[#C5283C] transition-colors p-0.5" title="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5283C" strokeWidth="1.7">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="badge-count absolute -top-1 -right-1 bg-[#C5283C] text-white text-[0.58rem] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </a>

            {/* Desktop 3-Line Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hidden md:block p-1 hover:bg-[#FAF3EB] rounded transition-colors text-[#111111] cursor-pointer"
              aria-label="Toggle Quick Links Menu"
              title="More Options"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="7" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            {/* Desktop Dropdown Card */}
            {menuOpen && (
              <div ref={menuRef} className="absolute top-[130%] right-0 z-50 bg-white rounded-lg shadow-xl border border-[#E8E8E8] p-3.5 w-[225px] transition-all duration-200">
                <div className="absolute -top-2 right-4 w-3.5 h-3.5 bg-white rotate-45 border-l border-t border-[#E8E8E8] z-20"></div>
                <div className="flex flex-col gap-1 relative z-10">
                  <a href="#diamond-certificate" onClick={() => setMenuOpen(false)} className="flex items-center gap-3.5 py-2.5 px-3 rounded-md hover:bg-[#FDF6EE] transition-colors group">
                    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" stroke="#B82A45" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 27L4 12L10 4H22L28 12L16 27Z" />
                      <path d="M4 12H28" />
                    </svg>
                    <span className="font-sans text-[0.88rem] font-normal text-[#111111] group-hover:text-[#B82A45]">Diamond Certificate</span>
                  </a>
                  <a href="#gold-rate" onClick={() => setMenuOpen(false)} className="flex items-center gap-3.5 py-2.5 px-3 rounded-md hover:bg-[#FDF6EE] transition-colors group">
                    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" stroke="#B82A45" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="16" cy="16" r="12.5" />
                      <path d="M12 11h8M12 14.5h7M12 11v9" strokeWidth="1.5" />
                    </svg>
                    <span className="font-sans text-[0.88rem] font-normal text-[#111111] group-hover:text-[#B82A45]">Gold Rate</span>
                  </a>
                  <a href="#advance-booking" onClick={() => setMenuOpen(false)} className="flex items-center gap-3.5 py-2.5 px-3 rounded-md hover:bg-[#FDF6EE] transition-colors group">
                    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" stroke="#B82A45" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="8" width="22" height="19" rx="3" />
                      <line x1="5" y1="14" x2="27" y2="14" />
                    </svg>
                    <span className="font-sans text-[0.88rem] font-normal text-[#111111] group-hover:text-[#B82A45]">Advance Booking</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ROW 2: REDUCED HEIGHT FULL-WIDTH MOBILE SEARCH BAR (Visible on Mobile Screens) */}
        <div className="mt-1.5 md:hidden">
          <div className="search-box relative flex items-center border border-[#E79F67] rounded-md bg-white overflow-hidden shadow-2xs">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={inputValue ? '' : `${placeholderText}`}
              className="w-full px-3 py-1 text-xs outline-none text-[#111111] placeholder-[#666666] font-sans"
              autoComplete="off"
            />
            <button className="search-icon-btn px-2.5 py-1 text-[#C5283C]" aria-label="Search">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SLIDE-OVER DRAWER MENU OVERLAY */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop */}
          <div
            onClick={() => setMobileDrawerOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          ></div>

          {/* Drawer Content */}
          <div className="relative w-[82%] max-w-[320px] bg-white h-full shadow-2xl flex flex-col z-50 animate-slideRight">
            {/* Drawer Header */}
            <div className="p-4 bg-[#FAF3EB] border-b border-[#F0DEC9] flex items-center justify-between">
              <img src="/diamora_logo.png" alt="Dimora" className="h-9 object-contain" />
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="text-[#333333] hover:text-[#C5283C] p-1 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm font-semibold text-[#111111]">
              <a href="#new-arrivals" onClick={() => setMobileDrawerOpen(false)} className="block border-b border-gray-100 pb-2">New Arrivals</a>
              <a href="#express" onClick={() => setMobileDrawerOpen(false)} className="block border-b border-gray-100 pb-2 text-[#C5283C]">🚚 Express Delivery</a>
              <a href="#earrings" onClick={() => setMobileDrawerOpen(false)} className="block border-b border-gray-100 pb-2">Earrings</a>
              <a href="#pendants" onClick={() => setMobileDrawerOpen(false)} className="block border-b border-gray-100 pb-2">Pendants</a>
              <a href="#rings" onClick={() => setMobileDrawerOpen(false)} className="block border-b border-gray-100 pb-2">Rings</a>
              <a href="#diamond" onClick={() => setMobileDrawerOpen(false)} className="block border-b border-gray-100 pb-2">Diamond Jewellery</a>
              <a href="#more" onClick={() => setMobileDrawerOpen(false)} className="block border-b border-gray-100 pb-2">More Jewellery</a>
              <a href="#gifting" onClick={() => setMobileDrawerOpen(false)} className="block border-b border-gray-100 pb-2">Gifting</a>
              <a href="#wedding" onClick={() => setMobileDrawerOpen(false)} className="block border-b border-gray-100 pb-2">Wedding Collections</a>
              <a href="#offers" onClick={() => setMobileDrawerOpen(false)} className="block border-b border-gray-100 pb-2 text-[#D4820A]">% Offers</a>
              <a href="#gold-rate" onClick={() => setMobileDrawerOpen(false)} className="block border-b border-gray-100 pb-2 text-[#B30018]">Today's Gold Rate</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
