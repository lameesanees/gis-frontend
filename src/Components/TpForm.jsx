import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { getATpReportAPI } from "../Services/allAPI";
import { serverURL } from "../Services/serverURL";

function TpForm() {
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
        const result = await getATpReportAPI(searchKey, reqHeader);
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
          <div
            className="col text-align-justify"
            style={{ fontSize: "30px" }}
          >
            Track your reports with effortless task management and productivity
            enhancement. With our intuitive interface and powerful features,
            you'll stay on top of your tasks like never before.
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
                      src={
                        item
                          ? `${serverURL}/uploads/${item.tpImage}`
                          : "https://www.hindustantimes.com/ht-img/img/2023/11/27/1600x900/The-mangled-car-on-Monday---HT-Photo-_1701110057428.jpeg"
                      }
                      className="card-img-top"
                      alt="Report Image"
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-center text-primary">
                      <b>{item.fullname}</b>
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

export default TpForm;
