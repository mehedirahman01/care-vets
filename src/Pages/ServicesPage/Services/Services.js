import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    // Load and set data
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => (console.log(error)));
    }, [])

    return (
        <div id="cards_landscape_wrap-2" className="service-container pt-4">

            <h1 className="m-0">Services</h1>
            <div className="container">
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-1 g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;