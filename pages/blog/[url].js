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
import { motion, useScroll } from "framer-motion";
import Link from 'next/link';
import { getSinglePostBySlug } from '@/lib/api';
import FAQArticle from '@/Components/FAQArticle';

import { fr } from "date-fns/locale";
import { format } from "date-fns";
import FAQArticle2 from '@/Components/FAQArticle2';

export default function ArticleWordpress({ article, indexPage }) {

    /* Logger */
    const logger = getLogger('Article page');
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
                <title>{article?.title}</title>
                <meta name="description" content={article?.excerpt} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />

                <meta property='og:title' content={article?.title} />
                <meta property='og:description' content={article?.excerpt} />
                <meta property='og:image' content={article?.featuredImage?.node?.sourceUrl} />
                <meta property='og:url' content={`https://www.thomasandrelubin.fr/blog/` + article?.uri} />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content="https://www.thomasandrelubin.fr" />

            </Head>
            {isMenuOpen && <div className='overlay-burger-menu'></div>}

            <Navbar theme="white" maxWidth="56.25rem" />

            <div className={classes.container}>
                {article &&
                    <div className={`${classes.content}`}>
                        <h1 className={`${classes.title} ${classes.mainTitle}`}>{article.title}</h1>
                        <div className={classes.secondaryInfos}>
                            <Link href="/a-propos" target='_blank'>
                                <Image src={article.author.node.avatar.url} alt='Thomas André-Lubin' className={classes.authorImg} width={48} height={48} />
                            </Link>
                            <div className={classes.infos}>
                                <Link href="/a-propos" target='_blank'>
                                    <p className={classes.authorName}>{article.author.node.name}</p>
                                </Link>
                                <div className={classes.articleInfos}>
                                    <p className={classes.dateArticle}>Mis à jour le : {format(article.modified, "dd MMMM yyyy", { locale: fr })}</p>
                                    <p className={classes.readingTime}>Temps de lecture : {article.readingTime} minutes</p>
                                </div>
                            </div>
                        </div>
                        {article.featuredImage && <Image src={article?.featuredImage?.node?.sourceUrl} alt={article.featuredImage.node.altText} className={classes.headerImageArticle} width={900} height={280} />
                        }
                        <div className={classes.blogContent} dangerouslySetInnerHTML={{ __html: article.content }}></div>
                        {article.slug === "avantages-seo-pour-tpe-et-pme" && <FAQArticle />}
                        {article.slug === "cout-maintenance-site-internet" &&
                            <>
                                <h2 className='h2 faqTitle'>FAQ : coût de la maintenance d'un site web
                                </h2><FAQArticle2 />
                            </>}
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

    const indexPage = process.env.ENV === 'PRD' ? true : false;

    return {
        props: {
            article: fetchedArticle,
            indexPage: indexPage
        },
        revalidate: 60
    }
}

