/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: !isProd,
  images: {
    domains: ['lightslategrey-horse-191422.hostingersite.com', 'secure.gravatar.com'],
  }
}

module.exports = nextConfig