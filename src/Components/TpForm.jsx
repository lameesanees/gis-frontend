import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { Button, Form, ModalFooter } from "react-bootstrap";

function TpForm() {
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({
    fullName: "",
    aadharNumber: "",
    state: "",
    location: "",
    date: "",
    description: "",
    contact: "",
    file: null,
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    handleClose();
  };
  return (
    <>
      <div>
        <input
          type="text"
          style={{ width: "400px" }}
          placeholder="Search By Location"
          className="form-control m-5 mx-auto"
        />
      </div>
      <Card
        style={{ width: "18rem", backgroundColor: "#252b2b", color: "white" }}
        onClick={handleShow}
        className="mx-auto mt-4 shadow-lg"
      >
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/id/154890047/photo/ocean-dumping-total-pollution-on-a-tropical-beach.jpg?s=612x612&w=0&k=20&c=RW83bGvgj7bhZ_VAS8Pi62urkvjAL40W5nNPgR-p8I8="
          alt="Placeholder"
        />
        <Card.Body>
          <Card.Title style={{ cursor: "pointer" }}>Dirty Beaches</Card.Title>
          <Card.Title style={{ cursor: "pointer" }}>10/01/2023</Card.Title>
        </Card.Body>
        <ModalFooter></ModalFooter>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filled Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName">
              <Form.Label className="text-center">
                <img
                  src="https://media.istockphoto.com/id/154890047/photo/ocean-dumping-total-pollution-on-a-tropical-beach.jpg?s=612x612&w=0&k=20&c=RW83bGvgj7bhZ_VAS8Pi62urkvjAL40W5nNPgR-p8I8="
                  className="img-fluid"
                  style={{ width: "50%" }}
                  alt=""
                />
              </Form.Label>
            </Form.Group>

            <Form.Group className="mt-2" style={{ textAlign: "justify" }}>
              <Form.Label>
                Information:
                <span className="text-danger">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
                libero nihil alias adipisci, unde rem? Quibusdam, enim aut,
                ipsam explicabo ipsa fugiat facere consequatur, odio delectus
                amet earum molestias ut!
                </span>
                
              </Form.Label>
              <br />
              <Form.Label>
              Contact: <span className="text-danger">9856321478</span>

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
    </>
  );
}

export default TpForm;
