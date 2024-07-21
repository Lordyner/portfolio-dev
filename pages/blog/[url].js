import Head from 'next/head';
import { useState, useEffect, useContext, Fragment } from 'react';
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
import { getAllPostsForHome, getSinglePostBySlug } from '@/lib/api';


export default function ArticleWordpress({ article }) {

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
                {article &&
                    <div className={`${classes.content}`}>
                        <h1 className={`${classes.title} ${classes.mainTitle}`}>{article.title}</h1>
                        <Image src={article.featuredImage.node.sourceUrl} alt={article.featuredImage.node.altText} className={classes.headerImageArticle} width={900} height={280} />
                        <div className={classes.secondaryInfos}>

                            <Image src={article.author.node.avatar.url} alt='Thomas André-Lubin' className={classes.authorImg} width={48} height={48} />
                            <div className={classes.infos}>
                                <p className={classes.authorName}>{article.author.node.name}</p>
                                <div className={classes.articleInfos}>
                                    <p className={classes.dateArticle}>{article.date}</p>
                                    <p className={classes.readingTime}>Temps de lecture : 5mn</p>
                                </div>
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
                    </div>
                }


            </div >

            <Footer />
        </>
    )

}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    };
}
export async function getStaticProps(context) {

    const { url } = context.params;
    const fetchedArticle = await getSinglePostBySlug(url);

    return {
        props: {
            article: fetchedArticle
        },
        revalidate: 60
    }
}

