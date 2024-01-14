import { getLogger } from '@/logging/log-util';
import jose from 'node-jose';


export default async function getAccessToken(scope) {

    const logger = getLogger('getAccessToken method');
    // Extraire la clé privée
    const privateKey = atob(process.env.GOOGLE_CALENDAR_PRIVATE_KEY);

    // 1. Create a JWT Token
    // a. Create the payload
    let now = Math.floor(Date.now() / 1000);
    let exp = now + 3600
    const JWTClaimSet = {
        "iss": process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        "scope": scope,
        "aud": "https://oauth2.googleapis.com/token",
        "exp": exp,
        "iat": now
    };

    // b. Get the key

    const key = await jose.JWK.asKey(privateKey, 'pem', { kid: `${process.env.KID}`, alg: + 'RS256' });

    // c. Sign the JWT with the key
    logger.info('Signing JWS');
    const jws = await jose.JWS.createSign({ format: 'compact', fields: { alg: 'RS256' } }, key)
        .update(JSON.stringify(JWTClaimSet))
        .final();


    // 2. Request access token 
    let parameters = {
        grant_type: `${process.env.GRANT_TYPE}`,
        assertion: jws
    }
    var formBody = Object.keys(parameters)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key]))
        .join('&');
    let data = null;
    try {
        logger.info('Requesting access token');
        const response = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formBody
        });

        data = await response.json();
        logger.info('Response : ' + response.status + ' ' + response.statusText);
    } catch (error) {
        logger.error('Error while requesting access token : ' + error.message);
    }

    return data?.access_token;
}