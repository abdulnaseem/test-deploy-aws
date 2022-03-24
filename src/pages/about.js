import React, { useRef } from 'react';
import './about.css';
import MyStack from '../assets/mystack_collage.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from "@emailjs/browser";

const About = () => {

  const initFontAwesome = () => {
    library.add(faLinkedin);
  };
  const handleClick = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ysdsnyo', 'template_vr2bk16', form.current, 'user_4gsh5jr8Tq2hWNa6qtQHt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="background">

      <div className="p-1 mt-5 aboutme-header">
        <h1 className="aboutme" align="center">About Me</h1>
        <p className="short-intro mt-5 ps-5 pe-5" align="start">
          I’m a Computer Science (Network Computing) Graduate from Brunel University London, having achieved 2.1 with Honours.
          I enjoy taking on challenges as it enables me to think differently and bring out the best of me. I simply love
          learning and building new experiences.<br />
        </p>
      </div>


      <div className="container">
        <div id="more-aboutme" className="p-5">
          <h4 className='header5'>Passion</h4>
          I have begun to read documentation on JavaScript and React. I am learning the fundamentals of these
          and I am in the process of building a number of projects. I hope to leverage these skills and be able to also learn React-Native
          and gain the ability to build cross-platform web and mobile applications.<br /><br /><br />
        </div>
      </div>

      <h3>coming soon</h3>

    </div>
  );
};

export default About;
