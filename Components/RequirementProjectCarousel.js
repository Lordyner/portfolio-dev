import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import classes from './CarouselFeedback.module.css'
import useEmblaCarousel from 'embla-carousel-react'


const RequirementProjectCarousel = ({ requirements }) => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {requirements.map((requirement, index) => (
                        <div className="embla__slide requirement">
                            {requirement.description}
                        </div>

                    ))}
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

export default RequirementProjectCarousel;