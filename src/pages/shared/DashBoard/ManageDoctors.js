import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading";
import DeleteModal from "./DeleteModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors =()=>{
  const [deletingDoctor,setDeletingDoctor] = useState(null)
    const {data: doctors,isLoading,refetch} = useQuery('doctors', ()=>fetch(`http://localhost:5000/doctor`,{
       
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return(
        <div>
            <h1 className="text=2xl "> Manage Doctors:{doctors.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Specielety</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      
     {
        doctors.map(doctor=><DoctorRow 
        doctor={doctor}
        key={doctor._id}
        refetch={refetch}
        setDeletingDoctor={setDeletingDoctor}
        
      
        
        ></DoctorRow>)
     }
    </tbody>
  </table>
</div>
{
  deletingDoctor && <DeleteModal deletingDoctor={deletingDoctor} refetch={refetch} setDeletingDoctor={setDeletingDoctor}></DeleteModal>
}
        </div>
    )
}

export default ManageDoctors;