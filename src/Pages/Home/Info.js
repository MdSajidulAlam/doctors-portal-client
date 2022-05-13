import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const color = {
    clockColor: 'bg-gradient-to-r from-secondary to-primary ',
    markerColor: 'bg-accent'
}
const title = {
    clockText: 'Opening Hours',
    markerText: 'Visit our Location',
    phoneText: 'Contact us Now',
}
const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            <InfoCard img={clock} color={color.clockColor} title={title.clockText}></InfoCard>
            <InfoCard img={marker} color={color.markerColor} title={title.markerText}></InfoCard>
            <InfoCard img={phone} color={color.clockColor} title={title.phoneText}></InfoCard>
        </div>
    );
};

export default Info;