import React from 'react';
import { FaDog, FaCalendarCheck, FaHome, FaChild } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const WhyChooseUs = () => {
    return (
        <div className="container my-5 py-5">
            <h1>Why Choose Us</h1>
            <div className="row py-5">
                <div className="col-lg-3 col-6">
                    <IconContext.Provider value={{ size: "3em", color: "#03B86B" }}>
                        <div>
                            <h6 className="text-center m-0 mb-2"><FaDog></FaDog></h6>
                        </div>
                        <div>
                            <h4>We love <br /> your pets</h4>
                        </div>
                    </IconContext.Provider>
                </div>

                <div className="col-lg-3 col-6">
                    <IconContext.Provider value={{ size: "2.5em", color: "#03B86B" }}>
                        <div>
                            <h6 className="text-center m-0 mb-2"><FaCalendarCheck></FaCalendarCheck></h6>
                        </div>
                        <div>
                            <h4>Same-day appointments</h4>
                        </div>
                    </IconContext.Provider>
                </div>

                <div className="col-lg-3 col-6">
                    <IconContext.Provider value={{ size: "2.5em", color: "#03B86B" }}>
                        <div>
                            <h6 className="text-center m-0 mb-2"><FaHome></FaHome></h6>
                        </div>
                        <div>
                            <h4>Convenient Location</h4>
                        </div>
                    </IconContext.Provider>
                </div>

                <div className="col-lg-3 col-6">
                    <IconContext.Provider value={{ size: "2.5em", color: "#03B86B" }}>
                        <div>
                            <h6 className="text-center m-0 mb-2"><FaChild></FaChild></h6>
                        </div>
                        <div>
                            <h4>Experienced <br /> Team</h4>
                        </div>
                    </IconContext.Provider>
                </div>
            </div >
        </div >
    );
};

export default WhyChooseUs;