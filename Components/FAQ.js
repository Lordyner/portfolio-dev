import React from 'react';
import classes from './FAQ.module.css';
import QuestionAnswer from './QuestionAnswer';
const FAQ = () => {
    return (
        <section className={classes.faqSection}>
            <h2>Foire aux questions</h2>
            <div className={classes.questionAnswerWrapper}>
                <QuestionAnswer
                    question="Combien coûte un site ?"
                    answer={["Le prix d'un site web varie énormément. Il dépend du type de site (landing page, blog, site e-commerce ...), des fonctionnalités attendues (formulaire de contact, inscription/connexion, paiement en ligne ...) et de la complexité du visuel à réalisé.", <br />, " Il n'est pas possible de répondre à cette question sans connaitre vos besoins exacts, c'est pourquoi vous pouvez ", <a href='/book-a-call'>prendre rendez-vous </a>, " avec moi pour en discuter."]}
                />
                <QuestionAnswer question="Combien de temps pour réaliser un site complet ?" answer={["Le temps de réalisation d'un site dépend du type de site et des fonctionnalités attendues.", <br />, " Un minimum de deux semaines est requis."]} />
                <QuestionAnswer question="Quels sont les technologies que vous utilisez ?" answer={["J'utilise React et Next.js pour réaliser mes sites.", <br />, "React est utilisé par Meta (anciennement Facebook) et facilite le développement d'interface utilisateur de qualités. ", <br />, "Next.js se base sur React et apporte de meilleures performances ainsi qu'une meilleure prise en compte du SEO."]} />
                <QuestionAnswer question="Pourquoi ne pas faire un site wordpress ?" answer={["Contrairement à un site WordPress, la réalisation de mes sites est sur mesure et n'est pas limitée par un certain template. ", <br />, "La technologie que j'utilise est aussi conçue pour optimiser les images, le chargement des pages et le SEO."]} />
            </div>

            <div className={classes.bottomCAT}>
                <p>D'autres questions en suspens ?</p>
                <button className='primary-button'>Réserver un appel</button>
            </div>
        </section>
    );
};

export default FAQ;