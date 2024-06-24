import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Spinner from "@/Components/Spinner";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from "@/Components/MentionsLegales.module.css";
export default function MentionsLegales() {

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
                <title>Mentions Légales - Thomas André-Lubin</title>
                <meta name="description" content="Mentions Légales pour le site du développeur web freelance Thomas André-Lubin." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property='og:title' content='Mentions Légales - Thomas André-Lubin' />
                <meta property='og:description' content="Mentions Légales pour le site du développeur web freelance Thomas André-Lubin" />
                <meta property='og:image' content='/images/accueil/hero_img.png' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/mentions-legales' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content='Mentions Légales - Thomas André-Lubin' />
                <link rel="icon" href="/favicon.ico" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://www.thomasandrelubin.fr/mentions-legales" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Mentions Légales - Thomas André-Lubin" />
                <meta property="og:description" content="Mentions Légales pour le site du développeur web freelance Thomas André-Lubin" />
                <meta property="og:image" content="https://thomasandrelubin.fr/images/accueil/hero_img.png" />
            </Head>
            {isMenuOpen && <div className='overlay-burger-menu'></div>}
            <Navbar />
            <div className={classes.container}>

                <div className={`${classes.mentionsLegales} max-width`}>
                    <h1>Mentions <span className="accentuedWord">Légales</span></h1>
                    <h2>Mes informations</h2>
                    <p>Entrepreneur Individuel André-Lubin Thomas</p>
                    <p>223 Boulevard du Massacre 44100 Nantes</p>
                    <p>dev@thomasandrelubin.fr</p>
                    <p>06 37 51 43 79</p>
                    <h2>Identité de l'hébergeur</h2>
                    <p>Vercel, Inc., dont le siège social est situé au 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. </p>
                </div>
            </div>

            <Footer />
        </>
    )


}
