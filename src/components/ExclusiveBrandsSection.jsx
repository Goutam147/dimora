import React, { useRef, useEffect } from 'react';
import SectionHeader from './SectionHeader';

const brandBanners = [
  {
    id: 1,
    name: "PRIDE",
    subtitle: "DIAMOND COLLECTION",
    img: "/images/Woman_wearing_diamond_earrings_202608261739.jpeg",
    badge: "PRIDE",
    badgeSub: "diamond collection"
  },
  {
    id: 2,
    name: "ratna",
    displayName: "r · a · t · n · a",
    subtitle: "PRECIOUS STONE JEWELLERY",
    img: "/images/Woman_wearing_ornate_diamond_Nath_202608261801.jpeg"
  },
  {
    id: 3,
    name: "apurva",
    displayName: "APURVA",
    subtitle: "ANTIQUE COLLECTION",
    img: "/images/Diamond_Jhumka_earrings_close-up_202608261740.jpeg"
  },
  {
    id: 4,
    name: "veda",
    displayName: "VEDA",
    subtitle: "TRADITIONAL JEWELLERY",
    img: "/images/necklace_hero.jpg"
  },
  {
    id: 5,
    name: "eleganza",
    displayName: "ELEGANZA",
    subtitle: "POLKI DIAMOND COLLECTION",
    img: "/images/tennis_diamond_necklace.png"
  }
];

const desktopBrands = [
  { id: 1, name: "ratna", displayName: "r · a · t · n · a", subtitle: "PRECIOUS STONE JEWELLERY", font: "font-serif text-xl font-medium tracking-[0.25em] text-[#3D251E]" },
  { id: 2, name: "veda", displayName: "veda", subtitle: "TRADITIONAL JEWELLERY COLLECTION", font: "font-serif italic text-3xl font-normal text-[#1A1A1A]" },
  { id: 3, name: "pride", displayName: "PRIDE", subtitle: "DIAMOND COLLECTION", font: "font-serif font-bold tracking-[0.2em] text-2xl text-[#111111]", icon: "💎" },
  { id: 4, name: "eleganza", displayName: "ELEGANZA", subtitle: "POLKI DIAMOND COLLECTION", font: "font-serif font-light tracking-[0.18em] text-2xl text-[#222222]" },
  { id: 5, name: "liljoy", displayName: "LI'L JOY", subtitle: "KIDS JEWELLERY", font: "font-sans font-black text-lg text-white bg-[#E60067] px-3 py-1 rounded-full shadow-inner ring-4 ring-[#FFD700]" },
  { id: 6, name: "apurva", displayName: "APURVA", subtitle: "ANTIQUE COLLECTION", font: "font-serif font-semibold tracking-widest text-2xl text-[#3A1F13]" },
  { id: 7, name: "zenina", displayName: "ZENINA", subtitle: "UNCUT DIAMOND COLLECTION", font: "font-serif tracking-[0.25em] text-xl font-bold text-[#8B0000]" },
  { id: 8, name: "swa", displayName: "SWA", subtitle: "ETHNIC DIAMOND COLLECTION", font: "font-serif italic text-2xl font-bold text-[#4A2E16]" }
];

export default function ExclusiveBrandsSection() {
  const desktopScrollRef = useRef(null);
  const mobileRowRef = useRef(null);

  // Desktop Auto-scroll loop
  useEffect(() => {
    const container = desktopScrollRef.current;
    if (!container) return;

    const intervalId = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 235, behavior: 'smooth' });
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-6 md:py-14 bg-white overflow-hidden" id="brands">
      <div className="max-w-[1340px] mx-auto px-3 sm:px-5">
        {/* Section Header */}
        <SectionHeader
          title="Our Exclusive Brands"
          subtitle="We live every second of our day. Why not make every moment special?"
        />

        {/* MOBILE RESPONSIVE LAYOUT (Matching Reference Image 1:1) */}
        <div className="md:hidden space-y-3 mt-4">
          {/* Row 1: Full-Width PRIDE Diamond Banner Card */}
          <a href="#pride-brand" className="group block relative w-full h-[210px] sm:h-[260px] rounded-2xl overflow-hidden shadow-xs border border-[#F0DEC9]">
            <img
              src={brandBanners[0].img}
              alt="PRIDE Diamond Collection"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />

            {/* Brand Logo Badge (Top Right) */}
            <div className="absolute top-3 right-4 z-10 text-right">
              <div className="font-serif font-bold text-xl tracking-[0.18em] text-[#0A2E5C] flex items-center gap-1 justify-end">
                <span>PRIDE</span>
                <span className="text-xs text-[#00A3E0]">💎</span>
              </div>
              <span className="block font-sans text-[0.55rem] tracking-widest text-[#0A2E5C] uppercase font-semibold">
                diamond collection
              </span>
            </div>
          </a>

          {/* Row 2: Touch-Scrollable Row of Brand Cards */}
          <div
            ref={mobileRowRef}
            className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth w-full py-1 select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {brandBanners.slice(1).map((brand) => (
              <a
                key={brand.id}
                href={`#${brand.name}`}
                className="group relative shrink-0 w-[165px] h-[210px] rounded-2xl overflow-hidden shadow-xs border border-[#F0DEC9] block"
              >
                <img
                  src={brand.img}
                  alt={brand.displayName || brand.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Brand Overlay Title (Top Right) */}
                <div className="absolute top-2.5 right-3 z-10 text-right bg-black/20 backdrop-blur-2xs px-2 py-0.5 rounded">
                  <span className="font-serif text-sm font-semibold tracking-wider text-white drop-shadow-xs block leading-tight">
                    {brand.displayName || brand.name}
                  </span>
                  <span className="font-sans text-[0.5rem] tracking-widest text-white/90 uppercase font-medium block">
                    {brand.subtitle}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* DESKTOP CAROUSEL TICKER (Visible on Desktop >= 768px) */}
        <div className="hidden md:block relative items-center mt-6">
          <div
            ref={desktopScrollRef}
            className="flex items-center gap-5 overflow-x-auto py-3 px-1 w-full no-scrollbar select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...desktopBrands, ...desktopBrands, ...desktopBrands].map((brand, idx) => (
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
        </div>
      </div>
    </section>
  );
}
