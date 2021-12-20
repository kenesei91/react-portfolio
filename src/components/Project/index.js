import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardLink } from 'mdb-react-ui-kit';

function ProjectCards (props) {
  return (
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src={props.image} position='top' alt={props.name} />
      <MDBCardBody>
        <MDBCardTitle>{props.name}</MDBCardTitle>
        <MDBCardText>{props.topics}</MDBCardText>
        <MDBCardLink href={props.github} target="_blank">GitHub Repo</MDBCardLink>
        <MDBCardLink href={props.deploy} target="_blank">Deployed App</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ProjectCards;