import React from 'react';
import SectionHeader from './SectionHeader';

const giftingCards = [
  {
    id: 1,
    title: "BIRTHDAY GIFTING",
    link: "#birthday",
    img: "/images/Woman_wearing_diamond_earrings_202608261739.jpeg"
  },
  {
    id: 2,
    title: "NEW BORN GIFTING",
    link: "#new-born",
    img: "/images/diamond_halo_ring.png"
  },
  {
    id: 3,
    title: "ANNIVERSARY GIFTING",
    link: "#anniversary",
    img: "/images/necklace_hero.jpg"
  },
  {
    id: 4,
    title: "CORPORATE GIFTING",
    link: "#corporate",
    img: "/images/pave_gold_bracelet.png"
  }
];

export default function MobileJoyOfGifting() {
  return (
    <section className="block md:hidden py-4 bg-white" id="joy-of-gifting">
      <div className="max-w-[1340px] mx-auto px-3 sm:px-5">
        {/* Section Header */}
        <SectionHeader
          title="Joy Of Gifting"
          subtitle="Discover diverse gifts for every occasion."
        />

        {/* Horizontal Touch-Scrollable Gifting Banners Row (Clean Images Only) */}
        <div
          className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth w-full py-1.5 mt-3 select-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {giftingCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className="group shrink-0 w-[82%] sm:w-[70%] h-[210px] sm:h-[250px] rounded-2xl overflow-hidden snap-start relative shadow-xs border border-[#F0E6DD] block"
            >
              {/* Product Background Photo */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </a>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-4">
          <a
            href="#explore-gifting"
            className="inline-block border border-[#C5283C] text-[#C5283C] hover:bg-[#C5283C] hover:text-white font-sans text-xs font-semibold px-7 py-2 rounded-md transition-all duration-200"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
