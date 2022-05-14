import React from 'react';


const InfoCard = ({ img, color, title }) => {
    return (
        <div className={`card lg:card-side ${color} shadow-xl p-6`}>
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>
                <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;