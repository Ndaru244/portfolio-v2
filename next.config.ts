import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "spn8fhkt2r.ucarecd.net", // Domain spesifik Anda
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
