import React, { useRef } from 'react';
import useData from '../Hooks/useData';
import { getLogger } from '@/logging/log-util';

const Contact = () => {
    const logger = getLogger('Contact');

    const form = useRef();
    const { setIsLoading } = useData();
    const { setShowPopupConfirmation } = useData();
    const { setShowPopupError } = useData();
    const { setShowPopupContactFormIncorrect } = useData();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const mail = {
            name: form.current[0].value,
            mailAdress: form.current[1].value,
            message: form.current[2].value,
        }
        if (!mail.name || mail.name === ""
            || !mail.mailAdress || mail.mailAdress === "" || !mail.mailAdress.includes === "@"
            || !mail.message || mail.message === ""
        ) {
            logger.info('Formulaire envoie de mail non valide')
            setIsLoading(false);
            setShowPopupContactFormIncorrect(true);
            return;
        }
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: form.current[0].value,
                mailAdress: form.current[1].value,
                message: form.current[2].value,
            }),
            headers: { 'Content-Type': 'application/json' }

        }).then(response => {
            if (response.status === 201) {
                setIsLoading(false);
                setShowPopupConfirmation(true);
            } else {
                setIsLoading(false);
                setShowPopupError(true);

            }
        })
    };

    return (
        <section id="contact-section">
            <h2>CONTACT</h2>
            <form ref={form} onSubmit={sendEmail} id="contact-form">
                <div className="contact-form-header">
                    <input type="text" name="user_name" placeholder="NOM"></input>
                    <input type="text" name="user_mail" placeholder="MAIL"></input>
                </div>
                <div className="contact-form-body">
                    <textarea name="message" placeholder="MESSAGE"></textarea>
                </div>
                <div className="contact-form-footer">
                    <button className="primary-button">ENVOYEZ</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;