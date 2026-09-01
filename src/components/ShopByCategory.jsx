import React from 'react';
import SectionHeader from './SectionHeader';

const categories = [
  {
    id: 1,
    title: "Earrings",
    img: "/images/Diamond_drop_earrings_displayed_202608261740.jpeg",
    link: "#earrings",
    isFullMobile: true
  },
  {
    id: 2,
    title: "Pendants",
    img: "/images/necklace_hero.jpg",
    link: "#pendants",
    isFullMobile: false
  },
  {
    id: 3,
    title: "Rings",
    img: "/images/diamond_halo_ring.png",
    link: "#rings",
    isFullMobile: false
  },
  {
    id: 4,
    title: "Bangles & Bracelets",
    img: "/images/pave_gold_bracelet.png",
    link: "#bangles",
    isFullMobile: true
  },
  {
    id: 5,
    title: "Jewellery Sets",
    img: "/images/tennis_diamond_necklace.png",
    link: "#sets",
    isFullMobile: false
  },
  {
    id: 6,
    title: "Mangalsutra",
    img: "/images/Woman_wearing_diamond_drop_earrings_202608261759.jpeg",
    link: "#mangalsutra",
    isFullMobile: false
  }
];

export default function ShopByCategory() {
  return (
    <section className="py-6 md:py-12 bg-white" id="shop-by-category">
      <div className="max-w-[1340px] mx-auto px-3 sm:px-5">
        <SectionHeader
          title="SHOP BY CATEGORY"
          subtitle="Explore our diverse selections. Find your style"
        />

        {/* Asymmetric Mobile & 3-Col Desktop Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.link}
              className={`group relative rounded-2xl overflow-hidden shadow-xs border border-[#F2E6D8] bg-white transition-all duration-300 hover:shadow-md hover:border-[#B30018] ${
                cat.isFullMobile ? 'col-span-2 md:col-span-1' : 'col-span-1'
              }`}
            >
              <div
                className={`w-full overflow-hidden ${
                  cat.isFullMobile
                    ? 'h-[160px] sm:h-[200px] md:h-[230px]'
                    : 'h-[135px] sm:h-[170px] md:h-[230px]'
                }`}
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title Overlay / Badge */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-2.5 pt-6 text-center">
                <span className="font-sans text-xs sm:text-sm md:text-base font-semibold text-white tracking-wide drop-shadow-sm">
                  {cat.title}
                </span>
              </div>
            </a>
          ))}
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
