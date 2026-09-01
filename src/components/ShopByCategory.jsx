import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';

const categories = [
  {
    id: 1,
    title: "Earrings",
    images: [
      "/images/Diamond_drop_earrings_displayed_202608261740.jpeg",
      "/images/Diamond_Jhumka_earrings_close-up_202608261740.jpeg",
      "/images/Woman_wearing_diamond_earrings_202608261739.jpeg"
    ],
    link: "#earrings",
    isFullMobile: true
  },
  {
    id: 2,
    title: "Pendants",
    images: [
      "/images/necklace_hero.jpg",
      "/images/Diamond_drop_earrings_displayed_202608261741.jpeg",
      "/images/Woman_wearing_diamond_earrings_202608261740.jpeg"
    ],
    link: "#pendants",
    isFullMobile: false
  },
  {
    id: 3,
    title: "Rings",
    images: [
      "/images/diamond_halo_ring.png",
      "/images/ring_hero.jpg",
      "/images/Diamond_stud_earrings_in_setting_202608261741.jpeg"
    ],
    link: "#rings",
    isFullMobile: false
  },
  {
    id: 4,
    title: "Bangles & Bracelets",
    images: [
      "/images/pave_gold_bracelet.png",
      "/images/Diamond_bangle_product_shot_202608271248.jpeg",
      "/images/Diamond_cuff_bracelet_photography_202608271248.jpeg"
    ],
    link: "#bangles",
    isFullMobile: true
  },
  {
    id: 5,
    title: "Jewellery Sets",
    images: [
      "/images/tennis_diamond_necklace.png",
      "/images/craftsmanship_macro.png",
      "/images/diamora_hero_widescreen_banner.png"
    ],
    link: "#sets",
    isFullMobile: false
  },
  {
    id: 6,
    title: "Mangalsutra & Nath",
    images: [
      "/images/Woman_wearing_diamond_drop_earrings_202608261759.jpeg",
      "/images/Woman_wearing_ornate_diamond_Nath_202608261801.jpeg",
      "/images/Ornate_diamond_Nath_product_photog_202608261758.jpeg"
    ],
    link: "#mangalsutra",
    isFullMobile: false
  }
];

export default function ShopByCategory() {
  const [imageIndices, setImageIndices] = useState([0, 0, 0, 0, 0, 0]);

  // Auto-switch card images every 5 seconds (5000ms) with right-to-left slide
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndices((prev) =>
        prev.map((idx, catIdx) => (idx + 1) % categories[catIdx].images.length)
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-6 md:py-12 bg-white" id="shop-by-category">
      <div className="max-w-[1340px] mx-auto px-3 sm:px-5">
        <SectionHeader
          title="SHOP BY CATEGORY"
          subtitle="Explore our diverse selections. Find your style"
        />

        {/* Asymmetric Mobile & 3-Col Desktop Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-4">
          {categories.map((cat, index) => {
            const currentIdx = imageIndices[index];

            return (
              <a
                key={cat.id}
                href={cat.link}
                className={`group relative rounded-2xl overflow-hidden shadow-xs border border-[#F2E6D8] bg-white transition-all duration-300 hover:shadow-md hover:border-[#B30018] ${
                  cat.isFullMobile ? 'col-span-2 md:col-span-1' : 'col-span-1'
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    cat.isFullMobile
                      ? 'h-[160px] sm:h-[200px] md:h-[230px]'
                      : 'h-[135px] sm:h-[170px] md:h-[230px]'
                  }`}
                >
                  {/* Right-to-Left Slide Animation Image Stack */}
                  {cat.images.map((imgUrl, imgIdx) => {
                    let positionClass = 'translate-x-full opacity-0 z-0';

                    if (imgIdx === currentIdx) {
                      positionClass = 'translate-x-0 opacity-100 z-10';
                    } else if (
                      imgIdx === (currentIdx - 1 + cat.images.length) % cat.images.length
                    ) {
                      positionClass = '-translate-x-full opacity-0 z-0';
                    }

                    return (
                      <img
                        key={imgIdx}
                        src={imgUrl}
                        alt={cat.title}
                        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-105 ${positionClass}`}
                      />
                    );
                  })}
                </div>

                {/* Title Overlay / Badge */}
                <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-2.5 pt-6 text-center">
                  <span className="font-sans text-xs sm:text-sm md:text-base font-semibold text-white tracking-wide drop-shadow-sm">
                    {cat.title}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-6 md:mt-8">
          <a
            href="#all-categories"
            className="inline-block border-[1.5px] border-[#C5283C] text-[#C5283C] hover:bg-[#C5283C] hover:text-white font-sans text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-md transition-all duration-200"
          >
            View All Categories
          </a>
        </div>
      </div>
    </section>
  );
}
