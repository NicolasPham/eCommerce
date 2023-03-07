import React, { useState } from 'react'
import "./slider.scss"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const data = [
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/flagged/photo-1553802922-2eb2f7f2c65b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
]

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)
        console.log(currentSlide)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)
        console.log(currentSlide)
    }

    return (
        <section className='slider'>
            <div className="container">
                <div className="img flexRow" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                    {data.map((img, index) => (
                        <img src={img} key={index} alt="" />
                    ))}
                </div>
                <div className="icons">
                    <div className="icon" onClick={prevSlide}>
                        <ArrowBackIcon />
                    </div>
                    <div className="icon" onClick={nextSlide}>
                        <ArrowForwardIcon />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Slider
