import React, {  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import{  useSignInWithGoogle}from 'react-firebase-hooks/auth'
import auth from "../../requireAuth/firebase.init";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import UseToken from "../../hooks/UseToken";



const SignIn =()=>{
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const [signInWithGoogle,gUser] = useSignInWithGoogle(auth);
    const [
      signInWithEmailAndPassword,
      user
      
  ] = useSignInWithEmailAndPassword(auth);

  const[token] = UseToken(user || gUser)

      const location = useLocation();
      const navigate = useNavigate();
      const from = location?.state?.from?.pathname||'/';

      if(token){
        navigate(from, { replace: true });
      }
    
    const handleSubmit =event=>{
        event.preventDefault()
        
        
      
    }

    console.log(email,password)
    
   
   
    return(
        <div>
           <div className="  lgmt-10 mb-6 mr-60 text-center"><h1>Login</h1></div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 ml-80 form-control w-full max-w-xs ">
              
            <input  type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Password"         onChange={(e) => setPassword(e.target.value)}  class="input input-bordered w-full max-w-xs" />
            <input  onClick={() => signInWithEmailAndPassword(email, password)}  type="submit" placeholder="Type here" class="input input-bordered w-full max-w-xs btn btn- bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white" />
            <p>New to Doctors Portal <span className="text-[#19D3AE]"><Link to='/signup'> Please SignUp</Link></span></p>
            </form>

            <button onClick={()=> signInWithGoogle()} class="input input-bordered w-full max-w-xs btn btn- bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white ml-80 mt-5" >Google</button>
            

        </div>
    )
}

export default SignIn;