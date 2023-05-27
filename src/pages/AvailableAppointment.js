import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Service from "./Calender/service";
import BookingModel from "./shared/BookingModel";


const AvailableAppointment =({date,setDate})=>{
    const [treatment,setTreatment] = useState(null)
    // const [services,setServices] = useState([])
   const formatDate = format(date,'PP')
   const { data: services, isLoading,refetch } = useQuery(['available',formatDate], () => fetch(`http://localhost:5000/available?date=${formatDate}`)
        .then(res => res.json()))

        
    // if(isLoading){
    //     return <Loading></Loading>
    // }

        
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formatDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))

    // },[])
    return(
        <div>
             
        <p class='text-xl text-[#19D3AE] text-center'>  Available Appointment On: {format(date, 'PP')}</p>
        <div class='sm:grid grid-cols-1 lg:grid grid-cols-3 gap-5'>
        {
         services?.map(service =><Service 
            service={service} 
         key={service._id}
         setTreatment={setTreatment}
         
         >
            
         </Service> )   
        }
        </div>
        {treatment && <BookingModel date={date} setTreatment={setTreatment} treatment={treatment} refetch={refetch}></BookingModel>}
        </div>
    )
}

export default AvailableAppointment;