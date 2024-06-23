const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */


module.exports = {
  async redirects() {
    return [
      {
        source: '/api/auth/callback/google',
        destination: '/api/auth/callback/google',
        permanent: true,
      },
    ];
  },
};
