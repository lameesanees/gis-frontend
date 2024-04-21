import React from "react";
import { Link } from "react-router-dom";
function TrafFine() {
  // Function to handle payment for a specific fine
  const handlePayment = (fineType) => {
    alert(`Payment made for ${fineType}`);
    // Add your payment logic here
  };

  return (
    <>
      <h1 className="mt-4 text-center">Traffic Fine Details</h1>
      <div
        className="m-5"
        style={{
          textAlign: "center",
          marginTop: "50px",
          backgroundColor: "#f2f2f2",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    textAlign: "justify",
                  }}
                >
                  Fine Type
                </th>
                <th
                  style={{
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    textAlign: "justify",
                  }}
                >
                  Amount
                </th>
                <th
                  style={{
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    textAlign: "justify",
                  }}
                >
                  Description
                </th>
                <th
                  style={{
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    textAlign: "justify",
                  }}
                >
                  Date & Time
                </th>
                <th
                  style={{
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    textAlign: "justify",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "8px", textAlign: "justify" }}>
                  Speeding
                </td>
                <td style={{ padding: "8px", textAlign: "justify" }}>500/-</td>
                <td style={{ padding: "8px", textAlign: "justify" }}>
                  Exceeding the speed limit by 10 mph
                </td>
                <td style={{ padding: "8px", textAlign: "justify" }}>
                  2024-04-21 10:30 AM
                </td>
                <td style={{ padding: "8px", textAlign: "justify" }}>
                  <Link to ="/pay">
                  <button
                    style={{
                      padding: "5px 10px",
                      fontSize: "0.9rem",
                      backgroundColor: "#797d43",
                      color: "white",
                      borderRadius: "5px",
                      border: "none",
                    }}
                    onClick={() => handlePayment("Speeding")}
                  >
                    Pay
                  </button>
                  </Link>
                  
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", textAlign: "justify" }}>
                  Red Light Violation
                </td>
                <td style={{ padding: "8px", textAlign: "justify" }}>500/-</td>
                <td style={{ padding: "8px", textAlign: "justify" }}>
                  Running a red light
                </td>
                <td style={{ padding: "8px", textAlign: "justify" }}>
                  2024-04-20 02:45 PM
                </td>
                <td style={{ padding: "8px", textAlign: "justify" }}>
                  <Link to ='/pay'>
                  <button
                    style={{
                      padding: "5px 10px",
                      fontSize: "0.9rem",
                      backgroundColor: "#797d43",
                      color: "white",
                      borderRadius: "5px",
                      border: "none",
                    }}
                    onClick={() => handlePayment("Red Light Violation")}
                  >
                    Pay
                  </button>
                  </Link>
                  
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", textAlign: "justify" }}>
                  Illegal Parking
                </td>
                <td style={{ padding: "8px", textAlign: "justify" }}>500/-</td>
                <td style={{ padding: "8px", textAlign: "justify" }}>
                  Parking in a no-parking zone
                </td>
                <td style={{ padding: "8px", textAlign: "justify" }}>
                  2024-04-19 09:15 AM
                </td>
                <td style={{ padding: "8px", textAlign: "justify" }}>
                  <Link to={"/pay"}>
                    <button
                      style={{
                        padding: "5px 10px",
                        fontSize: "0.9rem",
                        backgroundColor: "#797d43",
                        color: "white",
                        borderRadius: "5px",
                        border: "none",
                      }}
                      onClick={() => handlePayment("Illegal Parking")}
                    >
                      Pay
                    </button>
                  </Link>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TrafFine;
