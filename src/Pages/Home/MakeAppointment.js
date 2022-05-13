import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 sm:p-12 md:p-12 lg:p-6'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appoinment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur ad autem, alias praesentium voluptatum enim deserunt assumenda minus tempore perspiciatis, eveniet reiciendis! Obcaecati, in! Iure assumenda aspernatur et distinctio totam expedita laborum ab reiciendis! Ipsa odio a tempora beatae molestias.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;