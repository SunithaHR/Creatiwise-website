import React, { useState } from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import star from '../assets/Star.png';
import dot from '../assets/dot.png';

const Expertise = () => {
    const data = [
        { heading: 'Branding', description: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.' },
        { heading: 'UI Design', description: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.' },
        { heading: 'UX Design', description: 'I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements' },
        { heading: 'Development', description: 'I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.' }
    ]

    return (
        <div className='p-exp'>
            <div className='d-flex'>
                <img src={star} alt='star' />
                <h1 className='fs-40 text-white'>Expertise</h1>
            </div>
            <div className='row justify-content-between'>
                {data.map((data, index) => (
                    <div key={index} className='col-md-6 pt-32'>
                        <div className='d-flex'>
                            <img src={dot} width={8} height={8} className='mt-2rem me-2'/>
                        <h4 className='fs-24 text-white'>{data.heading}</h4>
                        </div>
                        <p className='fs-16Reg text-gray'>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Expertise;