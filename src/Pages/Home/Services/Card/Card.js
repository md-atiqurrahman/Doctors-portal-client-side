import React from 'react';

const Card = ({img,serviceName,details}) => {
    return (
        <div className="card sm:max-w-sm lg:max-w-lg bg-base-100 shadow-xl mx-5 lg:mx-0">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl w-[80px] lg:w-[100px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-accent text-xl font-semibold">{serviceName}</h2>
                <p className='text-base'>{details}</p>
            </div>
        </div>
    );
};

export default Card;