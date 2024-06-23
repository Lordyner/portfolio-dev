import React from 'react';
import classes from './Process.module.css';
import SteppedProgress from './UI/SteppedProgress';

const Process = () => {
    return (
        <section className={classes.container}>
            <div className={`${classes.content} max-width`}>
                <div className={classes.textWrapper}>
                    <h2>Un processus <span className="accentuedWord">clair</span> et <span className="accentuedWord">transparent</span></h2>
                    <p>Travailler avec moi, c'est bénéficier d'un processus de collaboration clair et structuré.</p>
                </div>
                <SteppedProgress />
            </div>
        </section>
    );
};

export default Process;