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
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Academic Programs", href: "#programs" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const academics = [
    { name: "Pre-Primary", href: "#pre-primary" },
    { name: "Primary School", href: "#primary" },
    { name: "Middle School", href: "#middle" },
    { name: "Secondary School", href: "#secondary" },
    { name: "Admissions", href: "#admissions" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-400",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-400" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-400",
    },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-400" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ];

  return (
    <footer className="bg-[#d7861b] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-[#1f3c88]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Vinayak Education Group</h3>
                <p className="text-white text-sm">Excellence in Education</p>
              </div>
            </div>

            <p className="text-white mb-6 leading-relaxed">
              we are whole-heartedly dedicated to assist children in their
              self-enlightenment besides ensuring a synchronous growth of their
              mind, body and soul.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-200 ${social.color} hover:bg-white/20 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Academics</h4>
            <ul className="space-y-3">
              {academics.map((academic) => (
                <li key={academic.name}>
                  <a
                    href={academic.href}
                    className="text-white hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {academic.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white leading-relaxed">
                    123 Education Street, Knowledge City, State 560001
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white">+91 98297 48121</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white">visftr@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-white text-sm">
              © 2025 Vinayak Education Group. All rights reserved.
            </div>
            <div className="text-white text-sm">
              Designed and developed by {"Sigma Fusion"}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-white">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
