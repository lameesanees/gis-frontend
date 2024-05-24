import React, { useEffect, useState } from "react";
import { getAMaReportAPI } from "../../Services/allAPI";
import { serverURL } from "../../Services/serverURL";
import "./loading.css";

function MmForm() {
  const [userReport, setUserReport] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [searchTimer, setSearchTimer] = useState(null);
  const [searching, setSearching] = useState(false);

  const getMaReport = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      try {
        const result = await getAMaReportAPI(searchKey, reqHeader);
        setUserReport(result.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
      setSearching(false);
    }
  };

  useEffect(() => {
    if (searchKey.trim() !== "") {
      clearTimeout(searchTimer);
      setSearching(true);
      const timer = setTimeout(() => {
        getMaReport();
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
                  <th>Your Name</th>
                  <th>Your Aadhaar</th>
                  <th>Your Vehicle Number</th>
                  <th>Accident Type</th>
                  <th>Opponent Name</th>
                  <th>Opponent Contact</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {userReport.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={`${serverURL}/uploads/${item.maImage}`}
                        alt="Report"
                        style={{ height: "auto", width: "100px" }}
                      />
                    </td>
                    <td>{item.yourname}</td>
                    <td>{item.youraadhaar}</td>
                    <td>{item.yournoplate}</td>
                    <td>{item.accidentype}</td>
                    <td>{item.oppfullname}</td>
                    <td>{item.oppcontact}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="col text-center">No Reports</div>
          )}
        </div>
      )}
    </div>
  );
}

export default MmForm;
