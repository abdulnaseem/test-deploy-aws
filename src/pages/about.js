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

    emailjs.sendForm('service_ysdsnyo', 'template_vr2bk16', e.target, 'user_4gsh5jr8Tq2hWNa6qtQHt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
          <h5 className='header5'>Long-term Goal</h5>
          I am aiming to become a Full Stack Developer, to be able to create cross-platform web and mobile applications. Having
          said that, I am open to learning Software Developer/Engineering (Front-end and/or Back-end), DevOps and Testing/QA. To learn all
          of these technologies is a long-term goal.<br /><br />
          <h5 className='header5'>For now</h5>
          For now, I would love to dive into anyone of these roles and have a core focus!<br /><br />
          <h5 className='header5'>Passion</h5>
          I have begun to read documentation on JavaScript, React and soon more about jQuery, I am learning the fundamentals of these
          and in the process of building a project based on React and React-Native framework. The first project will be a mobile and TV application.
          Also, to be able to implement DevOps principles such as setting up CI/CD pipeline and working with Cloud service e.g. AWS.<br /><br /><br />
        </div>
      </div>

      <div id="myStack" className="container hide">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-4 align-self-center col-md-6 col-xs-6 boxy pb-5">
              <h1 className="mystack" align="left">Core tools and technologies</h1><br />
            </div>
            <div className="col-lg-4 align-self-center col-md-6 col-xs-6 boxy pb-5" id="mystack-info">
              During my university studies, I have had extensive exposure to Java programming language including completing weekly programming challenges set on a deadline basis, these were based on algorithms and data structures.
              <br /><br />
              Each year I have been involved in a core project where the first two years of my studies has involved group projects; building skills on teamwork and collaboration via Git version control and GitHub.
              <br /><br />
              The collage represents all the core skillsets I have built over the course of three years, including the software development lifecycle and agile methodologies.
            </div>
            <div className="col-lg-4 col-md-6 col-xs-6 boxy pb-5">
              <img id="mystack_collage" src={MyStack} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5 mb-5 contact">
        <h2 className="text-white mb-3 font-weight-bold contact-title">Contact</h2>
        <p className="text-white"> Find me on:
        <FontAwesomeIcon className='linkedin' icon={faLinkedin} onClick={() => handleClick('https://www.linkedin.com/in/abdul-naseem-khan-14b429198/')} />
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label for="name"></label>
            <input type="name" className="form-control" name="name" placeholder="name" />
          </div>
          <div className="form-group">
            <label for="email"></label>
            <input type="email" className="form-control" name="email" placeholder="email" />
          </div>
          <div className="form-group">
            <label for="text"></label>
            <textarea className="form-control" name="message" placeholder="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg mt-4 mb-5 contact-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default About;
