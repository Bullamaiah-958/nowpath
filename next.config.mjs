/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/online-training', destination: '/servicenow-online-training', permanent: true },
      { source: '/classroom', destination: '/servicenow-classroom-training-hyderabad', permanent: true },
      { source: '/book-demo', destination: '/contact', permanent: true },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
}

export default nextConfig
