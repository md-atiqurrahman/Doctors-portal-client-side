import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="bg-[url('/src/assets/images/footer.png')] bg-cover bg-center">
            <div className='footer px-0 py-12 mt-[35px] justify-items-start lg:justify-items-center ml-[36px] lg:ml-0 gap-y-[103px]'>
                <div>
                    <span className="footer-title text-[18px] font-bold">Services</span>
                    <p className='text-accent font-normal text-base lg:text-sm'>Emergency Checkup</p>
                    <p className='text-accent font-normal'>Monthly Checkup</p>
                    <p className='text-accent font-normal'>Weekly Checkup</p>
                    <p className='text-accent font-normal'>Deep Checkup</p>
                </div>
                <div>
                    <span className="footer-title text-[18px] font-bold">ORAL HEALTH</span>
                    <p className='text-accent font-normal'>Fluoride Treatment</p>
                    <p className='text-accent font-normal'>Cavity Filling</p>
                    <p className='text-accent font-normal'>Teath Whitening</p>
                </div>
                <div>
                    <span className="footer-title text-[18px] font-bold">OUR ADDRESS</span>
                    <p className='text-accent font-normal'>New York - 101010 Hudson</p>
                </div>
            </div>
            <h5 className='text-center text-base lg:text-sm font-normal mt-[54px] lg:mt-[74px] mb-[69px] lg:mb-[5px]'>Copyright © {year} All Rights Reserved</h5>
        </footer>
    );
};

export default Footer;