import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MicrosoftCard from "./cards/MicrosoftCard";
import HiringNowCard from "./cards/HiringNowCard";
import HighestPayingSectorsCard from "./cards/HighestPayingSectorsCard";

function ScrollingCard({ children, rotation, isInFocus }) {
    const translateY = Math.abs(rotation) * 3 + 'px';

    return (
        <div
            className="inline-block transition-transform ease-in-out duration-500"

            style={{ 
                transform: `rotate(${rotation}deg) translateY(${translateY}) scale(${isInFocus ? 1.1 : 0.9})`, 
                zIndex: -Math.abs(rotation) ,
            }}
        >
            {children}
        </div>
    );
}


export function CardCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const cards = [
        MicrosoftCard,
        HiringNowCard,
        HighestPayingSectorsCard,
        MicrosoftCard,
        HiringNowCard,
        HighestPayingSectorsCard
    ]

    function getRotation(index) {
        const diff = index - activeIndex;

        if (activeIndex === cards.length - 1 && index === 0) {
            return 20;
        }
        if (activeIndex === 0 && index === cards.length - 1) {
            return -20;
        }

        if (diff === 0) return 0;
        if (diff === 1) return 20;
        if (diff === -1) return -20;
        if (diff > 1) return 40;
        if (diff < -1) return -40;
        return 0;

    }

    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500, // slick animation duration
        beforeChange: (_current, next) => setActiveIndex(next),
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };  


    return (
        <div className="p-10 scale-90 sm:scale-100 relative overflow-hidden bg-white pt-[80px] h-[450px] max-w-[1000px] mx-auto ">
            <Slider {...settings}>
                {cards.map((Card, index) => (
                    <ScrollingCard rotation={getRotation(index)} isInFocus={activeIndex === index} key={index}>
                        <Card isInFocus={activeIndex === index}  />
                    </ScrollingCard>
                ))}
            </Slider>

            {/* element to add a transition  */}
            <div className="w-full h-[60%] sm:h-[80%] absolute bottom-0 left-0 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            <div className="w-10 sm:w-20 h-full absolute top-0 left-0 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="w-10 sm:w-20 h-full absolute top-0 right-0 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>


        </div>
    );
}
export default CardCarousel;


