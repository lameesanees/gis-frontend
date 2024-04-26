import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";

function Missing() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    date: "",
    description: "",
    contact: "",
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file
    }));
  };

  const handleClear = () => {
    setFormData({
      name: "",
      age: "",
      gender: "",
      location: "",
      date: "",
      description: "",
      contact: "",
      file: null
    });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Missing Person Report</h1>
      <div
        className="p-4"
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f8f9fa",
        }}
      >
        <form className="mt-4">
          <div className="mb-3">
          <p className="text-danger" style={{textAlign:"justify"}}> *Fill out the form correctly. Any wrong information recieved heavy charges may be applied with imprisonment.</p>

            <label htmlFor="name" className="form-label">Full Name:</label>
            <MDBInput
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age:</label>
            <MDBInput
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender:</label>
            <select
              className="form-select"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Last Known Location:</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date:</label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Contact:</label>
            <MDBInput
              type="text"
              className="form-control"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />  
          </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">Upload Photo:</label>
            <MDBInput
              type="file"
              className="form-control"
              id="file"
              name="file"
              onChange={handleFileChange}
            />
          </div>
          <div className="text-center mb-4 mt-2" >
            <button type="submit" className="btn btn-dark me-2">Submit</button>
            <button type="button" className="btn btn-dark" onClick={handleClear}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Missing;
