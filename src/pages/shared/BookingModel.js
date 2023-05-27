import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../requireAuth/firebase.init";

const BookingModel =({treatment,date,setTreatment,refetch})=>{
  const{_id,name,slots,price} = treatment
  const formatDate = format(date, 'PP');
  const [user] =useAuthState(auth)
    const handleBooking =event=>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot)

        const booking ={
          treatmentId: _id,
          treatment: name,
          date: formatDate,slot,
          price,
          patient:user.email,
          patientName: user.displayName,
          phone:event.target.phone.value
        }

        fetch('http://localhost:5000/booking',{
          method:'POST',
          headers:{
            'content-type':'application/json'

          },
          body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
          if(data.success){
            toast(`Appointment is set ${formatDate} at ${slot}`)
          }
          else{
            toast.error(`Already have an appointment on${formatDate} at ${slot}` )  
          }
          console.log(data)
          refetch()
          setTreatment(null)
        })

       
    }
    return(
        <div>

<input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">{treatment.name }</h3>
    <form className="grid grid-cols-1 gap-3" onSubmit={handleBooking}>
  <input type="text" value={format(date
    , 'PP')} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  <select name="slot" class="select w-full max-w-xs">
  
  {
    slots.map(slot=> <option value={slot} > {slot}</option>)
  }
  
</select>
  <input name="name" type="text" value={user.displayName || ''} class="input input-bordered w-full max-w-xs" />
  <input name="phone"type="text" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
  <input name="email"type="text" placeholder="Email " value={user.email || ''} class="input input-bordered w-full max-w-xs" />
  <input type="submit" value='Submit' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  </form>
  </div>

</div>

        </div>
    )
}

export default BookingModel;

