import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import ProjectDescription from "@/Components/ProjectDescription";
import Spinner from "@/Components/Spinner";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from '@/Components/ProjectDescription.module.css';

import photosnapMobile from '@/public/images/mobile/photosnap.png';
import photosnapTablet from '@/public/images/tablet/photosnap.png';
import photosnapDesktop from '@/public/images/desktop/photosnap.png';
import Link from "next/link";
import Image from "next/image";

export default function Photosnap() {

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

                <h1 className={classes.projectTitle}>Photosnap</h1>
                <div className={`${classes.wrapper} max-width`}>
                    <div className={classes.textWrapper}>
                        <h3>Présentation</h3>
                        <p>Plateforme à destination des photographes afin de partager des photos, des histoires et se connecter avec les autres.</p>
                        {!(isMobileResolution || isTabletResolution) && <Link href="https://photosnap-sigma.vercel.app/" className="primary-button" target="_blank">Voir le site</Link>}
                    </div>
                    <Image src={isMobileResolution ? photosnapMobile : isTabletResolution ? photosnapTablet : photosnapDesktop} alt="audiophile" className={classes.projectImage} />
                    {(isMobileResolution || isTabletResolution) && <Link href="https://photosnap-sigma.vercel.app/" className="primary-button" target="_blank">Voir le site</Link>}
                    <div className={classes.description}>
                        <h3>Contexte</h3>
                        <p>Photosnap est un défi du site <Link href='https://www.frontendmentor.io/profile/Lordyner' target="_blank">frontendmentor</Link>, le but était de construire ce site multi-page à l'identique de la maquette.</p>
                        <p>L'utilisateur devait être capable de :</p>
                        <ul className={classes.requirements}>
                            <li className={classes.requirement}>Voir l'affichage idéale du site en fonction de la taille de son appareil.</li>
                            <li className={classes.requirement}>Voir différents états lors du survol des éléments.</li>
                        </ul>
                        <p>Une de mes réalisations favorites. Le design est moderne, épuré et il y a beaucoup de photos.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )


}

