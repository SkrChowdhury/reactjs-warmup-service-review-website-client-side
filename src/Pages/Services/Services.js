import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])



    return (
        <div>
            <div className='text-center mb-4 row '>
                <h2 className="text-2xl font-bold text-orange-600">My Services</h2>
                
            </div>
            <div className='d-flex  '>


                
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;