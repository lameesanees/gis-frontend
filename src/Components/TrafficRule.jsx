import React, { useEffect, useState } from "react";
import { getTrafficReportAPI, updateTrafAPI } from "../Services/allAPI";
import { serverURL } from "../Services/serverURL";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";

function TrafficRule() {
  const [userReport, setUserReport] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [searchTimer, setSearchTimer] = useState(null);
  const [searching, setSearching] = useState(false);
  const [paidReports, setPaidReports] = useState({});

  const getaReport = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      try {
        const result = await getTrafficReportAPI(searchKey.trim(), reqHeader);
        setUserReport(result.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    }
    setSearching(false);
  };

  useEffect(() => {
    if (searchKey.trim() !== "") {
      clearTimeout(searchTimer);
      setSearching(true);
      const timer = setTimeout(() => {
        getaReport();
      }, 500); // Adjust the delay time as needed
      setSearchTimer(timer);
    }
  }, [searchKey]);

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  const onToken = async (token, reportId) => {
    console.log(token);
    // Display success message
    Swal.fire({
      icon: "success",
      title: "Payment Successful",
      text: "Thank you for your payment!",
    }).then(async () => {
      setPaidReports((prevPaidReports) => ({
        ...prevPaidReports,
        [reportId]: true,
      }));

      // Update the status to 'completed' after a successful payment
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      };
      await updateTrafAPI(reportId, { status: "completed" }, reqHeader);

      // Refresh the report list to reflect the updated status
      getaReport();
    });
  };

  return (
    <div className="container-fluid justify-content-center align-items-center">
      <div className="row">
        <div className="mx-auto">
          <div className="input-group mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Number Plate"
              value={searchKey}
              onChange={handleInputChange}
            />
          </div>

          {searching && (
            <div className="mt-3 text-center">
              <div className="loader">
                <p className="heading">Loading</p>
                <div className="loading">
                  <div className="load"></div>
                  <div className="load"></div>
                  <div className="load"></div>
                  <div className="load"></div>
                </div>
              </div>
            </div>
          )}

          {!searching && searchKey.trim() === "" && (
            <div className="text-center mt-5">
              <img
                src="https://png.pngtree.com/png-clipart/20230825/original/pngtree-mobile-payment-transfer-flat-vector-illustration-picture-image_8704858.png"
                style={{ width: "45%" }}
                alt=""
              />
            </div>
          )}

          {!searching && searchKey.trim() !== "" && (
            <div className="row mt-5" style={{ justifyContent: "center" }}>
              {userReport.length > 0 ? (
                userReport.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="card">
                      {/* <img
                        src={
                          item
                            ? `${serverURL}/uploads/${item.tImage}`
                            : "https://www.hindustantimes.com/ht-img/img/2023/11/27/1600x900/The-mangled-car-on-Monday---HT-Photo-_1701110057428.jpeg"
                        }
                        className="card-img-top"
                        style={{ width: "100%" }}
                        alt="Report"
                      /> */}
                      <div className="card-body">
                        <h5 className="card-title">{item.vehicleNumber}</h5>
                        <p className="card-text">Fine Amount: {item.fineAmount}</p>
                        <p className="card-text">Violation: {item.violationType}</p>
                        <p className="card-text">Date: {item.date}</p>
                        <p className="card-text">Location: {item.location}</p>
                        <p className="card-text">Status: {paidReports[item._id] || item.status === "completed" ? "Completed" : item.status}</p>
                        {!paidReports[item._id] && item.status !== "completed" && (
                          <StripeCheckout
                          currency="INR"
                            amount={item.fineAmount * 100}
                            token={(token) => onToken(token, item._id)}
                            stripeKey="pk_test_51PIUQiSCXQzB17TSSsjq83dtHENVzZIRwb6gOzotMcjA4JUp0zR63sBO61eV1RfdpT2KldVR4j2gvyZtW5buaIre00Qcy5B4Fs"
                          >
                            <button className="btn btn-success">
                              Pay Now
                            </button>
                          </StripeCheckout>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col text-center">No search results found.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrafficRule;
