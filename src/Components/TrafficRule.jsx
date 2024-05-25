import React, { useEffect, useState } from "react";
import { getTrafficReportAPI, updateTrafAPI } from "../Services/allAPI";
import { serverURL } from "../Services/serverURL";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import html2pdf from "html2pdf.js";

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
    })
    .then(async () => {
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
  
  const openImageInNewPage = (imageName) => {
    if (imageName) {
      window.open(`${serverURL}/uploads/${imageName}`, "_blank");
    }
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
            <div className="table-responsive mt-5">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Ref.no</th>
                    <th>Vehicle Number</th>
                    <th>Fine Amount</th>
                    <th>Violation Type</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userReport.map((item) => (
                    <tr key={item.userId}>
                      <td>
                      <img onClick={() => openImageInNewPage(item.tImage)}
                        src={
                          item
                            ? `${serverURL}/uploads/${item.tImage}`
                            : "https://www.hindustantimes.com/ht-img/img/2023/11/27/1600x900/The-mangled-car-on-Monday---HT-Photo-_1701110057428.jpeg"
                        }
                        alt="Report"
                        style={{ height: "auto", width: "100px" }}
                      />
                    </td>
                      <td>{item.userId}</td>
                      <td>{item.vehicleNumber}</td>
                      <td>{item.fineAmount}</td>
                      <td>{item.violationType}</td>
                      <td>{item.date}</td>
                      <td>{item.location}</td>
                      <td>
                        {paidReports[item._id] || item.status === "completed"
                          ? "Completed"
                          : item.status}
                      </td>
                      <td>
                        {!paidReports[item._id] &&
                          item.status !== "completed" && (
                            <StripeCheckout
                              currency="INR"
                              amount={item.fineAmount * 100}
                              token={(token) => onToken(token, item._id)}
                              stripeKey="pk_test_51PIUQiSCXQzB17TSSsjq83dtHENVzZIRwb6gOzotMcjA4JUp0zR63sBO61eV1RfdpT2KldVR4j2gvyZtW5buaIre00Qcy5B4Fs"
                            >
                              <button className="btn btn-success text-center m-1">
                                Pay Now
                              </button>
                            </StripeCheckout>
                          )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrafficRule;
