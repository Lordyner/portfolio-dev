import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import ProjectDescription from "@/Components/ProjectDescription";
import Spinner from "@/Components/Spinner";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from '@/Components/ProjectDescription.module.css';

import audiophileMobile from '@/public/images/mobile/audiophile.png';
import audiophileTablet from '@/public/images/tablet/audiophile.png';
import audiophileDesktop from '@/public/images/desktop/audiophile.png';
import Link from "next/link";
import Image from "next/image";

export default function Audiophile() {

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
                <title>Audiophile</title>
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

                <h1 className={classes.projectTitle}>Audiophile</h1>
                <div className={`${classes.wrapper} max-width`}>

                    <div className={classes.textWrapper}>
                        <h3>Présentation</h3>
                        <p>Audiophile est un site e-commerce pour des appareils de musique (casques, enceintes etc). <br /></p>
                        {!(isMobileResolution || isTabletResolution) && <Link href="https://audiophile-indol-nu.vercel.app/" className="primary-button" target="_blank">Voir le site</Link>}

                    </div>
                    {(isMobileResolution || isTabletResolution) && <Link href="https://audiophile-indol-nu.vercel.app/" className="primary-button" target="_blank">Voir le site</Link>}

                    <Image src={isMobileResolution ? audiophileMobile : isTabletResolution ? audiophileTablet : audiophileDesktop} alt="audiophile" className={classes.projectImage} />
                    <div className={classes.description}>
                        <h3>Contexte</h3>
                        <p>C'est un défi du site <Link href='https://www.frontendmentor.io/profile/Lordyner' target="_blank">frontendmentor</Link>, le but était de construire ce site e-commerce multi-page à l'identique de la maquette.</p>
                        <p>L'utilisateur devait être capable de :</p>
                        <ul className={classes.requirements}>
                            <li className={classes.requirement}>Ajouter/Retirer des produits depuis son panier</li>
                            <li className={classes.requirement}>Modifier la quantité de produit dans son panier</li>
                            <li className={classes.requirement}>Remplir tous les champs sur la page de paiment</li>
                            <li className={classes.requirement}>Recevoir une validation du formulaire si des champs étaient pas remplis ou incorrecte</li>
                            <li className={classes.requirement}>Voir le prix total de sa commande</li>
                            <li className={classes.requirement}>La livraison ajoute toujours 50$ à la commande</li>
                            <li className={classes.requirement}>La TVA vaut 20% du total de la commande, sans compter les frais de livraisons.</li>
                            <li className={classes.requirement}>Voir une confirmation de sa commande après avoir commandé.</li>
                            <li className={classes.requirement}>Voir l'affichage idéale du site en fonction de la taille de son appareil.</li>
                            <li className={classes.requirement}>Garder son panier même s'il raffraichis la page</li>
                        </ul>
                        <p>J'ai choisi d'utiliser Shopify pour gérer mes différents produits afin de me rapprocher le plus possible d'un cas réel.</p>
                        <p>J'ai créé une boutique shopify dans laquelle j'ai créé tous mes produits avec leur prix, description, images, etc.</p>
                        <p>J'ai ensuite créer le site à l'identique de la maquette et apeller l'API Shopify pour récupérer mes différents produits et les afficher.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )


}

