import React from "react";

const Login=({height,mt,title})=>{
    return(
        <div>
       
        
        <input type="text" placeholder={title} class={`input input-bordered input-lg  ${height} ${mt} w-6/12 ml-80`} />
        
        
            
        </div>
    )
}

export default Login;