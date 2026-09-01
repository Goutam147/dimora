import React from 'react';

const mobileCategories = [
  {
    id: 1,
    title: "Express Delivery",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B30018" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
    <div className="bg-[#FAF3EB] border-b border-[#F0DEC9] py-3 px-3 md:hidden">
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth">
        {mobileCategories.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="flex flex-col items-center text-center shrink-0 w-[68px] group"
          >
            {/* Circular Image / Icon Ring Box */}
            <div className="w-[58px] h-[58px] rounded-full border-2 border-[#E79F67] bg-white p-0.5 shadow-sm group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center">
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
            <span className="font-sans text-[0.68rem] text-[#333333] font-medium leading-tight mt-1.5 line-clamp-2">
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
