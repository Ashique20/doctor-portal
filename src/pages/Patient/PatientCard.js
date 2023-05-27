import React  from "react";

const PatientCard=({patient})=>{
    return(
        <div className="mt-10 card card-compact w-96 bg-base-100 shadow-xl ml-10">
           <div> <p>{patient.detail}</p></div>
           <div className="flex mt-10 mb-10  items-center">
           <img class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src={patient.img} alt="" />
           <h1 className="ml-8">{patient.name}</h1>
           </div>
        </div>
    )
}

export default PatientCard;