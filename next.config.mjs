/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/online-training', destination: '/servicenow-online-training', permanent: true },
      { source: '/classroom', destination: '/servicenow-classroom-training-hyderabad', permanent: true },
      { source: '/book-demo', destination: '/contact', permanent: true },
      { source: '/courses/servicenow-itsm-training', destination: '/servicenow-itsm-training', permanent: true },
      { source: '/courses/servicenow-admin-training', destination: '/servicenow-admin-training', permanent: true },
      { source: '/courses/servicenow-developer-training', destination: '/servicenow-developer-training', permanent: true },
      { source: '/courses/servicenow-scripting-training', destination: '/servicenow-scripting-training', permanent: true },
      { source: '/courses/servicenow-itom-training', destination: '/servicenow-itom-training', permanent: true },
      { source: '/courses/servicenow-cmdb-training', destination: '/servicenow-cmdb-training', permanent: true },
      { source: '/courses/servicenow-csm-training', destination: '/servicenow-csm-training', permanent: true },
      { source: '/courses/servicenow-hrsd-training', destination: '/servicenow-hrsd-training', permanent: true },
      { source: '/courses/servicenow-grc-training', destination: '/servicenow-grc-training', permanent: true },
      { source: '/courses/servicenow-now-assist-training', destination: '/servicenow-now-assist-training', permanent: true },
      { source: '/syllabus/servicenow-itsm-training', destination: '/syllabus/servicenow-itsm-training-in-hyderabad', permanent: true },
      { source: '/syllabus/servicenow-admin-training', destination: '/syllabus/servicenow-admin-training-in-hyderabad', permanent: true },
      { source: '/syllabus/servicenow-developer-training', destination: '/syllabus/servicenow-developer-training-in-hyderabad', permanent: true },
      { source: '/syllabus/servicenow-scripting-training', destination: '/syllabus/servicenow-scripting-training-in-hyderabad', permanent: true },
      { source: '/syllabus/servicenow-itom-training', destination: '/syllabus/servicenow-itom-training-in-hyderabad', permanent: true },
      { source: '/syllabus/servicenow-cmdb-training', destination: '/syllabus/servicenow-cmdb-training-in-hyderabad', permanent: true },
      { source: '/syllabus/servicenow-csm-training', destination: '/syllabus/servicenow-csm-training-in-hyderabad', permanent: true },
      { source: '/syllabus/servicenow-hrsd-training', destination: '/syllabus/servicenow-hrsd-training-in-hyderabad', permanent: true },
      { source: '/syllabus/servicenow-grc-training', destination: '/syllabus/servicenow-grc-training-in-hyderabad', permanent: true },
      { source: '/syllabus/servicenow-now-assist-training', destination: '/syllabus/servicenow-now-assist-training-in-hyderabad', permanent: true },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
}

export default nextConfig
