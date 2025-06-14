import React, { useState } from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import star from '../assets/Star.png';
import envelop from '../assets/envelop.png';
import laptop from '../assets/laptop.png';
import envelopCard from '../assets/envelopCard.png';

const Works = () => {
    const cardData = [
        {
            image: envelop, heading: 'Analysis Application',
            description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
            b1: 'FIGMA', b2: 'UX'
        },
        {
            image: laptop, heading: 'Fortknox Application',
            description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
            b1: 'MOBILE', b2: 'WEB'
        },
        {
            image: envelopCard, heading: 'Zenocide Application',
            description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
            b1: 'APP', b2: 'WEB'
        }
    ]
    return (
        <div className='p-exp'>
            <div className='d-flex justify-content-between text-white'>
                <div className='d-flex'>
                    <img src={star} alt='star' />
                    <h1 className='fs-40'>Works</h1>
                </div>
                <div>
                    <h6 className='fs-18'><u>view all</u></h6>
                </div>
            </div>

            <div>
                {cardData.map((data, index) => (
                    <div key={index} className="pt-5">
                        <div className="row bg-gray radius-40 p-32 text-white">
                            <div className="col-md-6">
                                <img src={data.image} alt={data.heading} className="img-fluid rounded-4 w-100" />
                            </div>

                            <div className="col-md-6 d-flex flex-column justify-content-between">
                                <div>
                                    <h6 className="fs-40 fw-bold text-break">{data.heading}</h6>
                                    <p className='fs-18'>{data.description}</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <button className="fs-12 rounded-pill border border-white text-white bg-transparent px-3">{data.b1}</button>
                                        <button className="fs-12 rounded-pill border border-white text-white bg-transparent px-3">{data.b2}</button>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <button className="rounded-pill p-2 px-4 border border-white fs14 bg-white text-dark">View Case Study</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Works;