import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Spinner from "@/Components/Spinner";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from '@/Components/ProjectDescription.module.css';

import SteppedProgress from "@/Components/UI/SteppedProgress";
import HoverImage from "@/Components/UI/HoverImage";
import waterlineMockup from '@/public/images/projets/waterline/site-web-waterline-mockup.webp';
import waterlineMockupServicePage from '@/public/images/projets/waterline/mockup-waterline-service-page.webp';

export default function Waterline() {

    /* State */
    const [screenWidth, setScreenWidth] = useState();
    const [isDesignImgHovered, setIsDesignImgHovered] = useState(false);
    const [isMockupImgHovered, setIsMockupImgHovered] = useState(false);
    const numSteps = 3;
    const stepContent = [
        "<b className='fw-500'>Analyse du besoin</b> :<br/><br/> À partir du site existant, j'ai échangé avec le client pour bien comprendre le besoin, les différents services qu'il proposait et ce qui ne lui allait pas avec son site actuel.",
        "<b className='fw-500'>Réalisations des maquettes et démo</b> :<br/><br/>Après avoir défini la structure du site et rédiger un contenu optimisé SEO, j'ai réalisé les maquettes des différentes pages. J'ai ensuite réalisé une démonstration de ces maquettes à mon client qui m'a fait part de quelques retours.",
        "<b className='fw-500'>Développement et Tests</b> :<br/><br/> Une fois les maquettes validées, j'ai réalisé le développement du site web tout en communiquant à mon client l'avancement. Une fois le site fini et testé de mon côté, mon client a pu tester de son côté pour vérifier que tout lui convenait.",
        "<b className='fw-500'>Mise en ligne</b> :<br/><br/>Le site testé et validé par mon client, je me suis occupé de la partie hébergement/nom de domaine et mis en ligne le site.",
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
                <title>Waterline - Thomas André-Lubin</title>
                <meta name="description" content="Waterline est une entreprisé situé à Montauban, spécialisé dans la construction de piscine en béton." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />

                {/* Socials */}
                <meta property='og:title' content='Waterline - Thomas André-Lubin' />
                <meta property='og:description' content="Waterline est une entreprisé situé à Montauban, spécialisé dans la construction de piscine en béton." />
                <meta property='og:image' content='/images/projets/audiophile/audiophile_mockup_fullPage.avif' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/projets/audiophile' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content='Projet Audiophile - Thomas André-Lubin' />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="thomasandrelubin.fr" />
                <meta property="twitter:url" content="https://www.thomasandrelubin.fr/projets/audiophile" />
                <meta name="twitter:title" content="Waterline - Thomas André-Lubin" />
                <meta name="twitter:description" content="Waterline est une entreprisé situé à Montauban, spécialisé dans la construction de piscine en béton." />
                <meta name="twitter:image" content="https://thomasandrelubin.fr/images/projets/audiophile/audiophile_mockup_fullPage.avif" />
            </Head>

            {isMenuOpen && <div className='overlay-burger-menu'></div>}
            <Navbar />
            <main className={classes.projectContainer}>

                <h1>Projet <span className="accentuedWord">Waterline</span></h1>
                <div className={`${classes.content} max-width`}>
                    <div className={classes.context}>
                        <div className={classes.textWrapper}>
                            <h2>Contexte</h2>
                            <p>
                                Waterline est une entreprise situé à Montauban, spécialisé dans la construction de piscine en béton.<br /><br />
                                L'entreprise possédait déjà un site internet qu'ils souhaitaient remettre au goût du jour en terme de design.<br /><br />
                            </p>
                        </div>
                        <HoverImage image={waterlineMockup}
                            alt="Page d'accueil du site waterline" isHovered={isDesignImgHovered}
                            setIsHovered={setIsDesignImgHovered}
                            link="https://www.piscine-waterline.fr/"
                        />


                    </div>
                    <div className={classes.process}>
                        <HoverImage image={waterlineMockupServicePage}
                            alt="Page de service du site waterline" isHovered={isDesignImgHovered}
                            setIsHovered={setIsDesignImgHovered}
                            link="https://www.piscine-waterline.fr/"
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

