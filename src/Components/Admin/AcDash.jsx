import React, { useEffect, useState } from "react";
import { getAMaReportAPI } from "../../Services/allAPI";
import { serverURL } from "../../Services/serverURL";
import { FaTrash, FaEdit } from "react-icons/fa"; // Importing Font Awesome icons

function AcDash() {
  const [userReport, setUserReport] = useState([]);
  const [searchKey, setSearchKey] = useState("");

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
    }
  };

  useEffect(() => {
    getMaReport();
  }, [searchKey]);
  return (
    <div>
      <div className="container">
        <input
          type="text"
          style={{ width: "400px" }}
          placeholder="Search by number plate"
          onChange={(e) => setSearchKey(e.target.value)}
          className="form-control m-5 mx-auto"
        />

        <div className="row justify-content-center">
          {userReport.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Aadhaar</th>
                  <th>Number Plate</th>
                  <th>Accident Type</th>
                  <th>Opponent Name</th>
                  <th>Opponent Contact</th>
                  <th>Status</th> <th>Action</th>{" "}
                  {/* New column for action buttons */}
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
                    <td></td>
                    <td>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item.id)}
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="col text-center">No Reports</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AcDash;
