import React from 'react';

export default function ExploreJewellery() {
  return (
    <section className="py-14 bg-white" id="explore">
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
            EXPLORE JEWELLERY
          </h2>
          <p className="font-sans text-[1.05rem] text-[#333333] font-normal tracking-tight">
            Discover exquisite pieces for every style. Start shopping!
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-8">
          {/* Left Column (Diamond Jewellery) */}
          <div className="flex flex-col items-center">
            <a href="#diamond-jewellery" className="w-full group block overflow-hidden rounded-2xl bg-[#111111]">
              <div className="w-full h-[430px] rounded-2xl overflow-hidden">
                <img
                  src="/images/necklace_hero.jpg"
                  alt="Diamond Jewellery"
                  className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </a>
            <span className="font-serif text-lg font-medium text-[#222222] mt-3.5 text-center">
              Diamond Jewellery
            </span>
          </div>

          {/* Middle Column (Gold & Gemstone Jewellery Stack) */}
          <div className="flex flex-col gap-5">
            {/* Gold Jewellery Top Card */}
            <div className="flex flex-col items-center">
              <a href="#gold-jewellery" className="w-full group block overflow-hidden rounded-2xl bg-[#F8F6F0]">
                <div className="w-full h-[180px] rounded-2xl overflow-hidden">
                  <img
                    src="/images/craftsmanship_macro.png"
                    alt="Gold Jewellery"
                    className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </a>
              <span className="font-serif text-lg font-medium text-[#222222] mt-2 text-center">
                Gold Jewellery
              </span>
            </div>

            {/* Gemstone Jewellery Bottom Card */}
            <div className="flex flex-col items-center">
              <a href="#gemstone-jewellery" className="w-full group block overflow-hidden rounded-2xl bg-[#F8F6F0]">
                <div className="w-full h-[180px] rounded-2xl overflow-hidden">
                  <img
                    src="/images/Diamond_Jhumka_earrings_close-up_202608261740.jpeg"
                    alt="Gemstone Jewellery"
                    className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </a>
              <span className="font-serif text-lg font-medium text-[#222222] mt-2 text-center">
                Gemstone Jewellery
              </span>
            </div>
          </div>

          {/* Right Column (Platinum Jewellery) */}
          <div className="flex flex-col items-center">
            <a href="#platinum-jewellery" className="w-full group relative block overflow-hidden rounded-2xl bg-[#000000]">
              <div className="w-full h-[430px] rounded-2xl overflow-hidden">
                <img
                  src="/images/ring_hero.jpg"
                  alt="Platinum Jewellery"
                  className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Men of Platinum Watermark */}
                <div className="absolute top-6 right-6 text-right flex flex-col items-end">
                  <span className="font-serif text-3xl font-bold leading-none text-[#00A8CC]">Pt</span>
                  <small className="font-sans text-[0.65rem] tracking-[2px] text-[#CCCCCC] mt-0.5">
                    MEN OF PLATINUM
                  </small>
                </div>
              </div>
            </a>
            <span className="font-serif text-lg font-medium text-[#222222] mt-3.5 text-center">
              Platinum Jewellery
            </span>
          </div>
        </div>

        {/* Discover More Button */}
        <div className="flex justify-center mt-6">
          <a
            href="#explore-all-jewellery"
            className="inline-block border-[1.5px] border-[#B30018] text-[#B30018] bg-white font-sans text-[0.92rem] font-semibold px-9 py-2.5 rounded transition-all duration-250 hover:bg-[#B30018] hover:text-white"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
