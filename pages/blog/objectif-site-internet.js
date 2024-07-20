import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import { getLogger } from '@/logging/log-util';
import { useRouter } from 'next/router';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Spinner from '@/Components/Spinner';
import GlobalContext from '@/Store/GlobalContext';
import classes from '@/styles/articleBlog.module.css';
import Image from 'next/image';
import imageWebsiteGoal from "@/public/images/blog/objectif-site-internet/objectif-d'un-site-internet.webp";
import imageAuthorThomas from '@/public/images/blog/auteur-thomas-andrelubin.png'
import imageGoogleAnalytics from '@/public/images/blog/objectif-site-internet/suivre_objectif_site_internet.webp'
import imageAchievableGoal from '@/public/images/blog/objectif-site-internet/objectif_site_internet_atteignable.webp'
import { motion, useScroll } from "framer-motion";
import imageGenerateMoney from "@/public/images/blog/objectif-site-internet/generer-argent-site-internet.webp"
import Link from 'next/link';
import CTAReminder from '@/Components/CTAReminder';
import myTeamResponsiveMockupFullPage from '@/public/images/projets/myTeam/myTeam_mockup_fullPage.avif';
import imageDefineWebsiteGoals from '@/public/images/blog/objectif-site-internet/definir_objectif_site_internet.webp'
import heroImg from '@/public/images/accueil/hero_img.webp';


