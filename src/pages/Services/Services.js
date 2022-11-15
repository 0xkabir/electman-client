import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../shared/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div className='mx-5 md:mx-20 lg:mx-32 my-5 md:my-10 lg-my-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
             {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
             }
        </div>
    );
};

export default Services;