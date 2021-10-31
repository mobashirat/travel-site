import React from 'react';
import './Review.css'

const Review = () => {
    return (
        <div>
            <h2 className="animate__animated animate__slow animate__infinite animate__bounce pt-4">OUR REVIEWS</h2>
            <div class="row row-cols-1 row-cols-md-4 g-4 mt-4 p-1 ">
                <div class="col img-size">
                    <div class="card h-40 card-col">
                        <img src="https://i.ibb.co/pz3sWbw/pro1.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Sania Hoque</h5>

                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <p class="card-text">I love their procedures.They are so handful and give you a best service with low cost</p>
                        </div>
                    </div>
                </div>
                <div class="col img-size">
                    <div class="card h-40 card-col">
                        <img src="https://i.ibb.co/tPkQwHp/pro2.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Ariyana Sen</h5>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star-half-alt text-warning"></i>
                            <p class="card-text">You guys are amazing in one word.They are so reasonable and also liked your flexibility </p>
                        </div>
                    </div>
                </div>
                <div class="col img-size">
                    <div class="card h-40 card-col">
                        <img src="https://i.ibb.co/d4M39Zt/pro3.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rayaan Zein</h5>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <p class="card-text">I am fam of your tour plans.They are so flexible.For these packages I spent a great holiday of my life</p>
                        </div>
                    </div>
                </div>


                <div class="col img-size">
                    <div class="card h-40 card-col">
                        <img src="https://i.ibb.co/wRLmTZD/pro4.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Manha Rihaan</h5>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <p class="card-text">That was my first outdoor tour and I was so nervous.But because of you that was a great tour.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
