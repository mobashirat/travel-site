import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://shocking-flesh-54978.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="animate__animated animate__slow  animate__bounce mb-4 mt-4">OUR PACKAGES</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;

