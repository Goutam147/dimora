import React from 'react';

const mobileCategories = [
  {
    id: 1,
    title: "Express Delivery",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B30018" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    link: "#express"
  },
  {
    id: 2,
    title: "Digital Gift Card",
    img: "/images/craftsmanship_macro.png",
    link: "#gift-card"
  },
  {
    id: 3,
    title: "New Arrivals",
    img: "/images/Woman_wearing_diamond_earrings_202608261739.jpeg",
    link: "#new-arrivals"
  },
  {
    id: 4,
    title: "Wedding Collection",
    img: "/images/Woman_wearing_ornate_diamond_Nath_202608261801.jpeg",
    link: "#wedding"
  },
  {
    id: 5,
    title: "Kid's Wear",
    img: "/images/Diamond_bangle_product_shot_202608271248.jpeg",
    link: "#kids"
  },
  {
    id: 6,
    title: "Diamond Jewellery",
    img: "/images/necklace_hero.jpg",
    link: "#diamond"
  }
];

export default function MobileCategoriesStrip() {
  return (
    <div className="bg-[#FAF3EB] border-b border-[#F0DEC9] py-2.5 px-2 md:hidden">
      {/* 6 Column Flex Row fitting all 6 items cleanly on mobile screens */}
      <div
        className="grid grid-cols-6 gap-1 items-start text-center overflow-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {mobileCategories.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="flex flex-col items-center justify-start text-center group w-full"
          >
            {/* Circular Image / Icon Ring Box */}
            <div className="w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] rounded-full border-[1.5px] border-[#E79F67] bg-white p-0.5 shadow-2xs group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center shrink-0">
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full bg-[#FFF5ED] rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
              )}
            </div>
            {/* Title */}
            <span className="font-sans text-[0.6rem] text-[#333333] font-medium leading-[1.15] mt-1 line-clamp-2 w-full px-0.5">
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
