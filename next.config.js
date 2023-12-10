const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
const nextConfigDeveloppement = {
  reactStrictMode: true,
}
const nextConfigProduction = {
  reactStrictMode: false,
}

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfigDeveloppement;
  }
  return nextConfigProduction;
}
