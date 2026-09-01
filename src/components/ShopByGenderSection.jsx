import React from 'react';
import SectionHeader from './SectionHeader';

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
        <SectionHeader
          title="SHOP BY GENDER"
          subtitle="Find Jewelry for Women, Men, and Kids"
        />

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
