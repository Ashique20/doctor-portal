import React, { useState } from "react";
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";

const CalenderBanner =({date,setDate})=>{
  

    return(
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow" />
    <div>
    <DayPicker
    mode="single"
    selected={date}
    onSelect={setDate}
     />
 
  </div>
  
  </div>
  
</div>
    )
}

export default CalenderBanner;