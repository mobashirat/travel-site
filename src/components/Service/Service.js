import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, describtion, price } = service;

    return (
        <div>

            <div class="col">
                <div class="card h-100 inner">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title name">{name}</h5>
                        <p class="card-text">{describtion}</p>
                        <p class="card-text">Price: {price}</p>
                    </div>
                    <div class="card-footer bg-dark">
                        <small class="text-muted text-light fs-5">3 Nights 2 Days</small>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Service;