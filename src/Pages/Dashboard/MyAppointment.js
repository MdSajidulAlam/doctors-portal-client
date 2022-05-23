import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth)
    const [appointments, setAppointments] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://mighty-island-89854.herokuapp.com/booking?patient=${user.email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
                "content-type": "application/json"
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem("accessToken")
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {

                setAppointments(data)
            })
    }, [user])


    return (
        <div>
            <h2>My Appointments {appointments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, index) =>

                                <tr key={appointment._id}>
                                    <th>{index + 1}</th>
                                    <td>{appointment.patientName}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.slot}</td>
                                    <td>{appointment.treatment}</td>
                                    <td>
                                        {(appointment.price && !appointment.paid) && <Link to={`/dashboard/payment/${appointment._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    </td>
                                    <td>
                                        {(appointment.price && appointment.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p><small className='text-success'>TransactionId: {appointment.transactionId}</small></p>
                                        </div>}
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;