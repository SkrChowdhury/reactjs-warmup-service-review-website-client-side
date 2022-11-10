import React from 'react';
import Button from 'react-bootstrap/Button';
import  '../Banner/Banner.css'

const Banner = () => {
    return (
        <div className="bg-img row m-0">
        <div className=" p-5">
            <h1 className=''>LET’S STARTS YOUR FITNESS TRAINING BY ME</h1>
            <p className='text-light'>It takes more than pure sweat to achieve your goals. Let me create a workout plan for you that’s tailored to your body now — and moves you forward to where you want to go. From in-club personal training sessions to virtual options, my personal training program takes the guesswork out of fitness, so you can achieve more with the time you have.</p>
            <Button variant="outline-secondary text-danger">Learn More</Button>
        </div>

    </div>
    );
};

export default Banner;