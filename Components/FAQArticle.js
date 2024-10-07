import React from 'react';
import classes from './FAQArticle.module.css';
import Link from 'next/link';
import { Question } from './Question';
const FAQArticle = () => {

    return (
        <section className={classes.container}>
            <div className={`${classes.content} max-width`}>
                <Question title="Quels éléments sont pris en compte dans le SEO ?" defaultOpen>
                    Le SEO comporte 3 piliers principaux qui contiennent chacun plusieurs éléments :
                    <ul>
                        <li>La technique</li>
                        <li>Le contenu</li>
                        <li>La popularité</li>
                    </ul>

                    La technique est liée à tout l'aspect technique de votre site. On peut y trouver notamment l'optimisation des images ou encore le certificat SSL (le S de HTTPS). Ce pilier concerne l'ensemble de votre site.

                    La partie contenu est tout ce qui touche à l'optimisation du contenu des pages. Cela comprend la recherche de mot-clé, l'optimisation des balises title et meta-description, la sémantique, etc.

                    La popularité, c'est essentiellement les backlinks. Ce sont des liens qui se trouvent sur d'autres sites et qui vont pointer vers le vôtre. Ce sont des sortes de vote de confiance, qui montrent à Google que votre site a de l'autorité.
                </Question>
                <Question title="Pourquoi optimiser le référencement naturel de son site ?">
                    La liste des avantages du SEO est longue :
                    <ul>
                        <li>gain de trafic</li>
                        <li>trafic plus qualifié</li>
                        <li>amélioration de la confiance envers votre site</li>
                        <li>un investissement durable</li>
                        <li>un coût attrayant</li>
                        <li>amélioration de l'expérience utilisateur</li>
                        <li>amélioration des performances</li>
                        <li>un taux de conversion plus élevé</li>
                        <li>une augmentation du chiffre d'affaires</li>
                        <li>un investissement mesurable</li>
                    </ul>
                    Sans optimiser le référencement naturel de votre site, il n'y a aucune chance que vos clients le trouvent dans les résultats organiques.
                    Vous avez dépensé de l'argent pour votre site et vous voulez qu'il soit vu. C'est pourquoi le SEO est la méthode la plus efficace sur le long-terme.
                </Question>
                <Question title="Qu'est-ce qu'un audit SEO ?">
                    Un audit SEO est une sorte d'état des lieux de la santé SEO de votre site. Il va permettre de :
                    <ul>
                        <li>détecter les problèmes techniques (liens cassés, problèmes de performances, page non indexé, etc)</li>
                        <li>analyser les contenus qui ne performent pas assez bien et trouver le pourquoi (mauvaise sémantique, mauvais choix de mot-clé, titre mal optimisé, etc)</li>
                        <li>détecter les problèmes de backlinks (liens de mauvaises qualité, liens sans rapport, etc)</li>
                    </ul>
                    L'audit SEO va fournir plusieurs axes d'amélioration du SEO de votre site avec un ordre de priorité.
                </Question>
                <Question title="Combien de temps pour avoir des résultats en SEO ?">
                    Le SEO est une stratégie long-terme qui prend plusieurs mois avant d'obtenir les premiers résultats.
                    Pour un nouveau site, il faut compter en 3 et 6 mois pour avoir les premiers résultats.
                </Question>
                <Question title="A t'on besoin de référencement naturel pour un business local ?">
                    Le référencement local est une sous-partie du référencent naturel et comprends plusieurs recommandations pratique à mettre en place afin d'améliorer la présence de votre site au niveau local.
                    Une entreprise local à tout intérêt à mettre en place les bonnes pratiques de référencement local pour son business.
                </Question>
            </div>
        </section>
    );
};

export default FAQArticle;