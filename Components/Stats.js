import React, { useContext } from 'react';
import classes from './Stats.module.css';
import DraggableCarousel from './UI/DraggableCarousel.js/DraggableCarousel';
import GlobalContext from '@/Store/GlobalContext';

const Stats = () => {

    const { isMobileResolution } = useContext(GlobalContext);
    const stats = [
        {
            title: "Attention là où ça compte",
            description: "Les sites internet sont la première source d'information pour 97% des consommateurs."
        },
        {
            title: "Attention là où ça compte 2",
            description: "Les sites internet sont la première source d'information pour 97% des consommateurs."
        },
        {
            title: "Attention là où ça compte 3",
            description: "Les sites internet sont la première source d'information pour 97% des consommateurs."
        }
    ]

    return (
        <section className={classes.stats}>
            <div className={`${classes.content} max-width`}>
                <div className={classes.textWrapper}>
                    <h2>L'importance d'un site internet</h2>
                    <p>Introduction à l'importance d'un site internet en quelques chiffres</p>
                </div>
                {isMobileResolution && <DraggableCarousel items={stats} />}
                {!isMobileResolution &&
                    <div className={classes.cards}>
                        {stats.map((stat, index) => {
                            return (
                                <div key={index} className={classes.card}>
                                    <h3 className={classes.title}>{stat.title}</h3>
                                    <p className={classes.description}>{stat.description}</p>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </section>
    );
};

export default Stats;