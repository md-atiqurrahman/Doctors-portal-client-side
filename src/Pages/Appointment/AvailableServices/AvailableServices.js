import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';
import Loading from '../../Shared/Loading/Loading';

const AvailableServices = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP')


    const {data:services,isLoading,refetch} = useQuery(['available',formattedDate], () => fetch(`https://doctors-portal-server-side.up.railway.app/available?date=${formattedDate}`)
        .then(res => res.json()))


        if(isLoading){
            return <Loading></Loading>
        }
   

    return (
        <section className='mt-[38px]'>
            <div>
                <h4 className='text-[22px] text-secondary text-center'>Available Services on {format(date, 'PP')}</h4>
                <h5 className='text-[22px] text-[#939393] text-center'>Please select a service</h5>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mx-[43px]'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment} setTreatment={setTreatment} date={date}
                    refetch= {refetch}
                >
                </BookingModal>
            }
        </section>
    );
};

export default AvailableServices;