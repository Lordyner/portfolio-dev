import { createContext, useState, useEffect } from 'react';
import audiophileMobile from '../public/images/mobile/audiophile.png';
import audiophileTablet from '../public/images/tablet/audiophile.png';
import audiophileDesktop from '../public/images/desktop/audiophile.png';
import payApiMobile from '@/public/images/mobile/payApi.png';
import payApiTablet from '@/public/images/tablet/payApi.png';
import payApiDesktop from '@/public/images/desktop/payApi.png';
import myTeamMobile from '@/public/images/mobile/myTeam.png';
import myTeamTablet from '@/public/images/tablet/myTeam.png';
import myTeamDesktop from '@/public/images/desktop/myTeam.png';
import newsHomepageMobile from '@/public/images/mobile/news_homepage.png';
import newsHomepageTablet from '@/public/images/tablet/news_homepage.png';
import newsHomepageDesktop from '@/public/images/desktop/news_homepage.png';
import photosnapMobile from '@/public/images/mobile/photosnap.png';
import photosnapTablet from '@/public/images/tablet/photosnap.png';
import photosnapDesktop from '@/public/images/desktop/photosnap.png';
import coffeeRoastersMobile from '@/public/images/mobile/coffee_roasters.png';
import coffeeRoastersTablet from '@/public/images/tablet/coffee_roasters.png';
import coffeeRoastersDesktop from '@/public/images/desktop/coffee_roasters.png';
const GlobalContext = createContext();

export function GlobalContextProvider(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [showPopupAddMeetingInClientCalendar, setShowPopupAddMeetingInClientCalendar] = useState(false);
    const [showPopupError, setShowPopupError] = useState(false);
    const [showPopupContactFormIncorrect, setShowPopupContactFormIncorrect] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState();
    const [isMobileResolution, setIsMobileResolution] = useState();
    const [isTabletResolution, setIsTabletResolution] = useState();
    const [isLaptopResolution, setIsLaptopResolution] = useState();
    const [isDesktopResolution, setIsDesktopResolution] = useState();
    const [mobileResolution] = useState(320);
    const [tabletResolution] = useState(768);
    const [laptopResolution] = useState(1024);
    const [desktopResolution] = useState(1440);

    const [projectsData, setProjectsData] = useState([
        {
            name: "audiophile",
            description: "Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...",
            image: isMobileResolution ? audiophileMobile : isTabletResolution ? audiophileTablet : audiophileDesktop, alt: 'Audiophile',
            liveSiteUrl: 'https://audiophile-indol-nu.vercel.app/'
        },
        {
            name: "photosnap",
            description: "Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...",
            image: isMobileResolution ? photosnapMobile : isTabletResolution ? photosnapTablet : photosnapDesktop, alt: 'Photosnap',
            liveSiteUrl: 'https://photosnap-sigma.vercel.app/'
        },
        {
            name: "coffee roasters",
            description: "Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...",
            image: isMobileResolution ? coffeeRoastersMobile : isTabletResolution ? coffeeRoastersTablet : coffeeRoastersDesktop, alt: 'Coffee Roasters',
            liveSiteUrl: 'https://coffee-roasters-gamma.vercel.app/'
        },
        {
            name: "myTeam",
            description: "Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...",
            image: isMobileResolution ? myTeamMobile : isTabletResolution ? myTeamTablet : myTeamDesktop, alt: 'MyTeam',
            liveSiteUrl: 'https://my-team-eosin.vercel.app/'

        },
        {
            name: "payAPI",
            description: "Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...",
            image: isMobileResolution ? payApiMobile : isTabletResolution ? payApiTablet : payApiDesktop, alt: 'PayAPI',
            liveSiteUrl: 'https://pay-api-seven.vercel.app/'
        },
        {
            name: "news homepage",
            description: "Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...",
            image: isMobileResolution ? newsHomepageMobile : isTabletResolution ? newsHomepageTablet : newsHomepageDesktop, alt: 'News homepage',
            liveSiteUrl: 'https://lordyner.github.io/news-homepage/'
        },
    ]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        handleBodyScroll(!isMenuOpen);
    }
    const handleBodyScroll = (lockScroll) => {
        const body = document.body;
        if (lockScroll) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    };

    return (
        <GlobalContext.Provider value={{
            isLoading, setIsLoading,
            showPopupAddMeetingInClientCalendar, setShowPopupAddMeetingInClientCalendar,
            showPopupError, setShowPopupError,
            isMenuOpen, setIsMenuOpen,
            isMobileResolution, setIsMobileResolution,
            isTabletResolution, setIsTabletResolution,
            isLaptopResolution, setIsLaptopResolution,
            isDesktopResolution, setIsDesktopResolution,
            showPopupContactFormIncorrect, setShowPopupContactFormIncorrect,
            mobileResolution, tabletResolution, laptopResolution, desktopResolution,
            toggleMenu, projectsData
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;