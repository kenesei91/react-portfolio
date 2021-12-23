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
          I am currently a full time environmental scientist, seeking opportunities in technology. 
          </p>
          <p>
          Aspiring to becoming a full-stack web developer.
          </p>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Skills</h2>
          <ul>
            <li>
            HTML, CSS (Bootstrap, HandleBars), JavaScript jQuery
            </li>
            <li>
            Node.js, Express.js, APIs
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
          </ul>
        </div>
      </div>

      <div class="justify-content-center mt-5">
          <div>
              <h2 className="top-title">Resume</h2>
              <a href="https://my.indeed.com/resume/preview/file" target="blank">Download Resume</a>
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
    </section>
  );
}

export default Resume;