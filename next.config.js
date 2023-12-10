const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
const nextConfigDeveloppement = {
  reactStrictMode: true,
  env: {
    mail_contact_service_id: '',
    mail_contact_template_id: '',
    mail_contact_public_api_key: '',
    mail_contact_private_api_key: ''
  }
}
const nextConfigProduction = {
  reactStrictMode: true,
  env: {
    mail_contact_service_id: '',
    mail_contact_template_id: '',
    mail_contact_public_api_key: '',
    mail_contact_private_api_key: ''
  }
}

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfigDeveloppement;
  }
  return nextConfigProduction;
}
