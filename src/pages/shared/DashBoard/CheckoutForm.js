import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { set } from "date-fns";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ appointment }) => {
  const { _id, price, patient, patientName } = appointment;

  const stripe = useStripe();
  const element = useElements()
  const [cardError, setCardError] = useState('')
  const [success, setSuccess] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ price })

    })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        }
        else {

        }
      })

  }, [price])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !element) {
      return
    }

    const card = element.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });


    if (error) {
      setCardError(error.message)
    }
    setSuccess('')
    setProcessing(true)



    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient
          },
        },
      },
    );

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    }
    else {
      setCardError('')
      setTransactionId(paymentIntent.id)
      console.log(paymentIntent)
      setSuccess('Your payment is completed')

      const payment ={
        appointment:_id,
        transactionId:paymentIntent.id
      }

        fetch(`http://localhost:5000/booking/${_id}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(payment)
        }).then(res => res.json())

          .then(data => {
            setProcessing(false);
            console.log(data)
          })

    }

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="text-success" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-500 font-bold">{cardError}</p>
      }
      {
        success && <div className="text-green-500">

          <p>{success} </p>
          <p>Your transaction id is <span className="text-orange-500">{transactionId}</span></p>
        </div>
      }
    </>
  )
}

export default CheckoutForm;