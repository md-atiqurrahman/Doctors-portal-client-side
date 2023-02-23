import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingDoctor ,refetch ,setDeletingDoctor}) => {
    const {name, email} = deletingDoctor;

    const handleDelete = () => {
        fetch(`https://doctors-portal-server-side.up.railway.app/doctors/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} deleted successfully`);
                    setDeletingDoctor(null);
                    refetch();
                }

            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-xl text-red-500">Are you sure to delete Doctor {name}!</h3>
                    <div className="modal-action">
                    <button onClick={() => handleDelete()} className='btn btn-xs btn-error'>Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;