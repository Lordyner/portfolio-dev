import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Spinner from "@/Components/Spinner";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from '@/Components/ProjectDescription.module.css';
import myTeamResponsiveMockupFullPage from '@/public/images/projets/myTeam/myTeam_mockup_fullPage.avif';
import myTeamResponsiveAboutPage from '@/public/images/projets/myTeam/myTeam_mockup_responsive_about.avif';
import HoverImage from "@/Components/UI/HoverImage";
import SteppedProgress from "@/Components/UI/SteppedProgress";

import Link from "next/link";
import Image from "next/image";

export default function myTeam() {

    /* State */
    const [screenWidth, setScreenWidth] = useState();
    const [isDesignImgHovered, setIsDesignImgHovered] = useState(false);
    const [isMockupImgHovered, setIsMockupImgHovered] = useState(false);
    const numSteps = 3;
    const stepContent = [
        "<b className='fw-500'>Analyse et estimation</b> :<br/><br/> J'ai commencé par analyser les maquettes du mobile au format ordinateur et ce qui était attendu au niveau de la fonctionnalité de sélection d'un abonnement café. Une fois que le besoin était clair, j'ai estimé le temps de développement.",
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
                <title>Projet myTeam - Thomas André-Lubin</title>
                <meta name="description" content="Projet défi de frontendmentor, le but était de créer un site multi-pages pour présenter un cabinet de recrutement." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />
                {/* Socials */}
                <meta property='og:title' content='Projet myTeam - Thomas André-Lubin' />
                <meta property='og:description' content="Projet défi de frontendmentor, le but était de créer un site multi-pages pour présenter un cabinet de recrutement." />
                <meta property='og:image' content='/images/accueil/hero_img.webp' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/projets/myTeam' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content='Projet myTeam - Thomas André-Lubin' />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="thomasandrelubin.fr" />
                <meta property="twitter:url" content="https://www.thomasandrelubin.fr/projets/myTeam" />
                <meta name="twitter:title" content="Projet myTeam - Thomas André-Lubin" />
                <meta name="twitter:description" content="Projet défi de frontendmentor, le but était de créer un site multi-pages pour présenter un cabinet de recrutement." />
                <meta name="twitter:image" content="https://thomasandrelubin.fr/images/accueil/hero_img.webp" />
            </Head>
            {isMenuOpen && <div className='overlay-burger-menu'></div>}
            <Navbar />
            <main className={classes.projectContainer}>
                <h1>Projet <span className="accentuedWord">myTeam</span></h1>
                <div className={`${classes.content} max-width`}>
                    <div className={classes.context}>
                        <div className={classes.textWrapper}>
                            <h2>Contexte</h2>
                            <p>
                                myTeam est un défi de réalisation d'un site responsive, comportant plusieurs pages, proposé par <Link href="https://www.frontendmentor.io/profile/Lordyner" target="_blank"> frontendmentor.io</Link>. <br /><br />
                                L'objectif était de <b className="fw-500">créer ce site internet</b> présentant un cabinet de recrutement spécialisé dans la création d'équipe dynamique et talentueuse, en étant fidèle à la maquette<br /><br />
                                Le site comporte 3 pages <b className="fw-500">s'adaptant parfaitement à chaque taille écran</b>. La page d'accueil présente une proposition de valeur ainsi que des avis clients. Sur la page à propos, nous avons une présentation des membres de l'équipe et une liste des plus gros clients de myTeam. Enfin la page de contact contient un formulaire de contact.
                            </p>
                        </div>
                        <HoverImage image={myTeamResponsiveMockupFullPage}
                            alt="Page d'accueil du site myTeam" isHovered={isDesignImgHovered}
                            setIsHovered={setIsDesignImgHovered}
                            link="https://my-team-eosin.vercel.app/"
                        />

                    </div>
                    <div className={classes.process}>
                        <HoverImage image={myTeamResponsiveAboutPage}
                            alt="Mockup responsive de la page à propos de myTeam" isHovered={isMockupImgHovered}
                            setIsHovered={setIsMockupImgHovered}
                            link="https://my-team-eosin.vercel.app/about"
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

