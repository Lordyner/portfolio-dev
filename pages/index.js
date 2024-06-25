import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import { getLogger } from '@/logging/log-util';
import { useRouter } from 'next/router';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Project from '@/Components/Project';
import Footer from '@/Components/Footer';
import Spinner from '@/Components/Spinner';
import GlobalContext from '@/Store/GlobalContext';
import classes from '@/Components/MainPage.module.css';
import Problem from '@/Components/Problem';
import Agitation from '@/Components/Agitation';
import Solution from '@/Components/Solution';
import WhyMyServices from '@/Components/WhyMyServices';
import CTAReminder from '@/Components/CTAReminder';
import Process from '@/Components/Process';
import Feedback from '@/Components/Feedback';
import FAQ from '@/Components/FAQ';

export default function Home() {

  /* Logger */
  const logger = getLogger('Meeting');
  logger.debug('Home page rendered');

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

        {/* Google */}
        <title>Création de site web en freelance - Thomas André-Lubin</title>
        <meta name="description" content="Développeur web freelance vous accompagne dans la création d'un site internet moderne, optimisé pour le référencement et avec une excellente expérience utilisateur." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" />



        {/* Socials */}
        <meta property='og:title' content='Création de site web en freelance - Thomas André-Lubin' />
        <meta property='og:description' content="Développeur web freelance vous accompagne dans la création d'un site internet moderne, optimisé pour le référencement et avec une excellente expérience utilisateur." />
        <meta property='og:image' content='/images/accueil/hero_img.png' />
        <meta property='og:url' content='https://www.thomasandrelubin.fr/' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='fr_FR' />
        <meta property='og:site_name' content='Création de site web en freelance - Thomas André-Lubin' />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="thomasandrelubin.fr" />
        <meta property="twitter:url" content="https://www.thomasandrelubin.fr/" />
        <meta name="twitter:title" content="Création de site web en freelance - Thomas André-Lubin" />
        <meta name="twitter:description" content="Développeur web freelance vous accompagne dans la création d'un site internet moderne, optimisé pour le référencement et avec une excellente expérience utilisateur." />
        <meta name="twitter:image" content="https://thomasandrelubin.fr/images/accueil/hero_img.png" />

      </Head>
      {isMenuOpen && <div className='overlay-burger-menu'></div>}
      <div className={classes.mainPage}>

        <Navbar />

        <Hero />
      </div>
      <Problem />
      <Agitation />
      <Solution />
      <WhyMyServices />
      <CTAReminder />
      <Process />
      <Feedback />
      <Project />
      <FAQ />
      <Footer />
      {/* <Mission />
      <Services />
      <Values />
      <Stats />
       */}
    </>
  )

}
