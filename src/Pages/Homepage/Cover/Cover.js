import React from 'react';
import cover from '../../../images/cover-removebg-preview.png'


const Cover = () => {
    return (
        <div style={{
            backgroundColor: "#E2E2E0"
        }}>
            <div className="container p-0">
                <div className="row d-flex align-items-center">
                    {/* Cover Left */}
                    <div className="col-12 col-lg-4 mt-5 mt-lg-0 px-4">
                        <h1>A healthy Pet is a happy Pet</h1>
                        <p>We are the best choice to get the care you would want for your best friend!</p>
                    </div>
                    {/* Cover Right */}
                    <div className="col-12 col-lg-8 p-0">
                        <img src={cover} width="100%" alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Cover;