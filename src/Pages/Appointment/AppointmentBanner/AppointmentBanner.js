import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
  
    return (
        <section className="hero lg:min-h-screen  bg-[url('/src/assets/images/bg.png')]   lg:mt-3 justify-items-center bg-cover">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className="sm:max-w-sm lg:max-w-[594px] lg:min-h-[355px] rounded-lg shadow-2xl" src={chair} alt="" />
                <div className='lg:max-w-[312px] lg:min-h-[312px] lg:ml-[180px] lg:mr-[60px] bg-base-100 shadow-2xl rounded-2xl mt-[30px] lg:mt-0'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        modifiersClassNames={{
                            selected: {
                                border: '1px solid blue'
                            }
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;