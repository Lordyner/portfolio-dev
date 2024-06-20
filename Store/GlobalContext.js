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

    // const [projectsData, setProjectsData] = useState([
    //     {
    //         name: "audiophile2",
    //         description: "Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...",
    //         image: isMobileResolution ? audiophileMobile : isTabletResolution ? audiophileTablet : audiophileDesktop, alt: 'Audiophile',
    //         liveSiteUrl: 'https://audiophile-indol-nu.vercel.app/'
    //     },
    //     {
    //         name: "photosnap",
    //         description: "Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...",
    //         image: isMobileResolution ? photosnapMobile : isTabletResolution ? photosnapTablet : photosnapDesktop, alt: 'Photosnap',
    //         liveSiteUrl: 'https://photosnap-sigma.vercel.app/'
    //     },
    //     {
    //         name: "coffee roasters",
    //         description: "Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...",
    //         image: isMobileResolution ? coffeeRoastersMobile : isTabletResolution ? coffeeRoastersTablet : coffeeRoastersDesktop, alt: 'Coffee Roasters',
    //         liveSiteUrl: 'https://coffee-roasters-gamma.vercel.app/'
    //     },
    //     {
    //         name: "myTeam",
    //         description: "Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...",
    //         image: isMobileResolution ? myTeamMobile : isTabletResolution ? myTeamTablet : myTeamDesktop, alt: 'MyTeam',
    //         liveSiteUrl: 'https://my-team-eosin.vercel.app/'

    //     },
    //     {
    //         name: "payAPI",
    //         description: "Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...",
    //         image: isMobileResolution ? payApiMobile : isTabletResolution ? payApiTablet : payApiDesktop, alt: 'PayAPI',
    //         liveSiteUrl: 'https://pay-api-seven.vercel.app/'
    //     },
    //     {
    //         name: "news homepage",
    //         description: "Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...",
    //         image: isMobileResolution ? newsHomepageMobile : isTabletResolution ? newsHomepageTablet : newsHomepageDesktop, alt: 'News homepage',
    //         liveSiteUrl: 'https://lordyner.github.io/news-homepage/'
    //     },
    // ]);
    const [servicesData, setServicesData] = useState([
        {
            id: 1,
            title: 'Audit de site',
            description: 'J\'analyse les données Google Analytics de votre site pour déterminer les problème qui nuisent à son taux de conversion et son trafic.',
            link: 'services/audit',
            className: 'audit',
            features: [{
                name: 'Responsive',
                description: 'Chacune de mes réalisations s\'adaptent parfaitement à chaque taille d\'écran (mobile, tablette, ordinateur) pour offrir à l\'utilisateur la meilleur expérience possible.',
                alt: 'Responsive'
            },
            {
                name: 'SEO',
                description: 'Chacune de mes réalisations s\'adaptent parfaitement à chaque taille d\'écran (mobile, tablette, ordinateur) pour offrir à l\'utilisateur la meilleur expérience possible.',
                alt: 'Responsive'
            },
            {
                name: 'UI',
                description: 'Chacune de mes réalisations s\'adaptent parfaitement à chaque taille d\'écran (mobile, tablette, ordinateur) pour offrir à l\'utilisateur la meilleur expérience possible.',
                alt: 'Responsive'
            },
            {
                name: 'UI',
                description: 'Chacune de mes réalisations s\'adaptent parfaitement à chaque taille d\'écran (mobile, tablette, ordinateur) pour offrir à l\'utilisateur la meilleur expérience possible.',
                alt: 'Responsive'
            },
            {
                name: 'UI',
                description: 'Chacune de mes réalisations s\'adaptent parfaitement à chaque taille d\'écran (mobile, tablette, ordinateur) pour offrir à l\'utilisateur la meilleur expérience possible.',
                alt: 'Responsive'
            },
            {
                name: 'UI',
                description: 'Chacune de mes réalisations s\'adaptent parfaitement à chaque taille d\'écran (mobile, tablette, ordinateur) pour offrir à l\'utilisateur la meilleur expérience possible.',
                alt: 'Responsive'
            },
            {
                name: 'UI',
                description: 'Chacune de mes réalisations s\'adaptent parfaitement à chaque taille d\'écran (mobile, tablette, ordinateur) pour offrir à l\'utilisateur la meilleur expérience possible.',
                alt: 'Responsive'
            }, {
                name: 'UI',
                description: 'Chacune de mes réalisations s\'adaptent parfaitement à chaque taille d\'écran (mobile, tablette, ordinateur) pour offrir à l\'utilisateur la meilleur expérience possible.',
                alt: 'Responsive'
            }


            ]
        },
        {
            id: 2,
            title: 'Création de site internet',
            description: 'Un site internet est aujourd\'hui un outil indispensable pour toute entreprise. Il est gage de crédibilité et de visibilité. Imaginez un magasin ou un bureau ouvert 24h/24 et 7j/7, avec des charges de fonctionnement minimes et qui est accessible immédiatement par des millions de personnes. C\'est ce que vous offre un site internet. ',
            link: 'services/creation-site-internet',
            className: 'website',
            features: [{
                name: 'Responsive',
                description: 'Chacune de mes réalisations s\'adaptent parfaitement à chaque taille d\'écran (mobile, tablette, ordinateur) pour offrir à l\'utilisateur la meilleur expérience possible.',
                alt: 'Responsive'
            }]
        },
        {
            id: 3,
            title: 'Conception de maquette',
            description: 'Je conçois les maquettes de votre site internet à partir de vos besoins et l\'image que vous souhaitez renvoyer. Ces maquettes peuvent ...',
            link: 'services/conception-maquette',
            className: 'design',
            features: [{
                name: 'Responsive',
                description: 'Chacune de mes réalisations s\'adaptent parfaitement à chaque taille d\'écran (mobile, tablette, ordinateur) pour offrir à l\'utilisateur la meilleur expérience possible.',
                alt: 'Responsive'
            }]
        }
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
            isDesktopResolution, setIsDesktopResolution,
            showPopupContactFormIncorrect, setShowPopupContactFormIncorrect,
            mobileResolution, tabletResolution, desktopResolution,
            toggleMenu, servicesData
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;