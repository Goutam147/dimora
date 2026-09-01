import React from 'react';
import SectionHeader from './SectionHeader';

const trustFeatures = [
  {
    id: 1,
    title: "Free Shipping",
    subtext: "Get 100% Free Shipping",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B30018" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Easy Exchange",
    subtext: "Exchange your old designs anytime",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B30018" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Certified Jewellery",
    subtext: "100% Certified Jewellery",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B30018" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Lifetime Product Service",
    subtext: "keep your jewellery in its best shape",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B30018" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.8-5.9-2.2L2 14" />
      </svg>
    )
  },
  {
    id: 5,
    title: "14 Days Return",
    subtext: "14 Days Hassle-Free Returns",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B30018" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    )
  }
];

export default function QualityServiceSection() {
  return (
    <section className="py-14 bg-white" id="service">
      <div className="max-w-[1340px] mx-auto px-5">
        {/* Section Header */}
        <SectionHeader
          title="QUALITY-FIRST SERVICE"
          subtitle="We assure you that you will get what you can trust. Always!"
        />

        {/* Video Banner Placeholder Image */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-14 shadow-sm group">
          <img
            src="/images/craftsmanship_macro.png"
            alt="Quality-First Service Video Banner"
            className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-white/90 text-[#B30018] flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform pl-1">
              ▶
            </button>
          </div>
        </div>

        {/* 5 Trust Features Strip */}
        <div className="bg-[#FAF6F0] rounded-2xl py-8 px-4 border border-[#EFE8DE] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E2D8CC]">
            {trustFeatures.map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center px-3 pt-4 md:pt-0">
                <div className="mb-3 text-[#B30018]">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#111111] mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#666666] font-normal">
                  {item.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
