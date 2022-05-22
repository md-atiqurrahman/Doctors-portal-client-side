import React from 'react';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero lg:min-h-screen  lg:bg-[url('/src/assets/images/bg.png')]   lg:mt-3 items-start lg:items-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className="sm:max-w-lg lg:max-w-lg rounded-lg shadow-2xl lg:mr-5" src={chair} alt="" />
                <div className='lg:ml-10 lg:mr-6'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;