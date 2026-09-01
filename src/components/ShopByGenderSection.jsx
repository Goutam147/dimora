import React from 'react';
import SectionHeader from './SectionHeader';

const genderCategories = [
  {
    id: 1,
    title: "Women",
    fullTitle: "Women's Jewellery",
    img: "/images/Woman_wearing_diamond_earrings_202608261740.jpeg",
    link: "#women"
  },
  {
    id: 2,
    title: "Men",
    fullTitle: "Men's Jewellery",
    img: "/images/ring_hero.jpg",
    link: "#men"
  },
  {
    id: 3,
    title: "Kids",
    fullTitle: "Kid's Jewellery",
    img: "/images/Woman_wearing_diamond_drop_earrings_202608261759.jpeg",
    link: "#kids"
  }
];

export default function ShopByGenderSection() {
  return (
    <section className="py-5 md:py-14 bg-white" id="gender">
      <div className="max-w-[1340px] mx-auto px-3 sm:px-5">
        {/* Section Header */}
        <SectionHeader
          title="Shop By Gender"
          subtitle="Find Jewellery for Women, Men, and Kids"
        />

        {/* MOBILE RESPONSIVE LAYOUT (Matching Reference Screenshot 1:1) */}
        <div className="block md:hidden space-y-3 mt-3">
          {/* Row 1: Full-Width Women Card */}
          <a
            href={genderCategories[0].link}
            className="group block rounded-2xl overflow-hidden shadow-xs border border-[#F0DEC9] bg-white transition-all duration-300 hover:shadow-md"
          >
            <div className="w-full h-[210px] sm:h-[260px] overflow-hidden">
              <img
                src={genderCategories[0].img}
                alt="Women's Jewellery"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-4 py-2.5 flex items-center justify-between border-t border-[#F0DEC9] bg-white">
              <span className="font-serif text-base font-semibold text-[#111111]">
                {genderCategories[0].title}
              </span>
              <span className="font-serif text-xs text-[#C5283C] group-hover:underline">
                Explore more
              </span>
            </div>
          </a>

          {/* Row 2: 2 Side-by-Side Cards (Men & Kids) */}
          <div className="grid grid-cols-2 gap-3">
            {genderCategories.slice(1).map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="group block rounded-2xl overflow-hidden shadow-xs border border-[#F0DEC9] bg-white transition-all duration-300 hover:shadow-md"
              >
                <div className="w-full h-[155px] sm:h-[185px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.fullTitle}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-3 py-2 flex items-center justify-between border-t border-[#F0DEC9] bg-white">
                  <span className="font-serif text-xs font-semibold text-[#111111]">
                    {item.title}
                  </span>
                  <span className="font-serif text-[0.65rem] text-[#C5283C] group-hover:underline">
                    Explore more
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ORIGINAL UNCHANGED DESKTOP LAYOUT (Visible only on Web/Desktop >= 768px) */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-start mt-6">
          {genderCategories.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <a href={item.link} className="w-full group block overflow-hidden rounded-2xl bg-[#F8F6F0] shadow-sm">
                <div className="w-full h-[390px] rounded-2xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.fullTitle}
                    className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </a>
              <a href={item.link} className="font-serif text-xl font-medium text-[#B30018] mt-3.5 text-center hover:underline">
                {item.fullTitle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
