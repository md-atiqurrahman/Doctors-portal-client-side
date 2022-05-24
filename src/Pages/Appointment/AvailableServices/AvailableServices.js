import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

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
                <h5 className='text-[22px] text-[#939393] text-center'>Please select a service.{services.length}</h5>
            </div>
            <div>
                {}
            </div>
        </section>
    );
};

export default AvailableServices;