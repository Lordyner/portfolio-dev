import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import { getLogger } from '@/logging/log-util';
import { useRouter } from 'next/router';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Spinner from '@/Components/Spinner';
import GlobalContext from '@/Store/GlobalContext';
import classes from '@/styles/blog.module.css';
import Image from 'next/image';
import imageWebsiteGoal from "@/public/images/blog/objectif-site-internet/objectif-d'un-site-internet.webp";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllPosts, getAllPostsForHome, getAllPrivatePost } from '@/lib/api';

export default function Home({ posts, preview }) {
    /* Logger */
    const logger = getLogger('Articles');
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
                <title>Mes articles - Thomas André-Lubin</title>
                <meta name="description" content="Développeur web freelance vous accompagne dans la création d'un site internet moderne, optimisé pour le référencement et avec une excellente expérience utilisateur." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />

                {/* Socials */}
                <meta property='og:title' content="Mes articles - Thomas André-Lubin" />
                <meta property='og:description' content="Développeur web freelance vous accompagne dans la création d'un site internet moderne, optimisé pour le référencement et avec une excellente expérience utilisateur." />
                <meta property='og:image' content='/images/accueil/hero_img.webp' />
                <meta property='og:url' content='https://www.thomasandrelubin.fr/' />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='fr_FR' />
                <meta property='og:site_name' content="Les avantages incontournables d' un site internet pour votre entreprise - Thomas André-Lubin" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="thomasandrelubin.fr" />
                <meta property="twitter:url" content="https://www.thomasandrelubin.fr/" />
                <meta name="twitter:title" content="Les avantages incontournables d'un site internet pour votre entreprise - Thomas André-Lubin" />
                <meta name="twitter:description" content="Développeur web freelance vous accompagne dans la création d'un site internet moderne, optimisé pour le référencement et avec une excellente expérience utilisateur." />
                <meta name="twitter:image" content="https://thomasandrelubin.fr/images/accueil/hero_img.webp" />

            </Head>
            {isMenuOpen && <div className='overlay-burger-menu'></div>}

            <Navbar theme="white" />
            <div className={classes.container}>
                <div className={`${classes.content} max-width`}>
                    <div className={classes.header}>
                        <h1>Retrouvez mes <span className="accentuedWord">articles</span></h1>
                        <p>Retrouvez ici mes articles sur le développement web, le SEO, le marketing digital et bien d'autres sujets.</p>
                    </div>

                    <div className={classes.articles}>
                        <Link href="/blog/objectif-site-internet" className={classes.linkArticle}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.9 }}
                                className={classes.article}>
                                <Image src={imageWebsiteGoal} alt="Image d'accueil" width={300} height={200} className={classes.previewImgArticle} />
                                <div className={classes.textWrapper}>
                                    <h2>Quel est l'objectif d'un site internet d'entreprise</h2>
                                    <p className={classes.date}>20 Juillet, 2024</p>
                                </div>
                            </motion.div>
                        </Link>

                        {posts && posts.length > 0 && posts.map((post) => {
                            return (
                                <Link href={`/blog/${post.node.slug}`} className={classes.linkArticle} key={post.node.title}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={classes.article}>
                                        <Image src={post.node.featuredImage.node.sourceUrl} alt="Image d'accueil" width={300} height={200} className={classes.previewImgArticle} />
                                        <div className={classes.textWrapper}>
                                            <h2>{post.node.title}</h2>
                                            <p className={classes.date}>{post.node.date}</p>
                                        </div>
                                    </motion.div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export async function getStaticProps({ preview = true }) {

    const posts = await getAllPosts(preview);

    return {
        props: { posts, preview },
        revalidate: 10,
    }
}
