import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Spinner from "@/Components/Spinner";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from '@/Components/ProjectDescription.module.css';

import newsImg from '@/public/images/mobile/accueil/projets/news_homepage.png';

import Link from "next/link";
import Image from "next/image";

export default function news() {

    /* State */
    const [screenWidth, setScreenWidth] = useState();

    /* Context */
    const { isMobileResolution, setIsMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution, setIsTabletResolution } = useContext(GlobalContext);
    const { isDesktopResolution, setIsDesktopResolution } = useContext(GlobalContext);
    const { tabletResolution, desktopResolution } = useContext(GlobalContext);
    const { isLoading, setIsLoading } = useContext(GlobalContext);
    const { showPopupAddMeetingInClientCalendar, setShowPopupAddMeetingInClientCalendar } = useContext(GlobalContext);
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
                <title>Développeur web Freelance</title>
                <meta name="description" content="Développeur web freelance vous accompagne dans la création de votre site web de la conception des maquettes jusqu'au code en passant par le référencement." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property='og:title' content='Développeur web Freelance' />
                <meta property='og:description' content="Développeur web freelance vous accompagne dans la création de votre site web de la conception de la maquette jusqu'au code en passant par le référencement." />
                <meta property='og:image' content='/images/profil_pic_looking_laptop_zoomed.jpg' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content='Développeur web Freelance' />
                <link rel="icon" href="/favicon.ico" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://www.thomasandrelubin.fr/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Développeur web Freelance" />
                <meta property="og:description" content="Développeur web freelance vous accompagne dans la création de votre site web de la conception de la maquette jusqu'au code en passant par le référencement." />
                <meta property="og:image" content="https://thomasandrelubin.fr/images/profil_pic_looking_laptop_zoomed.jpg" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="thomasandrelubin.fr" />
                <meta property="twitter:url" content="https://www.thomasandrelubin.fr/" />
                <meta name="twitter:title" content="Développeur web Freelance" />
                <meta name="twitter:description" content="Développeur web freelance vous accompagne dans la création de votre site web de la conception de la maquette jusqu'au code en passant par le référencement." />
                <meta name="twitter:image" content="https://thomasandrelubin.fr/images/profil_pic_looking_laptop_zoomed.jpg" />

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

