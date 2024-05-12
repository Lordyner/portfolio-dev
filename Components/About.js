import React from 'react';
import classes from './About.module.css';

const About = () => {
    return (
        <main className={classes.aboutContainer}>
            <div className={classes.content}>
                <h2 className={classes.title}>A propos</h2>
            </div>
        </main>
    );
};

export default About;