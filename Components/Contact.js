import React, { useState, useRef, useContext } from 'react';
import classes from './Contact.module.css';
import Link from 'next/link';
import appelGif from '@/public/images/contact/appel.gif';
import emailGif from '@/public/images/contact/email.gif';
import Image from 'next/image';
import CalendlyEmbedded from './CalendlyEmbedded';
import emailjs from '@emailjs/browser';
import SpringModal from './UI/SpringModal';
import GlobalContext from '@/Store/GlobalContext';

const Contact = () => {

    const form = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const { isLoading, setIsLoading } = useContext(GlobalContext);
    const [title, setTitle] = useState();
    const [message, setMessage] = useState();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
                publicKey: process.env.NEXT_PUBLIC_KEY_MAIL,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsLoading(false);
                    setTitle('Message <span class="accentuedWord">envoyé</span> !');
                    setMessage('Votre message a bien été envoyé, je vous recontacterai dans les 24h.');
                    setIsOpen(true);
                    form.current.reset();

                },
                (error) => {
                    console.log('ERROR');
                    setIsLoading(false);
                    setTitle("<span class=\"accentuedWord\">Une erreur</span> s'est produite !");
                    setMessage('Vous pouvez me contacter directement par téléphone ou par mail ou prendre rendez-vous directement dans mon agenda');
                    setIsOpen(true);
                },
            );
    }

    return (
        <section className={classes.contactSection}>
            <div className={`${classes.content} max-width`}>
                <h1>Discutons de votre <span className="accentuedWord">projet</span></h1>
                <p className={classes.description}>
                    Vous avez un projet ? Un besoin ? Vous pouvez <Link href="#calendly">réserver</Link> un rendez-vous téléphonique pour que nous échangions dessus ou bien <Link href="#contactForm">m'en parlez</Link> via le formulaire de contact.<br /><br />
                    Je reviendrais vers vous dans les 24h afin d'échanger plus en détail sur votre besoin.
                </p>
                <div className={classes.contactInfos}>
                    <div className={classes.contactInfo}>
                        <Image src={appelGif} alt="Gif d'un téléphone qui vibre" className={classes.icon} />
                        <p>06 37 51 43 79</p>
                    </div>
                    <div className={classes.contactInfo}>
                        <Image src={emailGif} alt="Gif d'un mail qui s'envoie" className={classes.icon} />
                        <p>dev@thomasandrelubin.fr</p>
                    </div>
                </div>
                <div className={classes.contactMeans}>
                    <div id='contactForm' className={classes.formPart}>
                        <h2>Parlez moi de votre <span className="accentuedWord">projet</span></h2>
                        <form ref={form} className={classes.contactForm} onSubmit={sendEmail}>
                            <div className={classes.fieldsContainer}>
                                <div className={classes.formGroup}>
                                    <label htmlFor="from_name" className={classes.fieldName}>Nom</label>
                                    <input type="text" id="from_name" name="from_name" required />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="phone" className={classes.fieldName}>Téléphone</label>
                                    <input type="tel" id="phone" pattern="[0-9]+" title="Veuillez saisir un numéro de téléphone valide" name="phone" required />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="reply_to" className={classes.fieldName}>Adresse mail</label>
                                    <input type="mail" id="mail" pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$' title='Veuillez saisir une adresse mail valide' name="reply_to" required />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="message" className={classes.fieldName}>Message</label>
                                    <textarea id="message" name="message" required></textarea>
                                </div>
                            </div>
                            <div className={classes.buttonWrapper}>
                                <button className='primary-button' type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                    <h2 className='accentuedWord'>OU</h2>
                    <CalendlyEmbedded />
                    <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} title={title} message={message} />
                </div>
            </div>
        </section>
    );
};

export default Contact;