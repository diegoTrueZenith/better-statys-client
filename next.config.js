/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['via.placeholder.com', 'res.cloudinary.com', 'guesty-listing-images.s3.amazonaws.com'],
  },
  async redirects() {
    return [
      {
        source: '/booking',
        destination: '/rentals',
        permanent: true,
      },
    ]
  },

}

module.exports = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/contact-us': { page: '/contact-us' },
      '/services': { page: '/services' },

    }
  }
}


module.exports = nextConfig
