import React from 'react';
import { Link } from 'react-router-dom';

const TopService = ({ topservice }) => {
    const { name, img, id, describtion, price } = topservice
    return (
        <div>
            <div class="col">
                <div class="card h-100 w-75 m-4">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{describtion}</p>
                        <p class="card-text">Price:{price}</p>

                        <Link to={`/service/${id}`}>
                            <button className="btn-dark">Learn more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopService;