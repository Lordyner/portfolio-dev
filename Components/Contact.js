import React from 'react';
import classes from './Contact.module.css';
const Contact = () => {

    return (
        <section className={classes.contactSection}>
            <div className={`${classes.content} max-width`}>
                <h2>Discutons de votre projet</h2>
                <p className={classes.description}>Vous avez un projet ? Discutons-en via visioconférence ou par mon formulaire de contact.<br />
                    Je m'engage à revenir vers vous dans les 24h.<br /><br />
                    Vous pouvez me joindre au 06 37 51 43 79 ou par mail à l'adresse suivante :  dev@thomasandrelubin.fr</p>

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
        </section>
    );
};

export default Contact;