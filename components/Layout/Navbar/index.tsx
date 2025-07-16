"use client";

import { useState } from "react";

const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    submenu: [
      { name: "About Us", href: "/about/about-us" },
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
  {
    name: "Boardings",
    href: "/boardings",
  },
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

  return (
    <nav className="bg-[#fec375] text-gray-700 shadow relative z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center items-center px-4 py-3 gap-x-8 max-w-screen-xl mx-auto font-medium text-[15px]">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <a
                href={item.href || "#"}
                className="whitespace-nowrap transition-colors hover:text-[#e0dfd6]"
              >
                {item.name} {item.submenu && <span className="ml-1">▼</span>}
              </a>

              {/* Dropdown */}
              {item.submenu && openIndex === index && (
                <ul className="absolute top-full left-0 mt-2 min-w-[240px] bg-[#fec375] border border-[#fec375] shadow-md z-10">
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex}>
                      <a
                        href={subitem.href}
                        className="block px-4 py-2 text-gray-700 font-medium hover:bg-[#fec375] transition-colors"
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
    </nav>
  );
};

export default Navbar;
