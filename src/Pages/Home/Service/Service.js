import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <>

            <div className="col-lg-4 col-sm-6 col-12 shadow">
                <img src={img} alt="" />
                <h3>{name}</h3>

                <div className="px-3">
                    <p className="">{description}</p>
                    <div className="m-auto pb-3">
                        <Link to={`/booking/${id}`}>
                            <button className="btn green-bg">Book</button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Service;


