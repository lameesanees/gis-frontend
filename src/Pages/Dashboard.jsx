import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import logo from "../assets/logo.png";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { Button, Form, ModalFooter } from "react-bootstrap";
function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState(1); // Set default selected category to 1 (Home)
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    handleClose();
  };

  const categories = [
    { id: 1, name: "Update Profile" },
    { id: 2, name: "Police Services", content: "Update Profile" },
    { id: 3, name: "Traffic Services", content: "Content for Police Report" },
    {
      id: 4,
      name: "Community Services",
      content: "Content for Traffic Report",
    },
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const [username,setUsername]= useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("username")){
      setUsername(sessionStorage.getItem("username"))
    }
    else{
      setUsername("")
    }
  })
  return (
    <>
      <h1 className="mt-2 p-2 m-3">
        Welcome Back <span style={{ color: "red" }}>{username}</span>
      </h1>
      <div className="dashboard-container">
        <div
          className="sidebar"
          style={{ borderRadius: "20px", marginLeft: "10px" }}
        >
          {/* Logo */}
          <div className="logo text-center">
            <img
              src={logo}
              alt="Logo"
              className="mb-3"
              style={{ maxWidth: "60%", height: "auto" }}
            />
          </div>

          {/* Categories */}
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-item ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div className="content-area shadow-lg m-2">
          <div className="content">
            {/* Render content based on selected category */}
            {/* home */}
            {selectedCategory === 1 && (
              <div className="row home-content mb-3 m-5">
                {/* <img
                  src={dashimg}
                  className="img-fluid"
                  style={{ width: "300px" }}
                  alt=""
                /> */}
                <div className="col">
                  <h2
                    className="m-3 text-danger"
                    style={{ textAlign: "center" }}
                  >
                    Explore Your Dashboard with Smartly within the bundle
                  </h2>
                  <p className="text-center text-muted">
                    Efficiently Monitor Activities, Analyze Data, and Take
                    Informed Decisions. Unlock Insights, Manage Tasks, and Stay
                    Informed.
                  </p>
                </div>

                {/* update user */}
                <div className="col">
                  <div className="table-responsive shadow-lg mb-2 bg-light  text-center">
                    <label>
                      <input type="file" style={{ display: "none" }} />
                      <img
                        src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
                        alt=""
                        className="img-fluid rounded-circle  mt-4 "
                        style={{ width: "80%", height: "150px" }}
                      />
                    </label>
                    <div className="text-center m-4 ">
                      <input
                        type="text"
                        placeholder="Albert Joy"
                        className="form-control mb-3"
                      />
                      <input
                        type="text"
                        placeholder="7854123658"
                        className="form-control mb-3"
                      />
                      <input
                        type="text"
                        placeholder="albertjoy@gmail.com"
                        className="form-control mb-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* police services */}
            {selectedCategory === 2 && (
              <div className="row home-content mb-3 mx-5">
                <h2 className="m-1 text-danger text-center w-100">
                  Police Services Report
                </h2>
                {/* Card 1: Unknown Accident Report */}
                <h4 className="m-2 text-center">
                  Get your filled report copy from here &nbsp;
                  <FaArrowAltCircleDown />
                </h4>
                {/* Responsive 4-column button layout */}
                <div className="row mt-3">
                  <div className="col-md-3 mb-3">
                    <Link to={"/uaform"}>
                      <button className="btn btn-primary btn-lg btn-block">
                        Unknown Accident Report
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-3 mb-3">
                    <Link to={"/mcform"}>
                      <button className="btn btn-secondary btn-lg btn-block">
                        Missing Case Report
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-3 mb-3">
                    <Link to={"/oiform"}>
                      <button className="btn btn-success btn-lg btn-block">
                        Other Information Report
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-3 mb-3">
                    <Link to={"/tpform"}>
                      <button className="btn btn-warning btn-lg btn-block">
                        Tourist Police Report
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* traffic services */}
            {selectedCategory === 3 && (
              <div className="row home-content mb-3 mx-5">
                <h2 className="m-1 text-danger text-center w-100">
                  Traffic Services Report
                </h2>
                {/* Card 1: Unknown Accident Report */}
                <h4 className="m-2 text-center">
                  Get your filled report copy from here &nbsp;
                  <FaArrowAltCircleDown />
                </h4>
                {/* Responsive 3-column button layout */}
                <div className="row mt-3">
                  <div className="col-md-4 mb-3">
                    <Link to={"/uaform"}>
                      <button className="btn btn-primary btn-lg btn-block">
                        Unknown Accident Report
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-4 mb-3">
                    <Link to={"/trafficfine"}>
                      <button className="btn btn-secondary btn-lg btn-block">
                        Traffic Fine
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-4 mb-3">
                    <Link to={"/mmform"}>
                      <button className="btn btn-success btn-lg btn-block">
                        Minor/Major Accident
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* community services */}
            {selectedCategory === 4 && (
              <div className="container">
                <div className="row home-content mb-3 m-5">
                  <h2
                    className="m-3 text-danger"
                    style={{ textAlign: "center" }}
                  >
                    Community Services
                  </h2>
                  <h4 className="m-2 text-center">
                    Get your filled report copy from here &nbsp;
                    <FaArrowAltCircleDown />
                  </h4>
                  <div>
                    <Card
                      style={{
                        width: "18rem",
                        backgroundColor: "green",
                        color: "white",
                      }}
                      onClick={handleShow}
                      className="mx-auto mt-4 shadow-lg"
                    >
                      <Card.Body>
                        <Card.Title style={{ cursor: "pointer" }}>
                          Educational Support
                        </Card.Title>
                        <Card.Title style={{ cursor: "pointer" }}>
                          10/01/2023
                        </Card.Title>
                      </Card.Body>
                      <ModalFooter></ModalFooter>
                    </Card>

                    <Modal show={showModal} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Charity Details</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                          <Form.Group
                            className="mt-2"
                            style={{ textAlign: "justify" }}
                          >
                            <Form.Label>
                              Name:{" "}
                              <span className="text-danger">
                                Mohammed Suhan
                              </span>
                            </Form.Label>
                            <br />
                            <Form.Label>
                              Email:{" "}
                              <span className="text-danger">
                                mohammeduhsna@gmail.com
                              </span>
                            </Form.Label>
                            <br />
                            <Form.Label>
                              Amount:{" "}
                              <span className="text-danger"> 25,000/-</span>
                            </Form.Label>{" "}
                            <br />
                            <Form.Label>
                              Charity Type:{" "}
                              <span className="text-danger">
                                {" "}
                                Educational support
                              </span>
                            </Form.Label>{" "}
                            <br />
                            <Form.Label>
                              Payment method:{" "}
                              <span className="text-danger"> Credit card</span>
                            </Form.Label>
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button className="btn btn-dark">Delete</Button>
                        <Button className="btn btn-dark" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
