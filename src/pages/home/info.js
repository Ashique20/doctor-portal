import React from "react";
import CardInfo from "./CardInfo";
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"

const Info =()=>{
    return(
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center">

        <CardInfo cardTitle={'Opening Hour'} bgClass='bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white'  img={clock}></CardInfo>
        <CardInfo cardTitle={'Our Location'} bgClass='bg-primary'  img={marker}></CardInfo>
        <CardInfo cardTitle={'About us'}     bgClass='bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white'  img={phone}></CardInfo>
        </div>
    )
}

export default Info;