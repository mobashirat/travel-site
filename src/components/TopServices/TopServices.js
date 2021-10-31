import React, { useEffect, useState } from 'react';
import TopService from '../TopService/TopService';
import './TopServices.css'


const TopServices = () => {

    const [topservices, setTopServices] = useState([])
    useEffect(() => {
        fetch('https://shocking-flesh-54978.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setTopServices(data));
    }, [])


    return (
        <div className="service-container gx-0">
            <div>
                <h2 className="animate__animated animate__heartBeat animate__infinite animate__slow">TOP PACKAGES</h2>
                <div className="row row-cols-1 row-cols-md-3 g-2">
                    {
                        topservices?.slice(2).map(topservice => <TopService
                            key={topservice.id}
                            topservice={topservice}
                        ></TopService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopServices;