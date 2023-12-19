import Head from 'next/head';
import { useState, useEffect } from 'react';
import useData from '@/Hooks/useData';
import Navbar from '@/Components/Navbar';
import Homepage from '@/Components/Homepage';
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

export default function Home() {
  const [screenWidth, setScreenWidth] = useState();
  const { isLoading } = useData();
  const { showPopupConfirmation, setShowPopupConfirmation } = useData();
  const { showPopupError, setShowPopupError } = useData();
  const { showPopupContactFormIncorrect, setShowPopupContactFormIncorrect } = useData();
  const { setIsDesktopResolution } = useData();
  const mobileResolution = 767;

  const handleMenuDisplay = () => {
    setScreenWidth(window.screen.width);
    screenWidth > mobileResolution ? setIsDesktopResolution(true) : setIsDesktopResolution(false);
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
        {isLoading && <Spinner />}
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
            setShowPopup={setShowPopupContactFormIncorrect} />}
        <Navbar />
        <Homepage />
        <SkillSection />
        <Project />
        <Values />
        <Contact />
        <Footer />
      </main >
    </>
  )

}
