import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableServices from '../AvailableServices/AvailableServices';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableServices date={date}></AvailableServices>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;