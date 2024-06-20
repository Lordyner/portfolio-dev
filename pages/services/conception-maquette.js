import CTAReminder from "@/Components/CTAReminder";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import ProjectDescription from "@/Components/ProjectDescription";
import ServicePresentation from "@/Components/ServicePresentation";
import Spinner from "@/Components/Spinner";
import Stats from "@/Components/Stats";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from '@/Components/ServicePresentation.module.css'
import Features from "@/Components/Features";
import responsive from '@/public/images/global/responsive.jpg';
import Link from "next/link";


export default function ServiceName() {

    /* State */
    const [screenWidth, setScreenWidth] = useState();

    /* Context */
    const { isMobileResolution, setIsMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution, setIsTabletResolution } = useContext(GlobalContext);
    const { isDesktopResolution, setIsDesktopResolution } = useContext(GlobalContext);
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

    const [features, setFeatures] = useState(
        [
            {
                name: 'Responsive',
                description: 'Chacun de mes maquettes est pensée pour s\'adapter à tous les écrans. Vous recevrez donc vos maquettes pour mobile, tablette et ordinateur.',
                image: responsive,
                alt: 'Responsive'
            },
            {
                name: 'Expérience utilisateur',
                description: 'L\'expérience utilisateur est primordiale pour la réussite de votre site internet. C\'est pourquoi je m\'assure que chaque élément de la maquette est pensé pour offrir la meilleure expérience possible à vos utilisateurs.',
                image: responsive,
                alt: 'Responsive'
            },

            {
                name: 'Retouches',
                description: 'J\'offre plusieurs retouches afin que vous soyez pleinement satisfait du design de votre site internet.',
                image: responsive,
                alt: 'Responsive'
            }
        ]
    )
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
            <main className={classes.serviceContainer}>
                <div className={classes.content}>
                    <h1 className={classes.serviceTitle}>Conception de maquette</h1>
                    <p className={classes.description}>Je conçois les maquettes de votre site internet à partir de vos besoins et l'image que vous souhaitez renvoyer. </p>
                    <div className={classes.buttonWrapper}>
                        <Link href="/contact" className='primary-button'>Discutons de votre projet</Link>
                    </div>
                </div>
            </main>
            <Features features={features} />
            <CTAReminder />
            <Footer />
        </>
    )


}

export async function getStaticProps(context) {

    return {
        props: {

        },
        revalidate: 60
    }
}
