import React, { useRef, useEffect } from 'react';

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

  // Auto-scroll loop right-to-left continuously
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let intervalId = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollLeft = 0;
      } else {
        container.scrollBy({ left: 1.5, behavior: 'smooth' });
      }
    }, 30);

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
      <div className="max-w-[1340px] mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-10">
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
            OUR EXCLUSIVE BRANDS
          </h2>
          <p className="font-sans text-[1.05rem] text-[#333333] font-normal tracking-tight">
            We live every second of our day. Why not make every moment special?
          </p>
        </div>

        {/* Brand Carousel Slider */}
        <div className="relative flex items-center px-4">
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeftBtn}
            className="absolute -left-1 z-20 w-10 h-10 rounded-full bg-white border border-[#E0D0C0] text-[#333333] flex items-center justify-center text-2xl shadow-md hover:bg-[#B30018] hover:text-white hover:border-[#B30018] transition-all"
            aria-label="Previous Brands"
          >
            ‹
          </button>

          {/* Scrolling Ticker Track */}
          <div
            ref={scrollRef}
            className="flex items-center gap-5 overflow-x-auto py-3 px-2 w-full no-scrollbar select-none"
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

          {/* Right Arrow Button */}
          <button
            onClick={scrollRightBtn}
            className="absolute -right-1 z-20 w-10 h-10 rounded-full bg-white border border-[#E0D0C0] text-[#333333] flex items-center justify-center text-2xl shadow-md hover:bg-[#B30018] hover:text-white hover:border-[#B30018] transition-all"
            aria-label="Next Brands"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
