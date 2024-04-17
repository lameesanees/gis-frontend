import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.instagram.com/lam._ees/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4 text-reset"
              style={{ transition: "opacity 0.3s" }}
            >
              <MDBIcon fab icon="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/lamees-mohammed-anees/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4 text-reset"
              style={{ transition: "opacity 0.3s" }}
            >
              <MDBIcon fab icon="linkedin" />
            </a>
            <a
              href="https://github.com/lameesanees"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4 text-reset"
              style={{ transition: "opacity 0.3s" }}
            >
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  Guard India Seva.com
                </h6>
                <p style={{ textAlign: "match-parent" }}>
                  © Lamees Anees, 2024. All rights reserved. Guard India Seva is
                  dedicated to enhancing road safety and emergency response.
                  Contact us for any assistance or inquiries from the given
                  contact information. Stay safe and drive responsibly.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="">
                <h6 className="text-uppercase fw-bold mb-4">Technology Used</h6>
                <p>
                  <a href="#!" className="text-reset mb-1">
                    MongoDB <br />
                    Express.js <br />
                    React.js <br />
                    Node.js
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Reffered links</h6>
                <p>
                  <a
                    href="https://react-bootstrap.netlify.app/"
                    target="_blank"
                    rel="norefferrer"
                    className="text-reset"
                  >
                    React Bootstrap
                  </a>
                </p>
                <p>
                  <a
                    href="https://mdbootstrap.com/"
                    target="_blank"
                    rel="norefferrer"
                    className="text-reset"
                  >
                    MDBootstrap
                  </a>
                </p>
                <p>
                  <a
                    href="https://fontawesome.com/"
                    target="_blank"
                    rel="norefferrer"
                    className="text-reset"
                  >
                    Font Awesome
                  </a>
                </p>
                <p>
                  <a
                    href="https://react-icons.github.io/react-icons/"
                    target="_blank"
                    rel="norefferrer"
                    className="text-reset"
                  >
                    React Icons
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  &nbsp; Kerala, India
                </p>
                <p>
                  <MDBIcon
                    color="secondary"
                    icon="envelope"
                    className="me-3 "
                  />
                  <a
                    href="mailto:lamees.anees@gmail.com"
                    style={{ color: "gray" }}
                  >
                    {" "}
                    lamees.anees@gmail.com
                  </a>
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" />
                  +91 8129 983 461
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" />
                  +91 956 292 6683
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            GuardIndiaSeva.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
