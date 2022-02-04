import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className=" head top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Kenechukwu Ilochonwu</h2>
          <p>
          Full stack web developer with experience and knowledge creating quality, scalable, and high performance full stack web applications, educated at The University of Texas, Austin. Proficiency in front-end technologies using HTML, CSS, JavaScript, React, as well as back-end technologies using Node.js, Express.js, and database management using MYSQL and so on. Ability to communicate effectively in a team setting, and meet deadlines. Excited to work in a team environment to develop responsive, user friendly interactive websites and apps. More importantly, ability to take into account the end users and customers experiences, and ensuring a wholesome experience for both clients and end users.  
          </p>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Skills</h2>
          <ul>
            <li>
            HTML, HTML5, CSS (Bootstrap, MDBootstrap, Foundation CSS, HandleBars)
            </li>
            <li>
            Node.js, Express.js, APIs, JavaScript, jQuery
            </li>
            <li>
            MongoDB, Mongoose, NoSQL
            </li>
            <li>
            SQL, Sequelize
            </li>
            <li>
            React.js, IndexedDB
            </li>
            <li>
            GitHub
            </li>
          </ul>
        </div>
      </div>

      <div class="justify-content-center mt-5">
          <div>
              <h2 className="top-title">Resume</h2>
              <a href="https://docs.google.com/document/d/1DE0SLrkjCb8NqMpmoPEIX2wNn9cpJlj_6xWdjuIRBbY/edit?usp=sharing" target="blank">Download Resume</a>
          </div>

      </div>
      <div class="justify-content-center mt-5">
          <div>
              <h2 className="top-title">Education</h2>
              <p>
                Louisiana Tech University, Ruston, LA
              </p>
          </div>
      </div>
      <div class="justify-content-center mt-5">
          <div>
              <h2 className="top-title">Certificate</h2>
              <p>
                The University of Texas, Austin
              </p>
          </div>
      </div>
    </section>
  );
}

export default Resume;
