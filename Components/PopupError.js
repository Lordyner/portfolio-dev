import React from 'react';

const PopupError = ({ title, buttonText, showPopup, setShowPopup, text }) => {
    return (
        <>
            <div id='popup-overlay'></div>
            <div className="popup">
                <h2>{title}</h2>
                <p>{text}</p>
                <button onClick={() => {
                    setShowPopup(!showPopup);
                }} className='primary-button'>{buttonText}</button>

            </div>
        </>
    );
};

export default PopupError;