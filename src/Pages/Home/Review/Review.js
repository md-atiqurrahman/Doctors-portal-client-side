import React from 'react';

const Review = ({ review }) => {
    const { img, name, location, testimonial } = review;
    return (
        <div className="card max-w-sm lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body p-[20px] lg:p-[32px]">
                <div>
                    <p>{testimonial}</p>
                </div>
                <div className='flex items-center mt-[5px] lg:mt-[20px]'>
                    <div className="avatar mr-[20px]">
                        <div className="w-[64px] lg:w-[75px] rounded-full ring ring-primary ring-offset-base-100">
                            <img  src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <h5>{location}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;