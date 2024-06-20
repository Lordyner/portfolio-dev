import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import ProjectDescription from "@/Components/ProjectDescription";
import Spinner from "@/Components/Spinner";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from '@/Components/ProjectDescription.module.css';

import coffeeRoastersMobile from '@/public/images/mobile/coffee_roasters.png';
import coffeeRoastersTablet from '@/public/images/tablet/coffee_roasters.png';
import coffeeRoastersDesktop from '@/public/images/desktop/coffee_roasters.png';
import Link from "next/link";
import Image from "next/image";

export default function coffeeRoasters() {

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

                <h1 className={classes.projectTitle}>Coffee roasters</h1>
                <div className={`${classes.wrapper} max-width`}>
                    <div className={classes.textWrapper}>
                        <h3>Présentation</h3>
                        <p>Coffee roasters est un site pour les consommateurs de café. Il permet de créer un plan personnalisé avec le type de café que l'on voudrait recevoir, la quantité ainsi que la périodicité.</p>
                        {!(isMobileResolution || isTabletResolution) && <Link href="https://coffee-roasters-gamma.vercel.app/" className="primary-button" target="_blank">Voir le site</Link>}
                    </div>
                    <Image src={isMobileResolution ? coffeeRoastersMobile : isTabletResolution ? coffeeRoastersTablet : coffeeRoastersDesktop} alt="coffeeRoasters" className={classes.projectImage} />
                    {(isMobileResolution || isTabletResolution) && <Link href="https://coffee-roasters-gamma.vercel.app/" className="primary-button" target="_blank">Voir le site</Link>}
                    <div className={classes.description}>
                        <h3>Contexte</h3>
                        <p>C'est un défi du site <Link href='https://www.frontendmentor.io/profile/Lordyner' target="_blank">frontendmentor</Link>, le but était de construire ce site multi-page à l'identique de la maquette.</p>
                        <p>L'utilisateur devait être capable de :</p>
                        <ul className={classes.requirements}>
                            <li className={classes.requirement}>Faire une sélection pour créer un abonnement de café et voir une modal résumant leur choix</li>
                            <li className={classes.requirement}>Voir l'affichage idéale du site en fonction de la taille de son appareil.</li>
                            <li className={classes.requirement}>Voir différents états lors du survol des éléments.</li>
                        </ul>
                        <p>En plus de créer un site à l'identique de la maquette, j'ai décider d'ajouter quelques petites animation.</p>
                        <p>Le contenu des pages s'affiche au fur et à mesure que l'on scroll. Cela permet d'attirer un peu plus l'attention du visiteur et de créer une expérience plus dynamique qu'un simple site où tout s'affiche d'un bloc.</p>
                        <p>J'ai également ajouter une petite animation sur les éléments de la création d'abonnement. Toujours dans la volonté de créer une expérience plus interactive pour l'utilisateur.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )


}

