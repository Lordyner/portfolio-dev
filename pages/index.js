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
import PopupContact from '@/Components/PopupContact';
import Values from '@/Components/Values';
import GlobalContext from '@/Store/GlobalContext';
import portfolioBg from '../public/images/portfolio_bg.jpeg';
import Image from 'next/image';

export default function Home() {
  const [screenWidth, setScreenWidth] = useState();
  const { isLoading } = useContext(GlobalContext);
  const { showPopupConfirmation, setShowPopupConfirmation } = useContext(GlobalContext);
  const { showPopupError, setShowPopupError } = useContext(GlobalContext);
  const { showPopupContactFormIncorrect, setShowPopupContactFormIncorrect } = useContext(GlobalContext);

  const { isMobileResolution, setIsMobileResolution } = useContext(GlobalContext);
  const { isLaptopResolution, setIsLaptopResolution } = useContext(GlobalContext);
  const { isDesktopResolution, setIsDesktopResolution } = useContext(GlobalContext);

  const mobileResolution = 767;
  const laptopResolution = 1110;
  const desktopResolution = 1440;

  const handleMenuDisplay = () => {
    setScreenWidth(window.screen.width);
    // Entre 0 et 768px
    if (screenWidth <= mobileResolution) {
      setIsMobileResolution(true);
    } else {
      setIsMobileResolution(false);
    }

    if (screenWidth > mobileResolution && screenWidth < desktopResolution) {
      setIsLaptopResolution(true);
    } else {
      setIsLaptopResolution(false);
    }

    if (screenWidth >= desktopResolution) {
      setIsDesktopResolution(true);
    } else {
      setIsDesktopResolution(false);
    }
  }

  useEffect(() => {
    handleMenuDisplay();
    window.addEventListener('resize', handleMenuDisplay);
  }, [screenWidth])


  return (
    <>
      <Head>
        <title>Portfolio André-Lubin Thomas</title>
        <meta name="description" content="Portfolio du développeur André-Lubin Thomas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
        {isMobileResolution &&
          <>
            <Navbar />
            <Hero />
          </>
        }
        {!isMobileResolution &&
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





      {/* {isLoading && <Spinner />}
        {showPopupConfirmation && <PopupContact
          title="MAIL ENVOYÉ"
          img={illustrationMailSent}
          buttonText="OK"
          imgDescription="illustration mail envoyé"
          showPopup={showPopupConfirmation}
          setShowPopup={setShowPopupConfirmation}
        />}
        {showPopupError && <PopupContact
          title="ÉCHEC ENVOIE MAIL"
          img={illustrationMailError}
          buttonText="OK"
          imgDescription="illustration échec mail"
          showPopup={showPopupError}
          setShowPopup={setShowPopupError}
        />}
        {showPopupContactFormIncorrect &&
          <PopupContact
            title="Veuillez remplir correctement les champs"
            img={formValidationImg}
            buttonText="OK"
            imgDescription="form validation"
            showPopup={showPopupContactFormIncorrect}
            setShowPopup={setShowPopupContactFormIncorrect} />} */}
      {/* <SkillSection />
        <Project />
        <Contact /> */}
      {/* <Footer /> */}

    </>
  )

}
