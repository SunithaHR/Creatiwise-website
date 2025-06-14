import React, { useState } from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='navbar d-flex justify-content-between flex-nowrap p-nav'>
      <img src={logo} alt='logo' />

      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 flex-row">
        {['Home', 'About', 'Projects', 'Contact'].map((link) => (
          <li className="nav-item px-2" key={link}>
            <a
              className={`nav-link fs-16 ${activeLink === link ? 'active bg-light text-dark round-pill' : 'text-light'}`}
              href="#"
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button className="btn btn-outline-light fs-14">HIRE ME</button>
    </div>
  );
};

export default Navigation;
