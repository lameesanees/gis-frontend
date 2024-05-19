import React, { useEffect, useState } from "react";
import { getAReportAPI, deleteUaAPI, updateUaAPI } from "../../Services/allAPI";
import { serverURL } from "../../Services/serverURL";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import "../View Form/loading.css";

function UaDash() {
  const [usersReport, setUsersReport] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedStatus, setSelectedStatus] = useState({}); // State to store selected status for each report

  useEffect(() => {
    getaReport();
  }, [searchKey]);

  const getaReport = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      try {
        const result = await getAReportAPI(searchKey, reqHeader);
        setUsersReport(result.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    }
  };

  const handleDelete = async (reportId) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const token = sessionStorage.getItem("token");

        const reqHeader = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        };

        await deleteUaAPI(reportId, reqHeader);

        getaReport();

        Swal.fire("Deleted!", "Your report has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting report:", error);
        Swal.fire("Error!", "Failed to delete the report.", "error");
      }
    }
  };

  const handleStatusChange = (reportId, newStatus) => {
    setSelectedStatus((prevStatus) => ({
      ...prevStatus,
      [reportId]: newStatus,
    }));
  };

  const handleSubmit = async (reportId) => {
    try {
      const status = selectedStatus[reportId];
      if (!status) {
        return Swal.fire("Error!", "Please select a status.", "error");
      }

      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      await updateUaAPI(reportId, { status }, reqHeader);

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

      {usersReport.length > 0 ? (
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersReport.map((item, index) => (
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
                <td>
                  {item.location}, {item.state}
                </td>
                <td>{item.aadhaar}</td>
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
        </div>
      )}
    </div>
  );
}

export default UaDash;
