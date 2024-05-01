import React, { useEffect, useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { addMcAPI } from "../Services/allAPI";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Missing() {
  const navigate = useNavigate();
  const [formMCData, setMCFormData] = useState({
    fullname: "",
    age: "",
    gender: "",
    lastlocation: "",
    date: "",
    description: "",
    contact: "",
    mcImage: "",
  });
  console.log(formMCData);

  const handleAddMCReport = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // data passing through state
    const {
      fullname,
      age,
      gender,
      lastlocation,
      date,
      description,
      contact,
      mcImage,
    } = formMCData;

    // Check if any field is empty
    if (
      !fullname ||
      !age ||
      !gender ||
      !lastlocation ||
      !date ||
      !description ||
      !contact ||
      !mcImage
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
      reqBody.append("age", age);
      reqBody.append("gender", gender);

      reqBody.append("lastlocation", lastlocation);
      reqBody.append("date", date);
      reqBody.append("description", description);
      reqBody.append("contact", contact);
      reqBody.append("mcImage", mcImage);

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };

        // api call
        const result = await addMcAPI(reqBody, reqHeader);
        console.log(result);
        if (result.status == 200) {
          Swal.fire({
            title: "Success!",
            text: "Report Submitted Successfully",
            icon: "success",
            confirmButtonText: "Back",
          });
          navigate("/policeye");
          setMCFormData({
            fullname: "",
            age: "",
            lastlocation: "",
            date: "",
            description: "",
            contact: "",
            mcImage: "",
          });
          setPreview("");
        } else {
          alert(result.response.data);
        }
      }
    }
  };

  const [fileStatus, setFileStatus] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    console.log(formMCData.mcImage.type);
    if (
      formMCData.mcImage.type == "image/png" ||
      formMCData.mcImage.type == "image/jpeg" ||
      formMCData.mcImage.type == "image/jpg"
    ) {
      console.log("generate image url");

      // url conversion
      console.log(URL.createObjectURL(formMCData.mcImage));
      setPreview(URL.createObjectURL(formMCData.mcImage));
      setFileStatus(false);
    } else {
      setFileStatus(true);
      console.log(
        "Please Upload following image extension (png,jpg,jpeg) only"
      );
    }
  }, [formMCData.mcImage]);

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
          <div className="mb-3 text-center">
            <label>
              <input
                onChange={(e) =>
                  setMCFormData({ ...formMCData, mcImage: e.target.files[0] })
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
            <p className="text-danger" style={{ textAlign: "justify" }}>
              {" "}
              *Fill out the form correctly. Any wrong information recieved heavy
              charges may be applied with imprisonment.
            </p>

            <label htmlFor="name" className="form-label">
              Full Name:
            </label>
            <MDBInput
              onChange={(e) =>
                setMCFormData({ ...formMCData, fullname: e.target.value })
              }
              type="text"
              className="form-control"
              id="name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <MDBInput
              onChange={(e) =>
                setMCFormData({ ...formMCData, age: e.target.value })
              }
              type="number"
              className="form-control"
              id="age"
              name="age"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>
            <select
              onChange={(e) =>
                setMCFormData({ ...formMCData, gender: e.target.value })
              }
              className="form-select"
              id="gender"
              name="gender"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Last Known Location:
            </label>
            <input
              onChange={(e) =>
                setMCFormData({ ...formMCData, lastlocation: e.target.value })
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
                setMCFormData({ ...formMCData, date: e.target.value })
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
                setMCFormData({ ...formMCData, description: e.target.value })
              }
              className="form-control"
              id="description"
              name="description"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact:
            </label>
            <MDBInput
              onChange={(e) =>
                setMCFormData({ ...formMCData, contact: e.target.value })
              }
              type="text"
              className="form-control"
              id="contact"
              name="contact"
            />
          </div>
          <div className="text-center mb-4 mt-2">
            <button
              onClick={handleAddMCReport}
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

export default Missing;
