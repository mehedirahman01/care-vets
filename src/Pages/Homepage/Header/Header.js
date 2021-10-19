import React from 'react';
import logo from '../../../images/logo5.png'
// Import React Icon
import { RiAccountCircleFill } from 'react-icons/ri'
import { IconContext } from 'react-icons';

const Header = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    {/* Navbar Left */}
                    <div class="d-flex align-items-center">
                        <img src={logo} alt="" width="70" height="50" class="d-inline-block align-text-top" />
                        <div className="ms-2"><h3 className="fw-bold m-0">CareVets</h3></div>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        {/* Navbar Middle */}
                        <ul class="navbar-nav mx-auto fw-bold">
                            <li class="nav-item ">
                                <a class="nav-link" aria-current="page" href="/"><p className="text-dark m-0">Home</p></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/location">Our Location</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>

                        {/* Navbar Right */}
                        <IconContext.Provider value={{ size: "1.5em" }}>
                            <div>
                                <h6 className="text-center m-0"><RiAccountCircleFill /> Account</h6>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;