"use client";

import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  ChevronRight,
  Heart,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Academic Programs", href: "/academics/curriculum" },
    { name: "Facilities", href: "/facilities/sports-and-yoga" },
    { name: "Contact", href: "/#contact-section" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:bg-pink-600",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="bg-[#d7861b] text-white">
      {/* Top Decoration */}
      <div className="h-1.5 w-full bg-[#fec375]"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* 1. School Info */}
          <div className="space-y-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                <GraduationCap className="w-7 h-7 text-[#d7861b]" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold leading-tight">
                  Vinayak Group
                </h3>
                <p className="text-[#fec375] text-xs font-bold uppercase tracking-wider">
                  Excellence in Education
                </p>
              </div>
            </div>
            <p className="text-orange-50/90 leading-relaxed text-sm max-w-sm mx-auto sm:mx-0">
              Assisting children in self-enlightenment and ensuring synchronous
              growth of mind, body, and soul.
            </p>
            <div className="flex justify-center sm:justify-start gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-6 pb-2 border-b-2 border-[#fec375] inline-block">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-center sm:justify-start text-orange-50/80 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 text-[#fec375] opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0 hidden sm:block" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-6 pb-2 border-b-2 border-[#fec375] inline-block">
              Contact Info
            </h4>
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <MapPin className="w-5 h-5 text-[#fec375] flex-shrink-0" />
                <p className="text-sm text-orange-50/90 leading-snug">
                  Near Do Janti Balaji, Churu Road, Fatehpur, Sikar, 332301
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <Phone className="w-5 h-5 text-[#fec375] flex-shrink-0" />
                <p className="text-sm text-orange-50/90">+91 98297 48121</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <Mail className="w-5 h-5 text-[#fec375] flex-shrink-0" />
                <p className="text-sm text-orange-50/90">visftr@gmail.com</p>
              </div>
            </div>
          </div>

          {/* 4. Support Card */}
          <div className="relative group overflow-hidden bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/30 text-center shadow-2xl transition-all duration-500 hover:shadow-[#fec375]/30">
            {/* Decorative Glow Background - Increased opacity for better visibility */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#fec375] opacity-30 blur-3xl group-hover:opacity-50 transition-opacity duration-500"></div>

            <div className="relative z-10">
              {/* Dynamic Icon/Badge - High contrast background */}
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-2xl bg-white text-[#d7861b] shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <GraduationCap className="w-8 h-8" />
              </div>

              {/* Title - Changed "Open" color to the brighter yellow for readability against the orange bg */}
              <h4 className="text-2xl font-black text-white mb-2 tracking-tight drop-shadow-sm">
                Admissions <span className="text-[#fec375]">Open</span>
              </h4>

              {/* Description - Used white with high opacity for better contrast */}
              <p className="text-sm text-white/90 mb-6 leading-relaxed font-medium">
                Secure your {`child's`} future today. Enroll now for the{" "}
                <span className="bg-white/20 px-1.5 py-0.5 rounded text-white font-bold">
                  2025-26
                </span>{" "}
                academic session.
              </p>

              {/* Button - Added a slight dark shadow to make it pop off the glass card */}
              <a
                href="#contact-section"
                className="relative overflow-hidden inline-flex items-center justify-center w-full py-3.5 px-6 bg-[#fec375] text-[#d7861b] font-black rounded-2xl transition-all duration-300 transform hover:scale-[1.05] hover:bg-white active:scale-95 shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>

                {/* Shine Effect Animation */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/60 opacity-50 group-hover:animate-shine" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-black/10 py-6 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-orange-50/60 text-xs text-center">
            © 2025 Vinayak Education Group. All Rights Reserved.
          </p>

          <div className="flex items-center gap-1 text-xs text-orange-50/60">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-400 fill-current" />
            <span>by</span>
            <a
              href="https://sigmafusion.in/"
              target="_blank"
              className="hover:text-white font-bold underline decoration-[#fec375]"
            >
              Sigma Fusion
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
