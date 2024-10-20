import React from 'react';
import classes from './FAQArticle2.module.css';
import Link from 'next/link';
import { Question } from './Question';
const FAQArticle2 = () => {

    return (
        <section className={classes.container}>
            <div className={`${classes.content} max-width`}>
                <Question title="Quel est le coût moyen de la maintenance d'un site web en 2024 ?" defaultOpen>
                    Le coût moyen de la maintenance d'un site web en 2024 est de 1 000 €/mois. Mais cela reste une moyenne et comme pour la création d'un site, cela ne veut pas dire grand chose. Le coût moyen de maintenance par type de site vous donnera une idée plus précise :<br /><br />
                    <ul>
                        <li>coût moyen de maintenance d'un site vitrine : 150 €/mois</li>
                        <li>coût moyen de maintenance d'un site e-commerce : 1 200 €/mois</li>
                    </ul>

                </Question>
                <Question title="Dois-je engager un développeur pour la maintenance de mon site ou le faire moi-même ?">
                    Je vous recommanderais de faire appel à un prestataire qualifié comme un développeur pour la maintenance de votre site.<br /><br />

                    Il est possible de s'en sortir tout seul pour des petits sites en y consacrant beaucoup de temps.<br /><br />

                    Mais comme pour assurer l'entretien de votre voiture, vous aurez de meilleurs résultats et l'esprit plus tranquille en le confiant à un spécialiste.
                </Question>
                <Question title="Existe-t-il des forfaits adaptés aux petits sites e-commerce ?">
                    Il existe des forfaits adaptés aux petits sites e-commerce. Grâce à des solutions comme PrestaShop ou Shopify, de plus en plus de commerçant vendent leurs produits sur Internet.<br /><br />

                    Leurs besoins de maintenance ne sont pas ceux d'une plateforme comme Amazon ou Leboncoin, des forfaits de maintenances adapté à leurs besoins sont proposés par de nombreux prestataires.
                </Question>
            </div>
        </section>
    );
};

export default FAQArticle2;