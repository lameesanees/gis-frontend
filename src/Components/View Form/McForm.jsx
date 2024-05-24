import React, { useEffect, useState } from "react";
import { getAMissingReportAPI } from "../../Services/allAPI";
import { serverURL } from "../../Services/serverURL";
import "./loading.css";

function McForm() {
  const [userMCReport, setUserMCReport] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [searchTimer, setSearchTimer] = useState(null);
  const [searching, setSearching] = useState(false);

  const getAMissing = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      try {
        const result = await getAMissingReportAPI(searchKey, reqHeader);
        setUserMCReport(result.data);
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
        getAMissing();
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
        placeholder="Reference Number"
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
          {userMCReport.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Full Name</th>
                  <th>Last Location</th>
                  <th>Description</th>
                  <th>Gender</th>
                  <th>Contact</th>
                  <th>Date</th>
                  <th>Status</th> {/* New Status Column */}
                </tr>
              </thead>
              <tbody>
                {userMCReport.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={
                          item
                            ? `${serverURL}/uploads/${item.mcImage}`
                            : "https://www.hindustantimes.com/ht-img/img/2023/11/27/1600x900/The-mangled-car-on-Monday---HT-Photo-_1701110057428.jpeg"
                        }
                        alt="Report"
                        style={{ height: "auto", width: "100px" }}
                      />
                    </td>
                    <td>{item.fullname}</td>
                    <td>{item.lastlocation}</td>
                    <td>{item.description}</td>
                    <td>{item.gender}</td>
                    <td>{item.contact}</td>
                    <td>{item.date}</td>
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

export default McForm;
