import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import classes from './CarouselFeedback.module.css'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import avatar from '@/public/images/global/avatar.png';

const CarouselFeedback = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    return (
        <section className="emblaFeedback">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">

                    <div className="embla__slide">
                        <div className={classes.feedback}>
                            <Image src={avatar} alt="Avatar utilisateur" className={classes.carouselImg} />
                            <div className={classes.textWrapper}>
                                <div className={classes.titles}>
                                    <p className={classes.name}>Benoit MOLL</p>
                                    <h3 className={classes.jobTitle}>Directeur de projet - Inetum</h3>
                                </div>
                                <p className={classes.description}>Thomas a travaillé dans mon équipe pendant un peu plus de 2 ans, en tant que développeur fullstack. Il a très bien rempli son rôle et beaucoup apporté à l'équipe, autant sur le plan technique que humain. Parmi ses succès, on peut souligner le fait qu'il a porté un gros chantier de refonte UI et qu'il a donné une très bonne dynamique à l'équipe, notamment au travers l'apport d'idées novatrices (environnements de travail, process, etc...).</p>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className={classes.feedback}>
                            <Image src={avatar} alt="Avatar utilisateur" className={classes.carouselImg} />
                            <div className={classes.textWrapper}>
                                <div className={classes.titles}>
                                    <p className={classes.name}>Tom VOS</p>
                                    <h3 className={classes.jobTitle}>Product Owner - Orange</h3>
                                </div>
                                <p className={classes.description}>J'ai eu le réel plaisir, en tant que Product Owner, de travailler avec Thomas qui a fait partie de notre équipe de développement pendant deux ans. Tant techniquement qu'humainement, il a été un vrai plus pour l'équipe : disponible, impliqué, efficace, dynamique et jovial.
                                    Réelle force de proposition, il a su porter des évolutions importantes (notamment graphiques et ergonomiques) sur notre projet, avec un investissement constant et jamais démenti : c'est un vrai « teamplayer » !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarouselFeedback;