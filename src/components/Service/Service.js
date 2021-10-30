import React from 'react';

const Service = ({ service }) => {
    const { name, img, describtion, price } = service;

    return (
        <div>
            <div class="col">
                <div class="card h-100">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{describtion}</p>
                        <p class="card-text">Price: {price}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Service;