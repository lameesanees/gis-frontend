import React, { useState, useEffect } from "react";
import { deleteUserAPI, getUsersAPI } from "../../Services/allAPI"; // Import deleteUserAPI
import Swal from "sweetalert2";

function Active() {
  const [users, setUsers] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      getUsers();
    } else {
      console.error("Token not found in sessionStorage");
    }
  }, [searchKey]);

  const getUsers = async () => {
    try {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
      const result = await getUsersAPI(searchKey, reqHeader);
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  const deleteUser = async (userId) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
      const result = await deleteUserAPI(userId, reqHeader);
      console.log(result);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "User deleted successfully!!",
        showConfirmButton: false,
        timer: 1500,
      });
      // Refresh the user list after deletion
      getUsers();
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        style={{ width: "400px" }}
        placeholder="Search by email"
        value={searchKey}
        onChange={handleInputChange}
        className="form-control m-5 mx-auto"
      />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Aadhaar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.aadhaar}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Active;
