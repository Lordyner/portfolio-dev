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
                name: 'Taux de conversion',
                description: 'Que ce soit de la prise de rendez-vous, demande de devis, l\'achat d\'un produit, il est primordial de connaitre le taux de conversion de votre site.',
                image: responsive,
                alt: 'Responsive'
            },
            {
                name: 'Performance',
                description: 'Un site lent à charger sera pénalisé par Google et apparaîtra plus bas dans les résultats de recherche.',
                image: responsive,
                alt: 'Responsive'
            },
            {
                name: 'Taux de rebond',
                description: 'C\'est le pourcentage de visiteurs qui quittent votre site après avoir vu une seule page. Cela peut cacher un problème de contenu, de design ou de performance de votre site internet.',
                image: responsive,
                alt: 'Responsive'
            },
            {
                name: 'Taux de conversion par support',
                description: 'Si votre taux de conversion est bon sur ordinateur mais mauvais sur mobile, cela peut cacher un problème de responsive design.',
                image: responsive,
                alt: 'Responsive'
            },
            {
                name: 'Evolution du nombre de visiteurs',
                description: 'Une chute du nombre de visiteurs peut être dû à un problème de référencement, de contenu ou de performance de votre site internet. Dans tout les cas, il est important de comprendre pourquoi et résoudre le problème.',
                image: responsive,
                alt: 'Responsive'
            },
            {
                name: 'Référencement technique',
                description: 'Un audit de site internet permet de vérifier que votre site respecte les bonnes pratiques de référencement technique. Cela permettra à Google de mieux comprendre votre site et de le référencer plus facilement.',
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
                    <h1 className={classes.serviceTitle}>Audit de site internet</h1>
                    <p className={classes.description}
                    >Un site internet est un investissement pour votre entreprise. Il doit vous aider à gagner en visibilité, obtenir plus de clients, vendre vos produits etc.<br />
                        Mais bien trop souvent ces objectifs là ne sont pas suivi et ce qui avait le pouvoir d'être une force pour votre entreprise se transforme en charge.<br /><br />
                        Un audit de site internet permet de faire un état des lieux de votre site internet et de déterminer les points qui nuisent à son bon fonctionnement.<br />
                    </p>
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
