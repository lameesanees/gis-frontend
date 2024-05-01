import React, { useEffect, useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { addOiAPI } from "../Services/allAPI";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Other() {
  const navigate = useNavigate();
  const [formOIData, setOIFormData] = useState({
    infotype: "",
    location: "",
    date: "",
    description: "",
    contact: "",
    oiImage: "",
  });
  console.log(formOIData);

 // Inside the handleAddOIReport function
const handleAddOIReport = async (e) => {
  e.preventDefault(); // Prevent default form submission

  // data passing through state
  const { infotype, location, date, description, contact, oiImage } = formOIData;

  // Check if any field is empty
  if (!infotype || !location || !date || !description || !contact || !oiImage) {
    Swal.fire({
      title: "Warning!",
      text: "Please fill the form",
      icon: "warning",
      confirmButtonText: "Back",
    });
  } else {
    // Check if token is available
    if (token) {
      const reqBody = new FormData();
      reqBody.append("infotype", infotype);
      reqBody.append("location", location);
      reqBody.append("date", date);
      reqBody.append("description", description);
      reqBody.append("contact", contact);
      reqBody.append("oiImage", oiImage);

      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      // api call
      try {
        const result = await addOiAPI(reqBody, reqHeader);
        console.log(result);
        if (result.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "Report Submitted Successfully",
            icon: "success",
            confirmButtonText: "Back",
          });
          navigate("/policeye");
          setOIFormData({
            infotype: "",
            location: "",
            date: "",
            description: "",
            contact: "",
            oiImage: "",
          });
          setPreview("");
        } else {
          alert(result.response.data);
        }
      } catch (error) {
        // Handle Axios error
        console.error("Axios error:", error);
      }
    } else {
      // Handle token not available
      console.error("Authentication token not available");
    }
  }
};

  const [fileStatus, setFileStatus] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    console.log(formOIData.oiImage.type);
    if (
      formOIData.oiImage.type == "image/png" ||
      formOIData.oiImage.type == "image/jpeg" ||
      formOIData.oiImage.type == "image/jpg"
    ) {
      console.log("generate image url");

      // url conversion
      console.log(URL.createObjectURL(formOIData.oiImage));
      setPreview(URL.createObjectURL(formOIData.oiImage));
      setFileStatus(false);
    } else {
      setFileStatus(true);
      console.log(
        "Please Upload following image extension (png,jpg,jpeg) only"
      );
    }
  }, [formOIData.oiImage]);

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
      <h1 className="text-center mt-4">Other Report</h1>

      <div
        style={{
          maxWidth: "600px",
          margin: "30px auto",
          padding: "30px",
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
                  setOIFormData({ ...formOIData, oiImage: e.target.files[0] })
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

            <label htmlFor="incidentType" className="form-label">
              Information Type:
            </label>
            <select
            onChange={(e) =>
              setOIFormData({ ...formOIData, infotype: e.target.value })
            }
              className="form-select"
              id="incidentType"
              name="incidentType"
          
            >
              <option value="">Select Information Type</option>
              <option value="Thief">Thief</option>
              <option value="Majoraccident">Major Accident</option>
              <option value="Carstolen">Leaving home for a trip</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location:
            </label>
            <input
            onChange={(e) =>
              setOIFormData({ ...formOIData, location: e.target.value })
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
              setOIFormData({ ...formOIData, date: e.target.value })
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
              setOIFormData({ ...formOIData, description: e.target.value })
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
              setOIFormData({ ...formOIData, contact: e.target.value })
            }
              type="text"
              className="form-control"
              id="contact"
              name="contact"

            />
          </div>

          <div className="text-center mb-4 mt-2">
            <button
              onClick={handleAddOIReport}
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
    </>
  );
}

export default Other;
