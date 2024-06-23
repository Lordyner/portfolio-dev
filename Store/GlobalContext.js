import { createContext, useState } from 'react';


const GlobalContext = createContext();

export function GlobalContextProvider(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [showPopupAddMeetingInClientCalendar, setShowPopupAddMeetingInClientCalendar] = useState(false);
    const [showPopupError, setShowPopupError] = useState(false);
    const [showPopupContactFormIncorrect, setShowPopupContactFormIncorrect] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState();
    const [isMobileResolution, setIsMobileResolution] = useState();
    const [isTabletResolution, setIsTabletResolution] = useState();
    const [isDesktopResolution, setIsDesktopResolution] = useState();
    const [mobileResolution] = useState(320);
    const [tabletResolution] = useState(768);
    const [desktopResolution] = useState(1440);

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
            isDesktopResolution, setIsDesktopResolution,
            showPopupContactFormIncorrect, setShowPopupContactFormIncorrect,
            mobileResolution, tabletResolution, desktopResolution,
            toggleMenu,
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;