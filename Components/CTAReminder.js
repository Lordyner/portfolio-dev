import React from 'react';
import classes from './CTAReminder.module.css';
import Link from 'next/link';

const CTAReminder = ({ backgroundColor }) => {


    return (
        <section className={classes.ctaReminder} style={{ backgroundColor: backgroundColor }}>
            <div className={classes.content}>
                <div className={classes.textWrapper}>
                    <h2 className={classes.title}>Un besoin? Un projet ?</h2>
                    <p>Que vous ayez besoin de <b className='boldWord'>créer votre premier site internet</b> ou bien de <b className='boldWord'>refaire</b> un existant, je vous accompagne à chaque étape.</p>
                </div>
                <Link href="/contact" className='primary-button'>Discutons de votre besoin</Link>
            </div>
        </section>
    );
};

export default CTAReminder;