/** @type {import('next').NextConfig} */


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backoffice.chillo.fr",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "www.canva.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
