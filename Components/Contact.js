import React, { useContext } from 'react';
import classes from './Contact.module.css';
import Link from 'next/link';
import appelGif from '@/public/images/mobile/contact/appel.gif';
import emailGif from '@/public/images/mobile/contact/email.gif';
import Image from 'next/image';
import CalendlyEmbedded from './CalendlyEmbedded';
import GlobalContext from '@/Store/GlobalContext';

const Contact = () => {

    const { isMobileResolution } = useContext(GlobalContext);

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
                        <form className={classes.contactForm}>
                            <div className={classes.fieldsContainer}>
                                <div className={classes.formGroup}>
                                    <label htmlFor="name" className={classes.fieldName}>Nom</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="phone" className={classes.fieldName}>Téléphone</label>
                                    <input type="text" id="phone" name="phone" required />
                                </div>
                                <div className={classes.formGroup}>
                                    <label htmlFor="mail" className={classes.fieldName}>Adresse mail</label>
                                    <input type="mail" id="mail" name="mail" required />
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
                </div>
            </div>
        </section>
    );
};

export default Contact;