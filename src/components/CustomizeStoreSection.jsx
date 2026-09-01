import React from 'react';
import SectionHeader from './SectionHeader';

export default function CustomizeStoreSection() {
  return (
    <section className="py-5 md:py-14 bg-white" id="customize-store">
      <div className="max-w-[1340px] mx-auto px-3 sm:px-5">
        {/* Section Header */}
        <SectionHeader
          title="Customize Jewellery at Our Store"
          subtitle="Get in touch with us for a complete jewellery shopping experience!"
        />

        {/* MOBILE RESPONSIVE LAYOUT (Matching Reference Screenshot 1:1) */}
        <div className="block md:hidden space-y-3 mt-3">
          {/* Row 1: Full-Width World Map Store Locator Banner Card */}
          <div className="relative w-full h-[185px] sm:h-[220px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#FAF0D9] via-[#F6D5C7] to-[#F1BCC0] p-4 sm:p-6 flex items-center justify-between shadow-xs border border-[#F2E6D8]">
            <div className="relative z-10 max-w-[58%] flex flex-col justify-center items-start">
              <span className="font-serif italic text-sm sm:text-base text-[#6A0C24] font-medium leading-tight">
                13 countries, 200+ showrooms
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#5A0A1E] italic mt-0.5 mb-3 leading-tight">
                Every location tells a Story of joy
              </h3>
              <a
                href="#locate-store"
                className="bg-[#6A0C24] hover:bg-[#8F0013] text-white font-sans text-[0.62rem] font-semibold px-3 py-1.5 rounded uppercase tracking-wider shadow-xs transition-colors"
              >
                LOCATE STORE
              </a>
            </div>

            {/* Stylized World Map Graphic */}
            <div className="w-[40%] h-full flex items-center justify-end opacity-90 pointer-events-none">
              <svg viewBox="0 0 500 280" className="w-full h-auto max-h-[140px]">
                <g fill="#B30018">
                  <circle cx="140" cy="90" r="7" />
                  <text x="140" y="75" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#5A0A1E">USA</text>
                  <circle cx="180" cy="70" r="7" fill="#B30018" />
                  <text x="180" y="55" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#B30018">CANADA</text>
                  <circle cx="260" cy="85" r="7" />
                  <text x="260" y="70" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#5A0A1E">UK</text>
                  <circle cx="310" cy="115" r="7" />
                  <text x="310" y="100" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#5A0A1E">UAE</text>
                  <circle cx="335" cy="130" r="7" />
                  <text x="335" y="115" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#5A0A1E">INDIA</text>
                  <circle cx="410" cy="165" r="7" />
                  <text x="410" y="150" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#5A0A1E">AUSTRALIA</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Row 2: 3 Equal Column Cards (Store Locator, Book Piercing, Expert Advice) */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mt-3">
            {/* Card 1: Store Locator */}
            <a href="#store-locator" className="group block text-center">
              <div className="w-full h-[95px] sm:h-[125px] rounded-xl overflow-hidden shadow-xs border border-[#F2E6D8] bg-[#FAF6F0]">
                <img
                  src="/images/Diamond_bangle_product_shot_202608271248.jpeg"
                  alt="Store Locator Showroom"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-serif text-xs sm:text-sm font-medium text-[#222222] mt-1.5 leading-tight group-hover:text-[#C5283C] transition-colors">
                Store Locator
              </h4>
              <span className="font-sans text-[0.62rem] text-[#C5283C] underline block mt-0.5">
                Explore Now
              </span>
            </a>

            {/* Card 2: Book Piercing */}
            <a href="#book-piercing" className="group block text-center">
              <div className="w-full h-[95px] sm:h-[125px] rounded-xl overflow-hidden shadow-xs border border-[#F2E6D8] bg-[#FAF6F0]">
                <img
                  src="/images/Woman_wearing_diamond_stud_earrings_202608261740.jpeg"
                  alt="Book Piercing Close-up"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-serif text-xs sm:text-sm font-medium text-[#222222] mt-1.5 leading-tight group-hover:text-[#C5283C] transition-colors">
                Book Piercing
              </h4>
              <span className="font-sans text-[0.62rem] text-[#C5283C] underline block mt-0.5">
                Explore Now
              </span>
            </a>

            {/* Card 3: Expert Advice */}
            <a href="#expert-advice" className="group block text-center">
              <div className="w-full h-[95px] sm:h-[125px] rounded-xl overflow-hidden shadow-xs border border-[#F2E6D8] bg-[#FAF6F0]">
                <img
                  src="/images/Diamond_drop_earrings_macro_close-up_202608261740.jpeg"
                  alt="Expert Advice Jewellery Inspection"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-serif text-xs sm:text-sm font-medium text-[#222222] mt-1.5 leading-tight group-hover:text-[#C5283C] transition-colors">
                Expert Advice
              </h4>
              <span className="font-sans text-[0.62rem] text-[#C5283C] underline block mt-0.5">
                Explore Now
              </span>
            </a>
          </div>
        </div>

        {/* ORIGINAL DESKTOP LAYOUT (Visible only on Web/Desktop >= 768px) */}
        <div className="hidden md:grid grid-cols-2 gap-6 mt-6">
          {/* Card 1: Locate Store World Map Banner */}
          <div className="relative h-[235px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#F7E5C4] via-[#F3CEBF] to-[#EEB7BD] p-7 flex items-center shadow-sm">
            <div className="relative z-10 max-w-[55%] flex flex-col justify-center items-start">
              <span className="font-serif italic text-lg text-[#6A0C24] font-medium leading-tight">
                13 countries, 200+ showrooms
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#5A0A1E] italic mt-1 mb-4 leading-tight">
                Every location tells a Story of joy
              </h3>
              <a
                href="#locate-store"
                className="bg-[#6A0C24] hover:bg-[#8F0013] text-white font-sans text-xs font-semibold px-4 py-2 rounded-md uppercase tracking-wider transition-colors duration-200"
              >
                LOCATE STORE
              </a>
            </div>

            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[48%] h-[85%] opacity-90 pointer-events-none">
              <svg viewBox="0 0 500 280" className="w-full h-full">
                <g fill="#B30018">
                  <circle cx="140" cy="90" r="5" /><text x="140" y="78" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#5A0A1E">USA</text>
                  <circle cx="180" cy="70" r="5" fill="#B30018" /><text x="180" y="58" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#B30018">CANADA</text>
                  <circle cx="260" cy="85" r="5" /><text x="260" y="73" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#5A0A1E">UK</text>
                  <circle cx="310" cy="115" r="5" /><text x="310" y="103" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#5A0A1E">UAE</text>
                  <circle cx="335" cy="130" r="5" /><text x="335" y="118" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#5A0A1E">INDIA</text>
                  <circle cx="410" cy="165" r="5" /><text x="410" y="153" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#5A0A1E">AUSTRALIA</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Card 2: Get Pierced Banner */}
          <div className="relative h-[235px] rounded-2xl overflow-hidden bg-[#F5DFD3] flex items-center shadow-sm">
            <div className="w-[48%] h-full overflow-hidden">
              <img
                src="/images/Woman_wearing_diamond_stud_earrings_202608261740.jpeg"
                alt="Get Pierced With Us"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-[52%] p-7 flex flex-col justify-center items-start bg-gradient-to-r from-[#F5DFD3] via-[#F3D7C7] to-[#EECEBC] h-full">
              <span className="font-serif text-3xl font-light text-[#5A0A1E] leading-tight">
                Get
              </span>
              <h3 className="font-serif text-3xl font-semibold text-[#5A0A1E] leading-tight mb-4">
                pierced <span className="font-light italic text-2xl">with us</span>
              </h3>
              <a
                href="#book-appointment"
                className="bg-[#6A0C24] hover:bg-[#8F0013] text-white font-sans text-xs font-semibold px-4 py-2 rounded-md uppercase tracking-wider transition-colors duration-200"
              >
                BOOK AN APPOINTMENT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
