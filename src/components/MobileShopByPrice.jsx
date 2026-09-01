import React from 'react';
import SectionHeader from './SectionHeader';

export default function MobileShopByPrice() {
  return (
    <section className="block md:hidden py-4 bg-white" id="shop-by-price">
      <div className="max-w-[1340px] mx-auto px-3 sm:px-5">
        {/* Section Header */}
        <SectionHeader
          title="Shop By Price"
          subtitle="Explore all Diverse collections"
        />

        <div className="space-y-3 mt-3">
          {/* Row 1: Full-Width Top Banner Card (STARTING from 1 Lakh) */}
          <div className="relative w-full h-[175px] rounded-2xl overflow-hidden shadow-xs border border-[#F2E6D8] bg-[#FAF6F0]">
            <img
              src="/images/pave_gold_bracelet.png"
              alt="Starting from 1 Lakh Gold Bangle"
              className="w-full h-full object-cover object-left"
            />
            {/* Text Overlay (Right Aligned matching reference screenshot 1:1) */}
            <div className="absolute inset-y-0 right-0 w-[62%] p-3 sm:p-4 flex flex-col justify-center text-right bg-gradient-to-l from-[#FAF6F0]/95 via-[#FAF6F0]/80 to-transparent">
              <p className="font-serif italic text-[0.62rem] text-[#7A452E] leading-tight mb-1">
                For moments that matter most. Elevate your milestones with true luxury.
              </p>
              <h3 className="font-serif text-2xl font-normal text-[#542111] tracking-wide uppercase leading-none">
                STARTING
              </h3>
              <p className="font-serif text-sm text-[#7A452E] font-medium leading-tight mb-2">
                from <span className="text-lg font-semibold text-[#542111]">1 Lakh</span>
              </p>
              <div>
                <a
                  href="#price-1-lakh"
                  className="inline-block bg-[#682813] hover:bg-[#4D1B0A] text-white font-sans text-[0.65rem] font-semibold px-3.5 py-1 rounded-full shadow-xs transition-colors"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>

          {/* Row 2: 2-Column Asymmetric Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Left Column (2 Stacked Cards) */}
            <div className="space-y-3 flex flex-col">
              {/* Top Left Card: UNDER 50k */}
              <div className="relative w-full h-[145px] rounded-2xl overflow-hidden shadow-xs border border-[#F2E6D8] bg-[#FAF6F0]">
                <img
                  src="/images/Diamond_stud_earrings_in_setting_202608261741.jpeg"
                  alt="Under 50k Earrings"
                  className="w-full h-full object-cover object-center"
                />
                {/* Bottom Overlay Text */}
                <div className="absolute inset-x-0 bottom-0 p-2.5 pt-6 bg-gradient-to-t from-[#FAF6F0] via-[#FAF6F0]/85 to-transparent text-center">
                  <h4 className="font-serif text-lg font-normal text-[#542111] uppercase tracking-wider leading-none mb-1">
                    UNDER 50k
                  </h4>
                  <a
                    href="#under-50k"
                    className="inline-block bg-[#682813] text-white font-sans text-[0.58rem] font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    Explore Now
                  </a>
                </div>
              </div>

              {/* Bottom Left Card: UNDER 20k */}
              <div className="relative w-full h-[145px] rounded-2xl overflow-hidden shadow-xs border border-[#F2E6D8] bg-[#FAF6F0]">
                <img
                  src="/images/diamond_halo_ring.png"
                  alt="Under 20k Solitaire Ring"
                  className="w-full h-full object-cover object-center"
                />
                {/* Bottom Overlay Text */}
                <div className="absolute inset-x-0 bottom-0 p-2.5 pt-6 bg-gradient-to-t from-[#FAF6F0] via-[#FAF6F0]/85 to-transparent text-center">
                  <h4 className="font-serif text-lg font-normal text-[#542111] uppercase tracking-wider leading-none mb-1">
                    UNDER 20k
                  </h4>
                  <a
                    href="#under-20k"
                    className="inline-block bg-[#682813] text-white font-sans text-[0.58rem] font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    Explore Now
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (Tall Vertical Card): UNDER 1 Lakh */}
            <div className="relative w-full h-[302px] rounded-2xl overflow-hidden shadow-xs border border-[#F2E6D8] bg-[#FAF6F0]">
              <img
                src="/images/necklace_hero.jpg"
                alt="Under 1 Lakh Pendant Necklace"
                className="w-full h-full object-cover object-center"
              />
              {/* Bottom Overlay Text */}
              <div className="absolute inset-x-0 bottom-0 p-3 pt-10 bg-gradient-to-t from-[#FAF6F0] via-[#FAF6F0]/85 to-transparent text-center">
                <h4 className="font-serif text-2xl font-normal text-[#542111] uppercase tracking-widest leading-none mb-0.5">
                  UNDER
                </h4>
                <p className="font-serif text-base text-[#542111] font-semibold mb-2">
                  1 Lakh
                </p>
                <a
                  href="#under-1-lakh"
                  className="inline-block bg-[#682813] text-white font-sans text-[0.65rem] font-semibold px-4 py-1 rounded-full shadow-xs"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
