import React from 'react';

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#FAF3EB] border-t border-[#F0DEC9] py-2.5 px-4 md:hidden shadow-lg">
      <div className="grid grid-cols-4 items-center justify-items-center text-center">
        {/* Account */}
        <a href="#account" className="flex flex-col items-center text-[#E8A824] group">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="font-sans text-[0.7rem] font-medium mt-1">Account</span>
        </a>

        {/* Categories */}
        <a href="#categories" className="flex flex-col items-center text-[#444444] hover:text-[#E8A824] transition-colors group">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
          </svg>
          <span className="font-sans text-[0.7rem] font-medium mt-1">Categories</span>
        </a>

        {/* Gold Scheme */}
        <a href="#scheme" className="flex flex-col items-center text-[#444444] hover:text-[#E8A824] transition-colors group">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="8" cy="8" r="5" />
            <circle cx="16" cy="12" r="5" />
            <circle cx="9" cy="16" r="5" />
          </svg>
          <span className="font-sans text-[0.7rem] font-medium mt-1">Gold Scheme</span>
        </a>

        {/* Help */}
        <a href="#help" className="flex flex-col items-center text-[#444444] hover:text-[#E8A824] transition-colors group">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="font-sans text-[0.7rem] font-medium mt-1">Help</span>
        </a>
      </div>
    </div>
  );
}
