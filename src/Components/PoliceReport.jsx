import React, { useState } from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function PoliceReport() {


  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3 mb-3">Police Report Inquiry</h1>
        <div className="button-container">
          <button
            className="btn"
            style={{
              backgroundColor: "#6c757d",
              color: "white",
              marginRight: "10px",
            }}
          >
            Access Service
          </button>
          <Link to ={'/trackapp'}>
          <button
            className="btn"
            style={{ marginRight: "10px" }}
          >
            Track Application
          </button>
          </Link>
        </div>
      </div>

      <div className="container mt-4">
        <MDBAccordion borderless initialActive={1}>
          <MDBAccordionItem collapseId={1} headerTitle="Service Channels">
            <p>Indian Police Application</p>
            <a
              href="https://ips.gov.in/#:~:text=The%20Indian%20Police%20Service%20(IPS,States%20and%20at%20the%20Centre."
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Website: www.inidanpoliceservices.gov</p>
            </a>
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle="Working hours">
            <li>CID</li>
            <li> 24/7 Smart Police Stations SPS</li>
            <li>24/7 Police Stations</li>
            <li>Police Stations 7:30 am to 10:00 pm</li>
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={3} headerTitle="Contact details">
            <li>Call center +1.206.441.7760 </li>
            <li>Email: mail@indianpolice.gov</li>
            <li>Live chat in the application and website</li>
            <li>P.O. Box 61753 Delhi- India</li>
          </MDBAccordionItem>
        </MDBAccordion>
      </div>
    </>
  );
}

export default PoliceReport;
