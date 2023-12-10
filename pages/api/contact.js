import { getLogger } from '@/logging/log-util';
import emailjs from '@emailjs/nodejs';

export default function sendEmail(req, res) {
    const logger = getLogger('contact');
    logger.info('Method sendEmail')
    const params = {
        name: req.body.name,
        mailAdress: req.body.mailAdress,
        message: req.body.message
    }
    console.log(JSON.stringify(params))
    if (!params.name || params.name === ""
        || !params.mailAdress || params.mailAdress === "" || !params.mailAdress.includes === "@"
        || !params.message || params.message === ""
    ) {
        logger.info('sendEmail params invalid');
        res.status(400).json({ message: 'Parameters are not correct' })
        return;
    }
    try {
        return emailjs
            .send(process.env.mail_contact_service_id, process.env.mail_contact_template_id, params, {
                publicKey: process.env.mail_contact_public_api_key,
                privateKey: process.env.mail_contact_private_api_key,
            })
            .then(
                (response) => {
                    logger.info('Mail successfully sent', response.status, response.text)
                    res.status(201).json({ message: 'Mail sent' })
                },
                (err) => {
                    logger.error('Error sending mail', response.status, response.text)
                    res.status(500).json({ message: 'Error sending mail' })
                },
            );

    } catch (error) {
        logger.error('Error sending mail', response.status, response.text)
        res.status(500).json({ message: 'Error sending mail' });
    }

}