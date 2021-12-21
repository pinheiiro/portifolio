import { NextComponentType } from 'next';
import Slider from 'react-slick';

export const Carousel : NextComponentType = ({children}) => {

    const settings = {
        dots: true,
        dotsClass: "dots",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScrool: 1,
    }

    return (
    <>
        <Slider {...settings}>
            {children}
        </Slider>
    </>
    )

}