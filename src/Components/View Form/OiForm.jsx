import React, { useEffect, useState } from "react";
import { serverURL } from "../../Services/serverURL";
import { getAOtherInfoAPI } from "../../Services/allAPI";
import "./loading.css";

function OiForm() {
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
        const result = await getAOtherInfoAPI(searchKey, reqHeader);
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
      <input
        type="text"
        style={{ width: "400px" }}
        placeholder="Reference number"
        onChange={handleInputChange}
        className="form-control m-5 mx-auto"
      />

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

      {!searching && !searchKey.trim() && (
        <div className=" d-flex justify-content-center align-items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20230825/original/pngtree-mobile-payment-transfer-flat-vector-illustration-picture-image_8704858.png"
            style={{ width: "45%" }}
            alt=""
          />
        
        </div>
      )}

      {!searching && searchKey.trim() && (
        <div className="row justify-content-center">
          {userReport.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Info Type</th>
                  <th>Location</th>
                  <th>Description</th>
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
                        src={`${serverURL}/uploads/${item.oiImage}`}
                        alt="Report"
                        style={{ height: "auto", width: "100px" }}
                      />
                    </td>
                    <td>{item.infotype}</td>
                    <td>{item.location}</td>
                    <td>{item.description}</td>
                    <td>{item.contact}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="col">No Reports</div>
          )}
        </div>
      )}
    </div>
  );
}

export default OiForm;
