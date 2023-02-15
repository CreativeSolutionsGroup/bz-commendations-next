/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "drive.google.com",
      "via.placeholder.com",
      "lh3.googleusercontent.com"
    ]
  }
}

module.exports = nextConfig
