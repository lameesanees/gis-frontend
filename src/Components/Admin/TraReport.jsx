import React, { useEffect, useState } from "react";
import { deleteTrafficAPI, getTrafficReportAPI, updateTrafAPI } from '../../Services/allAPI';
import { serverURL } from '../../Services/serverURL';
import Swal from 'sweetalert2';
import { FaTrash } from "react-icons/fa";

function TraReport() {
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
        const result = await getTrafficReportAPI(searchKey, reqHeader);
        setUserReport(result.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    }
  };

  const handleDelete = async (trafficId) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const token = sessionStorage.getItem("token");

        const reqHeader = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        };

        await deleteTrafficAPI(trafficId, reqHeader);

        getMaReport();

        Swal.fire("Deleted!", "Your report has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting report:", error);
        Swal.fire("Error!", "Failed to delete the report.", "error");
      }
    }
  };

  useEffect(() => {
    getMaReport();
  }, [searchKey]);
// In TraReport.js

// Define a state to hold the status data
const [statusData, setStatusData] = useState({});

// Define a function to update the status locally
const handleStatusUpdate = (reportId) => {
  // Update the status locally in the state
  setStatusData((prevStatusData) => ({
    ...prevStatusData,
    [reportId]: "completed", // Assuming the status is "completed" after payment
  }));
};

// Pass the function as a prop to TraReport component
<TraReport onStatusUpdate={handleStatusUpdate} />

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
                  <th>Fine amount</th>
                  <th>Vehicle Number</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userReport.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={`${serverURL}/uploads/${item.tImage}`}
                        alt="Report"
                        style={{ height: "auto", width: "100px" }}
                      />
                    </td>
                    <td>{item.fineAmount}</td>
                    <td>{item.vehicleNumber}</td>
                    <td>{item.date}</td>
                    <td>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => handleDelete(item._id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No Reports</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TraReport;
