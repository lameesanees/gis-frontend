import React from "react";
import { Link } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";

function Auth({ register }) {
  return (
    <div
      style={{
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKFSSo9e2nkh3g1CxN0erSuIhROD80Y6_YkUWvZvI80CoQDegd1TFCi1MyFke6p23AB4&usqp=CAU')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundRepeat:"repeat"
      }}
    >
      <div
        className="col-lg-6"
        style={{
          borderRadius: "10px",
          padding: "40px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)", // Light box shadow
          maxWidth: "500px",
          background: "rgba(255, 255, 255, 0.3)", // Transparent box
        }}
      >
        <form>
          <h2 className="text-center mb-4">{register ? "Register" : "Login"}</h2>

          {register && (
            <div>
              <MDBInput label="Username" className="mb-3" style={{ backgroundColor: "#f8f9fa" }} />
              <MDBInput label="Email" className="mb-3" style={{ backgroundColor: "#f8f9fa" }} />
              <MDBInput type="password" label="Password" className="mb-3" style={{ backgroundColor: "#f8f9fa" }} />
              <MDBInput label="Aadhar or License Number" className="mb-3" style={{ backgroundColor: "#f8f9fa" }} />
            </div>
          )}

          {!register && (
            <div>
              <MDBInput label="Username" className="mb-3" style={{ backgroundColor: "#f8f9fa" }} />
              <MDBInput label="Email" className="mb-3" style={{ backgroundColor: "#f8f9fa" }} />
              <MDBInput type="password" label="Password" className="mb-3" style={{ backgroundColor: "#f8f9fa" }} />
            </div>
          )}

          <div className="text-center">
            <button className="btn btn-dark">{register ? "Register" : "Login"}</button>
            <p className="mt-3">
              {register ? "Already registered? " : "New to here? "}
              <Link style={{color:"red",textDecoration:"underline"}} to={register ? "/login" : "/register"}>{register ? "Login here" : "Register here"}</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
