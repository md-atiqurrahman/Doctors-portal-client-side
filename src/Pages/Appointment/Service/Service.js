import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots,price } = service;
    return (
        <div className="card lg:max-w-md bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl text-secondary font-semibold">{name}</h2>
                <p className='text-center'>{
                    slots.length
                        ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-500'>Try another date</span>
                }</p>
                <p className='uppercase text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <p className='uppercase text-center m-0'><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        htmlFor="booking-modal" className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;