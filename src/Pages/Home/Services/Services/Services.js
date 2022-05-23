import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png';
import cavity from '../../../../assets/images/cavity.png';
import whitening from '../../../../assets/images/whitening.png';
import Card from '../Card/Card';
import Exceptional from '../../Exceptional/Exceptional';

const Services = () => {
    const cards = [
        {
            _id: 1,
            img: fluoride,
            serviceName: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 2,
            img: cavity,
            serviceName: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 3,
            img: whitening,
            serviceName: 'Teeth Whitening',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }

    ]

    return (
        <section>
            <div>
                <h3 className='text-secondary font-bold text-xl text-center'>OUR SERVICES</h3>
                <h2 className='text-accent text-4xl font-normal mt-1 text-center'>Services We Provide</h2>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-16 mb-14 lg:mb-40 justify-items-center'>
                    {
                        cards.map(card => <Card
                            key={card._id}
                            img={card.img}
                            serviceName={card.serviceName}
                            details={card.details}
                        ></Card>)
                    }
                </div>
                <Exceptional></Exceptional>
            </div>
        </section>
    );
};

export default Services;