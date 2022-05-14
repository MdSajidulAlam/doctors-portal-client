import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})`, backgroundSize: 'cover' }} className='flex justify-center items-center mt-28'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-8'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appoinment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur ad autem, alias praesentium voluptatum enim deserunt assumenda minus tempore perspiciatis, eveniet reiciendis! Obcaecati, in! Iure assumenda aspernatur et distinctio totam expedita laborum ab reiciendis! Ipsa odio a tempora beatae molestias.</p>
                <div className='mt-5'>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;