import React, { useRef, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import "./home.css";
import Feature from "./Feature";
import About from "../Components/About";

function Home() {
  const videoRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  useEffect(() => {
    const playPromise = videoRefs.current[0].current.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Autoplay started
        })
        .catch((error) => {
          // Autoplay was prevented
          console.log("Autoplay was prevented: ", error);
        });
    }
  }, []);

  return (
    <>
      <Carousel fade className="md-4">
        {/* SLIDE 1 */}
        <Carousel.Item>
          <div className="video-container">
            <video
              ref={videoRefs.current[0]}
              autoPlay
              muted
              loop
              className="video"
            >
              <source src={video1} type="video/mp4" />
            </video>
          </div>
          <Carousel.Caption>
            <h3 className="lg-4">Streamlined Reporting</h3>
            <p>
              Efficiently report accidents and file cases with our user-friendly
              platform.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* SLIDE 2 */}
        <Carousel.Item>
          <div className="video-container">
            <video
              ref={videoRefs.current[1]}
              autoPlay
              muted
              loop
              className="video"
            >
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          <Carousel.Caption>
            <h3 className="lg-4">Seamless Integration</h3>
            <p>
              {" "}
              Connect directly with authorities and insurance companies for
              swift resolution.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* SLIDE 3 */}
        <Carousel.Item>
          <div className="video-container">
            <video
              ref={videoRefs.current[2]}
              autoPlay
              muted
              loop
              className="video"
            >
              <source src={video3} type="video/mp4" />
            </video>
          </div>
          <Carousel.Caption>
           
            <h3 className="lg-4">Enhanced Safety Measures</h3>
            <p>
              {" "}
              Contribute to safer roads and quicker emergency response with our
              innovative solution.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
     
      <div>
        <Feature />
      </div>
      <br />
      <div>
        <About />
      </div>
      
    </>
  );
}

export default Home;
