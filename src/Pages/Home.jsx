import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./home.css"; // Import CSS file for custom styles
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            src="https://images.pexels.com/photos/8943280/pexels-photo-8943280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{ width: "100%", height: "590px" }}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Streamlined Reporting</h3>
            <p>
              Efficiently report accidents and file cases with our user-friendly
              platform.
            </p>
            <Button className="btn btn-dark">Get Started</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            src="https://images.pexels.com/photos/17024657/pexels-photo-17024657/free-photo-of-police-officer-and-car-driver.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{ width: "100%", height: "590px" }}
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Seamless Integration</h3>
            <p>
              Connect directly with authorities and insurance companies for
              swift resolution.
            </p>
            <Button className="btn btn-dark">Get Started</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/13315968/pexels-photo-13315968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{ width: "100%", height: "590px" }}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Enhanced Safety Measures</h3>
            <p>
              Contribute to safer roads and quicker emergency response with our
              innovative solution.
            </p>
            <Button className="btn btn-dark">Get Started</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
