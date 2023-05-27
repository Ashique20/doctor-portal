import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor,refetch,setDeletingDoctor }) => {
    const{name, specielity,img,email} = doctor;
   
    return (
        <tr>
            <th>.</th>
            <td class="avatar"> 
  <div class="w-8 rounded">
    <img src={img}alt={name} />
  </div></td>
            <td>{name}</td>
            <td>{
                specielity
            }</td>
            <td><label onClick={()=>setDeletingDoctor(doctor)} for="DeleteModal" class="btn btn-xs btn-error">Delete</label>
               </td>
        </tr>

    )
}

export default DoctorRow;