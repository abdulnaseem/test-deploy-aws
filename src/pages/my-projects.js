import { React, useState } from 'react';
import data from './project-data';
import './course.css';


const Project = () => {

  const handleClick = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  };

  return (
    <>
      <div id="container">
        <h1 className="courses"><span>Projects</span></h1>
        {
          data.map((data, i, arr) => {

            if(arr.length -1 === i) {
              return (
                <div key={i} className="last-project mb-5 me-5" onClick={() => handleClick(data.gitlink)}>
                  <h4 className="title">{data.title}</h4>
                  <p className="descr">{data.description}</p>
                </div>
              );
            }
            else {
              return (
                <div key={i} className="my-projects">
                  <h4 className="title">{data.title}</h4>
                  <p className="descr">{data.description}</p>
                  <p className="stat">{data.status}</p>
                  <div class="button-box col-lg-12">
                    <a onClick={() => handleClick(data.live)} class="btn btn-primary" role="button">Live</a>
                    <a onClick={() => handleClick(data.gitlink)} class="btn btn-primary" role="button">GitHub</a>
                  </div>
                </div>
              );
            }
          })
        }

      </div>
    </>
  )
};

export default Project;
