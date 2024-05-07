import React, { useContext } from 'react';
import classes from './Mission.module.css';
import missionImg from '@/public/images/mission_image_cropped.png';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';

const Mission = () => {

    const { isLaptopResolution, isDesktopResolution } = useContext(GlobalContext);
    return (
        <div className={`${classes.missionContainer} max-width`}>
            <div className='max-width'>
                <h2>Ma mission de<br /> développeur web</h2>
                <div className={classes.content}>
                    {(isLaptopResolution || isDesktopResolution) && <Image src={missionImg} alt="Mission image" />}
                    <div className={classes.textWrapper}>
                        <p>
                            J'accompagne les entreprises dans la création de leur site internet, de la conception de la maquette en passant par le développement, jusqu'à la livraison.<br /><br />
                            Pour moi un site internet est un investissement et il doit donc avoir un objectif quantifiable (prise de contact, demande de devis ...) qui profitera à votre entreprise et pourra être suivi.<br /><br />
                            C'est pourquoi je mets un point d'honneur à comprendre votre domaine d'activité et vos besoins afin de vous proposer les meilleurs solutions web.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;