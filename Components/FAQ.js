import React from 'react';
import classes from './FAQ.module.css';
import QuestionAnswer from './QuestionAnswer';
import Link from 'next/link';
const FAQ = () => {
    return (
        <section className={classes.faqSection}>
            <h2>Foire aux questions</h2>
            <div className={classes.questionAnswerWrapper}>
                <QuestionAnswer
                    question="Combien coûte un site ?"
                    answer={["Le prix d'un site web varie énormément. Il dépend du type de site (landing page, blog, site e-commerce ...), des fonctionnalités attendues (formulaire de contact, inscription/connexion, paiement en ligne ...) et de la complexité du visuel à réalisé.", <br key="br-keyPrice" />, " Il n'est pas possible de répondre à cette question sans connaître vos besoins exacts, c'est pourquoi vous pouvez ", <Link href='/book-a-call' key="a-keyPrice">prendre rendez-vous </Link>, " avec moi pour en discuter."]}
                />
                <QuestionAnswer question="Combien de temps pour réaliser un site complet ?" answer={["Le temps de réalisation d'un site dépend du type de site et des fonctionnalités attendues.", <br key="br-keyDeadline" />, " Un minimum de deux semaines est requis."]} />
                <QuestionAnswer question="Quelles sont les technologies que j'utilise ?" answer={["J'utilise React et Next.js pour réaliser mes sites.", <br key="br-keyTechno1" />, "React est utilisé par Meta (anciennement Facebook) et facilite le développement d'interface utilisateur de qualités. ", <br key="br-keyTechno2" />, "Next.js se base sur React et apporte de meilleures performances ainsi qu'une meilleure prise en compte du SEO."]} />
            </div>

            <div className={classes.bottomCAT}>
                <p>D'autres questions en suspens ?</p>
                <Link href="/book-a-call" className='primary-button'>Réserver un appel</Link>

            </div>
        </section>
    );
};

export default FAQ;