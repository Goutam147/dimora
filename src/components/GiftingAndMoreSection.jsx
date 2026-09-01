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
                <path d="M7 1L11.5 11L16 27L20.5 11L16 1" stroke="#C57835" strokeWidth="1.6" />
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

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: 2x2 Sub-Grid of 4 Small Banners */}
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            {/* 1. Birthday Sparkles */}
            <div className="relative rounded-2xl overflow-hidden bg-[#E7F3F8] p-4 flex flex-col justify-between shadow-sm group">
              <img
                src="/images/tennis_diamond_necklace.png"
                alt="Birthday Sparkles Gift"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="relative z-10">
                <span className="font-sans text-[0.65rem] font-bold text-[#800020] uppercase tracking-wider block">
                  BIRTHDAY SPARKLES
                </span>
                <h3 className="font-serif text-sm font-semibold text-[#111111] leading-tight mt-1">
                  THE GIFT OF JOY, WRAPPED WITH LOVE.
                </h3>
              </div>
              <div className="relative z-10 mt-2">
                <a href="#birthday" className="bg-[#6A0C24] hover:bg-[#8F0013] text-white font-sans text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase inline-block">
                  SHOP NOW
                </a>
              </div>
            </div>

            {/* 2. Love That Stands Test of Time */}
            <div className="relative rounded-2xl overflow-hidden bg-[#F5EFE6] p-4 flex flex-col justify-between shadow-sm group">
              <img
                src="/images/diamond_halo_ring.png"
                alt="Love Proposal Gift"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="relative z-10">
                <h3 className="font-serif text-sm font-semibold text-[#5A0A1E] leading-tight">
                  LOVE THAT STANDS THE TEST OF TIME.
                </h3>
              </div>
              <div className="relative z-10 mt-2">
                <a href="#anniversary" className="bg-[#6A0C24] hover:bg-[#8F0013] text-white font-sans text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase inline-block">
                  SHOP NOW
                </a>
              </div>
            </div>

            {/* 3. Jewels That Speak Festivity */}
            <div className="relative rounded-2xl overflow-hidden bg-[#3D1E16] text-white p-4 flex flex-col justify-between shadow-sm group">
              <img
                src="/images/Woman_wearing_ornate_diamond_Nath_202608261801.jpeg"
                alt="Festive Jewels"
                className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="relative z-10">
                <h3 className="font-serif text-sm font-semibold text-white leading-tight">
                  Jewels That Speak the Language of Festivity.
                </h3>
              </div>
              <div className="relative z-10 mt-2">
                <a href="#festive" className="bg-[#B30018] hover:bg-[#8F0013] text-white font-sans text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase inline-block">
                  SHOP NOW
                </a>
              </div>
            </div>

            {/* 4. Little Treasures Big Smiles */}
            <div className="relative rounded-2xl overflow-hidden bg-[#F7E7E1] p-4 flex flex-col justify-between shadow-sm group">
              <img
                src="/images/Diamond_bangle_product_shot_202608271248.jpeg"
                alt="Kids & Baby Jewels"
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="relative z-10">
                <h3 className="font-serif text-sm font-semibold text-[#6A0C24] leading-tight">
                  Little Treasures, <br />
                  <span className="font-bold italic text-base">Big Smiles</span>
                </h3>
              </div>
              <div className="relative z-10 mt-2">
                <a href="#kids" className="bg-[#6A0C24] hover:bg-[#8F0013] text-white font-sans text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase inline-block">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: E-Gift Card Banner */}
          <div className="relative rounded-2xl overflow-hidden bg-[#E8DDD1] p-7 flex flex-col justify-between items-center text-center h-[400px] shadow-sm group">
            <div className="w-full h-[240px] rounded-xl overflow-hidden relative shadow-md bg-white p-2">
              <div className="w-full h-full bg-gradient-to-br from-[#E6CA92] via-[#D4AF37] to-[#B38728] rounded-lg p-5 flex flex-col justify-between text-left text-[#3D2502] relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="font-serif font-bold text-lg tracking-widest uppercase">GIFT CARD</span>
                  <span className="font-serif text-2xl font-bold">🪙</span>
                </div>
                <div className="mt-auto">
                  <span className="font-sans text-[0.7rem] uppercase tracking-widest block opacity-80">Dimora Jewellery</span>
                  <span className="font-serif text-sm font-semibold">WORLD'S FAVOURITE JEWELLER</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-serif text-base text-[#4A3222] font-medium mb-3 italic">
                A gift that always fits, always sparkles.
              </p>
              <a
                href="#gift-card"
                className="bg-[#4A2619] hover:bg-[#B30018] text-white font-sans text-xs font-bold px-6 py-2 rounded-md uppercase tracking-wider transition-colors inline-block"
              >
                SHOP NOW
              </a>
            </div>
          </div>

          {/* Column 3: Corporate B2B Gifting Banner */}
          <div className="relative rounded-2xl overflow-hidden bg-[#241E1A] p-7 flex flex-col justify-between items-center text-center h-[400px] shadow-sm text-white group">
            <div className="w-full h-[240px] rounded-xl overflow-hidden relative flex items-center justify-center bg-gradient-to-b from-[#332A24] to-[#1A1410] p-4">
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-2">🔑</span>
                <span className="font-serif text-2xl font-bold tracking-widest text-[#D4AF37]">B2B</span>
                <small className="font-sans text-[0.65rem] tracking-[2px] text-[#E2C08D] mt-1">CORPORATE GIFTING</small>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-serif text-xl text-[#F4E07B] font-semibold mb-3 leading-tight">
                Elevated Gifting for Corporate Excellence
              </h3>
              <a
                href="#corporate"
                className="bg-[#C57835] hover:bg-[#B30018] text-white font-sans text-xs font-bold px-6 py-2 rounded-md uppercase tracking-wider transition-colors inline-block"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
