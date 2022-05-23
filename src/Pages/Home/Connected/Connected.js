import React from 'react';

const Connected = () => {
    return (
        <section className="bg-[url('/src/assets/images/appointment.png')]">
            <div className="hero">
                <div className="w-full max-w-sm">
                    <div className='text-center'>
                        <h4 className="text-xl font-bold text-secondary ">Contact Us</h4>
                        <h2 className='text-3xl text-white font-normal'>Stay connected with us</h2>
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Email Address" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>
                    <textarea class="textarea w-full textarea-bordered" placeholder="Your message"></textarea>
                    <div className='text-center'>
                        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary px-[35px] py-[15px]">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connected;