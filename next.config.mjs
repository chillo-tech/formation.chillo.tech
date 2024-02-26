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
    ],
  },
};

export default nextConfig;
