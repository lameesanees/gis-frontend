import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

function Other() {
  const [formData, setFormData] = useState({
    incidentType: '',
    location: '',
    date: '',
    description: '',
    contact: '',
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
      incidentType: '',
      location: '',
      date: '',
      description: '',
      contact: '',
      file: null
    });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Other Incident Report</h1>
      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="incidentType" className="form-label">Incident Type:</label>
          <select
            className="form-select"
            id="incidentType"
            name="incidentType"
            value={formData.incidentType}
            onChange={handleChange}
          >
            <option value="">Select Incident Type</option>
            <option value="Thief">Theif</option>
            <option value="Majoraccident">Major Accident</option>
            <option value="Carstolen">Car Stolen</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location:</label>
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
  );
}

export default Other;
