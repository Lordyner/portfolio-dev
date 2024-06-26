/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: !isProd,
}

module.exports = nextConfig