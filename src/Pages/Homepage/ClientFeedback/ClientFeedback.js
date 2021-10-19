import React from 'react';
import { FcManager, FcBusinesswoman, FcBusinessman } from 'react-icons/fc'
import { IconContext } from 'react-icons';

const ClientFeedback = () => {
    return (
        <IconContext.Provider value={{ size: "1.5em", color: "#03B86B" }}>
            <div style={{ backgroundColor: "#E2E2E0" }}>
                <div className="container py-5">
                    <h1>See What Our Clients Say</h1>
                    <div className="row py-4">
                        <div className="col-4">
                            <div class="card">
                                <div class="card-body">
                                    <FcManager></FcManager> Andrew George
                                    <h6><small className="text-muted">Student</small></h6>
                                    <hr />
                                    <p class="card-text">They are so kind, attentive, thoughtful and service-oriented. They go above and beyond.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div class="card">
                                <div class="card-body">
                                    <FcBusinessman></FcBusinessman> Brett Johnson
                                    <h6><small className="text-muted">Businessman</small></h6>
                                    <hr />
                                    <p class="card-text">Terrific Doctors and first-class service. I have never been happier with a vet before.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div class="card">
                                <div class="card-body">
                                    <FcBusinesswoman></FcBusinesswoman> Amy Margarett
                                    <h6><small className="text-muted">Journalist</small></h6>
                                    <hr />
                                    <p class="card-text">They care for your pet as much as you do. They are meticulous and very professional.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
};

export default ClientFeedback;