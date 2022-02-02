import React from "react";
import ProjectCards from "../../components/Project";
import portfolio from "../../portfolio.json";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "../../index.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {
  return (
    <section className="container">
      <div className="project">
        <h2 className="font-weight top-title">Portfolio</h2>
        <hr></hr>
      </div>

      <Wrapper id="card-data">
        <MDBContainer>
          <MDBRow>
            {portfolio.map((project) => (
              <MDBCol md="4">
                <ProjectCards
                  key={project.id}
                  image={project.image}
                  name={project.name}
                  github={project.github}
                  deploy={project.deploy}
                  topics={project.topics}
                />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    </section>
  );
}

export default Portfolio;
