import React from "react";
import ExpertCard from "./ExpertCard";
import cavity from '../../assets/images/cavity.png'
import white from '../../assets/images/whitening.png'
import fluoride from '../../assets/images/fluoride.png'

const ExpertInfo =()=>{
    return(
        
        <div class='grid grid-cols-1 lg:grid-cols-3 gap-2 justify-center mt-40 ml-28 '>
            <ExpertCard cardTitle="Cavity Filling" img={cavity}></ExpertCard>
            <ExpertCard cardTitle="Teeth Whitening" img={white}></ExpertCard>
            <ExpertCard cardTitle="Fluoride Treatment" img={fluoride}></ExpertCard>
        </div>
    )
}

export default ExpertInfo;