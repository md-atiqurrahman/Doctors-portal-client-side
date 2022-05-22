import React from 'react';

const InfoCard = ({img,bgClass,pageTitle,details}) => {
    return (
        <div className={`card  lg:card-side bg-accent text-white shadow-xl ${bgClass}`}>
            <figure className='mt-6 lg:-mt-4 lg:ml-6'>
                <img src={img} alt="Album"/>
            </figure>
            <div className="card-body lg:pl-6">
                <h2 className="card-title font-bold">{pageTitle}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default InfoCard;