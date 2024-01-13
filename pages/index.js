import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import SkillSection from '@/Components/SkillSection';
import Project from '@/Components/Project';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
import Spinner from '@/Components/Spinner';
import illustrationMailError from '@/public/images/illustration_bug.svg'
import illustrationMailSent from '@/public/images/illustration_mail_sent.svg'
import formValidationImg from '@/public/images/form_validation.svg'
import PopupContact from '@/Components/Popup';
import Values from '@/Components/Values';
import GlobalContext from '@/Store/GlobalContext';
import portfolioBg from '../public/images/portfolio_bg.jpeg';
import Image from 'next/image';
import { getLogger } from '@/Logging/log-util';
import Meeting from '@/Components/Meeting';
import getAccessToken from '@/Utils/getAccessTokenUtils';
import getGoogleEvents from '@/Utils/getGoogleEvents';
import PopupAddAgenda from '@/Components/PopupAddAgenda';
import FAQ from '@/Components/FAQ';

export default function Home({ googleCalendarEvents }) {

  const logger = getLogger('Meeting');

  const [screenWidth, setScreenWidth] = useState();

  const { showPopupConfirmation, setShowPopupConfirmation } = useContext(GlobalContext);
  const { showPopupError, setShowPopupError } = useContext(GlobalContext);
  const { showPopupContactFormIncorrect, setShowPopupContactFormIncorrect } = useContext(GlobalContext);

  const { isMobileResolution, setIsMobileResolution } = useContext(GlobalContext);
  const { isTabletResolution, setIsTabletResolution } = useContext(GlobalContext);
  const { isLaptopResolution, setIsLaptopResolution } = useContext(GlobalContext);
  const { isDesktopResolution, setIsDesktopResolution } = useContext(GlobalContext);
  const { mobileResolution, tabletResolution, laptopResolution, desktopResolution } = useContext(GlobalContext);
  const { isLoading, setIsLoading } = useContext(GlobalContext);
  const { showPopupAddMeetingInClientCalendar, setShowPopupAddMeetingInClientCalendar } = useContext(GlobalContext);
  const { isMenuOpen } = useContext(GlobalContext);
  logger.info('Home page rendered');

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
    handleMenuDisplay();
    window.addEventListener('resize', handleMenuDisplay);
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

      {/* <Meeting googleCalendarEvents={googleCalendarEvents} /> */}


      <Footer />

    </>
  )

}


/************************************************************************************************************* */
/* There is an issue, I'm requesting a new access token each time, even if the previous one is still valid *****/
/* Write the access token in a file *****/
/************************************************************************************************************* */

export async function getStaticProps(context) {

  const logger = getLogger('BookACall - getStaticProps');

  // Retrieve the access token from Google API
  const accessToken = await getAccessToken('https://www.googleapis.com/auth/calendar.readonly');

  let calendarData = null;

  // Call Google Calendar API only if the access token is not null
  if (accessToken) {
    calendarData = await getGoogleEvents(accessToken);
  }

  return {
    props: {
      googleCalendarEvents: calendarData || []
    },
    revalidate: 3599,
  };


}