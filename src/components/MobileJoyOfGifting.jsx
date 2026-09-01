import React from 'react';
import SectionHeader from './SectionHeader';

const giftingCards = [
  {
    id: 1,
    title: "BIRTHDAY",
    subtitle: "GIFTING",
    link: "#birthday",
    img: "/images/Woman_wearing_diamond_earrings_202608261739.jpeg",
    bgColor: "from-[#FCECE3] via-[#FAF0E6] to-[#F7E7DC]",
    textColor: "text-[#5C2316]"
  },
  {
    id: 2,
    title: "NEW BORN",
    subtitle: "GIFTING",
    link: "#new-born",
    img: "/images/diamond_halo_ring.png",
    bgColor: "from-[#FAF2E6] via-[#F6ECE0] to-[#F2E5D6]",
    textColor: "text-[#4A251B]"
  },
  {
    id: 3,
    title: "ANNIVERSARY",
    subtitle: "GIFTING",
    link: "#anniversary",
    img: "/images/necklace_hero.jpg",
    bgColor: "from-[#FCEAE6] via-[#F8DDD7] to-[#F5D5CE]",
    textColor: "text-[#5C1D24]"
  },
  {
    id: 4,
    title: "CORPORATE",
    subtitle: "GIFTING",
    link: "#corporate",
    img: "/images/pave_gold_bracelet.png",
    bgColor: "from-[#F5EBE1] via-[#EFE2D5] to-[#E9D9CA]",
    textColor: "text-[#3D251A]"
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

        {/* Horizontal Touch-Scrollable Gifting Banners Row (Finger Swipe Enabled) */}
        <div
          className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth w-full py-1.5 mt-3 select-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {giftingCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className={`group shrink-0 w-[82%] sm:w-[70%] h-[210px] sm:h-[250px] rounded-2xl overflow-hidden snap-start relative shadow-xs border border-[#F0E6DD] bg-gradient-to-r ${card.bgColor} block`}
            >
              {/* Product Background Photo */}
              <img
                src={card.img}
                alt={`${card.title} ${card.subtitle}`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Text Overlay (Left Aligned matching reference screenshot 1:1) */}
              <div className="absolute inset-y-0 left-0 w-[60%] p-4 flex flex-col justify-center bg-gradient-to-r from-white/90 via-white/70 to-transparent z-10">
                <h3 className={`font-serif text-xl sm:text-2xl font-normal tracking-wide uppercase leading-tight ${card.textColor}`}>
                  {card.title}
                </h3>
                <h4 className={`font-serif text-xl sm:text-2xl font-normal tracking-wide uppercase leading-tight mb-2 ${card.textColor}`}>
                  {card.subtitle}
                </h4>
                <div>
                  <span className={`font-sans text-[0.62rem] font-bold tracking-widest uppercase underline ${card.textColor}`}>
                    EXPLORE NOW
                  </span>
                </div>
              </div>
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
