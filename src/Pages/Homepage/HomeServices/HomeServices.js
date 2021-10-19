import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import HomeService from '../HomeService/HomeService';
import './HomeService.css'

const HomeServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => (console.log(error)));
    }, [])

    const selectedServices = services.slice(0, 6)

    return (
        <div id="cards_landscape_wrap-2" className="service-container pt-4">
            <h1 className="m-0">Our Top Services</h1>
            <div class="container">
                <div class="row row-cols-lg-3 row-cols-md-3 row-cols-1 g-4">
                    {
                        selectedServices.map(service => <HomeService
                            key={service.id}
                            service={service}
                        ></HomeService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeServices;