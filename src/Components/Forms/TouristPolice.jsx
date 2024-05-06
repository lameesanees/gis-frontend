import React, { useEffect, useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { addTpAPI } from "../../Services/allAPI";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function TouristPolice() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    location: "",
    contact: "",
    description: "",
    tpImage: "",
  });
  console.log(formData);

  const handleAddTpReport = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // data passing through state
    const { fullname, location, contact, description, tpImage } = formData;

    // Check if any field is empty
    if (!fullname || !location || !contact || !description || !tpImage) {
      Swal.fire({
        title: "Warning!",
        text: "Please fill the form",
        icon: "warning",
        confirmButtonText: "Back",
      });
    } else {
      const reqBody = new FormData();
      reqBody.append("fullname", fullname);
      reqBody.append("location", location);
      reqBody.append("contact", contact);
      reqBody.append("description", description);
      reqBody.append("tpImage", tpImage);

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };

        // api call
        const result = await addTpAPI(reqBody, reqHeader);
        console.log(result);
        if (result.status == 200) {
          Swal.fire({
            title: "Success!",
            text: "Report Submitted Successfully",
            icon: "success",
            confirmButtonText: "Back",
          });
          navigate("/policeye");
          setFormData({
            fullname: "",
            location: "",
            contact: "",
            description: "",
            tpImage: "",
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
    console.log(formData.tpImage.type);
    if (
      formData.tpImage.type == "image/png" ||
      formData.tpImage.type == "image/jpeg" ||
      formData.tpImage.type == "image/jpg"
    ) {
      console.log("generate image url");

      // url conversion
      console.log(URL.createObjectURL(formData.tpImage));
      setPreview(URL.createObjectURL(formData.tpImage));
      setFileStatus(false);
    } else {
      setFileStatus(true);
      console.log(
        "Please Upload following image extension (png,jpg,jpeg) only"
      );
    }
  }, [formData.tpImage]);

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
    <>
      <h1 className="text-center mt-4">Tourist Police</h1>
      <div
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f8f9fa",
        }}
      >
        {/* Header */}

        {/* Image */}
        <div className="text-center mt-0">
          <p className="text-danger" style={{ textAlign: "justify" }}>
            {" "}
            *Fill out the form correctly. Any wrong information recieved heavy
            charges may be applied with imprisonment.
          </p>
          <img
            src="https://i.pinimg.com/474x/1a/26/4a/1a264a7023b456721e2a5b062ae23c68.jpg"
            alt="Tourist Police"
            style={{ maxWidth: "20%", height: "auto" }}
          />
        </div>

        {/* Contact Information */}
        <div className="container mt-3">
          <h3>Contact Information:</h3>
          <p>Emergency Contact: 100</p>
          <p>Non-Emergency Contact: +1 123-456-7890</p>
        </div>

        {/* Complaint Form */}
        <div className="container mt-5">
          <h2>File a Complaint:</h2>
          <div className="mb-3 text-center">
            <label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, tpImage: e.target.files[0] })
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
          <form>
            <div className="form-group">
              <label className="form-label">Full Name:</label>
              <MDBInput
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                type="text"
                className="form-control"
              />

              <label className="form-label mt-2">Location:</label>
              <MDBInput
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                type="text"
                className="form-control"
              />

              <label className="form-label mt-2">Contact:</label>
              <MDBInput
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                type="text"
                className="form-control"
              />
              <label className="mt-2 text-muted ">Complaint Details:</label>
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="form-control mb-2"
                id="complaint"
                rows="4"
              ></textarea>
            </div>
            <div className="text-center mb-4 mt-2">
              <button
                onClick={handleAddTpReport}
                type="submit"
                className="btn btn-dark me-2"
              >
                Submit
              </button>

              <p className="text-danger mt-3" style={{ textAlign: "justify" }}>
                "Please fill out the form correctly. Anyone misusing the site
                may be charged heavy fines and face imprisonment."
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TouristPolice;
