import React from "react";
import Login from "./Login";

const LoginForm =()=>{
    return(
        <div > 
            <Login title='Email' mt='mt-20'></Login>
            <Login title='Subject' mt='mt-10'></Login>
            <Login title='Your Massage' mt='mt-10' height='h-40'></Login>
            <button class="btn btn- bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white ml-[700px] mt-10 ">Submit</button>
        </div> 
    )
}

export default LoginForm;