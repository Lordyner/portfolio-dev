import React from 'react';
import classes from './Stats.module.css';
import CardSwip from './UI/CardSwip';

const Stats = () => {
    return (
        <section className={classes.stats}>
            <div className={`${classes.content} max-width`}>
                <h2>L'importance d'un site internet</h2>
                <p>Introduction à l'importance d'un site internet en quelques chiffres</p>
                <CardSwip />
            </div>
        </section>
    );
};

export default Stats;