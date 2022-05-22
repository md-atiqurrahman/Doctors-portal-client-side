import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    const cards = [
        {
            id: 1,
            img: clock,
            bgClass: 'bg-gradient-to-r from-secondary to-primary',
            pageTitle: 'Opening Hours',
            details: 'Lorem Ipsum is simply dummy text of the pri'
        },
        {
            id: 2,
            img: marker,
            bgClass: 'bg-accent',
            pageTitle: 'Visit our location',
            details: 'Brooklyn, NY 10036, United States'
        },
        {
            id: 3,
            img: phone,
            bgClass: 'bg-gradient-to-r from-secondary to-primary',
            pageTitle: 'Contact us now',
            details: '+000 123 456789'
        }

    ]
    return (
        <div className='grid sm: grid-cols-1 lg:grid-cols-3 gap-5 mb-32 mt-16'>
            {
                cards.map(card => <InfoCard
                    key={card.id}
                    img={card.img}
                    bgClass={card.bgClass}
                    pageTitle={card.pageTitle}
                    details={card.details}
                ></InfoCard>)
            }
        </div>
    );
};

export default Info;