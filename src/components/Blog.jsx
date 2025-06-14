import React, { useState } from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import star from '../assets/Star.png';
import envelop from '../assets/envelop.png';
import laptop from '../assets/laptop.png';
import envelopCard from '../assets/envelopCard.png';

const Blog = () => {

    const blogPosts = [
        {
            image: envelop,
            date: "Nov 9, 2023",
            title: "How UX works in web",
            tags: ["UI", "UX"]
        },
        {
            image: laptop,
            date: "Aug 18, 2023",
            title: "Case study - Analysis Application.",
            tags: ["DESIGN", "PRINT"]
        },
        {
            image: envelopCard,
            date: "Feb 16, 2023",
            title: "3 ways to develop your skill",
            tags: ["FIGMA", "WEB"]
        }
    ];



    return (
        <div className='p-exp'>
            <div className='text-white'>
                <div className='d-flex'>
                    <img src={star} alt='star' />
                    <h1 className='fs-40'>Blog</h1>
                </div>
                {blogPosts.map((post, index) => (
                    <div className="row align-items-center pt-32" key={index}>
                        <div className="col-md-2">
                            <img src={post.image} alt="blog thumbnail" className="img-fluid rounded-3" />
                        </div>
                        <div className="col-md-8">
                            <small className="fs-18 text-gray">{post.date}</small>
                            <h5 className="mt-1 mb-2 fs-40">{post.title}</h5>
                            <div>
                                {post.tags.map((tag, i) => (
                                    <span key={i} className="badge bg-transparent border border-light rounded-pill text-gray me-2">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-2 text-md-end mt-3 mt-md-0">
                            <button className="btn btn-light rounded-pill px-4">Read</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog;