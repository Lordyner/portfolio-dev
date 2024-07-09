import React from 'react';
import classes from './Process.module.css';
import SteppedProgress from './UI/SteppedProgress';

const Process = () => {

    const numSteps = 4;
    const stepContent = [
        "<b className='boldWord'>Première prise de contact</b> :<br/><br/> Discussion de vos besoins et objectifs. Lors de cette première étape, nous organiserons une réunion pour discuter en détail de vos besoins, de vos objectifs et de vos attentes pour le projet. Cette discussion permettra de définir clairement vos exigences et les fonctionnalités souhaitées. Nous aborderons également votre budget et vos délais",
        "<b className='boldWord'>Proposition de devis</b> :<br/><br/> Élaboration d'une proposition détaillée adaptée à votre projet. Suite à notre discussion initiale, je vous fournirai un devis détaillé incluant une proposition de projet sur mesure. Ce document précisera les fonctionnalités à développer, les délais de réalisation, ainsi que les coûts associés. Vous aurez ainsi une vision claire et transparente de l'ensemble du projet avant de vous engager.",
        "<b className='boldWord'>Présentation des maquettes</b> :<br/><br/> Une fois le devis signé et les maquettes réalisées, je vous les présenterais lors d'une réunion. Ce sera l'occasion pour vous de me donner vos retours sur le design ainsi que sur le contenu. J'intégrerais chacun de vos retours avant d'attaquer le développement.",
        "<b className='boldWord'>Présentation du site</b>:<br/><br/> Après la fin du développement, je vous présenterais votre site sur un environnement de test pour que vous puissiez le parcourir et me faire vos retours.",
        "<b className='boldWord'>Lancement et Suivi</b> :<br/><br/> Vos retours pris en compte, je vous accompagne sur la partie hébergement et nom de domaine pour que tout soit prêt. Je m'occupe ensuite de la mise en ligne de votre site, puis je vous présente votre espace Google Analytics qui permettra de suivre les indicateurs de performance clé de votre site.",
    ]
    return (
        <section className={classes.container}>
            <div className={`${classes.content} max-width`}>
                <div className={classes.textWrapper}>
                    <h2>Un processus <span className="accentuedWord">clair</span> et <span className="accentuedWord">transparent</span></h2>
                    <p>Travailler avec moi, c'est bénéficier d'un processus de collaboration clair et structuré.</p>
                </div>
                <SteppedProgress stepContent={stepContent} numSteps={numSteps} />
            </div>
        </section>
    );
};

export default Process;