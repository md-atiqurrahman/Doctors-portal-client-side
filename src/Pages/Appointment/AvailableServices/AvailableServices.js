import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvailableServices = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <section className='mt-[38px]'>
            <div>
                <h4 className='text-[22px] text-secondary text-center'>Available Services on {format(date, 'PP')}</h4>
                <h5 className='text-[22px] text-[#939393] text-center'>Please select a service</h5>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mx-[43px]'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment} setTreatment={setTreatment} date={date}>
                </BookingModal>
            }
        </section>
    );
};

export default AvailableServices;