/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/services/generator-monitoring",
        destination: "/services/truck-telematics",
        permanent: true
      },
      {
        source: "/services/water-gas-metering",
        destination: "/services/utility-monitoring",
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "randomuser.me" }
    ]
  }
};

export default nextConfig;
