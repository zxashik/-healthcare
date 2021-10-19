import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/yFwtwBF/1.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Fitness Classes In Dhaka, <span className="green-color">Bangladesh...</span></h5>
                            <p><i>A year from now you may wish you had started today</i></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/8sJ4CzC/2.jpg
" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Eat Well.<span className="green-color">Live Wells.</span></h5>
                            <p><i>If you think lifting is dangerous, try being weak. Being weak is dangerous</i></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/4KX6sPW/3.jpg
" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Create a healthy   <span className="green-color">life you love!!!!</span></h5>
                            <p><i>Don’t give up on your dreams, or your dreams will give up on you.</i></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Banner;