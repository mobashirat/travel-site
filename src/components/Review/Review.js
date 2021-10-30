import React from 'react';
import './Review.css'

const Review = () => {
    return (
        <div>
            <h2>Our Reviews</h2>
            <div class="row row-cols-1 row-cols-md-4 g-4 mt-4 ">
                <div class="col img-size">
                    <div class="card h-40">
                        <img src="https://i.ibb.co/pz3sWbw/pro1.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col img-size">
                    <div class="card h-40">
                        <img src="https://i.ibb.co/tPkQwHp/pro2.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col img-size">
                    <div class="card h-40">
                        <img src="https://i.ibb.co/d4M39Zt/pro3.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>


                <div class="col img-size">
                    <div class="card h-40">
                        <img src="https://i.ibb.co/wRLmTZD/pro4.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
