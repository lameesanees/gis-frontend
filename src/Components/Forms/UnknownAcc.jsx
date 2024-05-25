import React, { useEffect, useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { addUaAPI } from "../../Services/allAPI";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function UnknownAcc() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    aadhaar: "",
    state: "",
    location: "",
    date: "",
    description: "",
    contact: "",
    uaImage: "",
  });
  console.log(formData);

  const handleAddReport = async (e) => {
    e.preventDefault();

    const {
      fullname,
      aadhaar,
      state,
      location,
      date,
      description,
      contact,
      uaImage,
    } = formData;

    if (
      !fullname ||
      !aadhaar ||
      !state ||
      !location ||
      !date ||
      !description ||
      !contact ||
      !uaImage
    ) {
      Swal.fire({
        title: "Warning!",
        text: "Please fill the form",
        icon: "warning",
        confirmButtonText: "Back",
      });
    } else {
      const reqBody = new FormData();
      reqBody.append("fullname", fullname);
      reqBody.append("aadhaar", aadhaar);
      reqBody.append("state", state);
      reqBody.append("location", location);
      reqBody.append("date", date);
      reqBody.append("description", description);
      reqBody.append("contact", contact);
      reqBody.append("uaImage", uaImage);

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };

        try {
          const result = await addUaAPI(reqBody, reqHeader);
          console.log(result);
          if (result.status === 200) {
            Swal.fire({
              title: "Success!",
              text: "Report Submitted Successfully",
              icon: "success",
              confirmButtonText: "Back",
            });
            navigate("/policeye");
            setFormData({
              fullname: "",
              aadhaar: "",
              state: "",
              location: "",
              date: "",
              description: "",
              contact: "",
              uaImage: "",
            });
            setPreview("");

            // Assuming newReport contains necessary details for email
            sendEmailNotification(userEmail, {
              fullname,
              aadhaar,
              state,
              location,
              date,
              description,
              contact,
            });
          } else {
            alert(result.response.data);
          }
        } catch (error) {
          console.error("Error adding report:", error);
        }
      }
    }
  };

  const [fileStatus, setFileStatus] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    console.log(formData.uaImage.type);
    if (
      formData.uaImage.type == "image/png" ||
      formData.uaImage.type == "image/jpeg" ||
      formData.uaImage.type == "image/jpg"
    ) {
      console.log("generate image url");

      // url conversion
      console.log(URL.createObjectURL(formData.uaImage));
      setPreview(URL.createObjectURL(formData.uaImage));
      setFileStatus(false);
    } else {
      setFileStatus(true);
      console.log(
        "Please Upload following image extension (png,jpg,jpeg) only"
      );
    }
  }, [formData.uaImage]);

  // to hold token
  const [token, setToken] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);
  console.log(token);

  return (
    <div className="container">
      <h1 className="text-center mt-3">Unknown Accident Report</h1>
      <div
        className="p-4 shadow-lg"
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f8f9fa",
        }}
      >
        <form className="mt-1">
          <div className="mb-3"></div>
          <div className="mb-3 text-center">
            <label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, uaImage: e.target.files[0] })
                }
                type="file"
                style={{ display: "none" }}
              />
              <img
                src={
                  preview
                    ? preview
                    : "https://tnpcbhwt.cgg.gov.in/Images/Uploading-GIF2.gif"
                }
                className="img-fluid mb-2"
                style={{ width: "50%" }}
              />
              {fileStatus && (
                <p className="text-danger">
                  Please Upload following image extension (png,jpg,jpeg) only
                </p>
              )}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name:
            </label>
            <MDBInput
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
              type="text"
              className="form-control"
              id="name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="aadharNumber" className="form-label">
              Aadhar Number:
            </label>
            <MDBInput
              onChange={(e) =>
                setFormData({ ...formData, aadhaar: e.target.value })
              }
              type="text"
              className="form-control"
              id="aadharNumber"
              name="aadharNumber"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              State:
            </label>
            <select
              className="form-select"
              id="state"
              name="state"
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            >
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Delhi">Delhi</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Location:
            </label>
            <MDBInput
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              type="text"
              className="form-control"
              id="location"
              name="location"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              type="date"
              className="form-control"
              id="date"
              name="date"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="form-control"
              id="description"
              name="description"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Contact:
            </label>
            <MDBInput
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              type="text"
              className="form-control"
              id="contact"
              name="contact"
            />
          </div>

          <div className="text-center mb-4 mt-2">
            <button
              onClick={handleAddReport}
              type="submit"
              className="btn btn-dark me-2"
            >
              Submit
            </button>

            <p className="text-danger mt-3" style={{ textAlign: "justify" }}>
              "Please fill out the form correctly. Anyone misusing the site may
              be charged heavy fines and face imprisonment."
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UnknownAcc;
