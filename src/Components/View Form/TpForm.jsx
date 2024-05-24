import React, { useEffect, useState } from "react";
import { getATpReportAPI } from "../../Services/allAPI";
import { serverURL } from "../../Services/serverURL";
import "./loading.css";

function TpForm() {
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
        const result = await getATpReportAPI(searchKey.trim(), reqHeader);
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
          placeholder="Reference number"
          value={searchKey}
          onChange={handleInputChange}
        />
      </div>
      {searching && (
        <div className="text-center mt-3">
 <div class="loader mt-5">
            <p class="heading">Loading</p>
            <div class="loading">
              <div class="load"></div>
              <div class="load"></div>
              <div class="load"></div>
              <div class="load"></div>
            </div>
          </div>        </div>
      )}
      {!searching && searchKey.trim() === "" && (
        <div className=" d-flex justify-content-center align-items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20230825/original/pngtree-mobile-payment-transfer-flat-vector-illustration-picture-image_8704858.png"
            style={{ width: "45%" }}
            alt=""
          />
         
        </div>
      )}
      {!searching && searchKey.trim() !== "" && (
        <div className="row justify-content-center">
          {userReport.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Full Name</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Contact</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {userReport.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={`${serverURL}/uploads/${item.tpImage}`}
                        alt="Report"
                        style={{ height: "auto", width: "100px" }}
                      />
                    </td>
                    <td>{item.fullname}</td>
                    <td>{item.location}</td>
                    <td>{item.description}</td>
                    <td>{item.contact}</td>
                    <td>{item.status}</td>
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

export default TpForm;
