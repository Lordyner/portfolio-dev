import React, { useEffect } from 'react';
import classes from './CalendlyEmbedded.module.css';

const CalendlyEmbedded = () => {

    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head.appendChild(script);
    }, []);

    return (
        <div id="calendly" className={classes.calendlyContainer}>
            <h2>Discutons-en au <span className='accentuedWord'>téléphone</span></h2>
            <div className={`${classes.calendly} calendly-inline-widget`} data-url="https://calendly.com/dev-j0h/30min?primary_color=2173c4&hide_gdpr_banner=1" style={{ minWidth: "320px", height: "700px" }}></div >
        </div>
    );
};

export default CalendlyEmbedded;