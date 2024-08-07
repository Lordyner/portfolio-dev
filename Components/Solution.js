import React, { useContext } from 'react';
import classes from './Solution.module.css';
import CardList from './CardList';

import responsiveImg from '@/public/images/accueil/solutions/responsive.webp';
import modernDesignImg from '@/public/images/accueil/solutions/design_moderne.webp';
import googleAnalyticsImg from '@/public/images/accueil/solutions/google_analytics.webp';
import callToActionImg from '@/public/images/accueil/solutions/appel_a_laction.webp';
import userExperienceImg from '@/public/images/accueil/solutions/experience_utilisateur.webp';
import seoImg from '@/public/images/accueil/solutions/referencement_naturel.webp';
import performanceImg from '@/public/images/accueil/solutions/performance.webp';
import GlobalContext from '@/Store/GlobalContext';
import CarouselSolution from './CarouselSolution';

const OPTIONS = { loop: true, align: 'start' }
const Solution = () => {

    const focusPoints = [
        {
            title: "Responsive",
            description: "Un site qui s'adapte à chaque taille d'écran pour une expérience optimale.<br/><br/> Aujourd'hui plus de 50% du trafic internet provient de téléphone mobile et les utilisateurs s'attendent à une expérience mobile qui soit à minima aussi bonne que l'expérience sur ordinateur.",
            image: responsiveImg
        },
        {
            title: "Référencement naturel",
            description: "Le référencement naturel est la clé pour être visible sur les moteurs de recherche.<br/><br/> Un site bien référencé est un site qui apparaît dans les premiers résultats de recherche sur Google. Cela permet d'attirer plus de visiteurs et de convertir plus de clients.",
            image: seoImg
        },
        {
            title: "Expérience utilisateur",
            description: "L'expérience utilisateur est la clé pour convertir vos visiteurs en clients.<br/><br/> Un site internet doit être facile à utiliser, intuitif et agréable pour l'utilisateur. Cela permet de réduire le taux de rebond et d'augmenter le taux de conversion.",
            image: userExperienceImg
        },
        {
            title: "Design moderne",
            description: "Un design moderne et épuré pour attirer et retenir l'attention de vos visiteurs.<br/><br/> Un site internet doit être esthétique et professionnel pour donner une bonne image de votre entreprise et rassurer vos visiteurs.",
            image: modernDesignImg
        },
        {
            title: "Performances",
            description: "Un site rapide et performant pour satisfaire vos visiteurs et améliorer votre référencement.<br/><br/> Un site internet doit être rapide pour ne pas frustrer vos visiteurs et pour être bien référencé sur Google.",
            image: performanceImg
        },
        {
            title: "Appel à l'action",
            description: "Un appel à l'action clair et visible pour inciter vos visiteurs à passer à l'action.<br/><br/> Un site internet doit inciter vos visiteurs à passer à l'action : acheter un produit, remplir un formulaire, s'inscrire à une newsletter...",
            image: callToActionImg
        },
        {
            title: "Suivi",
            description: "Un suivi de votre site internet pour mesurer son efficacité et l'améliorer.<br/><br/> Je configure Google Analytics sur chacune de mes réalisations, afin de mesurer le trafic de votre site internet, de connaître le comportement de vos visiteurs et de mesurer l'efficacité de vos actions marketing.",
            image: googleAnalyticsImg
        }
    ]

    const { isMobileResolution, isTabletResolution, isDesktopResolution } = useContext(GlobalContext);

    return (
        <section className={classes.container}>
            <div className={`${classes.solution} max-width`}>
                <div className={classes.textWrapper}>

                    <h2>Pourquoi choisir mon service de {isDesktopResolution && <br />} création de site internet<span className="accentuedWord"> sur mesure</span></h2>
                    <p className={classes.description}>
                        Développeur web depuis plus de 6 ans, je me suis spécialisé dans la <b className="fw-500">création de site internet sur mesure</b> qui ont pour but d'améliorer la visibilité de votre entreprise et générer des prospects pour votre activité.<br /><br />
                        Si vous cherchez à <b className="fw-500">créer un site web sur mesure</b> pour présenter votre activité, vos services, mettre en valeur votre savoir faire et expérience tout en attirant un maximum de visiteurs : vous êtes au bon endroit.<br /><br />
                        Du design, au développement en passant par le référencement naturel, <b className="fw-500">je m'occupe de tout</b> pour que votre site internet soit vu par les visiteurs qui compte pour votre activité, et que le plus grand nombre soit converti en prospects.
                    </p>
                </div>
                {(isMobileResolution || isTabletResolution) && <CarouselSolution slides={focusPoints} options={OPTIONS} />}
                {isDesktopResolution && <CardList items={focusPoints} />}
            </div>

        </section >
    );
};

export default Solution;