import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/UserAdmin';

import auth from '../../requireAuth/firebase.init';





const RequireAdmin = ({children}) => {
    const [user]= useAuthState(auth)
    const [admin] = useAdmin(user)
    const location = useLocation();
   
    if(!user || !admin){
        signOut(auth)
       return <Navigate to="/login" state={{from:location}} replace></Navigate>
      
    }
   return children;
};

export default RequireAdmin;