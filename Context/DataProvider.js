import { createContext, useState } from 'react';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [showPopupConfirmation, setShowPopupConfirmation] = useState(false);
    const [showPopupError, setShowPopupError] = useState(false);
    const [showPopupContactFormIncorrect, setShowPopupContactFormIncorrect] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState();
    const [isDesktopResolution, setIsDesktopResolution] = useState();
    return (
        <DataContext.Provider value={{
            isLoading, setIsLoading,
            showPopupConfirmation, setShowPopupConfirmation,
            showPopupError, setShowPopupError,
            isMenuOpen, setIsMenuOpen,
            isDesktopResolution, setIsDesktopResolution,
            showPopupContactFormIncorrect, setShowPopupContactFormIncorrect
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;