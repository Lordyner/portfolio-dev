import Head from 'next/head';
import { useState, useEffect, useContext, Suspense } from 'react';
import { getLogger } from '@/logging/log-util';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Project from '@/Components/Project';
import Footer from '@/Components/Footer';
import Spinner from '@/Components/Spinner';
import Values from '@/Components/Values';
import PopupAddAgenda from '@/Components/PopupAddAgenda';
import FAQ from '@/Components/FAQ';
import GlobalContext from '@/Store/GlobalContext';
import portfolioBg from '../public/images/portfolio_bg.jpeg';

export default function Home() {

  /* Logger */
  const logger = getLogger('Meeting');
  logger.debug('Home page rendered');

  /* State */
  const [screenWidth, setScreenWidth] = useState();

  /* Context */
  const { isMobileResolution, setIsMobileResolution } = useContext(GlobalContext);
  const { isTabletResolution, setIsTabletResolution } = useContext(GlobalContext);
  const { isLaptopResolution, setIsLaptopResolution } = useContext(GlobalContext);
  const { isDesktopResolution, setIsDesktopResolution } = useContext(GlobalContext);
  const { tabletResolution, laptopResolution, desktopResolution } = useContext(GlobalContext);
  const { isLoading, setIsLoading } = useContext(GlobalContext);
  const { showPopupAddMeetingInClientCalendar, setShowPopupAddMeetingInClientCalendar } = useContext(GlobalContext);
  const { isMenuOpen } = useContext(GlobalContext);

  /* Router */
  const router = useRouter();

  /* Functions */
  const handleMenuDisplay = () => {
    setScreenWidth(window.screen.width);

    const isMobile = screenWidth < tabletResolution;
    const isTablet = screenWidth >= tabletResolution && screenWidth < laptopResolution;
    const isLaptop = screenWidth >= laptopResolution && screenWidth < desktopResolution;
    const isDesktop = screenWidth >= desktopResolution;

    setIsMobileResolution(isMobile);
    setIsTabletResolution(isTablet);
    setIsLaptopResolution(isLaptop);
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
      {showPopupAddMeetingInClientCalendar && <PopupAddAgenda
        showPopup={showPopupAddMeetingInClientCalendar}
        setShowPopup={setShowPopupAddMeetingInClientCalendar}
      />}
      <Head>
        <title>Portfolio André-Lubin Thomas</title>
        <meta name="description" content="Portfolio du développeur André-Lubin Thomas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isMenuOpen && <div className='overlay-burger-menu'></div>}

      <main className="main-container">
        {(isMobileResolution || isTabletResolution) &&
          <>
            <Navbar />
            <Hero />
          </>
        }
        {(isLaptopResolution || isDesktopResolution) &&
          <>
            <div className='wrapperLeftAndRight'>
              <div className='leftSide'>
                <Navbar />
                <Hero />
              </div>
              <div className="rightSide">
                <Image src={portfolioBg} alt='Thomas André-Lubin en train de développer sur son ordinateur' />
              </div>
            </div>
          </>
        }
      </main >
      <Values />
      <Project />
      <FAQ />
      <Footer />
    </>
  )

}


/************************************************************************************************************* */
/* There is an issue, I'm requesting a new access token each time, even if the previous one is still valid *****/
/* Write the access token in a file *****/
/************************************************************************************************************* */

