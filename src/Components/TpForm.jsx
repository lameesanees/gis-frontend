import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function TpForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
            <div className="container">
        <div>
          <input
            type="text"
            style={{ width: "400px" }}
            placeholder="Search"
            onChange={(e) => setSearchKey(e.target.value)}
            className="form-control m-5 mx-auto"
          />
        </div>

        <div className="row">
          <div className="col">
            <div className="p-4 shadow-lg rounded">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="text-danger">
                      <th scope="col">Name</th>
                      <th scope="col">Location</th>
                      <th scope="col">Date</th>
                      <th scope="col">Remarks</th>
                      <th scope="col">View Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>Kasaragod, India</td>
                      <td>10/12/2023</td>
                      <td className="text-warning">Verifying...</td>
                      <td>
                        <Button variant="success" onClick={handleShow}>
                          Click Here
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Unknown Accident Report</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className="row">
                              <div className="col">
                                <img
                                  src="https://www.morellilaw.com/wp-content/uploads/2021/10/slight-fender-bender.jpeg"
                                  alt=""
                                  className="img-fluid"
                                  style={{ width: "100%" }}
                                />
                              </div>

                              <div className="col">
                                <h4
                                  className="text-center"
                                  style={{ fontSize: "40px" }}
                                >
                                  John Doe
                                </h4>
                                <h4 className="text-danger text-center">
                                  Kozhikode, Kerala
                                </h4>
                              </div>
                              <div
                                className="row shadow-lg p-2 mt-3"
                                style={{
                                  textAlign: "justify",
                                  margin: "0px auto",
                                  justifyContent: "center",
                                }}
                              >
                                <table>
                                  <tr>
                                    <td className="text-danger">
                                      Aadhaar/License:
                                    </td>
                                    <td>785412369</td>
                                  </tr>
                                  <tr>
                                    <td className="text-danger">State: </td>
                                    <td>Kerala</td>
                                  </tr>
                                  <tr>
                                    <td className="text-danger">Date: </td>
                                    <td>10/04/2023</td>
                                  </tr>
                                  <tr>
                                    <td className="text-danger">Contact: </td>
                                    <td>9874521362</td>
                                  </tr>
                                  <tr>
                                    <td className="text-danger">
                                      Description:
                                    </td>
                                    <td>
                                      Lorem ipsum dolor, sit amet consectetur
                                      adipisicing elit. Voluptates eaque omnis
                                      eveniet.
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <button className="btn btn-danger">
                              Delete
                            </button>
                            <button className="btn btn-success" onClick={handleClose}>
                              Back
                            </button>
                          </Modal.Footer>
                        </Modal>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TpForm;
