import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import { loginAPI, registerAPI } from "../Services/allAPI";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
function Auth({ register }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    //to hold user data
    username: "",
    email: "",
    password: "",
    aadhaar: "",
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
        text: "Please fill the details",
        icon: "warning",
        confirmButtonText: "Back",
      });
    } else {
      // api calling to register
      const result = await registerAPI(userData);
      console.log(result);
      if (result.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Successfully Registered",
          icon: "success",
          confirmButtonText: "Back",
        });
        setUserData({
          username: "",
          email: "",
          password: "",
          aadhaar: "",
        });
        // to navigate
        navigate("/login");
      } else if (result.response.status === 406) {
        Swal.fire({
          title: "Error!",
          text: result.response.data,
          icon: "error",
          confirmButtonText: "Back",
        });
      }
    }
    console.log(userData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      Swal.fire({
        title: "Warning!",
        text: "Please fill the details",
        icon: "warning",
        confirmButtonText: "Back",
      });
    } else {
      // api calling to register
      const result = await loginAPI(userData);
      console.log(result);
      if (result.status === 200) {
        sessionStorage.setItem("username", result.data.existingUser.username);
        sessionStorage.setItem("token", result.data.token);
        Swal.fire({
          title: "Success!",
          text: "Login Successfull",
          icon: "success",
          confirmButtonText: "Back",
        });
        setUserData({
          email: "",
          password: "",
        });
        // to navigate
        navigate("/");
      } else if (result.response.status === 404) {
        Swal.fire({
          title: "Error!",
          text: result.response.data,
          icon: "error",
          confirmButtonText: "Back",
        });
      }
    }
    console.log(userData);
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
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)", // Light box shadow
          maxWidth: "500px",
          background: "rgba(255, 255, 255, 0.3)", // Transparent box
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
                <h4>Welcome to <br />
                 <b style={{fontSize:"30px",color:"green"}}> GuardIndiaSeva.com </b>
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
                <h4>Welcome Back <br />
                 <b style={{fontSize:"30px",color:"green"}}> GuardIndiaSeva.com </b>
                 </h4>
              </div>
            )}
          </h2>

          {register && (
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
            </div>
          )}

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
            </div>
          )}

          <div>
            {register ? (
              <div className="text-center">
                <button onClick={handleRegister} className="btn btn-dark mb-5">
                  Register
                </button>
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
            ) : (
              <div className="text-center">
                <button onClick={handleLogin} className="btn btn-dark mb-5">
                  Login
                </button>
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
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
