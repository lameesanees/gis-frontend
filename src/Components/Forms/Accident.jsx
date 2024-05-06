import React, { useEffect, useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { addMaAPI } from "../../Services/allAPI";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Accident() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    yourname: "",
    youraadhaar: "",
    yourcontact: "",
    yournoplate: "",
    insurance: "",
    accidentype: "",
    date: "",
    oppfullname: "",
    oppcontact: "",
    oppadhaar: "",
    oppnoplate: "",
    maImage: ""
  });
  console.log(formData);

  const handleAddAccidentReport = async (e) => {
    e.preventDefault();

    const {
      yourname,
      youraadhaar,
      yourcontact,
      yournoplate,
      insurance,
      accidentype,
      date,
      oppfullname,
      oppcontact,
      oppadhaar,
      oppnoplate,
      maImage,
    } = formData;

    if (
      !yourname ||
      !youraadhaar ||
      !yourcontact ||
      !yournoplate ||
      !insurance ||
      !accidentype ||
      !date ||
      !oppfullname ||
      !oppcontact ||
      !oppadhaar ||
      !oppnoplate ||
      !maImage
    ) {
      Swal.fire({
        title: "Warning!",
        text: "Please fill the form",
        icon: "warning",
        confirmButtonText: "Back",
      });
    } else {
      const reqBody = new FormData();
      reqBody.append("yourname", yourname);
      reqBody.append("youraadhaar", youraadhaar);
      reqBody.append("yourcontact", yourcontact);
      reqBody.append("yournoplate", yournoplate);
      reqBody.append("insurance", insurance);
      reqBody.append("accidentype", accidentype);
      reqBody.append("date", date);
      reqBody.append("oppfullname", oppfullname);
      reqBody.append("oppcontact", oppcontact);
      reqBody.append("oppadhaar", oppadhaar);
      reqBody.append("oppnoplate", oppnoplate);
      reqBody.append("maImage", maImage);

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
         "Authorization": `Bearer ${token}`,
        };

        // api call
        const result = await addMaAPI(reqBody, reqHeader);
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
            yourname: "",
            youraadhaar: "",
            yourcontact: "",
            yournoplate: "",
            insurance: "",
            accidentype: "",
            date: "",
            oppfullname: "",
            oppcontact: "",
            oppadhaar: "",
            oppnoplate: "",
            maImage: ""
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
    console.log(formData.maImage.type);
    if (
      formData.maImage.type == "image/png" ||
      formData.maImage.type == "image/png" ||
      formData.maImage.type == "image/jpeg"
    ) {
      console.log("generating image url");

      // url conversions
      console.log(URL.createObjectURL(formData.maImage));
      setPreview(URL.createObjectURL(formData.maImage));
      setFileStatus(false);
    } else {
      setFileStatus(true);
      console.log(
        "Please Upload following image extension (png,jpg,jpeg) only"
      );
    }
  }, [formData.maImage]);

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
      <h2 className="mt-4 text-center">Report an Accident</h2>
      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div className="mb-3 text-center">
          <label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, maImage: e.target.files[0] })
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
        <div style={{ marginBottom: "20px" }}>
          <MDBInput
            onChange={(e) =>
              setFormData({ ...formData, yourname: e.target.value })
            }
            label="Your Full Name"
            id="form1"
            type="text"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput
            onChange={(e) =>
              setFormData({ ...formData, youraadhaar: e.target.value })
            }
            label="Your Aadhar/License Number"
            id="form1"
            type="text"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput
            onChange={(e) =>
              setFormData({ ...formData, yourcontact: e.target.value })
            }
            label="Your Contact Number"
            id="form1"
            type="text"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput
            onChange={(e) =>
              setFormData({ ...formData, yournoplate: e.target.value })
            }
            label="Your Number Plate"
            id="form2"
            type="text"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <p>
            <b>Insurance Company</b>
          </p>
          <select
            onChange={(e) =>
              setFormData({ ...formData, insurance: e.target.value })
            }
            style={{
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ced4da",
            }}
          >
            <option value="">Select Insurance Company</option>
            <option value="company1">Bajaj Allianz General Insurance</option>
            <option value="company2">Reliance</option>
            <option value="company3">Future Generali India</option>
          </select>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <p>
            <b>Insurance Company</b>
          </p>
          <select
            onChange={(e) =>
              setFormData({ ...formData, accidentype: e.target.value })
            }
            style={{
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ced4da",
            }}
          >
            <option value="">Select Accident Type</option>
            <option value="company1">Minor Accident</option>
            <option value="company2">Major Accident</option>
          </select>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            label="Date"
            id="form1"
            type="date"
          />
        </div>
        <h4>Opponent Details</h4>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput
            onChange={(e) =>
              setFormData({ ...formData, oppfullname: e.target.value })
            }
            label="Opponent Full Name"
            id="form1"
            type="text"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput
            onChange={(e) =>
              setFormData({ ...formData, oppcontact: e.target.value })
            }
            label="Opponent Contact Number"
            id="form1"
            type="text"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput
            onChange={(e) =>
              setFormData({ ...formData, oppadhaar: e.target.value })
            }
            label="Opponent Aadhar/License Number"
            id="form1"
            type="text"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <MDBInput
            onChange={(e) =>
              setFormData({ ...formData, oppnoplate: e.target.value })
            }
            label="Opponent vehicle's Number Plate"
            id="form1"
            type="text"
          />
        </div>

        <p className="text-danger" style={{ textAlign: "justify" }}>
          *If the opponent is not willing to fill out the application, call the
          police using the button below. Heavy fines may be applied to the
          person at fault if the case is decided by the police.
        </p>
        <div className="text-center">
          <button
            onClick={handleAddAccidentReport}
            type="submit"
            className="btn btn-dark me-2"
          >
            Submit
          </button>
          &nbsp;
          <button
            className="btn bg-danger"
            style={{
              padding: "10px 20px",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Call Police
          </button>
        </div>
      </div>
    </>
  );
}

export default Accident;
