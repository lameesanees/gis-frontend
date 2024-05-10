import React from "react";

function TrafficRule() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url("https://images.pexels.com/photos/2048224/pexels-photo-2048224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h1 style={{ margin: 0 }}>Road Rules: Navigating Traffic Safely</h1>
          <p style={{ margin: 0,textAlign:"center" }} className="m-2">
            Adhering to speed limits, respecting traffic signals, and
            understanding right of way are crucial components of safe driving.
            By staying within speed limits, obeying signals, and yielding when
            necessary, drivers contribute to a safer road environment for
            themselves and others.
          </p>
         <a href="https://morth.nic.in/sites/default/files/road_safety_books.pdf" target="_blank" rel="noopener noreferrer"> <button className="btn btn-success m-2">Click</button></a>
        </div>
      </div>
    </div>
  );
}

export default TrafficRule;
