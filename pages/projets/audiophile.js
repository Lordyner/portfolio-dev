import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Spinner from "@/Components/Spinner";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from '@/Components/ProjectDescription.module.css';

import audiophileResponsiveMockupFullPage from '@/public/images/projets/audiophile/audiophile_mockup_fullPage.avif';
import audiophileResponsiveProductPage from '@/public/images/projets/audiophile/audiophile_responsive_mockup_product.avif';
import Link from "next/link";
import Image from "next/image";
import SteppedProgress from "@/Components/UI/SteppedProgress";
import HoverImage from "@/Components/UI/HoverImage";


export default function Audiophile() {

    /* State */
    const [screenWidth, setScreenWidth] = useState();
    const [isDesignImgHovered, setIsDesignImgHovered] = useState(false);
    const [isMockupImgHovered, setIsMockupImgHovered] = useState(false);
    const numSteps = 3;
    const stepContent = [
        "<b className='fw-500'>Analyse et estimation</b> :<br/><br/> J'ai commencé par bien analyser le besoin, comprendre les différentes fonctionnalités qui étaient attendues, d'où elles devaient être accessibles sur le site et comment j'allais pouvoir y répondre. Ensuite, j'ai regardé les différentes maquettes, du mobile à l'ordinateur et réfléchis à comment je pouvais les reproduire. Une fois les différentes fonctionnalités bien comprises et ma solution technique choisie, j'ai pu estimer le temps de développement.",
        "<b className='fw-500'>Développement</b> :<br/><br/>Ce fut le moment d'attaquer le développement, j'ai créé le projet Next.js, importé les différentes ressources statiques (font, images, logo), créé les différentes variables de style que j'allais réutiliser sur le site (couleurs, taille de police, marges, etc). Ensuite, je me suis occupé des éléments que l'on retrouve à plusieurs endroits comme les boutons, les champs texte, etc. Une fois la base du site prête, j'ai créé une boutique Shopify pour y ajouter les différents produits, puis j'ai réalisé les différentes pages du site, de haut en bas, de mobile à ordinateur en passant par tablette.",
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
                <title>Projet Audiophile - Thomas André-Lubin</title>
                <meta name="description" content="Audiophile est un site e-commerce permettant d'acheter différents appareils son comme des casques, enceintes ou écouteurs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />

                {/* Socials */}
                <meta property='og:title' content='Projet Audiophile - Thomas André-Lubin' />
                <meta property='og:description' content="Audiophile est un site e-commerce permettant d'acheter différents appareils son comme des casques, enceintes ou écouteurs." />
                <meta property='og:image' content='/images/projets/audiophile/audiophile_mockup_fullPage.avif' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/projets/audiophile' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content='Projet Audiophile - Thomas André-Lubin' />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="thomasandrelubin.fr" />
                <meta property="twitter:url" content="https://www.thomasandrelubin.fr/projets/audiophile" />
                <meta name="twitter:title" content="Projet Audiophile - Thomas André-Lubin" />
                <meta name="twitter:description" content="Audiophile est un site e-commerce permettant d'acheter différents appareils son comme des casques, enceintes ou écouteurs." />
                <meta name="twitter:image" content="https://thomasandrelubin.fr/images/projets/audiophile/audiophile_mockup_fullPage.avif" />
            </Head>

            {isMenuOpen && <div className='overlay-burger-menu'></div>}
            <Navbar />
            <main className={classes.projectContainer}>

                <h1>Projet <span className="accentuedWord">Audiophile</span></h1>
                <div className={`${classes.content} max-width`}>
                    <div className={classes.context}>
                        <div className={classes.textWrapper}>
                            <h2>Contexte</h2>
                            <p>
                                Audiophile est un projet défi du site <Link href="https://www.frontendmentor.io/profile/Lordyner" target="_blank"> frontendmentor.io</Link>. <br />
                                Le but était de <b className="fw-500">construire un site e-commerce</b> permettant aux visiteurs de consulter des produits son (casques, écouteurs, enceintes), et de les ajouter à son panier afin de les acheter. <br /><br />
                                Une maquette était fournie pour le design du site, le but était de créer le site et de reproduire le design le plus fidèlement possible. <br /><br />
                                J'ai utilisé Shopify comme "CMS Headless", autrement dit pour gérer le contenu de mon site (produits et informations liés aux produits) et j'ai utilisé Next.js pour créer mon site.
                            </p>
                        </div>
                        <HoverImage image={audiophileResponsiveMockupFullPage}
                            alt="Page d'accueil du site audiophile" isHovered={isDesignImgHovered}
                            setIsHovered={setIsDesignImgHovered}
                            link="https://audiophile-indol-nu.vercel.app/"
                        />

                    </div>
                    <div className={classes.process}>
                        <HoverImage image={audiophileResponsiveProductPage}
                            alt="Mockup responsive de la page produit d'Audiophile" isHovered={isMockupImgHovered}
                            setIsHovered={setIsMockupImgHovered}
                            link="https://audiophile-indol-nu.vercel.app/product/xx99-mark-ii"
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

