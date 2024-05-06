import React from "react";
import Report from "../Components/Features/Report";
import TrafficServices from "../Components/Features/TrafficServices";
import CommunityServices from "../Components/Features/CommunityServices";

function AllServ() {
  return (
    <div className="allserv-background">
      <Report />
      <TrafficServices />
      <CommunityServices />
    </div>
  );
}

export default AllServ;
