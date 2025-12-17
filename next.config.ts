import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // 👇 ADD THIS 'images' BLOCK to allow Google Drive URLs
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // The primary domain used in your image link: https://drive.google.com/uc?id=...
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        // Often required as Google redirects image content requests to this domain
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com", // 👈 Added wildcard '*' to catch all subdomains
      },
      // ✅ Vercel Blob (IMPORTANT)
      {
        protocol: "https",
        hostname: "*.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
