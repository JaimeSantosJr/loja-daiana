/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  allowedDevOrigins: [
    'vm-7wzte1g434wztiwfptpijvip.vusercontent.net',
    'localhost:3000',
    'localhost:3012',
  ],
}

export default nextConfig
