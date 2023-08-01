/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pinimg.com"],
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
