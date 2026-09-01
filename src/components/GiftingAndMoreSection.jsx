import React from 'react';

export default function GiftingAndMoreSection() {
  return (
    <section className="py-14 bg-white" id="gifting">
      <div className="max-w-[1340px] mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-9">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-16 h-[1.2px] bg-[#C57835]"></span>
            <div className="relative flex flex-col items-center">
              <div className="absolute -top-1.5 flex gap-1.2">
                <span className="w-0.5 h-1 bg-[#C57835] rounded-full -rotate-[25deg]"></span>
                <span className="w-0.5 h-1.5 bg-[#C57835] rounded-full -translate-y-0.5"></span>
                <span className="w-0.5 h-1 bg-[#C57835] rounded-full rotate-[25deg]"></span>
              </div>
              <svg width="28" height="24" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 27L1 11L7 1H25L31 11L16 27Z" stroke="#C57835" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
                <path d="M1 11H31" stroke="#C57835" strokeWidth="1.6" />
                <path d="M7 1L11.5 11L16 27L20.5 11L25 1" stroke="#C57835" strokeWidth="1.6" />
                <path d="M16 1L11.5 11L16 27L20.5 11L16 1" stroke="#C57835" strokeWidth="1.6" />
              </svg>
            </div>
            <span className="w-16 h-[1.2px] bg-[#C57835]"></span>
          </div>

          <h2 className="font-serif text-[1.95rem] font-semibold tracking-wider text-[#B30018] uppercase mb-1.5 leading-tight">
            GIFTING & MORE
          </h2>
          <p className="font-sans text-[1.05rem] text-[#333333] font-normal tracking-tight">
            Find the perfect gift. Explore our gifting collection!
          </p>
        </div>

        {/* 3 Columns Grid (Clean Full-Bleed Image Banners) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: 2x2 Sub-Grid of 4 Small Banners */}
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            {/* 1. Birthday Sparkles */}
            <a href="#birthday" className="group relative rounded-2xl overflow-hidden shadow-sm block w-full h-full bg-[#E7F3F8]">
              <img
                src="/images/tennis_diamond_necklace.png"
                alt="Birthday Sparkles Gift"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </a>

            {/* 2. Love That Stands Test of Time */}
            <a href="#anniversary" className="group relative rounded-2xl overflow-hidden shadow-sm block w-full h-full bg-[#F5EFE6]">
              <img
                src="/images/diamond_halo_ring.png"
                alt="Love Proposal Gift"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </a>

            {/* 3. Jewels That Speak Festivity */}
            <a href="#festive" className="group relative rounded-2xl overflow-hidden shadow-sm block w-full h-full bg-[#3D1E16]">
              <img
                src="/images/Woman_wearing_ornate_diamond_Nath_202608261801.jpeg"
                alt="Festive Jewels"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </a>

            {/* 4. Little Treasures Big Smiles */}
            <a href="#kids" className="group relative rounded-2xl overflow-hidden shadow-sm block w-full h-full bg-[#F7E7E1]">
              <img
                src="/images/Diamond_bangle_product_shot_202608271248.jpeg"
                alt="Kids & Baby Jewels"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </a>
          </div>

          {/* Column 2: E-Gift Card Banner */}
          <a href="#gift-card" className="group relative rounded-2xl overflow-hidden shadow-sm block w-full h-[400px] bg-[#E8DDD1]">
            <img
              src="/images/craftsmanship_macro.png"
              alt="Dimora E-Gift Card"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </a>

          {/* Column 3: Corporate B2B Gifting Banner */}
          <a href="#corporate" className="group relative rounded-2xl overflow-hidden shadow-sm block w-full h-[400px] bg-[#241E1A]">
            <img
              src="/images/ring_hero.jpg"
              alt="Corporate B2B Gifting"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
