import React from 'react';

export default function InstagramSection() {
  return (
    <section className="py-14 bg-white" id="instagram">
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
            FOLLOW US ON INSTAGRAM
          </h2>
          <p className="font-sans text-[1.05rem] text-[#333333] font-normal tracking-tight">
            Stay Updated with Our Stories and Updates on Instagram
          </p>
        </div>

        {/* 3 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Left Column (2 Stacked Landscape Cards) */}
          <div className="flex flex-col gap-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative block w-full h-[200px] rounded-2xl overflow-hidden shadow-sm bg-[#0E4D64]">
              <img
                src="/images/necklace_hero.jpg"
                alt="Instagram Feed Jewellery 1"
                className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-3xl">📸</span>
              </div>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative block w-full h-[200px] rounded-2xl overflow-hidden shadow-sm bg-[#0E4D64]">
              <img
                src="/images/craftsmanship_macro.png"
                alt="Instagram Feed Jewellery 2"
                className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-3xl">📸</span>
              </div>
            </a>
          </div>

          {/* Middle Column (Tall Vertical Portrait Card) */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative block w-full h-[420px] rounded-2xl overflow-hidden shadow-sm bg-[#111111]">
            <img
              src="/images/Woman_wearing_ornate_diamond_Nath_202608261801.jpeg"
              alt="Instagram Featured Model Story"
              className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-4xl">📸</span>
            </div>
          </a>

          {/* Right Column (2 Stacked Landscape Cards) */}
          <div className="flex flex-col gap-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative block w-full h-[200px] rounded-2xl overflow-hidden shadow-sm bg-[#0E4D64]">
              <img
                src="/images/tennis_diamond_necklace.png"
                alt="Instagram Feed Jewellery 3"
                className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-3xl">📸</span>
              </div>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative block w-full h-[200px] rounded-2xl overflow-hidden shadow-sm bg-[#0E4D64]">
              <img
                src="/images/Diamond_Jhumka_earrings_close-up_202608261740.jpeg"
                alt="Instagram Feed Jewellery 4"
                className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-3xl">📸</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
