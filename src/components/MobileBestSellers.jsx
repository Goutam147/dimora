import React, { useState } from 'react';
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
  }
];

export default function MobileBestSellers({ onAddToCart, onToggleWishlist }) {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="block md:hidden py-4 bg-white" id="best-sellers">
      <div className="max-w-[1340px] mx-auto px-3 sm:px-5">
        {/* Section Header */}
        <SectionHeader
          title="Our Best Sellers"
          subtitle="Love the most to bought the most"
        />

        {/* 2-Column Product Grid (Matching Reference Screenshot 1:1) */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          {bestSellers.map((item) => (
            <div key={item.id} className="group flex flex-col bg-white">
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

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 my-3.5">
          {[0, 1, 2, 3, 4].map((idx) => (
            <span
              key={idx}
              onClick={() => setActiveDot(idx)}
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
