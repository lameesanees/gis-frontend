import React, { useState } from "react";
import { BsCreditCardFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [expirationDate, setExpirationDate] = useState(null);

  const handlePayment = () => {
    // Handle payment logic based on the selected payment method
    alert(`Payment made using ${paymentMethod}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "30px" }}>
        Choose Payment Method
      </h1>
      <div className="container">
        <div className="row">
          {/* credit card */}
          <div className="col-md-4 mb-4">
            <button
              className="btn btn-light"
              style={{
                border: "2px solid #777",
                borderRadius: "10px",
                padding: "20px",
                width: "100%",
              }}
              onClick={() => setPaymentMethod("Credit/Debit Card")}
            >
              <BsCreditCardFill
                className="mb-2"
                style={{ color: "", fontSize: "40px" }}
              />{" "}
              <br />
              <span style={{ fontSize: "1.2rem" }}>Credit/Debit Card</span>
            </button>
          </div>

          {/* wallet pay */}
          <div className="col-md-4 mb-4">
            <button
              className="btn btn-light"
              style={{
                border: "2px solid #777",
                borderRadius: "10px",
                padding: "20px",
                width: "100%",
              }}
              onClick={() => setPaymentMethod("Wallet")}
            >
              <FaWallet
                className="mb-2"
                style={{ color: "#bf6d0f", fontSize: "40px" }}
              />
              <br />
              <span style={{ fontSize: "1.2rem" }}>Wallet</span>
            </button>
          </div>

          {/* net banking */}
          <div className="col-md-4 mb-4">
            <button
              className="btn btn-light"
              style={{
                border: "2px solid #777",
                borderRadius: "10px",
                padding: "20px",
                width: "100%",
              }}
              onClick={() => setPaymentMethod("Net Banking")}
            >
              <BsBank2
                className="mb-2"
                style={{ color: "darkBlue", fontSize: "40px" }}
              />
              <br />
              <span style={{ fontSize: "1.2rem" }}>Net Banking</span>
            </button>
          </div>

          {/* upi payment */}
          <div className="col-md-4 mb-4">
            <button
              className="btn btn-light"
              style={{
                border: "2px solid #777",
                borderRadius: "10px",
                padding: "20px",
                width: "100%",
              }}
              onClick={() => setPaymentMethod("UPI")}
            >
              <RiMoneyRupeeCircleFill
                className="mb-2"
                style={{ color: "red", fontSize: "40px" }}
              />
              <br />
              <span style={{ fontSize: "1.2rem" }}>UPI</span>
            </button>
          </div>
        </div>
      </div>

      {paymentMethod && (
        <div className="container mt-4 mb-5">
          <div
            style={{
              background: "linear-gradient(to bottom, rgba(128, 128, 128, 0.6), rgba(0, 0, 0, 0.6))",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
              Enter Payment Details for {paymentMethod}
            </h2>
            {/* Render payment input fields based on the selected payment method */}
            {paymentMethod === "Credit/Debit Card" && (
              <div>
                {/* Add input fields for card details */}
                {/* For example: */}
                <input
                  type="text"
                  placeholder="Card Number"
                  className="form-control mb-3"
                  style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
                />
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="form-control mb-3"
                  style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
                />

                <InputGroup>
                  <DatePicker
                    selected={expirationDate}
                    onChange={(date) => setExpirationDate(date)}
                    placeholderText="Expiration Date"
                    className="form-control mb-3"
                    style={{
                      width: "100%",
                      marginBottom: "10px",
                      padding: "10px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="form-control mb-3"
                    style={{
                      width: "100%",
                      marginBottom: "10px",
                      padding: "10px",
                    }}
                  />
                </InputGroup>
              </div>
            )}

            {paymentMethod === "Wallet" && (
              <div>
                {/* Add input fields for wallet details */}
                {/* For example: */}
                <input
                  type="text"
                  placeholder="Wallet ID/Number"
                  className="form-control mb-3"
                  style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
                />
                <input
                  type="text"
                  placeholder="OTP"
                  className="form-control mb-3"
                  style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
                />
              </div>
            )}

            {paymentMethod === "Net Banking" && (
              <div>
                {/* Add input fields for net banking details */}
                {/* For example: */}
                <input
                  type="text"
                  placeholder="Bank Name"
                  className="form-control mb-3"
                  style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
                />
                <input
                  type="text"
                  placeholder="Account Number"
                  className="form-control mb-3"
                  style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="form-control mb-3"
                  style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
                />
              </div>
            )}

            {paymentMethod === "UPI" && (
              <div>
                {/* Add input fields for UPI details */}
                {/* For example: */}
                <input
                  type="text"
                  placeholder="UPI ID"
                  className="form-control mb-3"
                  style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
                />
                <input
                  type="text"
                  placeholder="OTP"
                  className="form-control mb-3"
                  style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
                />
              </div>
            )}

            {/* Payment button */}
            <button className="btn btn-dark" onClick={handlePayment}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
