import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Spinner from "@/Components/Spinner";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from '@/Components/ProjectDescription.module.css';

import newsImg from '@/public/images/accueil/projets/news_homepage.webp';

import Link from "next/link";
import Image from "next/image";

export default function news() {

    /* State */
    const [screenWidth, setScreenWidth] = useState();

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
                <title>Projet news - Thomas André-Lubin</title>
                <meta name="description" content="Projet défi de frontendmentor, le but était de créer une page web pour présenter différents articles sur les nouvelles technologies." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />
                {/* Socials */}
                <meta property='og:title' content='Projet news - Thomas André-Lubin' />
                <meta property='og:description' content="Projet défi de frontendmentor, le but était de créer une page web pour présenter différents articles sur les nouvelles technologies." />
                <meta property='og:image' content='/images/accueil/hero_img.webp' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/projets/news' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content='Projet news - Thomas André-Lubin' />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="thomasandrelubin.fr" />
                <meta property="twitter:url" content="https://www.thomasandrelubin.fr/projets/news" />
                <meta name="twitter:title" content="Projet news - Thomas André-Lubin" />
                <meta name="twitter:description" content="Projet défi de frontendmentor, le but était de créer une page web pour présenter différents articles sur les nouvelles technologies." />
                <meta name="twitter:image" content="https://thomasandrelubin.fr/images/accueil/hero_img.webp" />
            </Head>
            {isMenuOpen && <div className='overlay-burger-menu'></div>}
            <Navbar />
            <main className={classes.projectContainer}>
                <h1>Projet <span className="accentuedWord">News</span></h1>
                <div className={`${classes.content} max-width`}>
                    <div className={classes.context}>
                        <div className={classes.textWrapper}>
                            <h2>Contexte</h2>
                            <p>News est un projet défi du site frontendmentor.io. <br />Le but était de construire cette page internet à l'identique de la maquette, afin de présenter différents articles sur les nouvelles technologies.</p>
                        </div>
                        <Link href="https://lordyner.github.io/news-homepage/" className="primary-button" target="_blank">Voir le site</Link>
                        <Image src={newsImg} alt="Page d'accueil du site news" className={classes.projectImage} />
                    </div>
                    <div className={classes.requirements}>
                        <div className={classes.textWrapper}>
                            <h2>Fonctionnalités </h2>
                            <p className={classes.description}>L'utilisateur devait être capable de :</p>
                            <ul className={classes.requirementList}>
                                <li>Voir l'affichage idéale du site en fonction de la taille de son appareil</li>
                                <li>Voir différents états lors du survol des éléments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )


}

