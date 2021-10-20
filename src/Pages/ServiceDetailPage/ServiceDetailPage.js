import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const ServiceDetailPage = () => {
    const { serviceId } = useParams()
    const history = useHistory()
    const [services, setServices] = useState([])
    // Load and set data
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])




    const handleClick = () => {
        history.push("/services")
    }

    return (
        <div className="container py-5">
            <h3>Service Detail of: {serviceId}</h3>
            {/* <h1>{service.name}</h1>
            <h2>{service.fee}</h2>
            <h4>{service.detail}</h4> */}
            <button onClick={handleClick}>See All Services</button>
        </div>
    );
};

export default ServiceDetailPage;