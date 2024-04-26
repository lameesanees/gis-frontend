import React from "react";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { FaAmbulance } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import about from "../assets/about.png"
function About() {
  return (
    <div className="about-container p-5">
      <h4
        className="text-center mb-5 mt-2"
        style={{ color: "#969445", fontSize: "30px" }}
      >
        <b>About Us</b>
      </h4>
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <img
            src={about}
            alt="About Us"
            className="img-fluid mx-auto d-block"
            style={{ maxWidth: "100%" }}
          />
          {/* Replace "image-url" with the URL of your image */}
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="mb-4 mt-7" style={{ textAlign: "justify" }}>
            <p>
              At GuardIndiaSeva.com, we're dedicated to ensuring the safety and
              well-being of our community. With a focus on emergency response
              and support services, we provide essential assistance when it's
              needed most.
              <br /> Founded with a vision of creating a safer environment
              for all, we prioritize the needs of our community members and
              strive to meet them with efficiency and care. Our team is
              comprised of dedicated professionals who are committed to making a
              positive impact in the lives of those we serve. <br /> Our team is
              committed to excellence, working tirelessly to meet the diverse
              needs of those we serve. Through collaboration and outreach, we
              strive to foster unity and resilience within our community. Join
              us in our mission to create a safer and more vibrant future for
              all.
            </p>
            {/* <h5>Emergency Contacts</h5>
            <ul className="list-unstyled">
              <li>
                <FaAmbulance style={{ fontSize: "20px" }} />
                <span className="text-danger">
                  <b> 108 Ambulance</b>
                </span>
              </li>
              <li>
                <GiPoliceOfficerHead style={{ fontSize: "20px" }} />
                <span className="text-danger">
                  <b> 100 Police</b>
                </span>
              </li>
              <li>
                <i class="fa-solid fa-person-dress"></i>{" "}
                <span className="text-danger">
                  <b> 112 Women Helpline</b>
                </span>
              </li>
              <li>
                <FaHandsHoldingChild style={{ fontSize: "20px" }} />
                <span className="text-danger">
                  <b> 1098 Childline</b>
                </span>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
