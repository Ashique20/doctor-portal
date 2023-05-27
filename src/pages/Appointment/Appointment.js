import React from "react";
import appointment from '../../assets/images/doctor.png'
import back from '../../assets/images/appointment.png'

const Appointment =()=>{
    return(
       
          
                <div  style={{
                background: `url(${back})`
                
                
                
            }
            }
                 class="hero min-h-screen bg-base-0 ">
  <div class="hero-content flex-col lg:flex-row">
   <div className=" hidden lg:block">
   <img src={appointment} className='mt-[-380px] h-[800px] w-[3000px]'  />
   </div>
    <div className="mr-20">
      <h1 class="text-5xl font-bold">Appointment</h1>
      <p class="text-ellipsis overflow-hidden  justify-center text-center lg:py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.erwweriojgfiowerjgiowjhgiohjwrioghwriohgiorwhiorhighrwiohiowrhgiowrhigrhiogrhioghriohgr</p>
      <button class="btn btn-primary ">Get Started</button>
    </div>
  </div>
</div>
           
      
    )
}

export default Appointment;