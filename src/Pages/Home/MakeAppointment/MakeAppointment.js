import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import PrimaryButton from '../../Shared/Button/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section
            className="bg-[url('/src/assets/images/appointment.png')] flex lg:flex flex-col-reverse lg:flex-row justify-center items-center mt-[70px] lg:mt-[169px] mb-[84px] ">
            <div className='flex-1'>
                <img className='lg:mt-[-100px] lg:ml-[100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 lg:pl-[100px] lg:pr-[100px] m-6 lg:m-0'>
                <h3 className='text-xl text-primary font-bold mb-3'>Appointment</h3>
                <h2 className='text-white text-3xl font-semibold'>Make an appointment Today</h2>
                <p className='text-white text-base text-justify my-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;