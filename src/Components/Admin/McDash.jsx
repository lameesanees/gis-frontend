import React, { useEffect, useState } from "react";
import { getAMissingReportAPI } from "../../Services/allAPI";
import { serverURL } from "../../Services/serverURL";
import { FaTrash, FaEdit } from "react-icons/fa"; // Importing Font Awesome icons

function McDash() {
  const [userMCReport, setUserMCReport] = useState([]);
  const [searchKey, setSearchKey] = useState("");

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
    }
  };

  useEffect(() => {
    getAMissing();
  }, [searchKey]);

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <input
          type="text"
          style={{ width: "400px" }}
          placeholder="Search by fullname"
          onChange={handleInputChange}
          className="form-control m-5 mx-auto"
        />

        <div className="row justify-content-center">
          {userMCReport.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Full Name</th>
                  <th>Last Location</th>
                  <th>Gender</th>
                  <th>Contact</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th> {/* New column for action buttons */}
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
                    <td>{item.gender}</td>
                    <td>{item.contact}</td>
                    <td>{item.date}</td>
                    <td></td> {/* Status set to "Verifying" */}
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
            <div className="col text-center">No Reports</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default McDash;
