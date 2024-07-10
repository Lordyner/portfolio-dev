import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Spinner from "@/Components/Spinner";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from '@/Components/ProjectDescription.module.css';

import payAPIResponsiveMockupFullPage from '@/public/images/projets/payAPI/payAPI_mockup_fullPage.avif';
import payAPIResponsiveContactPage from '@/public/images/projets/payAPI/payAPI_mockup_responsive_contact.avif';
import Link from "next/link";
import HoverImage from "@/Components/UI/HoverImage";
import SteppedProgress from "@/Components/UI/SteppedProgress";
import Image from "next/image";

export default function payApi() {

    /* State */
    const [screenWidth, setScreenWidth] = useState();
    const [isDesignImgHovered, setIsDesignImgHovered] = useState(false);
    const [isMockupImgHovered, setIsMockupImgHovered] = useState(false);
    const numSteps = 3;
    const stepContent = [
        "<b className='fw-500'>Analyse et estimation</b> :<br/><br/> J'ai commencé par analyser les maquettes du mobile au format ordinateur en portant mon attention sur la façon dont les différentes sections évoluaient. Une fois que le besoin était clair, j'ai estimé le temps de développement.",
        "<b className='fw-500'>Développement</b> :<br/><br/>Ensuite, j'ai commencé le développement, créé le projet Next.js, importé les différentes ressources statiques (font, images, logo), créé les différentes variables de style que j'allais réutiliser sur le site (couleurs, taille de police, marges, etc). Puis je me suis occupé des éléments que l'on retrouve à plusieurs endroits comme les boutons. La base du site créé, j'ai réalisé les différentes pages du site, de haut en bas, de mobile à ordinateur en passant par tablette.",
        "<b className='fw-500'>Tests</b> :<br/><br/> Une fois le site fini, je suis repassé sur chacune des pages en format mobile, tablette puis ordinateur pour vérifier que tout fonctionnait comme voulu. J'ai ensuite relu les spécifications pour vérifier que tout avait bien été implémenté.",
        "<b className='fw-500'>Livraison</b> :<br/><br/>La phase de test validé, j'ai livré le site en production et testé une dernière fois pour m'assurer que tout fonctionne correctement.",
    ]


    /* Context */
    const { setIsMobileResolution } = useContext(GlobalContext);
    const { setIsTabletResolution } = useContext(GlobalContext);
    const { setIsDesktopResolution } = useContext(GlobalContext);
    const { tabletResolution, desktopResolution } = useContext(GlobalContext);
    const { isLoading, setIsLoading } = useContext(GlobalContext);
    const { isMenuOpen } = useContext(GlobalContext);

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
                <title>Projet payAPI - Thomas André-Lubin</title>
                <meta name="description" content="myAPI propose une API bancaire à ses clients, simple à intégrer, afin de gérer les finances personnelles, les paiements et bien d'autres." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />
                {/* Socials */}
                <meta property='og:title' content='Projet payAPI - Thomas André-Lubin' />
                <meta property='og:description' content="myAPI propose une API bancaire à ses clients, simple à intégrer, afin de gérer les finances personnelles, les paiements et bien d'autres." />
                <meta property='og:image' content='/images/projets/payAPI/payAPI_mockup_fullPage.avif' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/projets/payApi' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content='Projet myTeam - Thomas André-Lubin' />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="thomasandrelubin.fr" />
                <meta property="twitter:url" content="https://www.thomasandrelubin.fr/projets/payApi" />
                <meta name="twitter:title" content="Projet payAPI - Thomas André-Lubin" />
                <meta name="twitter:description" content="myAPI propose une API bancaire à ses clients, simple à intégrer, afin de gérer les finances personnelles, les paiements et bien d'autres." />
                <meta name="twitter:image" content="https://thomasandrelubin.fr/images/projets/payAPI/payAPI_mockup_fullPage.avif" />
            </Head>
            {isMenuOpen && <div className='overlay-burger-menu'></div>}
            <Navbar />
            <main className={classes.projectContainer}>
                <h1>Projet <span className="accentuedWord">PayAPI</span></h1>
                <div className={`${classes.content} max-width`}>
                    <div className={classes.context}>
                        <div className={classes.textWrapper}>
                            <h2>Contexte</h2>
                            <p>
                                Défi proposé par le site <Link href="https://www.frontendmentor.io/profile/Lordyner" target="_blank"> frontendmentor.io</Link>, PayAPI est un <b className="fw-500">site vitrine</b> pour une API ("Application Programming Interface") bancaire. <br /><br />
                                L'objectif était de <b className="fw-500">créer ce site vitrine</b> permettant aux visiteurs de saisir une adresse mail pour programmer une démo et d'en apprendre plus sur PayAPI et les prix, tout en étant fidèle à la maquette.<br /><br />
                                Le site s'adapte à toutes les tailles d'écrans et propose une page d'accueil comportant un appel à l'action pour que l'utilisateur réserve une démo, une page de tarifs, une page à propos et une page de contact.
                            </p>
                        </div>
                        <HoverImage image={payAPIResponsiveMockupFullPage}
                            alt="Page d'accueil du site PayAPI" isHovered={isDesignImgHovered}
                            setIsHovered={setIsDesignImgHovered}
                            link="https://pay-api-seven.vercel.app/"
                        />

                    </div>
                    <div className={classes.process}>
                        <HoverImage image={payAPIResponsiveContactPage}
                            alt="Mockup responsive de la page de contact de PayAPI" isHovered={isMockupImgHovered}
                            setIsHovered={setIsMockupImgHovered}
                            link="https://pay-api-seven.vercel.app/contact"
                        />
                        <div className={`${classes.textWrapper} ${classes.processusTextWrapper}`}>
                            <h2>Processus</h2>
                            <SteppedProgress stepContent={stepContent} numSteps={numSteps} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )


}

