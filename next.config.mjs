/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/online-training', destination: '/servicenow-online-training', permanent: true },
      { source: '/classroom', destination: '/servicenow-classroom-training-hyderabad', permanent: true },
      { source: '/book-demo', destination: '/contact', permanent: true },
      { source: '/courses/servicenow-itsm-training', destination: '/servicenow-itsm-training', permanent: true },
      { source: '/syllabus/servicenow-itsm-training', destination: '/syllabus/servicenow-itsm-training-in-hyderabad', permanent: true },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
}

export default nextConfig