export default function Home() {

    /* Logger */
    const logger = getLogger('Avantage Site Internet');
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

    /* Other hooks */
    const { scrollYProgress } = useScroll();


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
                <title>Définir l'objectif d'un site internet d'entreprise</title>
                <meta name="description" content="Il est crucial de définir l'objectif principal d'un site internet d'entreprise si vous voulez qu'il soit un atout pour votre entreprise." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />

                {/* Socials */}
                <meta property='og:title' content="Définir l'objectif d'un site internet d'entreprise" />
                <meta property='og:description' content="Il est crucial de définir l'objectif principal d'un site internet d'entreprise si vous voulez qu'il soit un atout pour votre entreprise." />
                <meta property='og:image' content="/images/blog/objectif-site-internet/objectif-d'un-site-internet.webp" />
                <meta property='og:url' content="https://www.thomasandrelubin.fr/blog/objectif-site-internet" />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content="Définir l'objectif d'un site internet d'entreprise" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="thomasandrelubin.fr" />
                <meta property="twitter:url" content="https://www.thomasandrelubin.fr/blog/objectif-site-internet" />
                <meta name="twitter:title" content="Définir l'objectif d'un site internet d'entreprise" />
                <meta name="twitter:description" content="Il est crucial de définir l'objectif principal d'un site internet d'entreprise si vous voulez qu'il soit un atout pour votre entreprise." />
                <meta name="twitter:image" content="https://thomasandrelubin.fr/images/blog/objectif-site-internet/objectif-d'un-site-internet.webp" />

            </Head>
            {isMenuOpen && <div className='overlay-burger-menu'></div>}

            <Navbar theme="white" maxWidth="56.25rem" />
            <div className={classes.container}>
                <div className={`${classes.content}`}>
                    <h1 className={`${classes.title} ${classes.mainTitle}`}>Quel est l'objectif d'un site internet d'entreprise
                    </h1>
                    <Image src={imageWebsiteGoal} alt="objectif d'un site internet, photo d'une cible avec clavier" className={classes.headerImageArticle} />
                    <div className={classes.secondaryInfos}>

                        <Image src={imageAuthorThomas} alt='Thomas André-Lubin' className={classes.authorImg} />
                        <div className={classes.infos}>
                            <p className={classes.authorName}>Thomas André-Lubin</p>
                            <div className={classes.articleInfos}>
                                <p className={classes.dateArticle}>20 Juillet, 2024</p>
                                <p className={classes.readingTime}>Temps de lecture : 5mn</p>
                            </div>
                        </div>
                    </div>
                    <p>
                        L'objectif d'un site internet est un <b className="fw-500">élément crucial</b>, qu'il faut déterminer correctement et pouvoir suivre si vous souhaitez créer un site internet pour votre entreprise, afin que celui-ci soit un atout plutôt qu'un gouffre financier sans retour visible.<br /><br />
                        Dans cet article, je vais vous expliquer comment décrire <b className="fw-500">différents types d'objectifs</b> pour votre site web, <b className="fw-500">comment les définir</b> pour être sûr qu'ils soient atteints et <b className="fw-500">comment les suivre</b> par la suite.
                    </p>
                    <div className={classes.articleSection}>

                        <h2 className={classes.title}>Trouver l'objectif de votre site internet</h2>
                        <p>
                            L'objectif d'un site internet est identique à celui d'une entreprise : <b className="fw-500">faire de l'argent</b>. Si je vous dis qu'un site internet est accessible 24h/24, 7j/7, par n'importe qui, de n'importe où, en seulement quelques secondes, vous me dites ... Bingo !<br /><br />
                            Peu importe votre secteur d'activité, la taille de votre entreprise ou les contraintes que vous avez : il y a forcément une opportunité de <b className="fw-500">générer plus d'argent pour votre entreprise</b> grâce à un site internet.<br /><br />
                        </p>
                        <Image src={imageGenerateMoney} alt="mains tenant plusieurs billets sur un bureau avec ordinateur, calculatrice, pair de lunettes et documents" className={classes.imageArticle} /><br />

                        <h3 className={classes.title}>Vendre des produits physiques</h3>
                        <p>
                            Si votre entreprise vend des produits physiques, un site internet dit site e-commerce ou boutique en ligne, vous permettra de toucher une bien plus vaste clientèle.<br /><br />

                            Un site e-commerce présente bien des avantages. Il vous permet de toucher <b className="fw-500">une plus grande clientèle</b>, les charges sont bien moins importantes qu'avec un magasin physique et vous n'êtes pas soumis aux fermetures forcées (covid, manifestations, JO, etc).<br /><br />
                        </p>
                        <h3 className={classes.title}>Vendre des services numériques</h3>
                        <p>
                            Similaire à la vente de produits physiques, la vente de produits numériques (formations, coaching) bénéficiera grandement d'un site e-commerce afin de permettre à ses visiteurs d'acheter directement les produits en ligne.<br /><br />

                            La vente de services numériques via sa boutique en ligne a les mêmes avantages que la vente de produits physiques, mais en plus, il n'y a <b className="fw-500">aucune livraison à gérer</b>.<br /><br />
                        </p>
                        <h3 className={classes.title}>Présenter ses services</h3>
                        <p>
                            Un site internet peut également avoir comme objectif de <b className="fw-500">présenter les services de votre entreprise</b>. Ces sites web sont appelés sites vitrine et mettent en avant les services d'une entreprise afin d'informer le visiteur.<br /><br />

                            Ils s'accompagnent souvent d'un formulaire de contact ou bien d'une fonctionnalité de demande de devis personnalisé afin d'augmenter le taux de conversion.<br /><br />
                        </p>
                        <Image src={myTeamResponsiveMockupFullPage} alt="Maquette du site internet myTeam qui a pour objectif de présenter les services de l'entreprise" className={classes.imageArticle} /><br />
                        <h3 className={classes.title}>Améliorer la crédibilité de votre entreprise</h3>
                        <p>
                            Nous avons tous fait l'expérience d'un mauvais site internet (ou une absence de site internet) qui nous a motivé à choisir un concurrent plutôt que cette entreprise. Il faut savoir que <Link href="https://www.kinesisinc.com/the-truth-about-web-design/">75% des internautes jugent la crédibilité d'une entreprise en fonction du design de leur site</Link><br /><br />

                            Un bon site internet au design moderne et à la simplicité d'utilisation viendra <b className="fw-500">renforcer la crédibilité de votre entreprise</b>.<br /><br />

                            En plus de l'aspect visuel, mettre en avant les témoignages de vos clients donnera un supplément de crédibilité à votre entreprise. Et un visiteur qui a confiance, c'est un visiteur qui aura plus de chance de faire appel à votre entreprise.<br /><br />
                        </p>
                        <h3 className={classes.title}>Vendre un produit</h3>

                        <p>
                            Certains sites internet ont pour objectif de vendre un seul produit, pour cela, ils créent un site web composé d'une seule page. On apelle ces sites des "landing page" ou page de destination.<br /><br />

                            Le but de site est de <b className="fw-500">convertir un maximum de visiteur en prospect ou client</b>, la page est donc optimisée à cet effet : expérience utilisateur, les appels à l'action, la rédaction du contenu, etc. Tout est fait pour convertir.<br /><br />
                        </p>
                        <h3 className={classes.title}>Publier du contenu</h3>

                        <p>
                            Un autre objectif de votre site internet pourrait être de <b className="fw-500">publier du contenu régulièrement</b> comme des articles afin de consolider votre image d'expert dans votre domaine et que vos visiteurs soient plus à même de faire appel à vos services.<br /><br />

                            La création de contenu régulier est aussi une bonne idée pour améliorer le référencement naturel de son site et ainsi obtenir plus de visiteurs.<br /><br />
                        </p>

                    </div>

                    <div className={classes.articleSection}>
                        <h2 className={classes.title}>Définir l'objectif d'un site internet</h2>
                        <p>Afin que de mettre toutes les chances de notre côté, il y a quelques critères à respecter lorsqu'on défini l'objectif d'un site internet.</p>
                        <Image src={imageDefineWebsiteGoals} alt="Photo d'une loupe, d'un cahier et d'une cible avec une fléchette en plein centre" className={classes.imageArticle} /><br />
                        <h3 className={classes.title}>Un objectif spécifique</h3>

                        <p>
                            L'objectif de votre site internet doit être <b className="fw-500">aussi concret que possible</b>. Par exemple : "je veux que mon site internet profite à mon entreprise" est un mauvais objectif car il est trop vague.<br /><br />

                            De quelle façon veut-on aider l'entreprise ? On peut très bien aider une entreprise en créant un site de type "application web" qui servira aux employés à remplir leur frais de société. Le résultat, le prix et les efforts attendus seront complètement différents d'un site vitrine présentant les services de l'entreprise.<br /><br />

                            C'est pourquoi il est important de définir <b className='fw-500'>des objectifs de sites web</b> spécifiques afin de mettre toutes les chances de notre côté.<br /><br />

                            On pourrait imaginer un objectif spécifique comme : "je veux vendre mes compléments alimentaires sur mon site internet". Ici l'objectif est concret et la liberté d'interprétation est réduite au maximum.<br /><br />

                            Très bien, il est concret, mais il ne lui manquerait pas un petit truc ?<br /><br />
                        </p>

                        <h3 className={classes.title}>Un objectif mesurable</h3>

                        <p>
                            En plus d'être concret, <b className='fw-500'>un objectif doit être mesurable</b>. C'est ce qui va permettre de dire si l'objectif a été atteint ou non.<br /><br />

                            Si je reprends l'objectif précédent,  "je veux vendre mes compléments alimentaires sur mon site internet", une seule vente réalisée rendrait l'objectif réussi. Mais je doute que réaliser une seule vente soit suffisant pour votre entreprise.<br /><br />

                            En rendant l'objectif quantifiable, on précise l'attendu et on augmente nos chances d'avoir <b className='fw-500'>un objectif qui satisfasse notre besoin</b>. Si je complète l'objectif, cela pourrait donner : "je veux vendre 1 000 000 de compléments alimentaires par mois sur mon site internet ".<br /><br />

                            On progresse, mais est-ce vraiment tout ?<br /><br />
                        </p>

                        <h3 className={classes.title}>Un objectif atteignable</h3>

                        <p>
                            Vous vous en doutez, un objectif concret et mesurable, ce n'est pas suffisant pour être un bon objectif. Il faut également que celui-ci soit <b className='fw-500'>atteignable</b>.<br /><br />

                            En fonction de votre produit, du marché, de votre réputation et visibilité actuelle, ce 1 000 000 de compléments par mois sera ou non atteignable.<br /><br />

                            Imaginons que nous soyons une nouvelle marque de complément alimentaire pour sportif et que nous ayons décroché un partenariat avec un gros youtubeur sport français qui a plus d'1 million d'abonnés.<br /><br />

                            Nous allons également créer une campagne de publicité youtube pour nos produits et réalisé différents autre partenariats.<br /><br />

                            <b className='fw-500'>Un objectif atteignable</b> ressemblerait plus à ça : "je veux vendre 10 000 compléments alimentaires par mois sur mon site internet".<br /><br />

                            Cela parait déjà plus atteignable, ça rend bien à l'écrit, mais dans le monde réel, il ne manquerait pas un petit truc ?<br /><br />

                            <Image src={imageAchievableGoal} alt='Homme sautant entre deux falaises' className={classes.imageArticle} /><br />
                        </p>

                        <h3 className={classes.title}>Un objectif limité dans le temps</h3>

                        <p>
                            Sans date limite comment savoir quand l'objectif est réussi ou échoué ? On pourrait en théorie dire que l'objectif est toujours en cours dans 30 ans.<br /><br />

                            C'est pourquoi il est important de <b className='fw-500'>définir un cadre temporel</b> pour vos objectifs de site internet.<br /><br />
                            Encore mieux, que ce cadre temporel soit spécifique et atteignable.<br /><br />

                            On pourrait alors se retrouver avec un objectif comme : "je veux vendre 10 000 compléments alimentaires par mois, d'ici janvier 2027, sur mon site internet".<br /><br />
                        </p>

                        <h3 className={classes.title}>On a tout ?</h3>

                        <p>
                            Faisons un rapide récapitulatif de notre objectif :<br />
                            <label class="form-control-checkbox">
                                <input type="checkbox" name="specific" checked disabled />
                                Spécifique : vente de compléments alimentaires sur mon site internet
                            </label>
                            <label class="form-control-checkbox">
                                <input type="checkbox" name="measurable" checked disabled />
                                Mesurable : 10 000 par mois
                            </label>
                            <label class="form-control-checkbox">
                                <input type="checkbox" name="achievable" checked disabled />
                                Atteignable
                            </label>
                            <label class="form-control-checkbox">
                                <input type="checkbox" name="timely" checked disabled />
                                Date limite : d'ici janvier 2027
                            </label><br />

                            Parfait, nous avons notre objectif, il est spécifique, mesurable, atteignable et a une date limite.<br /><br />

                            Et ensuite ? Il faudrait un moyen pour savoir si notre objectif a été réalisé ? Ce qui serait encore mieux c'est de pouvoir suivre régulièrement, afin de savoir si on est en bonne voie ou non ?<br /><br />
                        </p>

                    </div>

                    <div className={classes.articleSection}>
                        <h2 className={classes.title}>Comment suivre l'objectif de notre site internet</h2>
                        <p>
                            L'une des meilleures façons de suivre les objectifs de son site web est de configurer <b className='fw-500'>un outil de collecte des données utilisateur</b> sur son site.<br /><br />

                            Le meilleur étant Google Analytics, c'est celui que je configure sur tous les sites de mes clients. Il permet de suivre un ensemble de données vitales au suivi de nos objectifs.<br /><br />

                            Nous allons faire le tour de quelques <b className='fw-500'>indicateurs clé</b> qui vont nous aider à suivre les objectifs de votre site internet.<br /><br />
                        </p>
                        <Image src={imageGoogleAnalytics} alt="image d'un ordinateur avec google analytics pour suivre objectif d'un site web" className={`${classes.imageArticle} ${classes.imageWithoutMaxHeight}`} /><br />
                        <h3 className={classes.title}>Nombre de visiteurs</h3>

                        <p>
                            Le <b className='fw-500'>nombre de personnes</b> qui ont consulté votre site internet sur une période donnée. En général, on suit le nombre de visiteurs de mois en mois, mais pour les sites avec un nombre de visiteurs important, il peut être utile de suivre semaine par semaine.<br /><br />
                        </p>
                        <h3 className={classes.title}>Nombre de nouveaux visiteurs</h3>

                        <p>
                            Le nombre de nouveaux visiteurs est le nombre de personnes qui ont visité votre site internet <b className='fw-500'>pour la première fois</b>, sur une période donnée.<br /><br />

                            On peut également suivre le nombre de nouveaux visiteurs par canal (accès direct au site, recherche organique, publicité payante, etc) ce qui est très pratique si l'on veut suivre un objectif d'augmentation de trafic grâce au référencement naturel.<br /><br />
                        </p>

                        <h3 className={classes.title}>Les conversions</h3>

                        <p>
                            Une conversion est un événement important sur votre site que vous voulez suivre. Pour un site e-commerce cela peut être <b className='fw-500'>l'achat d'un produit</b>, pour un site vitrine <b className='fw-500'>l'envoie d'un message</b> via le formulaire de contact.<br /><br />

                            Le taux de conversion lui se calcul de la façon suivante : (Nombre de conversions / Nombre de visiteurs) x 100.<br /><br />

                            Un nombre de visiteurs important et un taux de conversion trop faible peut indiquer que <b className='fw-500'>ces visiteurs ne sont pas assez bien qualifiés</b>.<br /><br />
                        </p>

                        <h3 className={classes.title}>Le taux de rebond</h3>

                        <p>
                            C'est le <b className='fw-500'>pourcentage de personnes qui quitte votre site après avoir accédé à seulement une page</b> et n'avoir cliqué nulle part.<br /><br />

                            Le taux de rebond est à prendre avec des pincettes en fonction de la page. Un taux de rebond élevé ne signifie pas forcément un problème.<br /><br />

                            Par exemple une page web de dictionnaire donnant la définition d'un mot aura sans doute un taux de rebond très élevé, car le visiteur se rend sur la page, obtient l'information qu'il cherchait et part aussitôt.<br /><br />

                            Au contraire, si la page d'accueil d'un site internet a un taux de rebond élevé, cela peut indiquer un problème. Il faudra analyser plus en détail avec d'autres données, ou bien tout simplement tester le site, pour trouver le problème.<br /><br />

                            En analysant plus en détail, on peut trouver que le taux de rebond est particulièrement élevé pour les visiteurs sur téléphone portable, ce qui traduit sans doute un problème d'expérience utilisateur sur mobile.<br /><br />
                        </p>

                        <h3 className={classes.title}>Catégorie d'appareil</h3>

                        <p>
                            Grâce à Google Analytics, on peut également savoir quel type d'appareil utilise vos visiteurs (mobile, ordinateur). Ce qui est peu être utile pour détecter un problème sur votre site.<br /><br />

                            On peut alors <b className='fw-500'>comparer les indicateurs discutés plus haut pour les visiteurs sur mobile et ceux sur ordinateur</b> afin de voir s'il y a des écarts trop important.<br /><br />
                        </p>

                        <h3 className={classes.title}>Et bien d'autres</h3>

                        <p>
                            Il existe bien d'autres indicateurs clé à suivre pour votre site internet. Je vous ai présenté les basiques mais en fonction des objectifs de votre site, il pourra être intéressant d'en suivre d'autres comme : les pages les plus visitées, l'âge de vos visiteurs, les zones géographiques de vos visiteurs, etc.<br /><br />
                        </p>

                    </div>
                    <div className={classes.articleSection}>
                        <h2 className={classes.title}>Conclusion</h2>
                        <p>

                            Suivre des indicateurs clé de performance de votre site web est <b className='fw-500'>indispensable afin de savoir si l'objectif d'un site internet est en route pour être atteint ou non.</b><br /><br />

                            Pour cela Google Analytics est un outil puissant mais il reste complexe et difficile à prendre en main.<br /><br />

                            C'est pourquoi j'envoie un <b className='fw-500'>rapport mensuel simplifié à chacun de mes clients</b> contenant tout les indicateurs clé de performance de leur site. Cela leur permet de suivre l'avancé des objectifs de leur site internet, sans perdre de temps et <b className='fw-500'>sans l'effort de devoir chercher sur Google Analytics</b> l'information.<br /><br />

                            Si vous rechercher un expert pour créer un site internet qui sera un atout pour votre entreprise, <Link href="/contact">vous pouvez me contacter</Link> et je me ferais un plaisir de vous y aider.<br /><br />
                        </p>
                    </div>

                </div>
            </div >
            <CTAReminder backgroundColor="#F0F4F7" />

            <Footer />
        </>
    )

}
