import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../requireAuth/firebase.init";


const SignUp =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister =event =>{
        event.preventDefault()
    }

    console.log(email,password)


    return(
        <div>
            <div className="mt-10 mb-6 mr-60 text-center"><h1>Sign Up</h1></div>
            <form onSubmit={handleRegister} className="grid grid-cols-1 gap-5 ml-80 ">
            <input  onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
            <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" class="input input-bordered w-full max-w-xs" />
            <input onClick={() => createUserWithEmailAndPassword(email, password)}  type="submit" placeholder="Type here" class="input input-bordered w-full max-w-xs btn btn- bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white" />
            <p>New to Doctors Portal <span><Link to='/login'> Please Login</Link></span></p>
            </form>
        </div>
    )
}

export default SignUp;
