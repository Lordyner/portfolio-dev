import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Spinner from "@/Components/Spinner";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from '@/Components/ProjectDescription.module.css';

import audiophileImg from '@/public/images/accueil/projets/audiophile.webp';
import Link from "next/link";
import Image from "next/image";

export default function Audiophile() {

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
                <title>Projet Audiophile - Thomas André-Lubin</title>
                <meta name="description" content="Projet défi de frontendmentor, le but était de créer un site e-commerce pour vendre du matériel audio (casques, enceintes, écouteurs)." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />

                {/* Socials */}
                <meta property='og:title' content='Projet Audiophile - Thomas André-Lubin' />
                <meta property='og:description' content="Projet défi de frontendmentor, le but était de créer un site e-commerce pour vendre du matériel audio (casques, enceintes, écouteurs)." />
                <meta property='og:image' content='/images/about/consultant_pic.png' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/projets/audiophile' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content='Projet Audiophile - Thomas André-Lubin' />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="thomasandrelubin.fr" />
                <meta property="twitter:url" content="https://www.thomasandrelubin.fr/projets/audiophile" />
                <meta name="twitter:title" content="Projet Audiophile - Thomas André-Lubin" />
                <meta name="twitter:description" content="Projet défi de frontendmentor, le but était de créer un site e-commerce pour vendre du matériel audio (casques, enceintes, écouteurs)." />
                <meta name="twitter:image" content="https://thomasandrelubin.fr/images/about/consultant_pic.png" />
            </Head>

            {isMenuOpen && <div className='overlay-burger-menu'></div>}
            <Navbar />
            <main className={classes.projectContainer}>

                <h1>Projet <span className="accentuedWord">Audiophile</span></h1>
                <div className={`${classes.content} max-width`}>
                    <div className={classes.context}>
                        <div className={classes.textWrapper}>
                            <h2>Contexte</h2>
                            <p>Audiophile est un projet défi du site frontendmentor.io. <br />Le but était de construire ce site e-commerce multi-page à l'identique de la maquette.</p>
                        </div>
                        <Link href="https://audiophile-indol-nu.vercel.app/" className="primary-button" target="_blank">Voir le site</Link>
                        <Image src={audiophileImg} alt="Page d'accueil du site audiophile" className={classes.projectImage} />
                    </div>
                    <div className={classes.requirements}>
                        <div className={classes.textWrapper}>

                            <h2>Fonctionnalités </h2>
                            <p className={classes.description}>L'utilisateur devait être capable de :</p>
                            <ul className={classes.requirementList}>
                                <li>Ajouter/Retirer des produits depuis son panier</li>
                                <li>Modifier la quantité de produit dans son panier</li>
                                <li>Remplir tous les champs sur la page de paiement</li>
                                <li>Recevoir une validation du formulaire si des champs n'étaient pas remplis ou incorrecte</li>
                                <li>Voir le prix total de sa commande</li>
                                <li>Voir une confirmation de sa commande après avoir commandé</li>
                                <li>Voir l'affichage idéale du site en fonction de la taille de son appareil</li>
                                <li>Garder son panier même s'il rafraichis la page</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )


}

