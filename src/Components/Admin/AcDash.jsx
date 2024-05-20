import React, { useEffect, useState } from "react";
import {
  deleteMaAPI,
  getAMaReportAPI,
  updateMaAPI,
} from "../../Services/allAPI";
import { serverURL } from "../../Services/serverURL";
import { FaTrash } from "react-icons/fa"; // Importing Font Awesome icons
import Swal from "sweetalert2";
function AcDash() {
  const [userReport, setUserReport] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedStatus, setSelectedStatus] = useState({}); // State to store selected status for each report
  const handleStatusChange = (accidentId, newStatus) => {
    setSelectedStatus((prevStatus) => ({
      ...prevStatus,
      [accidentId]: newStatus,
    }));
  };

  const handleSubmit = async (accidentId) => {
    try {
      const status = selectedStatus[accidentId];
      if (!status) {
        return Swal.fire("Error!", "Please select a status.", "error");
      }

      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      await updateMaAPI(accidentId, { status }, reqHeader);

      // After updating, fetch the updated report list
      getMaReport();

      // Show success alert
      Swal.fire("Success!", "Status updated successfully.", "success");
    } catch (error) {
      console.error("Error submitting changes:", error);
      // Show error alert if submission fails
      Swal.fire("Error!", "Failed to update status.", "error");
    }
  };
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
  const handleDelete = async (accidentId) => {
    // Display a confirmation dialog before proceeding with deletion
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

        // Call deleteMcAPI function to delete the report
        await deleteMaAPI(accidentId, reqHeader);

        // After successful deletion, refresh the report list
        getMaReport();

        // Show success message after deletion
        Swal.fire("Deleted!", "Your report has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting report:", error);
        // Show error message if deletion fails
        Swal.fire("Error!", "Failed to delete the report.", "error");
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
                  <th>Status</th>
                  <th>Current Status</th>
                  <th>Action</th> {/* New column for action buttons */}
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
                    <td>
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Status:
                        </label>
                        <select
                          className="form-select"
                          value={selectedStatus[item._id] || ""}
                          onChange={(e) =>
                            handleStatusChange(item._id, e.target.value)
                          }
                        >
                          <option value="">Select status</option>
                          <option value="pending">
                            <b>Pending</b>{" "}
                          </option>
                          <option value="approved">
                            <b>Approved</b>
                          </option>
                          <option value="rejected">
                            <b>Rejected</b>
                          </option>
                          <option value="in-progress">
                            <b>In Progress</b>
                          </option>
                          <option value="completed">
                            <b>Visit nearby police station</b>
                          </option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => handleDelete(item._id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleSubmit(item._id)}
                      >
                        Update
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

export default AcDash;
