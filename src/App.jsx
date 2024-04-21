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
import CommunityServices from "./Components/CommunityServices";
import TrafficServices from "./Components/TrafficServices";
import AllServ from "./Pages/AllServ";
import PoliceReport from "./Components/PoliceReport";
import PoliceEye from "./Components/PoliceEye";
import TouristPolice from "./Components/TouristPolice";
import UnknownAcc from "./Components/UnknownAcc";
import TrafFine from "./Components/TrafFine";
import TrackApp from "./Components/TrackApp";
import About from "./Components/About";
import FeatureCard from "./Components/FeatureCard";
import Missing from "./Components/Missing";
import Other from "./Components/Other";
import Dashboard from "./Pages/Dashboard";
import Accident from "./Components/Accident";
import Payment from "./Components/Payment";
import SocialSupport from "./Components/SocialSupport";

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
        <Route path={"/about"} element={<About/>} />
        <Route path={"/feature"} element={<FeatureCard/>} />
        <Route path={"/dashboard"} element={<Dashboard/>} />
        <Route path={"/pay"} element={<Payment/>} />


        
        {/* component of feature */}
        <Route path={"/report"} element={<Report />} />
        <Route path={"/community"} element={<CommunityServices />} />
        <Route path={"/traffic"} element={<TrafficServices />} />
        <Route path={"/allserv"} element={<AllServ />} />

        {/* component of reporting services */}
        <Route path={"/policereport"} element={<PoliceReport />} />
        <Route path={"/policeye"} element={<PoliceEye />} />
        <Route path={"/touristpolice"} element={<TouristPolice />} />
        <Route path={"/missing"} element={<Missing />} />
        <Route path={"/trackapp"} element={<TrackApp />} />
        <Route path={"/other"} element={<Other />} />

       
        {/* components of traffic services */}
        <Route path={"/unknownacc"} element={<UnknownAcc />} />
        <Route path={"/trafficfine"} element={<TrafFine />} />
        <Route path={"/accident"} element={<Accident />} />

        {/* component of community */}
        <Route path={"/socialsupport"} element={<SocialSupport />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
