import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Feature from "./Pages/Feature";
import { Navigate } from "react-router-dom";
import Report from "./Components/Report";
import EmergencyServices from "./Components/EmergencyServices";
import CommunityServices from "./Components/CommunityServices";
import TrafficServices from "./Components/TrafficServices";
import AllServ from "./Pages/AllServ";
import PoliceReport from "./Components/PoliceReport";
import MedicalEmergency from "./Components/MedicalEmergency";
import PoliceEye from "./Components/PoliceEye";
import TouristPolice from "./Components/TouristPolice";
import Ecrime from "./Components/Ecrime";
import LocalPolice from "./Components/LocalPolice";
import UnknownAcc from "./Components/UnknownAcc";
import SmartImp from "./Components/SmartImp";
import SimpleAcc from "./Components/SimpleAcc";
import TrafFine from "./Components/TrafFine";
import Volunteer from "./Components/Volunteer"
import ServcAttach from "./Components/ServcAttach";
import PublicEvent from "./Components/PublicEvent";
import HomeSecurity from "./Components/HomeSecurity"
function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* component of home */}
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Auth />} />
        <Route path={"/register"} element={<Auth register />} />
        <Route path={"/feature"} element={<Feature />} />
        <Route path={"*"} element={<Navigate to={"/"} />} />

        {/* component of feature */}
        <Route path={"/report"} element={<Report />} />
        <Route path={"/emergency"} element={<EmergencyServices />} />
        <Route path={"/community"} element={<CommunityServices />} />
        <Route path={"/traffic"} element={<TrafficServices />} />
        <Route path={"/allserv"} element={<AllServ />} />

        {/* component of reports */}
        <Route path={"/policereport"} element={<PoliceReport />} />
        <Route path={"/medical"} element={<MedicalEmergency />} />
        <Route path={"/policeye"} element={<PoliceEye />} />
        <Route path={"/touristpolice"} element={<TouristPolice />} />
        <Route path={"/ecrime"} element={<Ecrime />} />
        <Route path={"/localpolice"} element={<LocalPolice />} />
        {/* components of traffic */}
        <Route path={"/unknownacc"} element={<UnknownAcc />} />
        <Route path={"/smartimp"} element={<SmartImp />} />
        <Route path={"/simpleacc"} element={<SimpleAcc />} />
        <Route path={"/trafficfine"} element={<TrafFine />} />

        {/* component of community */}
        <Route path={"/volunteer"} element={<Volunteer />} />
        <Route path={"/servattach"} element={<ServcAttach />} />
        <Route path={"/publicevent"} element={<PublicEvent />} />
        <Route path={"/homesecurity"} element={<HomeSecurity />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
