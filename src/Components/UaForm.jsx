import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { getAReportAPI } from "../Services/allAPI";
import { serverURL } from "../Services/serverURL";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";

function UaForm() {
  const [showBasic, setShowBasic] = useState(false);
  const [userReport, setUserReport] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const getaReport = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      try {
        const result = await getAReportAPI(searchKey, reqHeader);
        setUserReport(result.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    }
  };

  useEffect(() => {
    getaReport();
  }, [searchKey]);

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <input
          type="text"
          style={{ width: "400px" }}
          placeholder="Search by aadhaar number"
          value={searchKey}
          onChange={handleInputChange}
          className="form-control m-5 mx-auto"
        />
      </div>

      {!searchKey && (
        <div className="row d-flex justify-content-center align-items-center">
          <img
            src="https://liveimages.algoworks.com/new-algoworks/wp-content/uploads/2021/06/03152843/field-tracking-app.png"
            style={{ width: "40%" }}
            alt=""
          />
          <div className="col text-align-justify" style={{ fontSize: "30px" }}>
            Track your reports with effortless task management and productivity enhancement. With our intuitive interface and powerful features, you'll stay on top of your tasks like never before.
          </div>
        </div>
      )}

      {searchKey && (
        <div className="row d-flex justify-content-center">
          {userReport.length > 0 ? (
            userReport.map((item, index) => (
              <div key={index} className="col mb-4 d-flex justify-content-center">
                <Card style={{ width: "30rem" ,justifyContent:"center"}}>
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      variant="top"
                      src={
                        item
                          ? `${serverURL}/uploads/${item.uaImage}`
                          : "https://www.hindustantimes.com/ht-img/img/2023/11/27/1600x900/The-mangled-car-on-Monday---HT-Photo-_1701110057428.jpeg"
                      }
                      className="card-img-top"
                      alt="Report Image"
                      style={{
                        height: "auto",
                        width: "100%",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-center text-primary">
                      <b>{item.fullname}</b>
                    </Card.Title>
                    <Card.Title className="text-center text-success">
                      {item.location}, {item.state}
                    </Card.Title>
                    <Card.Text>
                      <p>
                        <b>Description: </b> {item.description}
                      </p>
                      <p>
                        <b>Aadhaar: </b>
                        {item.aadhaar}
                      </p>
                      <p>
                        <b>Contact: </b>
                        {item.contact}
                      </p>
                      <p>
                        <b>Date: </b>
                        {item.date}
                      </p>
                      <p>
                        <b>Status: </b>
                        <p className="text-warning">Verifying...</p>
                      </p>
                    </Card.Text>
                  </Card.Body>
                  
                </Card>
              </div>
            ))
          ) : (
            <div className="col text-center">No Reports</div>
          )}
        </div>
      )}
    </div>
  );
}

export default UaForm;
