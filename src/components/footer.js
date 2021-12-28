import React from 'react';
import '../pages/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const initFontAwesome = () => {
    library.add(faLinkedin);
  };
  const handleClick = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  };
  return (
    <div className="footer">
      <FontAwesomeIcon className='linkedin' icon={faLinkedin} onClick={() => handleClick('https://www.linkedin.com/in/abdul-naseem-khan-14b429198/')} />
      <p className="email">Email: abdulnaseem548@gmail.com</p>
    </div>

  );
};

export default Footer;
