import React from "react";

import Appointment from "../Appointment/Appointment";
import DentalBanner from "../DentalBanner/DentalBanner";
import ExpertInfo from "../Experts/ExpertInfo";
import LoginForm from "../login/Form";


import Patient from "../Patient/Patient";
import Banner from "./banner";
import Footer from "./Footer";
import Info from "./info";



const Home =()=>{
    return(
        <div   >
            <Banner></Banner>
            <Info></Info>
          
            <h1 className="text-center mt-20 text-[#0FCFEC]">OUR SERVICE <br /><span className="text-3xl text-white" >Services we Provide</span></h1>
            <ExpertInfo ></ExpertInfo>
            <DentalBanner></DentalBanner>
            <Appointment></Appointment>
            <br />
            <Patient></Patient>
            <LoginForm></LoginForm>
            <Footer></Footer>
           
        </div>
    )
}

export default Home;