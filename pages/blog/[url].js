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

export default function ArticleWordpress({ article }) {

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

            </Head>
            {isMenuOpen && <div className='overlay-burger-menu'></div>}

            <Navbar theme="white" maxWidth="56.25rem" />
            <div className={classes.container}>
                {article &&
                    <div className={`${classes.content}`}>
                        <h1 className={`${classes.title} ${classes.mainTitle}`}>{article.title}</h1>
                        <Image src={article.featuredImage.node.sourceUrl} alt={article.featuredImage.node.altText} className={classes.headerImageArticle} width={900} height={280} />
                        <div className={classes.secondaryInfos}>
                            <Link href="/a-propos" target='_blank'>
                                <Image src={article.author.node.avatar.url} alt='Thomas André-Lubin' className={classes.authorImg} width={48} height={48} />
                            </Link>
                            <div className={classes.infos}>
                                <Link href="/a-propos" target='_blank'>
                                    <p className={classes.authorName}>{article.author.node.name}</p>
                                </Link>
                                {/* <div className={classes.articleInfos}>
                                    <p className={classes.dateArticle}>Date de création : {formattedDate}</p>
                                    <p className={classes.readingTime}>Temps de lecture : 5mn</p>
                                </div> */}
                            </div>
                        </div>
                        <div className={classes.blogContent} dangerouslySetInnerHTML={{ __html: article.content }}></div>
                        {article.slug === "avantages-seo-pour-tpe-et-pme" && <FAQArticle />}
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

