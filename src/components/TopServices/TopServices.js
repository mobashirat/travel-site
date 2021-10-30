import React, { useEffect, useState } from 'react';
import TopService from '../TopService/TopService';


const TopServices = () => {

    const [topservices, setTopServices] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setTopServices(data));
    }, [])


    return (
        <div className="service-container gx-0">
            <h2>Top Packages</h2>
            <div className="row row-cols-1 row-cols-md-3 g-2">
                {
                    topservices?.slice(2).map(topservice => <TopService
                        key={topservice.id}
                        topservice={topservice}
                    ></TopService>)
                }
            </div>
        </div>
    );
};

export default TopServices;