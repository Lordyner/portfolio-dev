import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import classes from './CarouselSolution.module.css'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
const CarouselSolution = ({ slides, options }) => {

    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            <Image src={slide.image} alt={slide.title} className={classes.carouselImg} />
                            <div className={classes.textWrapper}>
                                <h3 className={classes.title}>{slide.title}</h3>
                                <p className={classes.description} dangerouslySetInnerHTML={{ __html: slide.description }}></p>
                            </div>
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
    )
}

export default CarouselSolution
