import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="container">
      <h2 className=" head top-title">
        Contact Me
      </h2>
      <hr></hr>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="9" className="md-0 mb-5">
            <form>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      name="name"
                      defaultValue={name}
                      onBlur={handleChange}
                      id="contact-name"
                      label="Your name"
                    />
                  </div>
                </MDBCol>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      name="email"
                      defaultValue={email}
                      onBlur={handleChange}
                      id="contact-email"
                      label="Your email"
                    />
                  </div>
                </MDBCol>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      name="message"
                      defaultValue={message}
                      onBlur={handleChange}
                      id="contact-message"
                      label="Your message"
                    />
                  </div>
                </MDBCol>
                {errorMessage && (
                  <div>
                    <p className="error-text">{errorMessage}</p>
                  </div>
                )}
              </MDBRow>
            </form>
            <div class="mt-5 mb-5">
              <button
                data-testid="button"
                class="btn btn-outline-dark "
                type="submit"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default ContactForm;
