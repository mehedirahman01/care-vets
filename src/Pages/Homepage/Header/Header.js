import React from 'react';
import logo from '../../../images/logo5.png'
// Import React Icon
import { RiAccountCircleFill } from 'react-icons/ri'
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, handleLogout } = useAuth()
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    {/* Navbar Left */}
                    <div className="d-flex align-items-center">
                        <img src={logo} alt="" width="70" height="50" className="d-inline-block align-text-top" />
                        <div className="ms-2"><NavLink className="nav-link p-0" to="/home"><h3 className="fw-bold m-0">CareVets</h3></NavLink></div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Navbar Middle */}
                        <ul className="navbar-nav mx-auto fw-bold">
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/bookings">Bookings</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/location">Location</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>

                        {/* Navbar Right */}
                        <IconContext.Provider value={{ size: "1.5em" }}>
                            <div className="btn-group">
                                <button type="button" className="btn btn-success" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h6 className="text-center m-0"><RiAccountCircleFill /> {user.email ? user.displayName : 'Account'}</h6>
                                </button>
                                {
                                    user.email ? <ul className="dropdown-menu">
                                        <li><NavLink className="nav-link" to="/home" onClick={handleLogout}>Logout</NavLink></li>

                                    </ul> : <ul className="dropdown-menu">
                                        <li><NavLink className="nav-link" to="/login">Login</NavLink></li>
                                        <li><NavLink className="nav-link" to="/register">Register</NavLink></li>
                                    </ul>
                                }
                            </div>
                        </IconContext.Provider>
                    </div>
                </div >
            </nav >
        </div >
    );
};

export default Header;