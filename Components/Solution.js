import React, { useContext } from 'react';
import classes from './Solution.module.css';
import CardList from './CardList';

import responsiveImg from '@/public/images/accueil/solutions/responsive.jpg';
import modernDesignImg from '@/public/images/accueil/solutions/design_moderne.jpg';
import googleAnalyticsImg from '@/public/images/accueil/solutions/google_analytics.png';
import callToActionImg from '@/public/images/accueil/solutions/appel_a_laction.jpg';
import userExperienceImg from '@/public/images/accueil/solutions/experience_utilisateur.jpg';
import seoImg from '@/public/images/accueil/solutions/referencement_naturel.jpg';
import performanceImg from '@/public/images/accueil/solutions/performance.jpg';
import GlobalContext from '@/Store/GlobalContext';
import CarouselSolution from './CarouselSolution';

const OPTIONS = { loop: true, align: 'start' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
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

                    <h2>Faites appels à mon service de {isDesktopResolution && <br />}<span className="accentuedWord">création de site internet</span> en freelance</h2>
                    <p className={classes.description}>Fort de mes 6 années d'expériences dans le <b>développement web</b>, je vous accompagne dans la <b>création d'un site internet</b> moderne et performant qui saura attirer plus de visiteurs et les convertir en clients. <br /> <br />
                        Chaque site que je crée se concentre sur les <b>points suivants</b> :</p>
                </div>
                {/* {(isMobileResolution || isTabletResolution) && <DraggableCarousel items={focusPoints} />} */}
                {(isMobileResolution || isTabletResolution) && <CarouselSolution slides={focusPoints} options={OPTIONS} />}
                {isDesktopResolution && <CardList items={focusPoints} />}
            </div>

        </section>
    );
};

export default Solution;