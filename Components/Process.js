import React from 'react';
import classes from './Process.module.css';
import SteppedProgress from './UI/SteppedProgress';

const Process = () => {

    const numSteps = 4;
    const stepContent = [
        "<b className='boldWord'>Réunion de cadrage</b> :<br/><br/> Je vous poserais mes questions afin de bien comprendre votre activité et vos besoins et d'être en mesure de vous proposer le devis d'une solution qui répond à vos objectifs. Je vous expliquerais sur quoi je mets l'accent pour réaliser un bon site internet sur mesure pour que vous puissiez suivre le projet facilement.",
        "<b className='boldWord'>Lancement du projet</b> :<br/><br/> Une fois les objectifs bien définis et le devis signé, vous recevrez un mail récapitulant tout ce qu'il y a à savoir.",
        "<b className='boldWord'>Création du site web</b> :<br/><br/> La création du site internet est composée de plusieurs étapes (études de mots-clés, définition de la structure du site, etc). Vous serez notifié à chaque étape terminée afin de toujours être au courant de l'avancé du projet et vous aurez accès à chaque étape à un document résumant le travail réalisé. Une fois les maquettes réalisées, je vous les présenterais en direct afin que vous puissiez me faire vos remarques. Vos retours pris en compte dans la création de votre site internet, je vous le présenterais en direct et vous donnerais un lien d'accès sur un environnement privé et sécurisé.",
        "<b className='boldWord'>Hébergement du site web </b>:<br/><br/> Une fois votre site internet créé et vos retours pris en compte, je m'occuperais de son hébergement et de sa mise en ligne. Si vous n'avez pas de nom de domaine, je vous assisterai pour l'achat d'un nom de domaine. Si vous avez déjà un nom de domaine, je m'occuperai de rediriger votre nouveau site vers votre nom de domaine.",
        "<b className='boldWord'>Maintenance et référencement naturel</b> :<br/><br/> Je m'occupe de la partie maintenance de votre site internet afin que celui-ci soit toujours à jour en termes de technologies et sécurité. Vous avez accès à un back-office vous permettant de modifier le contenu de votre site. Je propose également des forfaits de publication de contenu régulier (articles, infographies, etc) pour améliorer le référencement de votre site et générer plus de trafic.",
    ]
    return (
        <section className={classes.container}>
            <div className={`${classes.content} max-width`}>
                <div className={classes.textWrapper}>
                    <h2>Processus de création d'un <span className='accentuedWord'>site web en freelance</span></h2>
                    <p>
                        La création de site web par un freelance est la solution qu'il vous faut si vous recherchez un <b className="fw-500">résultat de qualité</b> et une <b className="fw-500">collaboration facile</b>.<br /><br />
                        Mon travail avec mes clients suit un <b className="fw-500">processus simple en 5 étapes</b> qui garantissent que le site internet créé soit à la hauteur des attentes de mes clients.
                    </p>
                </div>
                <SteppedProgress stepContent={stepContent} numSteps={numSteps} />
            </div>
        </section>
    );
};

export default Process;