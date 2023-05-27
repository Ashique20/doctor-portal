import React  from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/UserAdmin";
import auth from "../../../requireAuth/firebase.init";

const DashBoard =()=>{
 const [user] = useAuthState(auth)
 const [admin] = useAdmin(user)
    return(
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
        <h2 className='text-2xl font-bold text-purple-500 '>Welcome to your Dashboard</h2>
        <Outlet></Outlet>
         
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 w-80 bg-base-100 text-base-content">
          
            <li><Link to='/dashboard'>My Appointment</Link></li>
            <li><Link to='/dashboard/review'>My Review</Link></li>
            {admin &&
            <>
            <li><Link to='/dashboard/users'>All Users</Link></li>
            <li><Link to='/dashboard/AddDoctor'>Add a doctor</Link></li>
            <li><Link to='/dashboard/ManageDoctor'>Manage doctor</Link></li>
            </>
            }
          </ul>
        
        </div>
      </div>
    )
}

export default DashBoard;