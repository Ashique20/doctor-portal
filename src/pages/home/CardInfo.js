import React  from "react";

const CardInfo =({img,cardTitle,bgClass})=>{

    return(
        <div class={`card card-side bg-base-100 shadow-xl bgClass ${bgClass}`}>
        <figure className="pl-10"><img src={img} alt="Movie"/></figure>
        <div class="card-body">
          <h2 class="card-title">{cardTitle}!</h2>
          <p>Click the button to watch on Jetflix app.</p>
         
        </div>
      </div>
        
    )
}

export default CardInfo;