import React from "react";
import { Link } from "react-router-dom";

function PoliceEye() {
  return (
    <>
      <h2 className="m-3 p-4 text-center">Police Emergency</h2>
      <h4 className="text-center">
        If you witness any violation or emergency, please report it:
      </h4>
      <div className="container" style={{ padding: "0 15px" }}>
        <div className="row cols-md-2 g-4 mt-3 gap-2">
          {/* Button 1 */}
          <div className="col">
            <Link to={"/unknownacc"}>
              <button
                className="btn btn-lg btn-block"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#631e13",
                  color: "whitesmoke",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#072370")
                } // Change background color on hover
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#421e25")
                } // Revert background color on mouse leave
              >
                Unknown Accident Report
              </button>
            </Link>
          </div>

          {/* Button 2 */}
          <div className="col">
            <Link to="/missing">
              <button
                className="btn btn-lg btn-block"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#631e13",
                  color: "whitesmoke",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#072370")
                } // Change background color on hover
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#421e25")
                } // Revert background color on mouse leave
              >
                Missing Cases
              </button>
            </Link>
          </div>

          {/* Button 3 */}
          <div className="col">
            <Link to="/other">
              <button
                className="btn btn-lg btn-block"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#631e13",
                  color: "whitesmoke",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#072370")
                } // Change background color on hover
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#421e25")
                } // Revert background color on mouse leave
              >
                Other Information
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Back to Home Button */}
      <div className="back-to-home text-center mt-5">
        <Link to="/">
          <button
            className="btn"
            style={{ backgroundColor: "#797d43", color: "white" }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
}

export default PoliceEye;
