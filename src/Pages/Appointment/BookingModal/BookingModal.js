import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment,refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots ,price } = treatment;
    const formattedDate = format(date, 'PP');

    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user?.email,
            patientName: user?.displayName,
            phone: event.target.phone.value
        }

        fetch('https://doctors-portal-server-side-bice.vercel.app/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment set on ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an appointment on ${booking?.date} at ${booking?.slot}`)
                }
                setTreatment(null)
                refetch();
            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-accent text-center">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-2 justify-items-center mt-5'>
                        <input type="text" name='date' readOnly value={`${format(date, 'PP')}`} className="input input-bordered w-full max-w-xs text-xl text-accent" />
                        <select name='slot' className="select select-bordered w-full max-w-xs text-accent text-xl">
                            {
                                slots.map((slot,index) => <option
                                    key={index}
                                    readOnly value={slot}>{slot}
                                </option>)
                            }
                        </select>
                        <input type="text" name='name' readOnly value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' readOnly value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className=" btn btn-accent input input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;