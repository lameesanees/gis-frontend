import React, { useEffect, useState } from "react";
import { getAReportAPI } from "../../Services/allAPI";
import { serverURL } from "../../Services/serverURL";

function UaForm() {
  const [userReport, setUserReport] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [searchTimer, setSearchTimer] = useState(null);
  const [searching, setSearching] = useState(false);

  const getaReport = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      try {
        const result = await getAReportAPI(searchKey.trim(), reqHeader);
        setUserReport(result.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    }
    setSearching(false);
  };

  useEffect(() => {
    if (searchKey.trim() !== "") {
      clearTimeout(searchTimer);
      setSearching(true);
      const timer = setTimeout(() => {
        getaReport();
      }, 500); // Adjust the delay time as needed
      setSearchTimer(timer);
    }
  }, [searchKey]);

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="container">
      <div className="input-group mt-5 mx-auto" style={{ maxWidth: "400px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search by Aadhaar number"
          value={searchKey}
          onChange={handleInputChange}
        />
      </div>

      {searching && (
        <div className="text-center mt-3">
          <p>Loading search results...</p>
        </div>
      )}

      {!searching && searchKey.trim() === "" && (
        <div className="row d-flex justify-content-center align-items-center mt-5">
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

      {!searching && searchKey.trim() !== "" && (
        <div className="row mt-5">
          {userReport.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Full Name</th>
                  <th>Location</th>
                  <th>State</th>
                  <th>Description</th>
                  <th>Aadhaar</th>
                  <th>Contact</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {userReport.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={
                          item
                            ? `${serverURL}/uploads/${item.uaImage}`
                            : "https://www.hindustantimes.com/ht-img/img/2023/11/27/1600x900/The-mangled-car-on-Monday---HT-Photo-_1701110057428.jpeg"
                        }
                        alt="Report"
                        style={{ height: "auto", width: "100px" }}
                      />
                    </td>
                    <td>{item.fullname}</td>
                    <td>{item.location}</td>
                    <td>{item.state}</td>
                    <td>{item.description}</td>
                    <td>{item.aadhaar}</td>
                    <td>{item.contact}</td>
                    <td>{item.date}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="col text-center">No search results found.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default UaForm;