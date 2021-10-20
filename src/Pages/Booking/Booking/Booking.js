import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'
import { NavLink } from 'react-router-dom';

const Booking = (services) => {

    const { serviceId } = useParams();

    const [users, setUsers] = useState({});
    // const [singleUser, setSingleUser] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const service = data.find(user => user?.id === parseInt(serviceId));
                setUsers(service);
            })
    }, [])

    console.log({ users });
    console.log({ serviceId });



    return (
        <div>

            <div className="container my-5">
                {/* <h2>Service details {serviceId}</h2> */}
                <h1>{users.name}</h1>
                <img src={users.img} alt="" />
                <p className="w-50">{users.description}</p>

                <div className="my-5">
                    <NavLink className="mx-2 home-btn" exact to="/" style={{ fontWeight: "bold", color: "black", textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "orange", textDecoration: "none" }}>BACK TO HOMEPAGE</NavLink>

                </div>
            </div>

        </div >
    );
};

export default Booking;