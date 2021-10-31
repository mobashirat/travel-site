import React from 'react';
import { Link } from 'react-router-dom';
import './TopService.css'

const TopService = ({ topservice }) => {
    const { name, img, id, describtion, price } = topservice
    return (
        <div>
            <div class="col  box">
                <div class="card h-100% w-75 m-4 inner">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title"><span className="name">{name}</span></h5>
                        <p class="card-text">{describtion}</p>
                        <p class="card-text"><span className="price">{price}</span></p>

                        <Link to={`/service/${id}`}>
                            <button className="button rounded-pill">Book now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopService;