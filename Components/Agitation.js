import React from 'react';
import classes from './Agitation.module.css';
import credibilityGambled from '@/public/images/accueil/credibilite_entreprise_en_jeu.png';
import Image from 'next/image';
import Link from 'next/link';


const Agitation = () => {
    return (
        <section className={classes.container}>
            <div className={`${classes.agitation} max-width`}>
                <div className={classes.content}>
                    <h2>La crédibilité de <span className='accentuedWord'>votre entreprise en jeu</span></h2>
                    <div className={classes.description}>
                        <p>Un site internet mal conçu vous coûte des centaines voire <b>des milliers de prospects</b> chaque mois. Vous ne me croyez pas ?</p><br />
                        <ul className={classes.stats}>
                            <li><Link href="https://www.kinesisinc.com/the-truth-about-web-design/" target='_blank' rel='nofollow' className={classes.link}>75%</Link> des internautes jugent la crédibilité d'une entreprise en fonction du design de leur site</li>
                            <li><Link href="https://www.tandfonline.com/doi/abs/10.1080/01449290500330448" target='_blank' rel='nofollow' className={classes.link}>0,05 secondes</Link>, c'est le temps nécessaire pour que les visiteurs se forment une opinion sur votre site</li>
                            <li><Link href="https://www.researchgate.net/publication/221516871_Trust_and_mistrust_of_online_health_sites" target='_blank' rel='nofollow' className={classes.link}>94%</Link> de l'opinion sur un site est lié au design</li>
                            <li><Link href="https://blog.hubspot.com/marketing/compelling-stats-website-design-optimization-list" target='_blank' rel='nofollow' className={classes.link}>38%</Link> des visiteurs quittent un site mal structuré</li>
                            <li><Link href="https://curatti.com/web-design-usability/" target='_blank' rel='nofollow' className={classes.link}>47%</Link> des utilisateurs s'attendent à un temps de chargement inférieur à 2 secondes</li>
                        </ul>
                    </div>
                </div>
                <Image
                    src={credibilityGambled}
                    alt="Image d'un homme jouant au poker avec son téléphone dans les mains"
                    className={classes.gamblingCredibilityImg}
                />
            </div>
        </section>
    );
};

export default Agitation;