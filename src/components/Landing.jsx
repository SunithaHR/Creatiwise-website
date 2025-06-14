import React, { useState } from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import webFlow from '../assets/webFlow.png';
import Designer from '../assets/DESIGNER.png';
import Developer from '../assets/DEVELOPER.png';
import Figma from '../assets/FIGMA.png';
import star from '../assets/Star.png';
import arrow from '../assets/arrow.png';

const Landing = () => {
    const images = [
        { img: webFlow }, { img: Figma }, { img: star }, { img: Designer }, { img: star }, { img: Developer }
    ]

    return (
        <div>
            <div className="marquee-container py-4">
                <div className="d-flex justify-content-between">
                    {images.map((item, index) => (
                        <img
                            key={index}
                            src={item.img}
                            alt={`marquee-${index}`}
                            className="marquee-image"
                        />
                    ))}
                </div>
            </div>
            <div className='d-flex justify-content-center pt-112'>
                <div>
                    <h1 className='fs-64 text-white'>LET’S TALK!</h1>
                    <p className='fs-18 text-white text-center'>rehanurraihan@gmail.com <img src={arrow} /></p>
                </div>
            </div>

            <footer className="footer-custom text-white py-3 px-4 d-flex justify-content-between align-items-center">
                <small className="mb-0 fs-14">© Rehan Raihan - 2023</small>
                <div className="d-flex gap-4">
                    <a href="#" className="text-white text-decoration-none fs-14w4">Dribbble</a>
                    <a href="#" className="text-white text-decoration-none fs-14w4">Behance</a>
                    <a href="#" className="text-white text-decoration-none fs-14w4">Twitter</a>
                    <a href="#" className="text-white text-decoration-none fs-14w4">Instagram</a>
                </div>
            </footer>

        </div>
    )
}

export default Landing;