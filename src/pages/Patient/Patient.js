import React from "react";
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import PatientCard from "./PatientCard";

const Patient =()=>{

    const patients=[
        {
            _id:'1',
            name:'john',
            place:'California',
            detail:"lenfnfne nefne nnaoklnfei leorejnfennf nnegfnvnnei n nennge",
            img:people1
        },
        
        {
            _id:'2',
            name:'Ema',
            place:'New York',
            detail:"lenfnfne nefne nnaoklnfei leorejnfennf nnegfnvnnei n nennge",
            img:people2
        },
        {
            _id:'3',
            name:'Gwen',
            place:'Boston',
            detail:"lenfnfne nefne nnaoklnfei leorejnfennf nnegfnvnnei n nennge",
            img:people3
        }

    ];
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-center mt-10 shadow-xl">
            {
                patients.map(patient=><PatientCard patient={patient} key={patient._id}></PatientCard>)
            }
        </div>
    )
}

export default Patient;