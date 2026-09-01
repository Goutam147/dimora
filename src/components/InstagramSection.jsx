import React from 'react';
import SectionHeader from './SectionHeader';

export default function InstagramSection() {
  return (
    <section className="py-14 bg-white" id="instagram">
      <div className="max-w-[1340px] mx-auto px-5">
        {/* Section Header */}
        <SectionHeader
          title="FOLLOW US ON INSTAGRAM"
          subtitle="Stay Updated with Our Stories and Updates on Instagram"
        />

        {/* 3 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-20">
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

        {/* Need Help Choosing Jewellery Section with 2 Overlapping Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-[1240px] mx-auto pt-4">
          {/* Left: 2 Overlapping Image Cards */}
          <div className="relative w-full sm:w-[540px] h-[370px] flex items-center justify-start pl-2">
            {/* Base Card 1 (Model Image) */}
            <div className="w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-md border border-black/5 bg-[#F5EFE6] relative z-0">
              <img
                src="/images/Woman_wearing_diamond_earrings_202608261740.jpeg"
                alt="Model Wearing Jewellery"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Overlapping Card 2 (Product Photography on Pedestal) */}
            <div className="absolute left-[245px] top-[30px] w-[250px] h-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#4A121A] z-10 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/images/necklace_hero.jpg"
                alt="Ruby & Diamond Necklace Set"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Text Content & Action Buttons */}
          <div className="w-full lg:w-[580px] flex flex-col items-start text-left">
            <h3 className="font-serif text-[1.85rem] font-semibold text-[#111111] leading-tight mb-4">
              Need help in choosing the best Jewellery?
            </h3>
            <p className="font-sans text-[0.95rem] text-[#444444] leading-relaxed mb-7 max-w-[540px]">
              Dimora is a premium shopping destination for gold and diamond jewellery dedicated to embellishing your everyday moments and milestones with elegance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#store-locator"
                className="bg-[#C5283C] hover:bg-[#8F0013] text-white font-sans text-sm font-semibold px-6 py-2.5 rounded-md transition-colors shadow-sm"
              >
                Store Locator
              </a>
              <a
                href="#request-callback"
                className="border-[1.5px] border-[#C5283C] text-[#C5283C] hover:bg-[#C5283C] hover:text-white bg-white font-sans text-sm font-semibold px-6 py-2.5 rounded-md transition-all duration-200"
              >
                Request Call Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
