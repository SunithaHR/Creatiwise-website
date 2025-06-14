import React, { useState } from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import star from '../assets/Star.png';

const Experience = () => {

    const experienceData = [
        {
            role: "Lead Product Designer",
            company: "Fortknox",
            duration: "Mar 2022 - Oct 2023"
        },
        {
            role: "Intern Designer",
            company: "OmniSafe",
            duration: "Mar 2022 - Oct 2023"
        },
        {
            role: "UI Designer",
            company: "Doradesign",
            duration: "Mar 2022 - Oct 2023"
        },
        {
            role: "Frontend Developer",
            company: "OpacityAuthor",
            duration: "Mar 2022 - Oct 2023"
        }
    ];


    return (
        <div className='p-exp'>
            <div className='text-white'>
                <div className='d-flex'>
                    <img src={star} alt='star' />
                    <h1 className='fs-40'>Experience</h1>
                </div>
                {experienceData.map((exp, index) => (
                    <div className="d-flex justify-content-between border-bottom pt-32" key={index}>
                        <div className="left">
                            <p className="fs-32">{exp.role}</p>
                        </div>
                        <div className="right">
                            <p className="fs-24">{exp.company}</p>
                            <p className="fs-16">{exp.duration}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Experience;