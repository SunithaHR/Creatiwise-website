import React, { useState } from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import rectangle from '../assets/Rectangle.png';
import rectangle1 from '../assets/Rectangle (1).png';
import doradesign from '../assets/doradesign.png';
import wavefun from '../assets/wavefun.png';
import frame from '../assets/Frame.png';

const HeroSection = () => {

    return (
        <div className='p-hero d-flex'>
            <div>
                <div className='text-center'>
                    <h1 className='fs-64 text-white'>
                        I AM A <img src={rectangle} /> FREELANCE
                    </h1>
                    <h1 className='fs-64 text-white'>
                        DESIGNER <img src={rectangle1} /> FROM
                    </h1>
                    <h1 className='fs-64 text-white'>
                        San Francisco
                    </h1>
                </div>
                <div class="row pt-112">
                    <div class="col">
                        <img src={doradesign} />
                    </div>
                    <div class="col">
                        <img src={wavefun} />
                    </div>
                    <div class="col">
                        <img src={frame} />
                    </div>
                    <div class="col">
                        <p className='text-gray fs-16Reg'>Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection;