import React from "react";
import Report from "../Components/Report";
import EmergencyServices from "../Components/EmergencyServices";
import TrafficServices from "../Components/TrafficServices";
import CommunityServices from "../Components/CommunityServices";

function AllServ() {
  return (
    <div className="allserv-background">
      <Report />
      <TrafficServices />
      <EmergencyServices />
      <CommunityServices />
    </div>
  );
}

export default AllServ;
