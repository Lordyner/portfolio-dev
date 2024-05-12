import React from 'react';
import classes from './CTAReminder.module.css';
import Link from 'next/link';

const CTAReminder = () => {
    return (
        <section className={classes.ctaReminder}>
            <div className={classes.content}>
                <h2 className={classes.title}>Une idée de projet ?</h2>
                <Link href="#" className='primary-button light'>Contactez-moi</Link>
            </div>
        </section>
    );
};

export default CTAReminder;