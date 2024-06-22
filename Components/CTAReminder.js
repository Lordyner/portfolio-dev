import React from 'react';
import classes from './CTAReminder.module.css';
import Link from 'next/link';

const CTAReminder = () => {
    return (
        <section className={classes.ctaReminder}>
            <div className={classes.content}>
                <div className={classes.textWrapper}>
                    <h2 className={classes.title}>Un besoin? Un projet ?</h2>
                    <p>Que vous ayez besoin de <b>créer</b> un premier site internet ou bien de <b>refaire</b> un existant, je vous accompagne à chaque étape.</p>
                </div>
                <Link href="#" className='primary-button'>Discutons de votre besoin</Link>
            </div>
        </section>
    );
};

export default CTAReminder;