import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/finance-services", destination: "/virtual-cfo-services", permanent: true },
      { source: "/business-advisory-services", destination: "/business-management-consultancy-services", permanent: true },
      { source: "/business-growth-services", destination: "/business-management-consultancy-services", permanent: true },
    ];
  },
};

export default nextConfig;
