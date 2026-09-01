import React from 'react';

const genderCategories = [
  {
    id: 1,
    title: "Women's Jewellery",
    img: "/images/Woman_wearing_diamond_earrings_202608261740.jpeg",
    link: "#women"
  },
  {
    id: 2,
    title: "Men's Jewellery",
    img: "/images/ring_hero.jpg",
    link: "#men"
  },
  {
    id: 3,
    title: "Kid's Jewellery",
    img: "/images/Woman_wearing_diamond_drop_earrings_202608261759.jpeg",
    link: "#kids"
  }
];

export default function ShopByGenderSection() {
  return (
    <section className="py-14 bg-white" id="gender">
      <div className="max-w-[1340px] mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-9">
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
            SHOP BY GENDER
          </h2>
          <p className="font-sans text-[1.05rem] text-[#333333] font-normal tracking-tight">
            Find Jewelry for Women, Men, and Kids
          </p>
        </div>

        {/* 3 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {genderCategories.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <a href={item.link} className="w-full group block overflow-hidden rounded-2xl bg-[#F8F6F0] shadow-sm">
                <div className="w-full h-[390px] rounded-2xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </a>
              <a href={item.link} className="font-serif text-xl font-medium text-[#B30018] mt-3.5 text-center hover:underline">
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
