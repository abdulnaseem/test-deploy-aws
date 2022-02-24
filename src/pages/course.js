import React from 'react';
import data from './course-data';
import './course.css';


const Course = () => {

  const handleClick = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  };

  return (
    <>
      <div id="container">
        <h1 className="courses"><span>Courses</span></h1>
        {
          data.map((data, i, arr) => {

            // if(arr.length -1 === i) {
            //   return (
            //     <div key={i} className="last-project mb-5 me-5" onClick={() => handleClick(data.cert)}>
            //       <h4 className="title">{data.title}</h4>
            //       <p className="descr">{data.description}</p>
            //       <p className="date">{data.date}</p>
            //       <p className="clck">{data.click}</p>
            //     </div>
            //   );
            // }
            // else {
              return (
                <div key={i} className="my-projects">
                  <h4 className="title">{data.title}</h4>
                  <p className="descr">{data.description}</p>
                  <p className="date">{data.date}</p>
                  <p className="click">{data.click}</p>
                  <div class="button-box col-lg-12 certificate">
                    <a onClick={() => handleClick(data.cert)} class="btn btn-primary cert" role="button">Certificate</a>
                  </div>
                </div>
              );
            // }
          })
        }

      </div>
    </>
  )
};

export default Course;
