import React from 'react';
import { FaCheck } from "react-icons/fa";
import electman from "./electman.jpg"
import wires from "./wires.jpg"

const About = () => {
    return (
        <div className='w-11/12 md:w-full lg:w-4/5 mx-auto flex flex-col md:flex-row md:items-center relative md:mb-10'>
            <div className='relative ml-5 mb-5 md:w-1/2'>
                <img src={electman} alt=""  className='w-full md:h-[360px] lg:h-auto md:object-cover'/>
                <img src={wires} alt="" className='w-1/2 md:w-3/5 lg:w-1/2 absolute -bottom-5 -left-5 md:-bottom-16 lg:-bottom-5'/>
            </div>
            <div className='mt-5 mf:mt-auto md:w-3/5 lg:w-1/2 lg:px-5 md:absolute md:right-0 md:top-10 md:bg-white md:m-5 md:p-5'>
                <h3 className='text-orange-600 text-xl font-bold'>About Us</h3>
                <h2 className='text-4xl font-medium my-2.5'>Outstanding Residential & Commercial Services</h2>
                <p>All of the services are backed by 100% satisfaction guarantee. ElectMan can install anything from new security lighting for your outdoors to a whole home generator that will keep your appliances working during a power outage.</p>
                <ul className='my-3'>
                    <li className='flex items-center'><FaCheck className='text-orange-600 mr-2'/> Full-service electrical layout, design</li>
                    <li className='flex items-center'><FaCheck className='text-orange-600 mr-2'/> Wiring and installation/upgrades</li>
                    <li className='flex items-center'><FaCheck className='text-orange-600 mr-2'/> Emergency power solutions (generators)</li>
                    <li className='flex items-center'><FaCheck className='text-orange-600 mr-2'/> Virtually any electrical needs you have – just ask!</li>
                </ul>
            </div>
        </div>
    );
};

export default About;