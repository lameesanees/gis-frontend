import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import logo from "../assets/logo.png";
import dashimg from "../assets/dashimg.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState(1); // Set default selected category to 1 (Home)
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from backend here and update tableData state
    // Example fetch code:
    // fetch('backend_url')
    //   .then(response => response.json())
    //   .then(data => setTableData(data));
  }, []);

  const categories = [
    { id: 1, name: "Home" },
    { id: 2, name: "Your Application", content: "Your Reports" },
    { id: 3, name: "Traffic Fines", content: "Traffic Fines" },
    { id: 4, name: "Police Services", content: "Content for Police Report" },
    { id: 5, name: "Traffic Services", content: "Content for Traffic Report" },
    { id: 6, name: "Community Services", content: "Community Services" },
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <h1 className="mt-2 p-2 m-3">
        Welcome Back <span style={{ color: "red" }}>User</span>
      </h1>
      <div className="dashboard-container">
        <div
          className="sidebar"
          style={{ borderRadius: "20px", marginLeft: "10px" }}
        >
          {/* Logo */}
          <div className="logo">
            <img
              src={logo}
              alt="Logo"
              className="mb-3"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>

          {/* Categories */}
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-item ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div className="content-area shadow-lg m-2">
          <div className="content">
            {/* Render content based on selected category */}
            {/* home */}
            {selectedCategory === 1 && (
              <div className="row home-content mb-3 m-5">
                <img
                  src={dashimg}
                  className="img-fluid"
                  style={{ width: "300px" }}
                  alt=""
                />
                <div className="col">
                  <h2
                    className="m-3 text-danger"
                    style={{ textAlign: "center" }}
                  >
                    Explore Your Dashboard with Smartly within the bundle
                  </h2>
                  <p className="text-center text-muted">
                    Efficiently Monitor Activities, Analyze Data, and Take
                    Informed Decisions. Unlock Insights, Manage Tasks, and Stay
                    Informed.
                  </p>
                </div>
                <div className="mt-4 mb-3 input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search By Reference Number"
                  />
                </div>
                <div className="table-responsive shadow-lg mb-2 bg-light m-2">
                  <table className="table table-bordered-none mt-2">
                    <thead>
                      <tr style={{ backgroundColor: "#f8f9fa" }}>
                        <th style={{ color: "#007bff" }}>Ref.no</th>
                        <th style={{ color: "#007bff" }}>Name</th>
                        <th style={{ color: "#007bff" }}>Application Type</th>
                        <th style={{ color: "#007bff" }}>
                          Aadhar/License Number
                        </th>
                        <th style={{ color: "#007bff" }}>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>458965</td>
                        <td>Abcdef</td>
                        <td>Major Accident</td>
                        <td>987412533 </td>
                        <td>Verified</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* your app */}
            {selectedCategory === 2 && (
              <div className="row home-content mb-3 m-5">
                <h2 className="m-3 text-danger" style={{ textAlign: "center" }}>
                  Your Application
                </h2>
                {/* Add your content for "Your Application" here */}
              </div>
            )}

            {/* traffic fine */}
            {selectedCategory === 3 && (
              <div className="row home-content mb-3 m-5">
                <h2 className="m-3 text-danger" style={{ textAlign: "center" }}>
                  Traffic Fines
                </h2>
                {/* Add your content for "Your Application" here */}
              </div>
            )}

            {/* police services */}
            {selectedCategory === 4 && (
              <div className="row home-content mb-3 m-5">
                <h2 className="m-3 text-danger" style={{ textAlign: "center" }}>
                  Police Services
                </h2>
                {/* Add your content for "Your Application" here */}
              </div>
            )}

            {/* traffic services */}
            {selectedCategory === 5 && (
              <div className="row home-content mb-3 m-5">
                <h2 className="m-3 text-danger" style={{ textAlign: "center" }}>
                  Traffic Services
                </h2>
                {/* Add your content for "Your Application" here */}
              </div>
            )}

            {/* community services */}
            {selectedCategory === 6 && (
              <div className="row home-content mb-3 m-5">
                <h2 className="m-3 text-danger" style={{ textAlign: "center" }}>
                  Community Services
                </h2>
                {/* Add your content for "Your Application" here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
