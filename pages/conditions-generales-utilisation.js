import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import { getLogger } from '@/logging/log-util';
import { useRouter } from 'next/router';
import Navbar from '@/Components/Navbar';

import Footer from '@/Components/Footer';
import Spinner from '@/Components/Spinner';
import GlobalContext from '@/Store/GlobalContext';
import classes from '@/styles/CGU.module.css';


export default function ConditionsGeneralesUtilisations() {

    /* Logger */
    const logger = getLogger("Conditions Générales d'Utilisation");
    logger.debug('Page rendered');

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
                <title>Conditions générales d'utilisation - Thomas André-Lubin</title>
                <meta name="description" content="Découvrez les conditions générales d'utilisation de mon site de création de sites internet freelance." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />

                {/* Socials */}
                <meta property='og:title' content="Conditions générales d'utilisation - Thomas André-Lubin" />
                <meta property='og:description' content="Découvrez les conditions générales d'utilisation de mon site de création de sites internet freelance." />
                <meta property='og:image' content='/images/accueil/hero_img.webp' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/politique-de-confidentialite' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content="Conditions générales d'utilisation - Thomas André-Lubin" />

            </Head>
            {isMenuOpen && <div className='overlay-burger-menu'></div>}
            <Navbar />
            <div className={classes.container}>
                <div className={`${classes.content} max-width`}>
                    <h1 className={classes.title}>Conditions générales d'utilisation du site thomasandrelubin</h1>
                    <div className={classes.article}>
                        <h2>ARTICLE 1 : objet</h2>
                        <p>
                            Les présentes CGU ou Conditions Générales d'Utilisation encadrent juridiquement l'utilisation des services du site thomasandrelubin (ci-après dénommé « le site »).
                            Constituant le contrat entre l'Entrepreneur Individuel Thomas André-Lubin, l'Utilisateur, l'accès au site doit être précédé de l'acceptation de ces CGU. L'accès à cette plateforme signifie l'acceptation des présentes CGU.
                        </p>
                    </div>
                    <div className={classes.article}>
                        <h2>ARTICLE 2 : accès au site</h2>
                        <p>Le site thomasandrelubin permet d'accéder gratuitement aux services suivants :</p>
                        <ul>
                            <li>Envoye d'un message via formulaire de contact </li>
                            <li>Réservation d'un rendez-vous dans l'agenda de l'EI Thomas André-Lubin</li>
                        </ul>
                        <p>
                            Le site est accessible gratuitement depuis n'importe où par tout utilisateur disposant d'un accès à Internet. Tous les frais nécessaires pour l'accès aux services (matériel informatique, connexion Internet…) sont à la charge de l'utilisateur.<br /><br />
                            Pour des raisons de maintenance ou autres, l'accès au site peut être interrompu ou suspendu par l'éditeur sans préavis ni justification.
                        </p>
                    </div>
                    <div className={classes.article}>
                        <h2>ARTICLE 3 : Propriété intellectuelle</h2>
                        <p>
                            Les marques, logos ainsi que les contenus du site thomasandrelubin (illustrations graphiques, textes…) sont protégés par le Code de la propriété intellectuelle et par le droit d'auteur.
                            La reproduction et la copie des contenus par l'Utilisateur requièrent une autorisation préalable du site. Dans ce cas, toute utilisation à des usages commerciaux ou à des fins publicitaires est proscrite.
                        </p>
                    </div>
                    <div className={classes.article}>
                        <h2>ARTICLE 4 : Responsabilité</h2>
                        <p>
                            Bien que les informations publiées sur le site soient réputées fiables, le site se réserve la faculté d'une non-garantie de la fiabilité des sources.<br /><br />
                            Les informations diffusées sur le site thomasandrelubin sont présentées à titre purement informatif et sont sans valeur contractuelle. En dépit des mises à jour régulières, la responsabilité du site ne peut être engagée en cas de modification des dispositions administratives et juridiques apparaissant après la publication. Il en est de même pour l'utilisation et l'interprétation des informations communiquées sur la plateforme.<br /><br />
                            Le site décline toute responsabilité concernant les éventuels virus pouvant infecter le matériel informatique de l'Utilisateur après l'utilisation ou l'accès à ce site.<br /><br />
                            Le site ne peut être tenu pour responsable en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.<br /><br />
                            La garantie totale de la sécurité et la confidentialité des données n'est pas assurée par le site. Cependant, le site s'engage à mettre en œuvre toutes les méthodes requises pour le faire au mieux.
                        </p>
                    </div>
                    <div className={classes.article}>
                        <h2>ARTICLE 5 : Liens hypertextes</h2>
                        <p>Le site peut être constitué de liens hypertextes. En cliquant sur ces derniers, l'Utilisateur sortira de la plateforme. Cette dernière n'a pas de contrôle et ne peut pas être tenue responsable du contenu des pages web relatives à ces liens.
                        </p>
                    </div>
                    <div className={classes.article}>
                        <h2>ARTICLE 6 : Cookies</h2>
                        <p>
                            Lors des visites sur le site, l'installation automatique d'un cookie sur le logiciel de navigation de l'Utilisateur peut survenir.<br /><br />
                            Les cookies correspondent à de petits fichiers déposés temporairement sur le disque dur de l'ordinateur de l'Utilisateur. Ces cookies sont nécessaires pour assurer l'accessibilité et la navigation sur le site.<br /><br />
                            L'information présente dans les cookies est utilisée pour améliorer les performances de navigation sur le site thomasandrelubin.fr.
                            En naviguant sur le site, l'Utilisateur accepte les cookies. Leur désactivation peut s'effectuer via les paramètres du logiciel de navigation.
                        </p>
                    </div>
                    <div className={classes.article}>
                        <h2>ARTICLE 7 : Durée du contrat</h2>
                        <p>
                            Le présent contrat est valable pour une durée indéterminée. Le début de l'utilisation du site marque l'application du contrat à l'égard de l'Utilisateur.
                        </p>
                    </div>
                    <div className={classes.article}>
                        <h2>ARTICLE 8 : Droit applicable et juridiction compétente</h2>
                        <p>
                            Le présent contrat est soumis à la législation française. L'absence de résolution à l'amiable des cas de litige entre les parties implique le recours aux tribunaux français compétents pour régler le contentieux.
                        </p>
                    </div>
                </div>
            </div>




            <Footer />
        </>
    )

}
