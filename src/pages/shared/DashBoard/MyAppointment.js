import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../requireAuth/firebase.init";

const MyAppointment = ()=>{
    const [user]= useAuthState(auth)
    console.log(user)
    const [appointments,setAppointment] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/booking?patient=${user?.email}`,{
          method:'GET',
          headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res =>{
          console.log(res)
          if(res.status === 401 || res.status === 403){
            navigate('/')
            signOut(auth);
            localStorage.removeItem('accessToken'); 
          }
         return  res.json()
          })
        .then(data => setAppointment(data))
       }
    },[user])
    return(
        <div>
            <h1>{appointments.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        appointments.map((a,index)=> <tr key={a._id} >
            <th>{index +1}</th>
            <td>{a.patientName}</td>
            <td>{a.date}</td>
            <td>{a.slot}</td>
            <td>{a.treatment}</td>
            <td>
              {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}

              {(a.price && a.paid) &&  <div>
                <p><span className=" text-success">Paid</span></p>
                <p>TransactionId:<span className="text-success">{a.transactionId}</span></p>
                
                </div>}
            </td>
           
          </tr>)
      }
     
      
     
    </tbody>
  </table>
</div>
        </div>
    )
}

export default MyAppointment