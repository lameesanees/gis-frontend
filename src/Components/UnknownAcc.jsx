import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";

function UnknownAcc() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    date: "",
    description: "",
    contact: "",
    file: null,
    aadharNumber: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "contactNumber" ? formData.countryCode + value : value
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
      state: "",
      location:"",
      date: "",
      description: "",
      contact: "",
      file: null,
      aadharNumber: ""
    });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Unknown Accident Report</h1>
      <form className="mt-4">
        <div className="mb-3">
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
          <label htmlFor="aadharNumber" className="form-label">Aadhar Number:</label>
          <MDBInput
            type="text"
            className="form-control"
            id="aadharNumber"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">State:</label>
          <select
            className="form-select"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            {/* Add options for other states */}
          </select>
        </div>
        <div className="mb-3">
        <label htmlFor="name" className="form-label">Location:</label>
          <MDBInput
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
        <label htmlFor="name" className="form-label">Contact:</label>
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
          <label htmlFor="file" className="form-label">Upload File:</label>
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
  );
}

export default UnknownAcc;
