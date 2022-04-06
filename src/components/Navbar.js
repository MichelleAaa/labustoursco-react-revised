import React from 'react';
import logo from '../assets/l.a.bustourslogocropped.png';

const Nav = () => {
    return (
        <div className="container-fluid">
            <div className="sticky-top">
                <div className="row sticky-nav-dup p-auto d-flex justify-content-center" id="sticky-nav">
                    <div className="col-12 d-flex justify-content-end">
                        <nav className="navbar navbar-expand-lg navbar-light pt-0">
                            <a className="navbar-brand align-self-start" href="index.html"><img src={logo} alt="" height="60" width="60" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="aboutus.html">About Us</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Tours
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="citytour.html">City Tour</a>
                                            <div className="dropdown-divider d-none"></div>
                                            <a className="dropdown-item" href="seasidetour.html">Seaside Tour</a>
                                        </div>
                                    </li>
                                    <li className="nav-item d-none">
                                        <a className="nav-link"  href="citytour.html">City Tour</a>
                                    </li>
                                    <li className="nav-item d-none">
                                        <a className="nav-link" href="seasidetour.html">Seaside Tour</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="faq.html">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contactus.html">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Nav;