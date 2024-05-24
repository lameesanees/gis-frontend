import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { deleteMcAPI, getAMissingReportAPI, updateMcAPI } from "../../Services/allAPI";
import { serverURL } from "../../Services/serverURL";
import { FaTrash } from "react-icons/fa";

function McDash() {
  const [userMCReport, setUserMCReport] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedStatus, setSelectedStatus] = useState({});

  useEffect(() => {
    getAMissing();
  }, [searchKey]);

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

  const handleStatusChange = (missingId, newStatus) => {
    setSelectedStatus((prevStatus) => ({
      ...prevStatus,
      [missingId]: newStatus,
    }));
  };

  const handleSubmit = async (missingId) => {
    try {
      const status = selectedStatus[missingId];
      if (!status) {
        return Swal.fire("Error!", "Please select a status.", "error");
      }

      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      await updateMcAPI(missingId, { status }, reqHeader);

      getAMissing();

      Swal.fire("Success!", "Status updated successfully.", "success");
    } catch (error) {
      console.error("Error submitting changes:", error);
      Swal.fire("Error!", "Failed to update status.", "error");
    }
  };

  const handleDelete = async (missingId) => {
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

        await deleteMcAPI(missingId, reqHeader);

        getAMissing();

        Swal.fire("Deleted!", "Your report has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting report:", error);
        Swal.fire("Error!", "Failed to delete the report.", "error");
      }
    }
  };

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
                  <th>Current Status</th>
                  <th>Update Status</th>
                  <th>Action</th>
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
            <p>No Reports</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default McDash;
