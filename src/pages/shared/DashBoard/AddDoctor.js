import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../requireAuth/firebase.init";
import Loading from "../Loading";

const AddDoctor=()=>{
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const{data:services,isLoading} = useQuery('services', ()=>fetch(`http://localhost:5000/service`).then(res=>res.json()))
    const imageStorageKey = `0d8e09500d7c49902ad24cd0aed2d9f7`


    const onSubmit = async data => {
       const image = data.image[0]
       const formData = new FormData()
       formData.append('image' ,image)
       const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        console.log(data, 'update done');
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url
                const doctor ={
                    name: data.name,
                    email:data.email,
                    specielity:data.specielity,
                    img:img
                }

                fetch(`http://localhost:5000/doctor`,{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(inserted=>{
                    console.log('inserted',inserted)
                    if(inserted.insertedId){
                        toast.success('Doctor added')
                        reset()
                    }
                    else{
                        toast('fAILED to insert')
                    }
                })

            }
            // console.log('imgbb result',result)
        })
    }



    if(isLoading){
        return <Loading></Loading>
    }

    return(
        <div>
            <div className="mt-10 mb-6 mr-60 text-center"><h1>Sign Up</h1></div>
            <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Specielity</span>
                            </label>
                            <select {...register('specielity')} class="select select-bordered w-full max-w-xs">
                           {
                            services.map(service=><option 
                            key={service._id}
                            value={service.name}
                            >{service.name}</option>)
                           }
                             
                            
                            </select>
                    
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                     
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                    </form>
        </div>
    )
}

export default AddDoctor;