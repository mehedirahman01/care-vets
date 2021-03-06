import React from 'react';
// Import React Icon
import { HiLocationMarker } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-white">
                <div className="container d-flex justify-content-between py-5">
                    {/* Footer Left */}
                    <div className="footer-left">
                        <div className="">
                            <h6><HiLocationMarker></HiLocationMarker> Dhaka, Bangladesh</h6>
                        </div>
                        <div className="">
                            <h6><BsFillTelephoneFill></BsFillTelephoneFill> +8801383948299</h6>
                        </div>
                        <div className="">
                            <h6><MdEmail></MdEmail> support@carevets.com</h6>
                        </div>
                    </div>
                    {/* Footer Right */}
                    <div className="footer-right">
                        <h6>Privacy Policy</h6>
                        <h6>Terms and Conditions</h6>
                        <h6>Sitemap</h6>
                    </div>
                </div>
                <hr />
                &copy; Copyright 2021

            </div>
        </div>
    );
};

export default Footer;