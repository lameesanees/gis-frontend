import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import { registerAPI, verifyOTPAPI, loginAPI } from "../Services/allAPI"; // Assuming you have import verifyOTPAPI
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import logo from "../Components/Admin/logo.png";

function Auth({ register }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    aadhaar: "",
    otp: "",
    isOTPVerified: false,
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !userData.username ||
      !userData.email ||
      !userData.password ||
      !userData.aadhaar
    ) {
      Swal.fire({
        title: "Warning!",
        text: "Please fill all the details",
        icon: "warning",
        confirmButtonText: "Back",
      });
    } else {
      const result = await registerAPI(userData);
      console.log(result);
      if (result.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "OTP sent to your email, please verify",
          icon: "success",
          confirmButtonText: "OK",
        });
        setUserData({ ...userData, isOTPVerified: true });
      } else if (result.response.status === 406) {
        Swal.fire({
          title: "Error!",
          text: result.response.data,
          icon: "error",
          confirmButtonText: "Back",
        });
      }
    }
  };

  const handleOTPVerification = async () => {
    try {
      const response = await verifyOTPAPI(userData.email, userData.otp);
      if (response.status === 200) {
        setUserData({ ...userData, isOTPVerified: true });
        Swal.fire({
          title: "Success!",
          text: "OTP verification successful",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Invalid OTP, please try again",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while verifying OTP, please try again later",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!userData.email || !userData.password) {
      Swal.fire({
        title: "Warning!",
        text: "Please fill all the details",
        icon: "warning",
        confirmButtonText: "Back",
      });
      return;
    }

    const result = await loginAPI(userData);
    console.log(result);
    if (result.status === 200) {
      sessionStorage.setItem("username", result.data.existingUser.username);
      sessionStorage.setItem("token", result.data.token);
      Swal.fire({
        title: "Success!",
        text: "Login Successful",
        icon: "success",
        confirmButtonText: "Back",
      });
      if (result.data.existingUser.role === "admin") {
        navigate("/dashadmin");
      } else {
        navigate("/");
      }
    } else if (result.response.status === 404) {
      Swal.fire({
        title: "Error!",
        text: result.response.data,
        icon: "error",
        confirmButtonText: "Back",
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
        backgroundRepeat: "repeat",
      }}
    >
      <div
        className="col-lg-6"
        style={{
          color: "black",
          borderRadius: "10px",
          padding: "40px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)",
          maxWidth: "500px",
          background: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <form>
          <h2 className="text-center mb-4">
            {register ? (
              <div>
                <img
                  src={logo}
                  alt=""
                  className="img-fluid"
                  style={{ width: "10%" }}
                />
                <h4>
                  Welcome to
                  <br />
                  <b style={{ fontSize: "30px", color: "green" }}>
                    {" "}
                    GuardIndiaSeva.com{" "}
                  </b>
                </h4>
              </div>
            ) : (
              <div>
                <img
                  src={logo}
                  alt=""
                  className="img-fluid"
                  style={{ width: "10%" }}
                />
                <h4>
                  Welcome Back
                  <br />
                  <b style={{ fontSize: "30px", color: "green" }}>
                    {" "}
                    GuardIndiaSeva.com{" "}
                  </b>
                </h4>
              </div>
            )}
          </h2>

          {register && !userData.isOTPVerified && (
            <div>
              <MDBInput
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
                value={userData.username}
                label="Username"
                className="mb-3"
                style={{ backgroundColor: "#f8f9fa" }}
              />
              <MDBInput
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                value={userData.email}
                label="Email"
                className="mb-3"
                style={{ backgroundColor: "#f8f9fa" }}
              />
              <MDBInput
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                value={userData.password}
                type="password"
                label="Password"
                className="mb-3"
                style={{ backgroundColor: "#f8f9fa" }}
              />
              <MDBInput
                onChange={(e) =>
                  setUserData({ ...userData, aadhaar: e.target.value })
                }
                value={userData.aadhaar}
                label="Aadhar or License Number"
                className="mb-3"
                style={{ backgroundColor: "#f8f9fa" }}
              />
              <div className="text-center">
              <button onClick={handleRegister} className="btn btn-dark mb-5">
                Register
              </button>
              </div>
              <div className="text-center">
              <p>
                Already Registered?
                <Link
                  to={"/login"}
                  className="text-danger text-decoration-underline"
                >
                  Login Here
                </Link>
              </p>
              </div>
            </div>
          )}

          {register && userData.isOTPVerified && (
            <div>
              <MDBInput
                onChange={(e) =>
                  setUserData({ ...userData, otp: e.target.value })
                }
                value={userData.otp}
                label="Enter OTP"
                className="mb-3"
                style={{ backgroundColor: "#f8f9fa" }}
              />
              <button
                onClick={handleOTPVerification}
                className="btn btn-dark mb-5"
              >
                Verify OTP
              </button>
            </div>
          )}

          {/* Login form */}
          {!register && (
            <div>
              <MDBInput
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                value={userData.email}
                label="Email"
                className="mb-3"
                style={{ backgroundColor: "#f8f9fa" }}
              />
              <MDBInput
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                value={userData.password}
                type="password"
                label="Password"
                className="mb-3"
                style={{ backgroundColor: "#f8f9fa" }}
              />
              <div className="text-center">
              <button onClick={handleLogin} className="btn btn-dark mb-5">
                Login
              </button>
              </div>
              <div className="text-center">
              <p>
                New to Here?
                <Link
                  to={"/register"}
                  className="text-danger text-decoration-underline"
                >
                  Register
                </Link>
              </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Auth;
