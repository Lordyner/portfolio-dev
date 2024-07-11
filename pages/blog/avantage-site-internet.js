import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import { getLogger } from '@/logging/log-util';
import { useRouter } from 'next/router';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Spinner from '@/Components/Spinner';
import GlobalContext from '@/Store/GlobalContext';
import classes from '@/styles/articleBlog.module.css';
import Image from 'next/image';
import imageAvantageSiteInternet from '@/public/images/blog/avantageSiteInternet/avantage_site_internet.jpg';
import imageAuthorThomas from '@/public/images/blog/auteur-thomas-andrelubin.png'
import { motion, useScroll } from "framer-motion";

export default function Home() {

    /* Logger */
    const logger = getLogger('Avantage Site Internet');
    logger.debug('Page rendered');

    /* State */
    const [screenWidth, setScreenWidth] = useState();

    /* Context */
    const { setIsMobileResolution } = useContext(GlobalContext);
    const { setIsTabletResolution } = useContext(GlobalContext);
    const { setIsDesktopResolution } = useContext(GlobalContext);
    const { tabletResolution, desktopResolution } = useContext(GlobalContext);
    const { isLoading, setIsLoading } = useContext(GlobalContext);
    const { isMenuOpen } = useContext(GlobalContext);

    /* Other hooks */
    const { scrollYProgress } = useScroll();


    /* Router */
    const router = useRouter();

    /* Functions */
    const handleMenuDisplay = () => {
        setScreenWidth(window.screen.width);

        const isMobile = screenWidth < tabletResolution;
        const isTablet = screenWidth >= tabletResolution && screenWidth < desktopResolution;
        const isDesktop = screenWidth >= desktopResolution;

        setIsMobileResolution(isMobile);
        setIsTabletResolution(isTablet);
        setIsDesktopResolution(isDesktop);
    }

    useEffect(() => {
        // Handle menu display
        handleMenuDisplay();
        window.addEventListener('resize', handleMenuDisplay);

        // Handle loading spinner
        router.events.on("routeChangeStart", () => setIsLoading(true));
        router.events.on("routeChangeComplete", () => setIsLoading(false));
    }, [screenWidth])


    return (
        <>
            {isLoading && <Spinner />}

            <Head>

                {/* Google */}
                <title>Les avantages incontournables d'un site internet pour votre entreprise - Thomas André-Lubin</title>
                <meta name="description" content="Développeur web freelance vous accompagne dans la création d'un site internet moderne, optimisé pour le référencement et avec une excellente expérience utilisateur." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />

                {/* Socials */}
                <meta property='og:title' content="Les avantages incontournables d' un site internet pour votre entreprise - Thomas André-Lubin" />
                <meta property='og:description' content="Développeur web freelance vous accompagne dans la création d'un site internet moderne, optimisé pour le référencement et avec une excellente expérience utilisateur." />
                <meta property='og:image' content='/images/accueil/hero_img.webp' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content="Les avantages incontournables d' un site internet pour votre entreprise - Thomas André-Lubin" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="thomasandrelubin.fr" />
                <meta property="twitter:url" content="https://www.thomasandrelubin.fr/" />
                <meta name="twitter:title" content="Les avantages incontournables d'un site internet pour votre entreprise - Thomas André-Lubin" />
                <meta name="twitter:description" content="Développeur web freelance vous accompagne dans la création d'un site internet moderne, optimisé pour le référencement et avec une excellente expérience utilisateur." />
                <meta name="twitter:image" content="https://thomasandrelubin.fr/images/accueil/hero_img.webp" />

            </Head>
            {isMenuOpen && <div className='overlay-burger-menu'></div>}

            <Navbar theme="white" maxWidth="56.25rem" />
            <div className={classes.container}>
                <div className={`${classes.content}`}>
                    <h1 className={`${classes.title} ${classes.mainTitle}`}>Les avantages incontournables d'un site internet pour votre entreprise</h1>
                    <Image src={imageAvantageSiteInternet} alt='Les avantages incontournables d un site internet pour votre entreprise' className={classes.imageArticle} />
                    <div className={classes.secondaryInfos}>

                        <Image src={imageAuthorThomas} alt='Thomas André-Lubin' className={classes.authorImg} />
                        <div className={classes.infos}>
                            <p className={classes.authorName}>Thomas André-Lubin</p>
                            <div className={classes.articleInfos}>
                                <p className={classes.dateArticle}>15 Juin, 2022</p>
                                <p className={classes.readingTime}>Temps de lecture : 5mn</p>
                            </div>
                        </div>
                    </div>
                    <p>
                        Vous êtes propriétaire d'une entreprise et vous vous demandez si vous devriez investir dans la création d'un site internet ? Ne cherchez plus ! Nous vous dévoilons les avantages incontournables d'avoir un site web pour votre entreprise.<br /><br />
                        Un site internet est aujourd'hui un outil incontournable pour toute entreprise, quelle que soit sa taille ou son secteur d'activité. Il offre une visibilité sans précédent et permet d'atteindre un public beaucoup plus large. En ayant une présence en ligne, vous pouvez attirer de nouveaux clients et fidéliser ceux qui vous connaissent déjà.<br /><br />
                        Grâce à un site internet, vous avez également l'opportunité de présenter votre entreprise de manière professionnelle et attrayante. Vous pouvez mettre en avant vos produits ou services, partager des témoignages de clients satisfaits et afficher vos coordonnées pour faciliter le contact. C'est un excellent moyen de renforcer votre crédibilité et de vous démarquer de la concurrence.<br /><br />
                        De plus, un site internet offre une flexibilité incroyable. Vous pouvez mettre à jour vos informations à tout moment, modifier votre offre, créer des promotions spéciales et interagir avec vos clients via un blog ou des réseaux sociaux intégrés.<br /><br />
                        Ne tardez plus, investissez dans un site internet et profitez de tous les avantages qu'il peut vous offrir. Votre entreprise ne pourra que s'enrichir grâce à cette présence en ligne.
                    </p>
                    <div className={classes.articleSection}>

                        <h2 className={classes.title}>Améliorez votre visibilité en ligne</h2>
                        <p>
                            Avoir un site web pour votre entreprise est essentiel pour améliorer votre visibilité en ligne. En créant un site web, vous pouvez être trouvé plus facilement par les utilisateurs qui recherchent des produits ou services similaires aux vôtres.<br /><br />
                            De plus, un site web bien conçu et optimisé pour les moteurs de recherche peut vous aider à apparaître en haut des résultats de recherche, ce qui augmente les chances d'attirer du trafic qualifié vers votre site. Avec une meilleure visibilité en ligne, vous pouvez atteindre un public plus large et augmenter vos chances de succès.<br /><br />
                            Un site web offre également la possibilité d'optimiser votre présence sur les réseaux sociaux en intégrant des liens vers vos profils et en permettant aux utilisateurs de partager facilement votre contenu. Cela peut vous aider à générer plus de trafic vers votre site et à accroître votre visibilité sur les plateformes de médias sociaux. En améliorant votre visibilité en ligne, vous pouvez vous démarquer de vos concurrents et attirer l'attention des clients potentiels.<br /><br />
                            En résumé, avoir un site web permet d'améliorer considérablement votre visibilité en ligne, ce qui peut vous aider à attirer un public plus large et à augmenter vos chances de succès.
                        </p>
                    </div>
                    <div className={classes.articleSection}>
                        <h2 className={classes.title}>Générez du trafic qualifié vers votre site web</h2>
                        <p>
                            L'un des avantages essentiels d'avoir un site web pour votre entreprise est la possibilité de générer du trafic qualifié. Avec un site web bien optimisé, vous pouvez attirer des utilisateurs qui sont spécifiquement intéressés par vos produits ou services. Vous pouvez utiliser des techniques de référencement pour améliorer votre classement dans les moteurs de recherche et attirer du trafic organique vers votre site.<br /><br />
                            De plus, vous pouvez également promouvoir votre site web via des publicités en ligne, des partenariats avec d'autres sites web et des campagnes de marketing numérique.<br /><br />
                            En générant du trafic qualifié vers votre site web, vous augmentez vos chances de convertir ces visiteurs en clients. Vous pouvez utiliser des appels à l'action clairs et attractifs sur votre site web pour encourager les visiteurs à effectuer un achat ou à prendre contact avec vous. De plus, vous pouvez collecter des informations précieuses sur vos visiteurs, telles que leur adresse e-mail, afin de pouvoir les contacter ultérieurement avec des offres spéciales ou des nouvelles sur votre entreprise.<br /><br />
                            En résumé, un site web vous permet de générer du trafic qualifié vers votre site, ce qui peut augmenter vos chances de convertir ces visiteurs en clients et de favoriser la croissance de votre entreprise.<br /><br />
                        </p>
                    </div>
                    <div className={classes.articleSection}>
                        <h2 className={classes.title}>Renforcez votre image de marque et votre crédibilité</h2>
                        <p>
                            Un site web bien conçu et professionnel peut renforcer votre image de marque et votre crédibilité auprès des clients potentiels. Il vous permet de présenter votre entreprise d'une manière attrayante et professionnelle, en mettant en avant vos produits ou services, votre histoire, votre équipe et vos valeurs. Vous pouvez utiliser des images de haute qualité, des témoignages de clients satisfaits et des informations claires sur votre entreprise pour inspirer confiance et crédibilité.<br /><br />
                            En ayant un site web, vous montrez aux clients potentiels que vous êtes sérieux au sujet de votre entreprise et que vous êtes prêt à investir dans votre présence en ligne. Cela peut vous aider à vous démarquer de la concurrence et à gagner la confiance des clients. De plus, un site web bien conçu peut être partagé facilement par les utilisateurs sur les réseaux sociaux, ce qui peut accroître votre notoriété et renforcer votre image de marque.<br /><br />
                            En résumé, avoir un site web professionnel et attrayant peut renforcer votre image de marque et votre crédibilité auprès des clients potentiels, ce qui peut augmenter vos chances de succès.
                        </p>
                    </div>
                    <div className={classes.articleSection}>

                        <h2 className={classes.title}>Facilitez la communication avec vos clients</h2>
                        <p>
                            Un site web vous permet de faciliter la communication avec vos clients. Vous pouvez inclure des informations de contact claires sur votre site web, telles que votre adresse e-mail, votre numéro de téléphone et votre adresse physique. Cela rend plus facile pour les clients de vous contacter pour poser des questions, faire des réservations ou passer des commandes.<br /><br />
                            De plus, vous pouvez intégrer un chat en direct sur votre site web pour permettre aux clients de communiquer directement avec vous en temps réel. Cela peut être particulièrement utile pour répondre rapidement aux questions des clients et résoudre les problèmes. En facilitant la communication avec vos clients, vous pouvez améliorer leur expérience et renforcer leur fidélité envers votre entreprise.<br /><br />
                            En résumé, un site web vous permet de faciliter la communication avec vos clients, ce qui peut améliorer leur expérience et renforcer leur fidélité envers votre entreprise.
                        </p>
                    </div>
                    <div className={classes.articleSection}>

                        <h2 className={classes.title}>Augmentez vos ventes et vos opportunités de croissance</h2>
                        <p>
                            Un site web bien conçu peut vous aider à augmenter vos ventes et vos opportunités de croissance. Vous pouvez utiliser votre site web pour présenter vos produits ou services de manière attrayante et convaincante, en incluant des descriptions détaillées, des images et des témoignages de clients satisfaits. Vous pouvez également inclure des appels à l'action clairs et attrayants pour encourager les visiteurs à passer à l'action, tels que "Acheter maintenant" ou "Demander un devis".<br /><br />
                            De plus, un site web vous permet d'atteindre un public plus large et d'élargir vos opportunités de croissance. Vous pouvez utiliser des techniques de marketing en ligne pour promouvoir votre site web et attirer de nouveaux clients. Vous pouvez également intégrer des fonctionnalités de commerce électronique pour permettre aux clients d'acheter vos produits ou services directement sur votre site web.<br /><br />
                            En résumé, avoir un site web bien conçu peut vous aider à augmenter vos ventes et vos opportunités de croissance en présentant vos produits ou services de manière attrayante et en atteignant un public plus large.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
