import React, { useEffect, useState } from "react";
import { getAReportAPI } from "../../Services/allAPI";
import { serverURL } from "../../Services/serverURL";
import { FaTrash, FaEdit } from "react-icons/fa"; // Importing Font Awesome icons

function UaDash() {
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
          const result = await getAReportAPI(searchKey, reqHeader);
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

      {userReport.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Full Name</th>
              <th>Location</th>
              <th>Aadhaar</th>
              <th>Contact</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th> {/* New column for action buttons */}
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
                <td>{item.location},{item.state}</td>
                <td>{item.aadhaar}</td>
                <td>{item.contact}</td>
                <td>{item.date}</td>
                <td>...</td>
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
        <div className="text-center">No Reports</div>
      )}
    </div>
  );
}

export default UaDash;
