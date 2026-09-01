import React from 'react';
import SectionHeader from './SectionHeader';

export default function ExploreJewellery() {
  return (
    <section className="py-14 bg-white" id="explore">
      <div className="max-w-[1340px] mx-auto px-5">
        {/* Section Header */}
        <SectionHeader
          title="EXPLORE JEWELLERY"
          subtitle="Discover exquisite pieces for every style. Start shopping!"
        />

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
            className="inline-block border-[1.5px] border-[#E8A824] text-[#E8A824] bg-white font-sans text-[0.92rem] font-semibold px-9 py-2.5 rounded transition-all duration-250 hover:bg-[#E8A824] hover:text-white"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
