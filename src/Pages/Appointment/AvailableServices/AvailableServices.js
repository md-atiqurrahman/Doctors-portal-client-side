import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const AvailableServices = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

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
                    service= {service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default AvailableServices;