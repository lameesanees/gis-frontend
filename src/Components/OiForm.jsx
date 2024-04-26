import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { Button, Form, ModalFooter } from "react-bootstrap";

function OiForm() {
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
        style={{ width: "18rem",backgroundColor:"#252b2b",color:"white" }}
        onClick={handleShow}
        className="mx-auto mt-4 shadow-lg" 
      >
        <Card.Img
          variant="top"
          src="https://5.imimg.com/data5/SELLER/Default/2023/2/ZM/YR/LK/33161492/new-product-500x500.jpeg"
          alt="Placeholder"
        />
        <Card.Body>
          <Card.Title style={{ cursor: "pointer" }}>Robbery</Card.Title>
          <Card.Title style={{ cursor: "pointer" }}>10/01/2023</Card.Title>
        </Card.Body>
        <ModalFooter>

        </ModalFooter>
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
                  src="https://5.imimg.com/data5/SELLER/Default/2023/2/ZM/YR/LK/33161492/new-product-500x500.jpeg"
                  className="img-fluid"
                  style={{ width: "50%" }}
                  alt=""
                />
              </Form.Label>
            </Form.Group>

            <Form.Group className="mt-2" style={{textAlign:"justify"}} >
              <Form.Label>
                Information Type: <span className="text-danger">Robbery</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Location: <span className="text-danger">Kumbla,Kasaragod</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Date: <span className="text-danger">10/01/2023</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Description:{" "}
                <span className="text-danger">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                  aliquid, vitae suscipit voluptatem similique perferendis
                  atque!
                </span>
              </Form.Label>
              <br />
              <Form.Label>
                Contact: <span className="text-danger">985631457</span>
              </Form.Label>{" "}
              <br />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
           
            <Button className="btn btn-dark">
            Delete
          </Button>
          <Button className="btn btn-dark" onClick={handleClose}>
            Close
          </Button>
        
          
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default OiForm
