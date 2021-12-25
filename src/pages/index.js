import React from 'react';
import './index.css';

const Home = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href='./about';
  };
  return (
    <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
      <h1 className="text-white" id="header-text1">Hello,<br /> I am Naseem.</h1>
      <div className="content text-center">
        <h1 className="text-white" id="header-text2">
            Computer Science (Network Computing) Graduate <br />
            Achieved 2.1 with Honours <br />
            A technology enthusiast who loves to learn and adapt. <br />
        </h1>
        <button id="button" className="btn btn-primary btn-md learn-more" type="button" onClick={handleClick}>Learn more</button>
      </div>
    </div>
  );
};

export default Home;
