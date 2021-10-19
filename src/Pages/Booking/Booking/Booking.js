import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {

    const { serviceId } = useParams();

    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    useEffect(() => {
        const foundUser = users.find(user => user?.id === serviceId);
        setSingleUser(foundUser);
    }, [users]);

    return (
        <div>

            <h2>Service details {serviceId}</h2>
            <h1>name {singleUser?.name}</h1>
        </div >
    );
};

export default Booking;