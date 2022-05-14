import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import ExceptionalCare from './ExceptionalCare';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info />
            <Services />
            <ExceptionalCare />
            <MakeAppointment />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default Home;