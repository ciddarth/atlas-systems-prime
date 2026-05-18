"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./general/Button";

const NAV_ITEMS = [
  {
    label: "For Payers",
    href: "#",
    children: ["Health Plans", "TPAs", "MSOs"],
  },
  {
    label: "For Providers",
    href: "#",
    children: ["Hospitals", "Medical Groups", "Solo Practitioners"],
  },
  {
    label: "Industries",
    href: "#",
    children: ["Dental", "Vision", "Behavioral Health"],
  },
  {
    label: "Resources",
    href: "#",
    children: ["Blog", "Case Studies", "Webinars"],
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);

  const toggle = (label) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-gray-200 shadow-sm flex h-[80px] w-full">
      {/* Left Sidebar Block */}
      <div className="w-[70px] md:w-[90px] bg-black flex items-center justify-center shrink-0 transition-all duration-300">
        <Image
          src="/images/general/header-logo.jpg"
          alt="Atlas logo"
          width={55}
          height={55}
          priority
          className="object-contain w-[45px] h-[45px] md:w-[55px] md:h-[55px] transition-all duration-300"
        />
      </div>

      <div className="flex-1 px-4 md:px-10 flex items-center gap-3 md:gap-5 justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0" aria-label="PRIME Home">
          <Image
            src="/images/general/checklist.png"
            alt="PRIME Logo Icon"
            width={28}
            height={28}
            priority
            className="object-contain md:w-[32px] md:h-[32px]"
          />
          <h2 className="text-xl md:text-2xl m-0 leading-none">PRIME</h2>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-4 flex-1 ml-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="flex items-center gap-1 bg-transparent border-none cursor-pointer font-sans text-[16px] font-medium text-black px-3 py-2 rounded-md transition-colors hover:text-primary hover:bg-red-50 whitespace-nowrap"
                aria-haspopup="true"
                aria-expanded={openMenu === item.label}
                onClick={() => toggle(item.label)}
              >
                {item.label}
                <svg
                  className={`transition-transform duration-200 text-gray-500 ${openMenu === item.label ? "rotate-180 text-primary" : ""
                    }`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {openMenu === item.label && (
                <div className="absolute top-[calc(100%+8px)] left-0 min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-4 py-2 text-[15px] font-medium text-black rounded-md transition-colors hover:bg-red-50 hover:text-primary"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden xl:flex items-center gap-4 ml-auto shrink-0">
          <button
            className="bg-transparent border-none cursor-pointer text-black flex items-center p-2 rounded-md transition-colors hover:text-primary hover:bg-red-50"
            aria-label="Search"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="8.5"
                cy="8.5"
                r="5.75"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M13 13l3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <Button>Get A Demo</Button>
        </div>

        {/* Mobile controls (hamburger button) */}
        <div className="flex xl:hidden items-center ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-black hover:text-primary transition-colors focus:outline-none bg-transparent border-none cursor-pointer flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              // Close Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-[80px] left-0 right-0 bottom-0 bg-white z-[99] border-t border-gray-100 flex flex-col p-6 animate-in fade-in slide-in-from-top-4 duration-200 overflow-y-auto xl:hidden">
          {/* Mobile Navigation Accordion */}
          <div className="flex-1 flex flex-col gap-4 mb-8">
            {NAV_ITEMS.map((item) => {
              const isExpanded = activeMobileSub === item.label;
              return (
                <div key={item.label} className="border-b border-gray-50 pb-2">
                  <button
                    onClick={() => setActiveMobileSub(isExpanded ? null : item.label)}
                    className="w-full flex justify-between items-center text-left py-2 font-sans text-[18px] font-semibold text-black hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`transition-transform duration-200 text-gray-500 ${isExpanded ? "rotate-180 text-primary" : ""}`}
                      width="16"
                      height="16"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {isExpanded && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 animate-in fade-in slide-in-from-top-1 duration-150">
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block py-2 text-[16px] font-medium text-gray-600 hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Actions Footer */}
          <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-400">
                <circle cx="8.5" cy="8.5" r="5.75" stroke="currentColor" strokeWidth="1.6" />
                <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-transparent border-none focus:outline-none text-[15px] font-sans text-black"
              />
            </div>
            <Button className="w-full py-3.5 text-center flex justify-center items-center">
              Get A Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
