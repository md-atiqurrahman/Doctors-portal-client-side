import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from '../Review/Review';

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            img: people1,
            name: 'Winson Herry',
            location: 'California',
            testimonial: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id:2,
            img: people2,
            name: 'Amber Hard',
            location: 'Texas',
            testimonial: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id:3,
            img: people3,
            name: 'Shang Chai',
            location: 'Washington',
            testimonial: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ]
    return (
        <section className='mx-[32px] lg:mx-[56px]'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className="text-xl text-secondary font-bold">Testimonial</h4>
                    <h2 className='text-4xl text-accent font-normal'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-[98px] lg:w-[192px]' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center  my-[68px]'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;