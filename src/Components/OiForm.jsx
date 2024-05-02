import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { serverURL } from "../Services/serverURL";
import { getAOtherInfoAPI } from "../Services/allAPI";

function OiForm() {
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
        const result = await getAOtherInfoAPI(searchKey, reqHeader);
        setUserReport(result.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    }
  };

  useEffect(() => {
    getaReport();
  }, [searchKey]);

  return (
    <div className="container">
      <div>
        <input
          type="text"
          style={{ width: "400px" }}
          placeholder="Search by contact number"
          onChange={(e) => setSearchKey(e.target.value)}
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
        <div className="row justify-content-center">
          {userReport.length > 0 ? (
            userReport.map((item, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <Card style={{ width: "18rem" }} className="h-100 mx-auto">
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      variant="top"
                      src={`${serverURL}/uploads/${item.oiImage}`}
                      className="card-img-top"
                      alt="Report Image"
                      style={{ height: "auto", width: "100%" }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-center text-primary">
                      <b>{item.infotype}</b>
                    </Card.Title>
                    <Card.Title className="text-center text-success">
                      {item.location}
                    </Card.Title>
                    <Card.Text>
                      <p>
                        <b>Description: </b> {item.description}
                      </p>
                      <p>
                        <b>Contact: </b>
                        {item.contact}
                      </p>
                      <p>
                        <b>Date: </b>
                        {item.date}
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <div className="text-center mb-3">
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </Card>
              </div>
            ))
          ) : (
            <div className="col">No Reports</div>
          )}
        </div>
      )}
    </div>
  );
}

export default OiForm;
