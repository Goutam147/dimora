import React from 'react';

const tourCards = [
  {
    id: 1,
    title: "Jewellery Care",
    subtitle: "Expert tips for maintaining your jewellery's brilliance and longevity",
    img: "/images/Woman_wearing_diamond_earrings_202608261739.jpeg",
    link: "#jewellery-care",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D98A48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polygon points="12 9 15 12 12 15 9 12 12 9" />
      </svg>
    )
  },
  {
    id: 2,
    title: "News And Events",
    subtitle: "Discover our recent news and events",
    img: "/images/Woman_wearing_diamond_drop_earrings_202608261759.jpeg",
    link: "#news-events",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D98A48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M9 16l2 2 4-4" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Find Store",
    subtitle: "Find the store near you!",
    img: "/images/craftsmanship_macro.png",
    link: "#find-store",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D98A48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
        <path d="M2 20h20" />
        <path d="M14 12v.01" />
        <path d="M10 12v.01" />
        <path d="M10 16v.01" />
        <path d="M14 16v.01" />
      </svg>
    )
  }
];

export default function TakeATourSection() {
  return (
    <section className="py-14 bg-white" id="tour">
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
            TAKE A TOUR
          </h2>
          <p className="font-sans text-[1.05rem] text-[#333333] font-normal tracking-tight">
            With excellent Craftsmanship and Innovation, We bring you fine, modern, everyday designs.
          </p>
        </div>

        {/* 3 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tourCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-[#FFF5ED] border border-[#F5E6D8]"
            >
              {/* Card Image */}
              <div className="w-full h-[240px] overflow-hidden bg-[#F4F0EA]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Bottom Info Box */}
              <div className="p-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#111111] leading-snug group-hover:text-[#B30018] transition-colors">
                      {card.title}
                    </h3>
                    <p className="font-sans text-xs text-[#666666] leading-tight mt-0.5 max-w-[210px]">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right Arrow */}
                <span className="text-xl text-[#333333] group-hover:translate-x-1.5 transition-transform duration-200">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
