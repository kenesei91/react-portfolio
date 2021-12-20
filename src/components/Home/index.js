import React from "react";
import {
  MDBJumbotron,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
} from "mdbreact";
import photo from "../../ken-photo.jpg";

function Home() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol
              className="text-white text-center py-5 px-4 my-5"
              style={{
                backgroundImage: `url(https://mdbcdn.b-cdn.net/img/Photos/Others/gradient12.webp)`,
              }}
            >
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                  Welcome to my portfolio
                </MDBCardTitle>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
