import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function Events() {
  return (
    <>
      <h2 className="text-center m-3 p-3">
        Expand and Nourish your Country with your ideas
      </h2>
      <MDBRow
        className="row-cols-2 row-cols-md-2 row-cols-lg-4 g-4 m-2 p-4 d-flex"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <MDBCol className="col-md-6 col-lg-3">
          <MDBCard style={{ width: "100%", height: "100%" }}>
            <MDBCardImage
              src="https://cdn.kibrispdr.org/data/785/meeting-vector-gif-4.gif"
              alt="..."
              position="top"
              style={{ width: "100%", height: "50%" }}
            />
            <MDBCardBody>
              <MDBCardTitle className="text-center text-danger">
                Group Meetings
              </MDBCardTitle>
              <MDBCardText className="text-align-justify">
                For any type of group meeting. <br />
                Contact: +91 2563147895 <br />
                Email:{" "}
                <a
                  href="mailto:meetingadmin@gmail.com"
                  className="text-decoration-underline"
                >
                  meetingadmin@gmail.com
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="col-md-6 col-lg-3">
          <MDBCard style={{ width: "100%", height: "100%" }}>
            <MDBCardImage
              src="https://exlyapp.com/blog/wp-content/uploads/2022/03/ezgif.com-gif-maker-6.gif"
              alt="..."
              position="top"
              style={{ width: "100%", height: "50%" }}
            />
            <MDBCardBody>
              <MDBCardTitle className="text-center text-danger">
                Lectures
              </MDBCardTitle>
              <MDBCardText className="text-align-justify">
                Want to provide lectures for the needs.
                <br />
                Contact: +91 2563147895 <br />
                Email:{" "}
                <a
                  href="mailto:lectureadmin@gmail.com"
                  className="text-decoration-underline"
                >
                  lectureadmin@gmail.com
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="col-md-6 col-lg-3">
          <MDBCard style={{ width: "100%", height: "100%" }}>
            <MDBCardImage
              src="https://i.pinimg.com/originals/84/b3/0c/84b30cf92e9b9804293b7d5f131ffb7d.gif"
              alt="..."
              position="top"
              style={{ width: "100%", height: "50%" }}
            />
            <MDBCardBody>
              <MDBCardTitle className="text-center text-danger">
                New Ideas
              </MDBCardTitle>
              <MDBCardText className="text-align-justify">
                Any new Ideas or events
                <br />
                Contact: +91 2563147895 <br />
                Email:{" "}
                <a
                  href="mailto:eventadmin@gmail.com"
                  className="text-decoration-underline"
                >
                  eventadmin@gmail.com
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="col-md-6 col-lg-3 ">
          <MDBCard style={{ width: "100%", height: "100%" }}>
            <MDBCardImage
              src="https://cdn.dribbble.com/users/3043723/screenshots/14358932/media/baddaa769784e16fbf20077e6c7daff1.gif"
              alt="..."
              position="top"
              style={{ width: "100%", height: "50%" }}
            />
            <MDBCardBody>
              <MDBCardTitle className="text-center text-danger">
                Charity
              </MDBCardTitle>
              <MDBCardText className="text-align-justify">
                For any types of Charity
                <br />
                Contact: +91 2563147895 <br />
                Email:{" "}
                <a
                  href="mailto:charityadmin@gmail.com"
                  className="text-decoration-underline"
                >
                  charityadmin@gmail.com
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
}

export default Events;
