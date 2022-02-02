import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
  return (
    <MDBFooter color="indigo" className="font-small pt-0">
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center"></MDBRow>

        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
              Created by Kenechukwu Ilochonwu
            </p>
          </MDBCol>
        </MDBRow>
        <hr
          className="clearfix d-md-none rgba-white-light"
          style={{ margin: "10% 15% 5%" }}
        />
        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              <a
                target="_blank"
                href="https://www.facebook.com/kilochonwu"
                className="fb-ic"
              >
                <i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
              </a>
              <a
                target="_blank"
                href="https://github.com/kenesei91"
                className="gplus-ic"
              >
                <i className="fab fa-github fa-lg white-text mr-md-4"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kenechukwu-ilochonwu-98b34ba0/"
                className="li-ic"
              >
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-4"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
          <a href="https://www.MDBootstrap.com"> Ken's Work </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
