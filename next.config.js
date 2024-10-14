/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: !isProd,
  images: {
    domains: ['lightslategrey-horse-191422.hostingersite.com', 'secure.gravatar.com'],
  },
  async redirects() {
    return [
      {
        source: '/blog/objectif-site-internet',
        destination: '/blog/objectifs-site-internet-entreprise',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig