import React, { useState } from "react";
import AvailableAppointment from "../AvailableAppointment";
import Footer from "../home/Footer";
import CalenderBanner from "./CalenderBanner";

const Calender =()=>{
    const [date,setDate] = useState(new Date())
    return(
        <div>
            <CalenderBanner date={date} setDate={setDate}></CalenderBanner>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
           <Footer></Footer> 
        </div>
    )
}

export default Calender;