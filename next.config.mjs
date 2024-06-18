/** @type {import('next').NextConfig} */

const nextConfig = {
  // Uncomment the following line if you need to export your Next.js app as static files
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'liordev.ru',
      },
    ],
  },
}

export default nextConfig