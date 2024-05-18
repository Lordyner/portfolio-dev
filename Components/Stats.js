import React, { useContext } from 'react';
import classes from './Stats.module.css';
import DraggableCarousel from './UI/DraggableCarousel.js/DraggableCarousel';
import GlobalContext from '@/Store/GlobalContext';

const Stats = () => {

    const { isMobileResolution } = useContext(GlobalContext);
    const stats = [
        {
            title: "Crédibilité de l'entreprise",
            description: "75% des consommateurs admettent juger la crédibilité d'une entreprise en fonction du design de leur site internet."
        },
        {
            title: "Recommendations",
            description: "57% des internautes disent ne pas recommander une entreprise avec un site internet mal conçue pour mobile."
        },
        {
            title: "Engagement des utilisateurs",
            description: "38% des utilisateurs quittent un site internet si le contenu ou le design n'est pas attrayant."
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