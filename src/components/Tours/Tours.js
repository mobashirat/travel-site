import React from 'react';
import './Tours.css'

const Tours = () => {
    return (
        <div className="p-1">
            <h3 className="animate__flip animate__slower	 animate__animated animate__infinite">CHOOSE YOUR TOUR BY</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 ps-2 ">
                <div class="col">
                    <div class="card h-100 body-col">
                        <i className="fas fa-plane mt-3 fs-1"></i>
                        <div class="card-body">
                            <h5 class="card-title">Flight</h5>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 body-col">
                        <i class="fas fa-ship mt-3 fs-1"></i>
                        <div class="card-body">
                            <h5 class="card-title">Cruise</h5>

                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100 body-col">
                        <i class="fas fa-hiking  mt-3 fs-1"></i>
                        <div class="card-body">
                            <h5 class="card-title">Hiking</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tours;