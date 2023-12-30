import { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export function GlobalContextProvider(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [showPopupConfirmation, setShowPopupConfirmation] = useState(false);
    const [showPopupError, setShowPopupError] = useState(false);
    const [showPopupContactFormIncorrect, setShowPopupContactFormIncorrect] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState();
    const [isMobileResolution, setIsMobileResolution] = useState();
    const [isLaptopResolution, setIsLaptopResolution] = useState();
    const [isDesktopResolution, setIsDesktopResolution] = useState();

    return (
        <GlobalContext.Provider value={{
            isLoading, setIsLoading,
            showPopupConfirmation, setShowPopupConfirmation,
            showPopupError, setShowPopupError,
            isMenuOpen, setIsMenuOpen,
            isMobileResolution, setIsMobileResolution,
            isLaptopResolution, setIsLaptopResolution,
            isDesktopResolution, setIsDesktopResolution,
            showPopupContactFormIncorrect, setShowPopupContactFormIncorrect
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;