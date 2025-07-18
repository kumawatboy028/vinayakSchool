"use client";

import { useState, useRef } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react or use your own icons

const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    submenu: [
      { name: "About Us", href: "/about-us" },
      { name: "Guiding Statements", href: "/about/guiding-statements" },
      { name: "Chairman's Message", href: "/about/chairman-message" },
      { name: "From the Desk Of Principal", href: "/about/principal-desk" },
      { name: "Awards & Recognitions", href: "/about/awards" },
      { name: "Accreditations & Affiliations", href: "/about/accreditations" },
      { name: "Our Infrastructure", href: "/about/infrastructure" },
      { name: "Governance and Leadership", href: "/about/governance" },
      { name: "Why Choose Us", href: "/about/why-choose" },
    ],
  },
  {
    name: "Admission",
    submenu: [
      { name: "Admission Desk", href: "/admission/procedure" },
      { name: "Admission Procedure", href: "/admission/fee" },
      { name: "School rules and policies", href: "/admission/fee" },
      { name: "Fee Structure", href: "/admission/fee" },
      { name: "Transport Route", href: "/admission/fee" },
      { name: "E-prospectus", href: "/admission/fee" },
      { name: "School Uniform", href: "/admission/fee" },
      { name: "School Timing", href: "/admission/fee" },
    ],
  },
  {
    name: "Academics",
    submenu: [
      { name: "Affiliation", href: "/academics/curriculum" },
      { name: "Our Curriculum", href: "/academics/faculty" },
      { name: "Admission under RTE", href: "/academics/faculty" },
      { name: "Streams Offered", href: "/academics/faculty" },
      { name: "Ranks and Honors", href: "/academics/faculty" },
      { name: "Career Counselling", href: "/academics/faculty" },
      { name: "Examination", href: "/academics/faculty" },
    ],
  },
  {
    name: "Mandatory Public Disclosure",
    href: "/mandatory-disclosure",
  },
  { name: "Boardings", href: "/boardings" },
  {
    name: "Facilities",
    submenu: [
      { name: "Sports and Yoga", href: "/facilities/library" },
      { name: "Science and Maths Lab", href: "/facilities/labs" },
      { name: "Digital Workstation", href: "/facilities/labs" },
      { name: "School Library", href: "/facilities/labs" },
      { name: "Computer Lab", href: "/facilities/labs" },
      { name: "Art and Craft", href: "/facilities/labs" },
      { name: "Music and Dance", href: "/facilities/labs" },
      { name: "Regular Health Check-ups", href: "/facilities/labs" },
      { name: "24 Hours CCTV Survelliance", href: "/facilities/labs" },
      { name: "Other Facilities", href: "/facilities/labs" },
    ],
  },
  {
    name: "Latest Updates",
    submenu: [
      { name: "News and Announcements", href: "/updates/news" },
      { name: "Press and Media", href: "/updates/news" },
      { name: "Our Gallery", href: "/updates/news" },
      { name: "Video Gallery", href: "/updates/news" },
      { name: "Morning Assembly", href: "/updates/news" },
      { name: "Houses", href: "/updates/news" },
    ],
  },
  {
    name: "Contact Us",
    submenu: [
      { name: "Reach Us", href: "/contact" },
      { name: "Apply for Admission", href: "/contact/feedback" },
      { name: "Careers", href: "/contact/feedback" },
    ],
  },
];

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
    }, 150);
  };

  return (
    <nav className="bg-[#fec375] text-gray-700 shadow relative z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center py-3">
        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap justify-center items-center gap-x-8 font-medium text-[15px]">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href || "#"}
                className="transition-colors hover:text-[#e0dfd6] inline-block py-2"
              >
                {item.name}
                {item.submenu && <span className="ml-1">▼</span>}
              </a>

              {item.submenu && openIndex === index && (
                <ul className="absolute left-0 top-full bg-[#fec375] min-w-[240px] border shadow-md z-10 rounded-md overflow-hidden">
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex}>
                      <a
                        href={subitem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#f5a623] transition-colors"
                      >
                        {subitem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <details className="group">
                    <summary className="cursor-pointer font-semibold py-2 border-b border-gray-300">
                      {item.name}
                    </summary>
                    <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-800">
                      {item.submenu.map((subitem, subindex) => (
                        <li key={subindex}>
                          <a href={subitem.href} className="block py-1">
                            {subitem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <a
                    href={item.href}
                    className="block font-semibold py-2 border-b border-gray-300"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
