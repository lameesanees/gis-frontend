import React from "react";
import Report from "../Components/Report";
import TrafficServices from "../Components/TrafficServices";
import CommunityServices from "../Components/CommunityServices";

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
