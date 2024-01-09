import Image from 'next/image';
import React from 'react';
import googleCalendarIcon from '@/public/images/google_calendar_icon.svg';
import classes from './PopupAddAgenda.module.css';
import iconMenuClose from '@/public/images/icon_menu_close.svg';
const PopupAddAgenda = ({ showPopup, setShowPopup, createEventInUserCalendar }) => {

    return (
        <>
            <div id='popup-overlay'></div>
            <div className="popup">
                <Image src={iconMenuClose} className={classes.iconMenuClose} alt='icône fermer' onClick={() => { setShowPopup(!showPopup); }} />
                <h2>Votre demande de rendez-vous a bien été enregistré</h2>
                <p>Vous recevrez une confirmation par mail dans les 24h.</p>
                {/* Code pour le bouton calendar qui doit créer un évent dans le calendrier de l'utilisateur */}
                {/* <button onClick={() => {
                    createEventInUserCalendar();
                    setShowPopup(!showPopup);
                }} className={classes.buttonIcon}>
                    <Image src={googleCalendarIcon} alt='icône google calendar' />
                </button> */}
            </div>
        </>
    );
};

export default PopupAddAgenda;