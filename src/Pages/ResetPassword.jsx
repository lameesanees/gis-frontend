import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import { resetPasswordAPI } from "../Services/allAPI";

function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleResendPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        title: "Warning!",
        text: "Please enter your email",
        icon: "warning",
        confirmButtonText: "Back"
      });
      return;
    }

    // Call the resend password API
    const result = await resetPasswordAPI(email);
    console.log(result);
    if (result.status === 200) {
      Swal.fire({
        title: "Success!",
        text: "Password reset email sent successfully",
        icon: "success",
        confirmButtonText: "Back"
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: result.response.data.message,
        icon: "error",
        confirmButtonText: "Back"
      });
    }
  };

  return (
    <div
      style={{
        background:
          "url('https://images.pexels.com/photos/3358507/pexels-photo-3358507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundRepeat: "repeat"
      }}
    >
      <div
        className="col-lg-6"
        style={{
          color: "black",
          borderRadius: "10px",
          padding: "40px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)", // Light box shadow
          maxWidth: "500px",
          background: "rgba(255, 255, 255, 0.3)" // Transparent box
        }}
      >
        <form>
          <h2 className="text-center mb-4">Resend Password</h2>
          <MDBInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label="Email"
            className="mb-3"
            style={{ backgroundColor: "#f8f9fa" }}
          />
          <div className="text-center">
            <button onClick={handleResendPassword} className="btn btn-dark mb-5">
              Resend Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
