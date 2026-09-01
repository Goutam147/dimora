import React from 'react';
import SectionHeader from './SectionHeader';

export default function InstagramSection() {
  return (
    <section className="py-4 md:py-14 bg-white overflow-hidden" id="instagram">
      <div className="max-w-[1340px] mx-auto px-3 sm:px-5">
        {/* Section Header */}
        <SectionHeader
          title="Follow us on Instagram"
          subtitle="Stay Updated with Our Stories and Updates on Instagram"
        />

        {/* MOBILE RESPONSIVE INSTAGRAM GRID (Matching Reference Screenshot 1:1) */}
        <div className="block md:hidden mt-3 mb-8">
          {/* Row 1: 2 Equal Top Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full h-[145px] sm:h-[180px] rounded-2xl overflow-hidden shadow-xs border border-[#F0E6DD]"
            >
              <img
                src="/images/necklace_hero.jpg"
                alt="Instagram Jewellery 1"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full h-[145px] sm:h-[180px] rounded-2xl overflow-hidden shadow-xs border border-[#F0E6DD]"
            >
              <img
                src="/images/Diamond_Jhumka_earrings_close-up_202608261740.jpeg"
                alt="Instagram Jewellery 2"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </a>
          </div>

          {/* Row 2: Asymmetric Split Grid (Left Tall Portrait Card + Right 2 Stacked Cards) */}
          <div className="grid grid-cols-2 gap-2.5 mt-2.5 items-stretch">
            {/* Left Column: Tall Model Portrait Card */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full h-[300px] sm:h-[370px] rounded-2xl overflow-hidden shadow-xs border border-[#F0E6DD]"
            >
              <img
                src="/images/Woman_wearing_ornate_diamond_Nath_202608261801.jpeg"
                alt="Instagram Model Portrait"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </a>

            {/* Right Column: 2 Stacked Landscape Cards */}
            <div className="flex flex-col gap-2.5 justify-between">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full h-[145px] sm:h-[180px] rounded-2xl overflow-hidden shadow-xs border border-[#F0E6DD]"
              >
                <img
                  src="/images/tennis_diamond_necklace.png"
                  alt="Instagram Jewellery 3"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full h-[145px] sm:h-[180px] rounded-2xl overflow-hidden shadow-xs border border-[#F0E6DD]"
              >
                <img
                  src="/images/diamond_halo_ring.png"
                  alt="Instagram Jewellery 4"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ORIGINAL UNCHANGED DESKTOP INSTAGRAM GRID (Visible only on Web/Desktop >= 768px) */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-stretch mb-20 mt-6">
          {/* Left Column (2 Stacked Landscape Cards) */}
          <div className="flex flex-col gap-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group block w-full h-[200px] rounded-2xl overflow-hidden shadow-sm bg-[#0E4D64]">
              <img
                src="/images/necklace_hero.jpg"
                alt="Instagram Feed Jewellery 1"
                className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group block w-full h-[200px] rounded-2xl overflow-hidden shadow-sm bg-[#0E4D64]">
              <img
                src="/images/craftsmanship_macro.png"
                alt="Instagram Feed Jewellery 2"
                className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </a>
          </div>

          {/* Middle Column (Tall Vertical Portrait Card) */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group block w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-sm bg-[#111111]">
            <img
              src="/images/Woman_wearing_ornate_diamond_Nath_202608261801.jpeg"
              alt="Instagram Featured Model Story"
              className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </a>

          {/* Right Column (2 Stacked Landscape Cards) */}
          <div className="flex flex-col gap-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group block w-full h-[200px] rounded-2xl overflow-hidden shadow-sm bg-[#0E4D64]">
              <img
                src="/images/tennis_diamond_necklace.png"
                alt="Instagram Feed Jewellery 3"
                className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group block w-full h-[200px] rounded-2xl overflow-hidden shadow-sm bg-[#0E4D64]">
              <img
                src="/images/Diamond_Jhumka_earrings_close-up_202608261740.jpeg"
                alt="Instagram Feed Jewellery 4"
                className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Need Help Choosing Jewellery Section (Matching Reference Screenshot 1:1) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 max-w-[1240px] mx-auto pt-4">
          {/* Left: 2 Overlapping Image Cards (Shifted Further Right) */}
          <div className="relative w-full max-w-[305px] sm:max-w-[420px] h-[210px] sm:h-[280px] flex items-center justify-start mx-auto lg:mx-0">
            {/* Base Card 1 (Model Image - Larger) */}
            <div className="w-[170px] sm:w-[235px] h-[195px] sm:h-[260px] rounded-2xl overflow-hidden shadow-md border border-black/5 bg-[#F5EFE6] relative z-0">
              <img
                src="/images/Woman_wearing_diamond_earrings_202608261740.jpeg"
                alt="Model Wearing Jewellery"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Overlapping Card 2 (Product Photography - Shifted Right) */}
            <div className="absolute left-[135px] sm:left-[190px] top-[18px] sm:top-[24px] w-[145px] sm:w-[195px] h-[165px] sm:h-[220px] rounded-2xl overflow-hidden shadow-xl border-2 sm:border-4 border-white bg-[#4A121A] z-10 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/images/necklace_hero.jpg"
                alt="Ruby & Diamond Necklace Set"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Text Content & Action Buttons */}
          <div className="w-full lg:w-[580px] flex flex-col items-start text-left px-1 sm:px-0">
            <h3 className="font-serif text-lg sm:text-[1.85rem] font-normal text-[#111111] leading-tight mb-2">
              Need help in choosing the best Jewellery?
            </h3>
            <p className="font-sans text-xs sm:text-[0.95rem] text-[#444444] leading-relaxed mb-5 max-w-[540px]">
              Dimora is a premium shopping destination for gold and diamond jewellery dedicated to embellishing your everyday moments and milestones with elegance.
            </p>

            {/* Action Buttons (Solid Store Locator + Outline Request Call Back) */}
            <div className="flex items-center gap-3">
              <a
                href="#store-locator"
                className="bg-[#C5283C] hover:bg-[#8F0013] text-white font-sans text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-md transition-colors shadow-xs"
              >
                Store Locator
              </a>
              <a
                href="https://wa.me/919888888887"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C5283C] text-[#C5283C] hover:bg-[#C5283C] hover:text-white font-sans text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-md transition-colors bg-white"
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
