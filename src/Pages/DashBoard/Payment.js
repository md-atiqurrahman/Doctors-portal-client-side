import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LFbkDJ5xIASYdcW05XvapGW8tEWVcQCYRnihSBNPRsViQFNhMjpqQGGFEk6ls3RzBAxJEZ0GYVW0diTWs0WDuuZ005wzpfKm6');

const Payment = () => {
    const { appointmentId } = useParams();

    const url = `https://doctors-portal-server-side.up.railway.app/booking/${appointmentId}`;

    const { data: appointment, isLoading } = useQuery(['booking', appointmentId], () => fetch(url, {
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
            <div className="card w-96 bg-base-100 shadow-xl my-6">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {appointment?.patientName}</p>
                    <h2 className="card-title">Please Pay for {appointment?.treatment}</h2>
                    <p>Your appointment: <span className='text-orange-700'>{appointment?.date} at {appointment?.slot}</span></p>
                    <p>Please pay ${appointment?.price}</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                 <Elements stripe={stripePromise}>
                   <CheckoutForm appointment={appointment}/>
                 </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;