import React from 'react';
import './City.css'


const City = () => {
    return (
        <div>
            <h3 className="city animate__fadeInBottomLeft animate__animated animate__slower">MOST VISITED CITIES !!</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4 p-3">
                <div class="col">
                    <div class="card h-100 shadow">
                        <img src="https://i.ibb.co/9qSJyxZ/capetown.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Capetown,South Africa</h5>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">
                        <img src="https://i.ibb.co/2nXXBgf/italy.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Florence,Italy</h5>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">
                        <img src="https://i.ibb.co/xJkd3sY/japan.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Kyoto, Japan</h5>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">
                        <img src="https://i.ibb.co/n18ctj4/newyork.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">New York City, USA</h5>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">
                        <img src="https://i.ibb.co/9VL2F3j/paris.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Paris,France</h5>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">
                        <img src="https://i.ibb.co/QjHTypR/russia.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">St Petersburg, Russia</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default City;