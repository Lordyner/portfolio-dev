import React from 'react';
import classes from './FAQArticle2.module.css';
import Link from 'next/link';
import { Question } from './Question';
const FAQArticle3 = () => {

    return (
        <section className={classes.container}>
            <div className={`${classes.content} max-width`}>
                <Question title="C'est quoi un site vitrine ?" defaultOpen>
                    Un site vitrine est un site web qui a pour but de présenter les services ou produits d'une entreprise.
                </Question>
                <Question title="Pourquoi faire un site vitrine ?">
                    Un site vitrine permet de gagner en visibilité sur son activité ou entreprise, d'améliorer l'image de marque de votre entreprise et de générer des prospects.
                </Question>
                <Question title="Pour qui un site vitrine est nécessaire ?">
                    Les habitudes des consommateurs ont changé. Plus de 70% effectuent une recherche Google avant de faire appel à une entreprise. Il est donc vital de vous offrir une vitrine en ligne qui sera accessible 24/7 pour présenter votre entreprise et vos services.
                </Question>
                <Question title="Combien coûte la création d'un site vitrine ?">
                    Retrouvez toutes les informations liées au <Link href="https://www.thomasandrelubin.fr/blog/quel-est-le-prix-dun-site-vitrine-professionnel" target='_blank'>prix d'un site vitrine</Link>.
                </Question>
                <Question title="Quels sont les délais pour un projet ?">
                    Les délais pour un projet de site vitrine dépendent de la complexité du site. En général il faut compter 3 semaines de la conception à la mise en ligne.
                </Question>
                <Question title="Puis-je mettre à jour moi-même mon site ?">
                    Des gestionnaires de contenu (CMS) comme WordPress offrent des interfaces pour mettre à jour le contenu de votre site.
                </Question>
                <Question title="Quelle est la différence entre un site vitrine et une page Facebook ?">
                    <Link href="https://www.thomasandrelubin.fr/blog/avantages-site-internet-entreprise#aioseo-les-reseaux-sociaux" target='_blank'>Les avantages d'un site internet</Link> sont nombreux comparés à une page Facebook : possibilité de personnalisation du contenu et du design illimitée, pas de dépendance à une plateforme, référencement naturel. C'est pourquoi il ne faut pas les voir comme des concurrents mais plutôt comme deux canaux d'acquisition clients distincts.
                </Question>
            </div>
        </section>
    );
};

export default FAQArticle3;