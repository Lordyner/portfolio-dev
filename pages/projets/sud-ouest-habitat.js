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
import sudOuestHabitatMockupFullPage from '@/public/images/projets/sudOuestHabitat/mockup_website_fullpage_sudOuestHabitat.avif';
import sudOuestHabitatServiceResponsive from '@/public/images/projets/sudOuestHabitat/mockup_service_responsive_sudOuestHabitat.avif';

export default function SudOuestHabitat() {

    /* State */
    const [screenWidth, setScreenWidth] = useState();
    const [isDesignImgHovered, setIsDesignImgHovered] = useState(false);
    const [isMockupImgHovered, setIsMockupImgHovered] = useState(false);
    const numSteps = 3;
    const stepContent = [
        "<b className='fw-500'>Analyse du besoin</b> :<br/><br/> Lors d'un échange téléphonique avec le client, nous avons discuté de son besoin, de son entreprise et des services qu'il proposait.",
        "<b className='fw-500'>Réalisations des maquettes</b> :<br/><br/>Une fois les différentes pages du site défini et le contenu optimisé SEO rédigé, j'ai conçu les maquettes des différentes pages.",
        "<b className='fw-500'>Développement et Tests</b> :<br/><br/> Je me suis ensuite occupé de la partie développement du site web tout en communiquant à mon client l'avancement. Une fois le site fini et testé de mon côté, mon client a pu tester de son côté pour vérifier que tout lui convenait. Il m'a fait plusieurs retours notamment sur les couleurs et je lui ai proposé plusieurs autres solutions.",
        "<b className='fw-500'>Mise en ligne</b> :<br/><br/>Le site testé et validé par mon client, le nom de domaine a été choisi et le site mis en ligne.",
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
                <title>Sud Ouest Habitat - Thomas André-Lubin</title>
                <meta name="description" content="Sud Ouest Habitat est une entreprise de construction, spécialisé dans la maçonnerie, les terrassements et la charpente." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />

                {/* Socials */}
                <meta property='og:title' content='Sud Ouest Habitat - Thomas André-Lubin' />
                <meta property='og:description' content="Sud Ouest Habitat est une entreprise de construction, spécialisé dans la maçonnerie, les terrassements et la charpente." />
                <meta property='og:image' content='/images/projets/sudOuestHabitat/mockup_homepage_responsive_sudOuestHabitat.avif' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/projets/sud-ouest-habitat' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content='Projet Sud Ouest Habitat - Thomas André-Lubin' />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="thomasandrelubin.fr" />
                <meta property="twitter:url" content="https://www.thomasandrelubin.fr/projets/sud-ouest-habitat" />
                <meta name="twitter:title" content="Sud Ouest Habitat - Thomas André-Lubin" />
                <meta name="twitter:description" content="Sud Ouest Habitat est une entreprise de construction, spécialisé dans la maçonnerie, les terrassements et la charpente." />
                <meta name="twitter:image" content="https://thomasandrelubin.fr/images/projets/sudOuestHabitat/mockup_homepage_responsive_sudOuestHabitat.avif" />
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
                        <HoverImage image={sudOuestHabitatMockupFullPage}
                            alt="Page d'accueil du site sud ouest habitat" isHovered={isDesignImgHovered}
                            setIsHovered={setIsDesignImgHovered}
                            link="https://www.sudouesthabitat-construction.fr/"
                        />


                    </div>
                    <div className={classes.process}>
                        <HoverImage image={sudOuestHabitatServiceResponsive}
                            alt="Page de service du site Sud Ouest Habitat" isHovered={isDesignImgHovered}
                            setIsHovered={setIsDesignImgHovered}
                            link="https://www.sudouesthabitat-construction.fr/terrassement/"
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

