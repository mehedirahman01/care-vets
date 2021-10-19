import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, details, fee, img } = props.service
    return (
        <div class="col m-0">
            <div class="card mt-0 mb-5">
                <div className="image-box">
                    <img src={img} alt="" />
                </div>

                <div class="card-body pb-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><h6>{name}</h6></li>
                        <li class="list-group-item"><p>{details}</p></li>
                        <li class="list-group-item"> <h6>Approx. Fee: {fee}</h6></li>
                    </ul>
                </div>
                <div class="card-footer border-success"><button className="btn btn-outline-success">Book Appointment</button></div>
            </div>
        </div>
    );
};

export default Service;