import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const bestSellers = [
  {
    id: 1,
    name: "Soft Arc Platinum Earrings",
    price: "₹70,204",
    oldPrice: "₹76,682",
    discount: "40% Off",
    discountNote: "on Making Value",
    badge: "Express Delivery",
    img: "/images/Diamond_hoop_earrings_side_view_202608261739.jpeg"
  },
  {
    id: 2,
    name: "Pristine Diamond Rings",
    price: "₹21,811",
    oldPrice: "₹23,832",
    discount: "40% Off",
    discountNote: "on Making Value",
    badge: "Express Delivery",
    img: "/images/diamond_halo_ring.png"
  },
  {
    id: 3,
    name: "Royal Solitaire Halo Ring",
    price: "₹84,500",
    oldPrice: "₹95,000",
    discount: "35% Off",
    discountNote: "on Making Value",
    badge: "Express Delivery",
    img: "/images/ring_hero.jpg"
  },
  {
    id: 4,
    name: "Tennis Diamond Choker",
    price: "₹1,65,400",
    oldPrice: "₹1,78,000",
    discount: "30% Off",
    discountNote: "on Making Value",
    badge: "Express Delivery",
    img: "/images/tennis_diamond_necklace.png"
  },
  {
    id: 5,
    name: "Pavé Gold Cuff Bracelet",
    price: "₹1,12,000",
    oldPrice: "₹1,25,000",
    discount: "25% Off",
    discountNote: "on Making Value",
    badge: "Express Delivery",
    img: "/images/pave_gold_bracelet.png"
  },
  {
    id: 6,
    name: "Emerald Diamond Drop Earrings",
    price: "₹92,300",
    oldPrice: "₹1,05,000",
    discount: "40% Off",
    discountNote: "on Making Value",
    badge: "Express Delivery",
    img: "/images/Diamond_drop_earrings_displayed_202608261740.jpeg"
  }
];

// Duplicate products array for seamless infinite right-to-left loop
const infiniteBestSellers = [...bestSellers, ...bestSellers, ...bestSellers];

export default function MobileBestSellers({ onAddToCart, onToggleWishlist }) {
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef(null);

  // Auto-scroll 1 product card at a time from Right to Left every 5 seconds
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const intervalId = setInterval(() => {
      const singleCardWidth = (container.clientWidth / 2) + 6;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - singleCardWidth) {
        // Silently reset to start position without backward animation
        container.scrollTo({ left: 0, behavior: 'auto' });
        setTimeout(() => {
          container.scrollBy({ left: singleCardWidth, behavior: 'smooth' });
        }, 50);
      } else {
        container.scrollBy({ left: singleCardWidth, behavior: 'smooth' });
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Update active dot index based on scroll position
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const singleCardWidth = (container.clientWidth / 2) + 6;
    const cardIndex = Math.floor((container.scrollLeft + 10) / singleCardWidth);
    const normalizedDot = cardIndex % bestSellers.length;
    setActiveDot(Math.min(normalizedDot, 4));
  };

  const scrollToPage = (pageIndex) => {
    const container = scrollRef.current;
    if (!container) return;
    const singleCardWidth = (container.clientWidth / 2) + 6;
    const targetLeft = pageIndex * singleCardWidth;
    container.scrollTo({ left: targetLeft, behavior: 'smooth' });
    setActiveDot(pageIndex);
  };

  return (
    <section className="block md:hidden py-4 bg-white" id="best-sellers">
      <div className="max-w-[1340px] mx-auto px-3 sm:px-5">
        {/* Section Header */}
        <SectionHeader
          title="Our Best Sellers"
          subtitle="Love the most to bought the most"
        />

        {/* Horizontal Touch-Scrollable Product Row (Always shifts Right to Left) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth w-full py-1.5 mt-3 select-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infiniteBestSellers.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="group shrink-0 w-[calc(50%-6px)] flex flex-col bg-white snap-start"
            >
              {/* Product Image Box */}
              <div className="relative w-full h-[175px] sm:h-[210px] bg-[#F5F5F5] rounded-2xl p-2.5 flex items-center justify-center overflow-hidden border border-[#F0E6DD]">
                {/* Express Delivery Ribbon Badge (Top Left) */}
                <div className="absolute top-2 left-0 z-10 bg-gradient-to-r from-[#D0F5D0] via-[#C5EEFA] to-[#B0DBFE] text-[#1E5230] text-[0.58rem] sm:text-[0.62rem] font-bold px-2 py-0.5 rounded-r-full flex items-center gap-1 shadow-2xs">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <span>Express Delivery</span>
                </div>

                {/* Wishlist Icon (Top Right) */}
                <button
                  onClick={() => onToggleWishlist && onToggleWishlist(item)}
                  className="absolute top-2 right-2.5 z-10 text-gray-400 hover:text-[#C5283C] transition-colors p-1"
                  aria-label="Add to Wishlist"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>

                {/* Product Photo */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-h-[85%] max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Pricing & Title */}
              <div className="mt-2 px-0.5">
                {/* Price Row */}
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="font-sans text-sm sm:text-base font-bold text-[#111111]">
                    {item.price}
                  </span>
                  <span className="font-sans text-xs text-gray-400 line-through">
                    {item.oldPrice}
                  </span>
                </div>

                {/* Discount Note */}
                <div className="text-[0.65rem] sm:text-xs mt-0.5">
                  <span className="font-bold text-[#2E8B2E] mr-1">{item.discount}</span>
                  <span className="text-gray-500 font-normal">{item.discountNote}</span>
                </div>

                {/* Product Name */}
                <h4 className="font-sans text-xs text-[#444444] mt-0.5 font-medium line-clamp-1">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots (Syncs with scroll) */}
        <div className="flex justify-center items-center gap-1.5 my-3.5">
          {[0, 1, 2, 3, 4].map((idx) => (
            <span
              key={idx}
              onClick={() => scrollToPage(idx)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeDot
                  ? 'w-2 h-2 bg-[#9E8171]'
                  : 'w-1.5 h-1.5 bg-[#F0E2D7]'
              }`}
            />
          ))}
        </div>

        {/* View All Best Sellers Button */}
        <div className="text-center mt-2">
          <a
            href="#all-bestsellers"
            className="inline-block border border-[#C5283C] text-[#C5283C] hover:bg-[#C5283C] hover:text-white font-sans text-xs font-semibold px-6 py-2 rounded-md transition-all duration-200"
          >
            View All Best Sellers
          </a>
        </div>
      </div>
    </section>
  );
}
