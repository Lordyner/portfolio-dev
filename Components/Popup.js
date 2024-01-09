import Image from 'next/image';
import React from 'react';

const Popup = ({ title, img, buttonText, imgDescription, showPopup, setShowPopup }) => {

    return (
        <>
            <div id='popup-overlay'></div>
            <div className="popup">
                <h2>{title}</h2>
                <Image src={img} alt={imgDescription} />
                <button onClick={() => {
                    setShowPopup(!showPopup);
                }} className='primary-button'>{buttonText}</button>

            </div>
        </>
    );
};

export default Popup;