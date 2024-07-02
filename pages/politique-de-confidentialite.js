import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import { getLogger } from '@/logging/log-util';
import { useRouter } from 'next/router';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Spinner from '@/Components/Spinner';
import GlobalContext from '@/Store/GlobalContext';
import classes from '@/styles/politiqueConfidentialite.module.css';
import Link from 'next/link';

export default function PolitiqueDeConfidentialite() {

    /* Logger */
    const logger = getLogger('Politique de confidentialité');
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
                <title>Politique de confidentialité - Thomas André-Lubin</title>
                <meta name="description" content="Lisez ma politique de confidentialité pour comprendre comment je m'occupe et protège vos données personelles sur mon site." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />

                {/* Socials */}
                <meta property='og:title' content='Politique de confidentialité - Thomas André-Lubin' />
                <meta property='og:description' content="Lisez ma politique de confidentialité pour comprendre comment je m'occupe et protège vos données personelles sur mon site." />
                <meta property='og:image' content='/images/accueil/hero_img.webp' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/politique-de-confidentialite' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content='Politique de confidentialité - Thomas André-Lubin' />

            </Head>
            {isMenuOpen && <div className='overlay-burger-menu'></div>}
            <Navbar />
            <div className={classes.container}>
                <div className={`${classes.content} max-width`}>
                    <h1 className={classes.title}>Politique de confidentialité</h1>
                    <div className={classes.article}>

                        <h2>ARTICLE 1 : préambule</h2>
                        <p>La présente politique de confidentialité a pour but d'informer les utilisateurs du site : </p>
                        <ul>
                            <li>Sur la manière dont sont collectées leurs données personnelles. Sont considérées comme des données personnelles, toute information permettant d'identifier un utilisateur. A ce titre, il peut s'agir : de ses noms et prénoms, de son âge, de son adresse postale ou email, de sa localisation ou encore de son adresse IP (liste non-exhaustive)</li>
                            <li>Sur les droits dont ils disposent concernant ces données</li>
                            <li>Sur la personne responsable du traitement des données à caractère personnel collectées et traitées</li>
                            <li>Sur les destinataires de ces données personnelles</li>
                            <li>Sur la politique du site en matière de cookies</li>
                        </ul>

                        <p>Cette politique de confidentialité complète les mentions légales et les Conditions Générales d'Utilisation que les utilisateurs peuvent consulter aux adresses suivantes : </p>
                        <ul>
                            <li><Link href="/mentions-legales">Mentions légales</Link></li>
                            <li><Link href="/conditions-generales-utilisation">Conditions générales d'utilisation</Link></li>
                        </ul>
                    </div>
                    <div className={classes.article}>

                        <h2>ARTICLE 2 : Principes relatifs à la collecte et au traitement des données personnelles   </h2>
                        <p>Conformément à l'article 5 du Règlement européen 2016/679, les données à caractère personnel sont :   </p>
                        <ul>
                            <li>Traitées de manière licite, loyale et transparente au regard de la personne concernée  ; </li>
                            <li>Collectées pour des finalités déterminées (cf. Article 3.1 des présentes), explicites et légitimes, et ne pas être traitées ultérieurement d'une manière incompatible avec ces finalités ; </li>
                            <li>Adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées ; </li>
                            <li>Traitées de façon à garantir une sécurité appropriée des données collectées, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la destruction ou les dégâts d'origine accidentelle, à l'aide de mesures techniques ou organisationnelles appropriées.  </li>
                        </ul>
                        <p>Le traitement n'est licite que si, et dans la mesure où, au moins une des conditions suivantes est remplie :    </p>
                        <ul>
                            <li>La personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques ; </li>
                            <li>Le traitement est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie ou à l'exécution de mesures précontractuelles prises à la demande de celle-ci ; </li>
                            <li>Le traitement est nécessaire au respect d'une obligation légale à laquelle le responsable du traitement est soumis ;</li>
                            <li>Le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d'une autre personne physique ;  </li>
                            <li>Le traitement est nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement ; </li>
                            <li>Le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment lorsque la personne concernée est un enfant. </li>
                        </ul>
                    </div>
                    <div className={classes.article}>
                        <h2>ARTICLE 3 : Données à caractère personnel collectées et traitées dans le cadre de la navigation sur le site  </h2>
                        <h3>Article 3.1 : Données collectées automatiquement</h3>
                        <p>Nous ne collectons aucune données automatiquement sur notre site.</p>

                        <h3>Article 3.2 : Données recueillies de façon non automatique</h3>
                        <p>Nous collectons les données suivantes lorsque vous utilisez notre site:  </p>
                        <ul>
                            <li>Nom</li>
                            <li>Numéro de téléphone</li>
                            <li>Adresse mail</li>
                        </ul>
                        <p>Veuillez noter que nous ne collectons que les données qui nous aident à atteindre l'objectif énoncé dans ce politique de confidentialité.
                            <b />
                            Nous ne recueillerons pas de données supplémentaires sans vous en informer au préalable.
                        </p>
                        <h3>Article 3.3 : Politique en matière de "cookies"</h3>
                        <p>Un cookie est un petit fichier, stocké sur le disque dur d'un utilisateur par le site web. Son but est de recueillir des données relatives aux habitudes de navigation de l'utilisateur.</p>
                        <p>Nous utilisons les types de cookies suivant sur notre site : </p>
                        <ul>
                            <li>Cookies nécessaire : Les cookies nécessaires contribuent à rendre un site web utilisable en activant des fonctions de base comme la navigation de page et l'accès aux zones sécurisées du site web. Le site web ne peut pas fonctionner correctement sans ces cookies.</li>
                            <li>Cookies de préférence : Les cookies de préférences permettent à un site web de retenir des informations qui modifient la manière dont le site se comporte ou s'affiche, comme votre langue préférée ou la région dans laquelle vous vous situez.</li>
                            <li>Cookies de statistique : Les cookies statistiques aident les propriétaires du site web, par la collecte et la communication d'informations de manière anonyme, à comprendre comment les visiteurs interagissent avec les sites web.</li>
                            <li>Cookies de marketing : Les cookies marketing sont utilisés pour effectuer le suivi des visiteurs au travers des sites web. Le but est d'afficher des publicités qui sont pertinentes et intéressantes pour l'utilisateur individuel et donc plus précieuses pour les éditeurs et annonceurs tiers.</li>
                        </ul>
                        <p>Nous utilisons également des services tiers qui peuvent installer des cookies sur votre appareil. Ces services incluent : </p>
                        <ul>
                            <li>Google Analytics : Pour analyser l'utilisation du site et améliorer ses fonctionnalités.</li>
                            <li>Calendly : Pour la prise de rendez-vous en ligne.</li>
                            <li>Stripe : Pour les paiements en ligne.</li>
                        </ul>

                    </div>
                    <div className={classes.article}>
                        <h2>ARTICLE 4 : Responsable du traitement des données et délégué à la protection des données  </h2>
                        <p>Les données à caractère personnelles sont collectées par EI Thomas André-Lubin, Micro-entrepreneur.  </p>
                        <p>Le responsable du traitement des données à caractère personnel peut être contacté de la manière suivante :  </p>
                        <ul>
                            <li>Par courrier à l'adresse : 223 Boulevard du Massacre, 44100 Nantes</li>
                            <li>Par téléphone : 06 37 51 43 79</li>
                            <li>Par mail : dev@thomasandrelubin.fr</li>
                        </ul>
                    </div>
                    <div className={classes.article}>
                        <h2>ARTICLE 5 : Les droits de l'utilisateur en matière de collecte et de traitement des données  </h2>
                        <p>Tout utilisateur concerné par le traitement de ses données personnelles peut se prévaloir des droits suivants, en application du règlement européen 2016/679 et de la Loi Informatique et Liberté (Loi 78-17 du 6 janvier 1978) :   </p>
                        <ul>
                            <li>Droit d'accès, de rectification et droit à l'effacement des données (posés respectivement aux articles 15, 16 et 17 du RGPD) ;  </li>
                            <li>Droit à la portabilité des données (article 20 du RGPD) ; </li>
                            <li>Droit à la limitation (article 18 du RGPD) et à l'opposition du traitement des données (article 21 du RGPD) ;  </li>
                            <li>Droit de ne pas faire l'objet d'une décision fondée exclusivement sur un procédé automatisé ;  </li>
                            <li>Droit de déterminer le sort des données après la mort ;</li>
                            <li>Droit de saisir l'autorité de contrôle compétente (article 77 du RGPD).  </li>
                        </ul>
                        <p>Pour exercer vos droits, veuillez adresser votre courrier à EI Thomas André-Lubin 223 Boulevard du Massacre 44100 Nantes ou par mail à dev@thomasandrelubin.fr</p>
                        <p>
                            Afin que le responsable du traitement des données puisse faire droit à sa demande, l'utilisateur peut être tenu de lui communiquer certaines informations telles que : ses noms et prénoms, son adresse e-mail ainsi que son numéro de compte, d'espace personnel ou d'abonné.  <br /><br />
                            Consultez le site cnil.fr pour plus d'informations sur vos droits.
                        </p>
                    </div>
                    <div className={classes.article}>
                        <h2>ARTICLE 6 : Conditions de modification de la politique de confidentialité </h2>
                        <p>
                            L'éditeur du site thomasandrelubin se réserve le droit de pouvoir modifier la présente Politique à tout moment afin d'assurer aux utilisateurs du site sa conformité avec le droit en vigueur.<br /><br />
                            Les éventuelles modifications ne sauraient avoir d'incidence sur les achats antérieurement effectués sur le site, lesquels restent soumis à la Politique en vigueur au moment de l'achat et telle qu'acceptée par l'utilisateur lors de la validation de l'achat.<br /><br />
                            L'utilisateur est invité à prendre connaissance de cette Politique à chaque fois qu'il utilise nos services, sans qu'il soit nécessaire de l'en prévenir formellement.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
