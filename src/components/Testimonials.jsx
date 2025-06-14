import React, { useState } from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import star from '../assets/Star.png';
import person from '../assets/person.png';

const testimonials = [
    {
        name: 'Floyd Miles',
        company: 'eBay',
        image: person,
        text: `Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.`
    }
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

    const { name, company, image, text } = testimonials[index];
    return (
        <div className='p-exp'>
            <div className='text-white'>
                <div className='d-flex'>
                    <img src={star} alt='star' />
                    <h1 className='fs-40'>What they say</h1>
                </div>
            </div>
<div className='row'>
            <div className="col-md-6 d-flex align-items-center">
                <img
                    src={image}
                    alt={name}
                    className="rounded-circle me-3"
                />
                <div>
                    <h5 className="fs-24 mb-0 text-white">{name}</h5>
                    <small className="text-gray">{company}</small>
                </div>
            </div>

           <div className="col-md-6 text-center position-relative testimonial-text px-4">
  <FaQuoteLeft 
    size={80} 
    className="quote-icon position-absolute top-0 start-0 opacity-25 text-gray" 
    style={{ transform: 'translate(-10%, -10%)' }} 
  />
  <p className="mb-4 mt-5 fs-5 text-white fw-light lh-base">
    {text}
  </p>
  <div className="d-flex justify-content-center gap-3">
    <button className="btn btn-light rounded-circle">
      <FaArrowLeft />
    </button>
    <button className="btn btn-light rounded-circle">
      <FaArrowRight />
    </button>
  </div>
</div>

</div>

        </div>
    )
}

export default Testimonials;