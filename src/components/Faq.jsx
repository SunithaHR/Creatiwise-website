import React, { useState } from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import star from '../assets/Star.png';

const FAQ = () => {

    const faqData = [
        {
            question: "What is your design process?",
            answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
        },
        {
            question: "What tools and software do you use for UX design?",
            answer: ""
        },
        {
            question: "How do you measure the success of your UX designs?",
            answer: ""
        }
    ];

    return (
        <div className='p-exp'>
            <div className='text-white'>
                <div className='d-flex'>
                    <img src={star} alt='star' />
                    <h1 className='fs-40'>What they say</h1>
                </div>
            </div>

            <div className="row pt-32">
                <div className="col-lg-8">
                    <div className="accordion" id="faqAccordion">
                        {faqData.map((item, index) => (
                            <div key={index}>
                                <h2 className="fs-32 text-white" id={`heading${index}`}>
                                    {item.question}
                                </h2>
                                <div
                                >
                                    <div className=" pt-3 pb-4 fs18 text-gray">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;