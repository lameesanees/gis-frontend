import React, { useEffect, useState } from "react";
import { serverURL } from "../../Services/serverURL";
import { deleteOiAPI, getAOtherInfoAPI,updateOiAPI } from "../../Services/allAPI";
import { FaTrash, FaEdit } from "react-icons/fa"; // Importing Font Awesome icons
import Swal from "sweetalert2";
import "../View Form/loading.css"

function OiDash() {
  const [userReport, setUserReport] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedStatus, setSelectedStatus] = useState({}); // State to store selected status for each report
  const handleStatusChange = (otherId, newStatus) => {
    setSelectedStatus((prevStatus) => ({
      ...prevStatus,
      [otherId]: newStatus,
    }));
  };

  const handleSubmit = async (otherId) => {
    try {
      const status = selectedStatus[otherId];
      if (!status) {
        return Swal.fire("Error!", "Please select a status.", "error");
      }

      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      await updateOiAPI(otherId, { status }, reqHeader);

      // After updating, fetch the updated report list
      getaReport();

      // Show success alert
      Swal.fire("Success!", "Status updated successfully.", "success");
    } catch (error) {
      console.error("Error submitting changes:", error);
      // Show error alert if submission fails
      Swal.fire("Error!", "Failed to update status.", "error");
    }
  };

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
  const handleDelete = async (otherId) => {
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
        await deleteOiAPI(otherId, reqHeader);

        // After successful deletion, refresh the report list
        getaReport();

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
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
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
<div class="loader">
  <p class="heading">Loading</p>
  <div class="loading">
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
  </div>
</div>          )}
        </div>
      </div>
    </div>
  );
}

export default OiDash;
