import React from 'react';
import { useHistory } from 'react-router';
import './HomeService.css'

const HomeService = (props) => {
    // Destructuring
    const { id, name, details, fee, img } = props.service
    const history = useHistory()

    const handleClick = () => {
        history.push(`/services/${id}`)
    }
    return (
        // Service Card
        <div className="col m-0">
            <div className="card mt-0 mb-5">
                <div className="image-box">
                    <img src={img} alt="" />
                </div>

                <div className="card-body pb-0">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h6>{name}</h6></li>
                        <li className="list-group-item"><p>{details}</p></li>
                        <li className="list-group-item"> <h6>Approx. Fee: {fee}</h6></li>
                    </ul>
                </div>
                <div className="card-footer border-success"><button className="btn btn-outline-success" onClick={handleClick}>Book Appointment</button></div>
            </div>
        </div>
    );
};

export default HomeService;