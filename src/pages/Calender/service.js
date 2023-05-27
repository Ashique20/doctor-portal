import React from "react";
const Service=({service,setTreatment})=>{
    
    return(
      
           <div class="card lg:max-w-lg  bg-base-100 shadow-xl ">
  
  <div class="card-body ">
    <h2 class="card-title">{service.name}</h2>
    <h2>${service.price}</h2>
    <p>
        {
            service.slots.length >0 ? <span>{service.slots[0]}</span>: <span className="text-decoration-color: #fef2f2">No Slots Available</span>
        }
    </p>
    <p>  {service.slots.length > 2 ? `${service.slots.length} spaces available`:`${service.slots.length}space available` } spaces avilable</p>
    <div class="card-actions justify-center">
     
      <label for="booking-modal"
      class="btn btn-primary  " disabled={service.slots.length === 0} onClick={()=>setTreatment(service)}>Book Appointment</label>
    </div>
  </div>
</div>
       
    )
}

export default Service;