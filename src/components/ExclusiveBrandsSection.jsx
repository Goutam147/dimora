import React, { useRef, useEffect } from 'react';
import SectionHeader from './SectionHeader';

const brands = [
  {
    id: 1,
    name: "ratna",
    displayName: "r · a · t · n · a",
    subtitle: "PRECIOUS STONE JEWELLERY",
    font: "font-serif text-xl font-medium tracking-[0.25em] text-[#3D251E]"
  },
  {
    id: 2,
    name: "veda",
    displayName: "veda",
    subtitle: "TRADITIONAL JEWELLERY COLLECTION",
    font: "font-serif italic text-3xl font-normal text-[#1A1A1A]"
  },
  {
    id: 3,
    name: "pride",
    displayName: "PRIDE",
    subtitle: "DIAMOND COLLECTION",
    font: "font-serif font-bold tracking-[0.2em] text-2xl text-[#111111]",
    icon: "💎"
  },
  {
    id: 4,
    name: "eleganza",
    displayName: "ELEGANZA",
    subtitle: "POLKI DIAMOND COLLECTION",
    font: "font-serif font-light tracking-[0.18em] text-2xl text-[#222222]"
  },
  {
    id: 5,
    name: "liljoy",
    displayName: "LI'L JOY",
    subtitle: "KIDS JEWELLERY",
    font: "font-sans font-black text-lg text-white bg-[#E60067] px-3 py-1 rounded-full shadow-inner ring-4 ring-[#FFD700]"
  },
  {
    id: 6,
    name: "apurva",
    displayName: "APURVA",
    subtitle: "ANTIQUE COLLECTION",
    font: "font-serif font-semibold tracking-widest text-2xl text-[#3A1F13]"
  },
  {
    id: 7,
    name: "zenina",
    displayName: "ZENINA",
    subtitle: "UNCUT DIAMOND COLLECTION",
    font: "font-serif tracking-[0.25em] text-xl font-bold text-[#8B0000]"
  },
  {
    id: 8,
    name: "swa",
    displayName: "SWA",
    subtitle: "ETHNIC DIAMOND COLLECTION",
    font: "font-serif italic text-2xl font-bold text-[#4A2E16]"
  }
];

export default function ExclusiveBrandsSection() {
  const scrollRef = useRef(null);

  // Auto-scroll loop: shift one card at a time every 2 seconds
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 235;

    const intervalId = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const scrollLeftBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 bg-white overflow-hidden" id="brands">
      <div className="max-w-[1340px] mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title="OUR EXCLUSIVE BRANDS"
          subtitle="We live every second of our day. Why not make every moment special?"
        />

        {/* Brand Carousel Slider */}
        <div className="relative flex items-center">
          {/* Left Arrow Button (Desktop Only) */}
          <button
            onClick={scrollLeftBtn}
            className="hidden md:flex absolute -left-1 z-20 w-10 h-10 rounded-full bg-white border border-[#E0D0C0] text-[#333333] items-center justify-center text-2xl shadow-md hover:bg-[#B30018] hover:text-white hover:border-[#B30018] transition-all"
            aria-label="Previous Brands"
          >
            ‹
          </button>

          {/* Scrolling Ticker Track */}
          <div
            ref={scrollRef}
            className="flex items-center gap-5 overflow-x-auto py-3 px-1 w-full no-scrollbar select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...brands, ...brands, ...brands].map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="shrink-0 w-[215px] h-[95px] rounded-lg border border-[#F3E2D3] bg-white p-4 flex flex-col items-center justify-center text-center shadow-sm hover:border-[#B30018] hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-1.5">
                  {brand.icon && <span className="text-xs">{brand.icon}</span>}
                  <span className={`${brand.font} group-hover:scale-105 transition-transform duration-200`}>
                    {brand.displayName}
                  </span>
                </div>
                <span className="font-sans text-[0.62rem] tracking-widest text-[#888888] uppercase mt-1 font-medium">
                  {brand.subtitle}
                </span>
              </div>
            ))}
          </div>

          {/* Right Arrow Button (Desktop Only) */}
          <button
            onClick={scrollRightBtn}
            className="hidden md:flex absolute -right-1 z-20 w-10 h-10 rounded-full bg-white border border-[#E0D0C0] text-[#333333] items-center justify-center text-2xl shadow-md hover:bg-[#B30018] hover:text-white hover:border-[#B30018] transition-all"
            aria-label="Next Brands"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
