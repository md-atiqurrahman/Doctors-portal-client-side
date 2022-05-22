import React from 'react';

const Card = ({img,serviceName,details}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-accent text-xl font-semibold">{serviceName}</h2>
                <p className='text-base'>{details}</p>
            </div>
        </div>
    );
};

export default Card;