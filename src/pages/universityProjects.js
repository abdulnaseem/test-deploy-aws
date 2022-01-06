import React from 'react';
import './universityProjects.css';
import FinchRobot from '../assets/finch-robot.jpg';
import Dice from '../assets/dice.png';
import Parking from '../assets/parking.png';
import Human from '../assets/human1.png';
import Carpark from '../assets/carpark.png';




const UniversityProjects = () => {

  const handleClick = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  };
  const handleClickGit = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  };

  // const openImage = () => {
  //   const div = document.createElement('div');
  //   div.style.width = "100px";
  //   div.style.height = "100px";
  //   div.style.background = "red";
  //   div.style.color = "white";
  //   div.style.alignContent = "center";
  //   div.setAttribute('class','sdlc');
  //   div.innerHTML = "Hello";
  //   document.getElementById("first").appendChild(div);
  // };

  return (
    <>
      <div className="header p-5" id="header">
        <h1 className="header-text mt-5" align="center">Brunel University London</h1>
      </div>

      <div className="pt-3 ps-3 pe-3">
        <div className="col text-center pt-4">
          <button id="grad-cert-link"
                  className="btn btn-primary btn-md"
                  type="button"
                  onClick={() => handleClick('https://www.linkedin.com/posts/abdul-naseem-khan-14b429198_graduate2021-brunelgrad2021-computerscience-activity-6836617307985371136-5Kgg')}>
            View Graduate Certificate
          </button>
          <h3>University Projects</h3>
        </div>
      </div>

      <div className="container pb-3 ps-3 pe-3 rounded" id="projects">

        <div className="p-1 my-3 border" id="individual">
          <div className="col text-center">
            <h4>Pain Management Report <br />(Dissertation)</h4>
          </div>
          <img id="human-image" src={Human} />
          <p className="p-3">
            Aim was to develop a 3D pain reporting application that allows users to interact with a 3D human anatomy and to be able to self-report their pain.
            <ul>
              <li>Produced the Systems Development LifeCycle with elements of Scrum suggesting application uses, programming practises (XP), testing (TDD) evaluation method (SUS Questionnaire) and sprint cycle.</li>
              <li>Designing the applications functionality by using the Multi-Tier Client-Server Architecture entailing communication between client (XML), application server (Java) and database server (Java with SQLite).</li>
              <li>Designing the prototype through the use of Marvel app.</li>
              <li>Implemented the OpenGL-ES API and parsed the 3D .obj file (issues with dependencies caused this to fail during testing).</li>
              <li>Have also utilised Unity platform to test and display the 3D human anatomy upon failure.</li><br />
              <li>Duration: 6 months (Oct 2020 - March 2021) | Implementation 2 months (Dec 2020 - Feb 2021) </li>
              <li>Lines of code: 1506</li>
              <li>Core tools & technologies:
                <ul>
                  <li>Java | XML | SQLite | OpenGL-ES API | Unity | Android Studios </li>
                </ul>
              </li>
            </ul>
          </p>
          <div className="d-flex justify-content-center">
            <iframe width="350" height="200" src="https://www.youtube.com/embed/4ufZ9FBto0s?rel=0&amp;&mute=1" frameborder="0" allowfullscreen></iframe>
          </div>
          <div className="col text-center pt-4">
            <button id="button" className="btn btn-primary btn-md" type="button" onClick={() => handleClick('https://github.com/abdulnaseem/pain-management-report')}>GitHub</button>
          </div>
        </div>
        <div className="p-1 my-3 border" id="individual">
          <div className="col text-center">
            <h4>Car Park Management System</h4>
          </div>
          <img id="carpark-image" src={Carpark} />
          <p className="p-3">
            The purpose of this system was to utilise threads with locks, when threads are concurrently running, one thread has control upon the lock while the rest of the threads are waiting. In this example, I have applied it in a car park management system:
            <ul>
              <li>Produced a multi-threading client-server system by adopting the Systems Development LifeCycle, designed using central server algorithm and a protocol table for message passing.</li>
              <li>Four clients (cars) where two are for entering car park and the two for exiting.</li>
              <li>One server that utilizes threading and locks and identifies if the car park is at maximum capacity, if so, then place the two clients in a queue.</li>
              <li>Utilized Power Shell scripting to execute and test the program.</li><br />
              <li>Duration: 2 months (Oct 2020 - Dec 2020)</li>
              <li>Lines of code: 420</li>
              <li>Core tools & technologies:
                <ul>
                  <li>Java | Socket API | Thread API | Central Server Algorithm | Protocol Table | Concurrency | Locking | Eclipse IDE</li>
                </ul>
              </li>

            </ul>
          </p>
          <div className="col text-center pt-1">
            <button id="button" className="btn btn-primary btn-md" type="button" onClick={() => handleClick('https://github.com/abdulnaseem/car-park-management-system')}>GitHub</button>
          </div>
        </div>

        <div className="p-1 my-3 border" id="individual">
          <div className="col text-center">
            <h4>ParkNow <br />(Android Application | Group Project)</h4>
          </div>
          <img id="parking-image" src={Parking} />
          <p className="p-3">
            For this project, I was assigned to a group of six in order to identify a problem and as a team come up with solutions.
            The team and I came up with a number of requirements and utilised Scrum to seperate these into seven distinct sprints,
            each sprint was evaluated before moving onto the next; these were assigned to a particular member of the group.
            Git version control was employed to commit these sprints onto GitHub throughout the lifetime of the project.
            <ul>
              <li>Problem: Issue finding parking space in or around the city of London without getting a ticket.</li>
              <li>Solution (app): Explore neighbouring parking space made available by rentors and become a rentee for the desired time limit.</li><br />
              <li>Duration: 4 months (Including Dec 2019 - March 2020) | Implementation 2 months (Dec 2019 - Feb 2020)</li>
              <li>Lines of code: 800</li>
              <li>Core responsibilities, tools & technologies:
                <ul>
                  <li>Discussing new requirements and compromising what can be included and completed within the deadline</li>
                  <li>Ensuring each member of the group contribute and have enough to work with fairly</li>
                  <li>Booking Activity | Frontend-Development </li>
                  <li>Java | XML | Google Maps API  | NoSQL (Firebase database) | Team Collaboration via Git/GitHub | Scrum | Android Studios </li>
                </ul>
              </li>
            </ul>
          </p>
          <div className="d-flex justify-content-center">
            <iframe width="350" height="200" src="https://www.youtube.com/embed/TBZ_D_UnSQk?rel=0&amp;&mute=1" frameborder="0" allowfullscreen></iframe>
          </div>
          <div className="col text-center pt-4">
            <button id="button" className="btn btn-primary btn-md" type="button" onClick={() => handleClick('https://github.com/abdulnaseem/park-now')}>GitHub</button>
          </div>
        </div>

        <div className="p-1 my-3 border" id="individual">
          <div className="col text-center">
            <h4>Vending Machine for Custom-Printing Books 'On Demand' <br />(Prototype | Group Project)</h4>
          </div>
          <p className="p-3">
            The team (group of 6) and I was given this assignment to build a prototype for those who wish to buy a book through vending machine
            and acquire a copy straight away. Our idea was that this type of system will be targeted at airports and international train stations for long journeys.<br /><br />
            The team and I employed the Star Lifecycle Model as the requirements were already provided, enabling flexibility to complete and evaluate stages
            of the model without any sort of order. The evaluation is centred which encourages iteration, when an activity is complete, we evaluate; user centred design.
            Usability Engineering principles such as affordance and color blindness was applied and the initial prototype has been created through ‘MarvelApp.’
          </p>
          <ul>
            <li>Core responsibilities:
              <ul>
                <li>I was leading the team in building solution for Usability Engineering</li>
                <li>Getting hands on using the research and building the UI/UX elements via MarvelApp</li>
              </ul>
            </li>
          </ul>
          <div className="col text-center pt-1">
            <button id="button3" className="btn btn-primary btn-md" onClick={() => handleClick('https://marvelapp.com/prototype/10b70ea9')}>MarvelApp</button>
          </div>
        </div>

        <div className="p-1 my-3 border" id="individual">
          <div className="col text-center">
            <h4>Dice Roller <br />(Android Application)</h4>
          </div>
          <img id="dice-image" src={Dice} />
          <p className="p-3">
            This was my first introduction to android development where I have created an android application that allows a user to type a number between 1-6,
            they can also click a button to generate a number between 1-6 and identify if the random number generator and my number match. If so, then the user
            aquires a point which is displayed and incremented each time it matches.
            Also, introducing to different activities where a user clicks a button and is navigated to a new activity.
          </p>
          <ul>
            <li>Core tools & technologies:
              <ul>
                <li>Java | XML | Andoid Studios</li>
              </ul>
            </li>
          </ul>
          <div className="col text-center pt-1">
            <button id="button3" className="btn btn-primary btn-md" type="button" onClick={() => handleClick('https://github.com/abdulnaseem/diceroller')}>GitHub</button>
          </div>
        </div>

        <div className="p-1 my-3 border" id="finch-robot">
          <div className="col text-center">
            <h4>Finch Robot <br />(Group Project)</h4>
          </div>
          <img id="fr-image" src={FinchRobot} />
          <p className="p-3">
            I was given the finch robot from the university and chose the task ‘tilt control’ which was one of seven tasks provided for each group;
            group of 6, the tasks to be integrated towards the end of the year. My task involved moving the finch robot in four different directions
            such as forward, reverse, right or left. I utilised the Eclipse IDE, Java and the built in classes and methods to create a GUI that enables
            the user to choose the task at hand and the tilt controls.
          </p>
          <ul>
            <li>Duration: 4 months (Including Dec 2018 - March 2019) | Implementation 2 months (Dec 2018 - Feb 2019) </li>
            <li>Lines of code: 382</li>
            <li>Core tools & technologies:
              <ul>
                <li>Java | Object Oriented Programming | JFrame | JComboBox | Jlabel | ArrayList</li>
              </ul>
            </li>
          </ul>
          <div className="col text-center pt-1">
            <button id="button3" className="btn btn-primary btn-md" type="button" onClick={() => handleClick('https://github.com/abdulnaseem/finchrobot-tiltcontrol')}>GitHub</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default UniversityProjects;
