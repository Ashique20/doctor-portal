import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe('pk_test_51MsWG8IIoBuPupkUpwnu0WbfWmZj8AkUykMtX0r97pTzVz7GuLJwxMuobZsaspNL2Rey3VmLptRGsyPElT6ZkB8d00gkkBjapv');
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`

  const { data: appointment, isLoading, refetch } = useQuery(['booking', id], () => fetch(url, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    
    <div>

      <div class="card w-80 bg-white text-primary shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {appointment.patientName}</p>
          <h2 class="card-title">Pay for ${appointment.treatment}</h2>
          <p>We will see you on <span className="'text-orange">{appointment.date}</span></p>
          <p>Please Pay ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0  max-w-md shadow-2xl bg-white">
        <div class="card-body ">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>

        </div>
      </div>
    </div>

  )
}


export default Payment;