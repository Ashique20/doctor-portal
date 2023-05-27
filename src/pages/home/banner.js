import React from "react";
import chair from '../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';


const Banner =()=>{
    return(
        <div >
            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class=" w-7/12 rounded-lg shadow-2xl" />
    <div >
      <h1 class="text-5xl font-bold">Your new smile starts here</h1>
      <p class=" py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn- bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white ">Get Started</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default Banner;