import React, { useState } from 'react';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-[#FDF4EC] border-t border-[#F0DEC9] text-[#333333] font-sans">
      {/* 1. TOP NEWSLETTER & QUICK CONTACT BAR */}
      <div className="border-b border-[#F0DEC9] py-6 px-5">
        <div className="max-w-[1340px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <h3 className="font-serif text-[1.4rem] font-semibold text-[#3A1E14] leading-tight">
              Join Our Newsletter Now!
            </h3>
            <p className="font-sans text-xs text-[#666666] mt-0.5">
              Be the first to know about new designs, events, and more!
            </p>
          </div>

          {/* Center Subscribe Input */}
          <form onSubmit={handleSubscribe} className="flex items-center w-full max-w-[400px]">
            <div className="relative w-full flex items-center border border-[#D9BCA6] bg-white rounded overflow-hidden shadow-none">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full px-4 py-2.5 text-xs outline-none text-[#111111] placeholder-[#888888]"
                required
              />
              <button
                type="submit"
                className="px-4 py-2.5 text-[#C5283C] hover:bg-[#C5283C] hover:text-white transition-colors text-base"
                aria-label="Subscribe"
              >
                →
              </button>
            </div>
            {subscribed && (
              <span className="text-xs text-green-700 font-semibold ml-3 shrink-0">Subscribed!</span>
            )}
          </form>

          {/* Right Contact Pills */}
          <div className="flex items-center gap-8">
            {/* Call Us */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF0E6] flex items-center justify-center text-[#B82A45] shrink-0 border border-[#F2E6D8]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B82A45" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <span className="font-sans text-[0.72rem] text-[#666666] block leading-none mb-1">Call Us</span>
                <span className="font-sans text-sm font-semibold text-[#111111]">+91 9888888887</span>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF0E6] flex items-center justify-center text-[#B82A45] shrink-0 border border-[#F2E6D8]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B82A45" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <span className="font-sans text-[0.72rem] text-[#666666] block leading-none mb-1">Email Us</span>
                <span className="font-sans text-sm font-semibold text-[#111111]">contact@diamora.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN 6-COLUMN FOOTER LINKS GRID */}
      <div className="py-10 px-5">
        <div className="max-w-[1340px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/* Column 1: About */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#3A1E14] mb-3">About</h4>
            <ul className="flex flex-col gap-1.5 text-xs text-[#333333]">
              <li><a href="#about" className="hover:text-[#C5283C] transition-colors">About Us</a></li>
              <li><a href="#history" className="hover:text-[#C5283C] transition-colors">History - The Journey</a></li>
              <li><a href="#awards" className="hover:text-[#C5283C] transition-colors">Awards</a></li>
              <li><a href="#initiatives" className="hover:text-[#C5283C] transition-colors">Social Initiatives</a></li>
              <li><a href="#career" className="hover:text-[#C5283C] transition-colors">Career</a></li>
              <li><a href="#faqs" className="hover:text-[#C5283C] transition-colors">FAQ's</a></li>
            </ul>
          </div>

          {/* Column 2: Jewellery Guide */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#3A1E14] mb-3">Jewellery Guide</h4>
            <ul className="flex flex-col gap-1.5 text-xs text-[#333333]">
              <li><a href="#education" className="hover:text-[#C5283C] transition-colors">Jewellery Education</a></li>
              <li><a href="#know-gold" className="hover:text-[#C5283C] transition-colors">Know Your Gold</a></li>
              <li><a href="#know-diamond" className="hover:text-[#C5283C] transition-colors">Know Your Diamond</a></li>
              <li><a href="#know-gemstone" className="hover:text-[#C5283C] transition-colors">Know Your Gemstone</a></li>
              <li><a href="#know-silver" className="hover:text-[#C5283C] transition-colors">Know Your Silver</a></li>
              <li><a href="#bangle-size" className="hover:text-[#C5283C] transition-colors">Bangle Size Guide</a></li>
              <li><a href="#ring-size" className="hover:text-[#C5283C] transition-colors">Ring Size Guide</a></li>
              <li><a href="#care" className="hover:text-[#C5283C] transition-colors">Jewellery Care</a></li>
              <li><a href="#platinum-care" className="hover:text-[#C5283C] transition-colors">Platinum Care</a></li>
            </ul>
          </div>

          {/* Column 3: Media */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#3A1E14] mb-3">Media</h4>
            <ul className="flex flex-col gap-1.5 text-xs text-[#333333]">
              <li><a href="#blogs" className="hover:text-[#C5283C] transition-colors">Our Blogs</a></li>
              <li><a href="#promotions" className="hover:text-[#C5283C] transition-colors">Latest Promotion</a></li>
              <li><a href="#testimonials" className="hover:text-[#C5283C] transition-colors">Testimonials</a></li>
              <li><a href="#videos" className="hover:text-[#C5283C] transition-colors">Video Campaign</a></li>
              <li><a href="#news" className="hover:text-[#C5283C] transition-colors">News & Events</a></li>
              <li><a href="#investors" className="hover:text-[#C5283C] transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          {/* Column 4: Policies */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#3A1E14] mb-3">Policies</h4>
            <ul className="flex flex-col gap-1.5 text-xs text-[#333333]">
              <li><a href="#disclaimer" className="hover:text-[#C5283C] transition-colors">Disclaimer</a></li>
              <li><a href="#privacy" className="hover:text-[#C5283C] transition-colors">Privacy Policy</a></li>
              <li><a href="#shipping" className="hover:text-[#C5283C] transition-colors">Shipping Policy</a></li>
              <li><a href="#terms" className="hover:text-[#C5283C] transition-colors">Terms & Conditions</a></li>
              <li><a href="#refund" className="hover:text-[#C5283C] transition-colors">Return & Refund</a></li>
              <li><a href="#cancellation" className="hover:text-[#C5283C] transition-colors">Cancellation Policy</a></li>
              <li><a href="#exchange" className="hover:text-[#C5283C] transition-colors">Exchange</a></li>
              <li><a href="#buyback" className="hover:text-[#C5283C] transition-colors">Buyback Policy</a></li>
            </ul>
          </div>

          {/* Column 5: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#3A1E14] mb-3">Quick Links</h4>
            <ul className="flex flex-col gap-1.5 text-xs text-[#333333]">
              <li><a href="#track" className="hover:text-[#C5283C] transition-colors">Track My Order</a></li>
              <li><a href="#payments" className="hover:text-[#C5283C] transition-colors">Scheme Payments</a></li>
              <li><a href="#scheme" className="hover:text-[#C5283C] transition-colors">Jewellery Purchase Scheme</a></li>
              <li><a href="#gift-card" className="hover:text-[#C5283C] transition-colors">Buy Gift Card</a></li>
              <li><a href="#gifting" className="hover:text-[#C5283C] transition-colors">Corporate Gifting</a></li>
              <li><a href="#advance" className="hover:text-[#C5283C] transition-colors">Advance Booking</a></li>
              <li><a href="#fraud" className="hover:text-[#C5283C] transition-colors">Fraud Alert</a></li>
            </ul>
          </div>

          {/* Column 6: Help Desk */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#3A1E14] mb-3">Help Desk</h4>
            <div className="text-xs text-[#333333] space-y-1.5 mb-4">
              <p><strong className="font-medium">Ph:</strong> +91 9888888887</p>
              <p className="text-[0.7rem] text-[#666666]">(Mon To Saturday 10AM-6.30PM)</p>
              <p><strong className="font-medium">General:</strong> <a href="mailto:contact@diamora.in" className="text-[#C5283C] underline">contact@diamora.in</a></p>
              <p><strong className="font-medium">Corporate:</strong> <a href="mailto:b2bindia@dimora.in" className="text-[#C5283C] underline">b2bindia@dimora.in</a></p>
            </div>

            {/* Side-by-Side Outlined Buttons */}
            <div className="flex items-center gap-2 mb-5">
              <a
                href="#contact"
                className="border border-[#C5283C] text-[#C5283C] hover:bg-[#C5283C] hover:text-white px-3 py-1.5 rounded text-xs font-medium transition-colors bg-[#FDF4EC]"
              >
                Contact us
              </a>
              <a
                href="#stores"
                className="border border-[#C5283C] text-[#C5283C] hover:bg-[#C5283C] hover:text-white px-3 py-1.5 rounded text-xs font-medium transition-colors bg-[#FDF4EC]"
              >
                Find a Store
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5">
              <a href="#facebook" className="w-9 h-9 rounded-full bg-[#FCDCC9] hover:bg-[#C5283C] hover:text-white text-[#8F3B25] flex items-center justify-center text-xs font-bold transition-colors">f</a>
              <a href="#instagram" className="w-9 h-9 rounded-full bg-[#FCDCC9] hover:bg-[#C5283C] hover:text-white text-[#8F3B25] flex items-center justify-center text-xs font-bold transition-colors">📸</a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-[#FCDCC9] hover:bg-[#C5283C] hover:text-white text-[#8F3B25] flex items-center justify-center text-xs font-bold transition-colors">𝕏</a>
              <a href="#whatsapp" className="w-9 h-9 rounded-full bg-[#FCDCC9] hover:bg-[#C5283C] hover:text-white text-[#8F3B25] flex items-center justify-center text-xs font-bold transition-colors">💬</a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SUB-FOOTER BAR (COPYRIGHT & APP STORES / PAYMENTS) */}
      <div className="border-t border-b border-[#F0DEC9] py-3.5 px-5">
        <div className="max-w-[1340px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-[#333333]">
          {/* Copyright Text */}
          <p className="font-sans text-xs text-[#333333]">@Dimora India Ltd. 2026. All rights reserved</p>

          {/* Mobile App Badges */}
          <div className="flex items-center gap-3">
            {/* Google Play Button */}
            <a
              href="#googleplay"
              className="bg-black text-white px-3.5 py-1.5 rounded-lg flex items-center gap-2.5 hover:opacity-90 transition-opacity h-[40px] border border-gray-800"
            >
              <svg width="20" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20.5V3.5L14.5 12L3 20.5Z" fill="#00D2FF" />
                <path d="M14.5 12L3 3.5L18 10.5L14.5 12Z" fill="#00F076" />
                <path d="M14.5 12L18 10.5L21.5 12L18 13.5L14.5 12Z" fill="#FFC800" />
                <path d="M14.5 12L3 20.5L18 13.5L14.5 12Z" fill="#FF3A44" />
              </svg>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[0.55rem] tracking-wider text-gray-300 font-sans uppercase font-bold">ANDROID APP ON</span>
                <span className="font-serif text-sm font-bold tracking-tight text-white">Google play</span>
              </div>
            </a>

            {/* App Store Button */}
            <a
              href="#appstore"
              className="bg-black text-white px-3.5 py-1.5 rounded-lg flex items-center gap-2.5 hover:opacity-90 transition-opacity h-[40px] border border-gray-800"
            >
              <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.09 1.75-.95 2.78 1.01.08 2.05-.53 2.67-1.28" />
              </svg>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[0.55rem] tracking-wider text-gray-300 font-sans">Download on the</span>
                <span className="font-sans text-sm font-semibold tracking-tight text-white">App Store</span>
              </div>
            </a>
          </div>

          {/* Payment Method Badges */}
          <div className="flex items-center gap-2.5">
            {/* Maestro */}
            <div className="h-[28px] px-2 bg-white border border-[#E0D5C8] rounded flex items-center gap-1.5 shadow-2xs">
              <svg width="22" height="16" viewBox="0 0 32 20">
                <circle cx="10" cy="10" r="9" fill="#0061A8" />
                <circle cx="22" cy="10" r="9" fill="#EB001B" />
                <path d="M16 3.6a8.97 8.97 0 0 1 3 6.4c0 2.6-1.1 5-3 6.4a8.97 8.97 0 0 1-3-6.4c0-2.6 1.1-5 3-6.4z" fill="#6C6BBD" />
              </svg>
              <span className="font-sans text-[0.65rem] font-bold text-[#0061A8]">Maestro</span>
            </div>

            {/* Mastercard */}
            <div className="h-[28px] px-2 bg-white border border-[#E0D5C8] rounded flex items-center gap-1.5 shadow-2xs">
              <svg width="22" height="16" viewBox="0 0 32 20">
                <circle cx="10" cy="10" r="9" fill="#EB001B" />
                <circle cx="22" cy="10" r="9" fill="#F79E1B" />
                <path d="M16 3.6a8.97 8.97 0 0 1 3 6.4c0 2.6-1.1 5-3 6.4a8.97 8.97 0 0 1-3-6.4c0-2.6 1.1-5 3-6.4z" fill="#FF5F00" />
              </svg>
              <span className="font-sans text-[0.65rem] font-bold text-[#111111]">mastercard</span>
            </div>

            {/* VISA */}
            <div className="h-[28px] px-2.5 bg-white border border-[#E4D5C8] rounded flex items-center justify-center shadow-2xs">
              <span className="font-sans font-black italic text-xs tracking-wider text-[#1A1F71]">VISA</span>
            </div>

            {/* American Express */}
            <div className="h-[28px] px-2 bg-[#006FCF] rounded flex items-center justify-center shadow-2xs">
              <span className="font-sans text-[0.55rem] font-black text-white tracking-tighter uppercase leading-none">AMERICAN<br />EXPRESS</span>
            </div>

            {/* Net Banking */}
            <div className="h-[28px] px-2.5 bg-[#0055A5] rounded flex items-center justify-center shadow-2xs">
              <span className="font-sans text-[0.68rem] font-bold text-white tracking-tight">Net Banking</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SEO TEXT CONTENT SECTION */}
      <div className="py-10 px-5 bg-[#FDF4EC]">
        <div className="max-w-[1340px] mx-auto space-y-6 text-xs text-[#555555] leading-relaxed">
          <div>
            <h4 className="font-serif text-sm font-semibold text-[#111111] mb-1">
              Buy Jewellery Online From Dimora
            </h4>
            <p>
              Dimora is a premium shopping destination for gold and diamond jewellery dedicated to embellishing your everyday moments and milestones with elegance. We specialise in crafting diverse jewellery pieces suitable for men, women, and children of all ages. Incorporating glamour and sophistication, our jewellery adds finesse to any occasion, be it for regular use or special events.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold text-[#111111] mb-1">
              Shop Latest Jewellery Designs for Every Occasion
            </h4>
            <p>
              Our latest jewellery designs, available at our online and offline stores, are crafted to perfection, so you can discover their timeless elegance. Whether it is your wedding day, birthday party, or corporate event, our jewellery collections, available both at our online and offline jewellery stores, includes a range of different styles that have been imagined and brought to life with intricate detailing.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold text-[#111111] mb-1">
              Purchase Exquisite Jewellery from Our Assorted Brands
            </h4>
            <p>
              We take great pride in the exclusive collection of brands we house, each with its unique design, aimed at raising your special day's charm, thereby making it more memorable. Some of our major brands include Sita Kalyanam, Yuva, Pride, Ratna, Apurva, Eleganza, Veda, and Li'l Joy, among others.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold text-[#111111] mb-1">
              Explore Exquisite Jewellery from Our Wide-ranging Brands
            </h4>
            <p>
              Our brands, each having a distinct motif, showcase the wide range of designs that cater to varied tastes:
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
