import React, { useEffect, useState } from "react";
import { serverURL } from "../../Services/serverURL";
import { getAOtherInfoAPI } from "../../Services/allAPI";
import { FaTrash, FaEdit } from "react-icons/fa"; // Importing Font Awesome icons

function OiDash() {
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
    <div>
      <div className="container">
        <input
          type="text"
          style={{ width: "400px" }}
          placeholder="Search by contact number"
          onChange={(e) => setSearchKey(e.target.value)}
          className="form-control m-5 mx-auto"
        />

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
                  <th>Status</th> <th>Action</th>{" "}
                  {/* New column for action buttons */}
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
                    <td></td>
                    <td>
                      <button
                        className="btn btn-danger me-2"
                      >
                        <FaTrash />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="col">No Reports</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OiDash;