import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../assets/l.a.bustourslogocropped.png';
import '../utils/NavbarModification';

const Nav = () => {
    return (
        <nav className="container-fluid">
            <div className="sticky-top">
                <div className="row sticky-nav-dup p-auto d-flex justify-content-center" id="sticky-nav">
                    <div className="col-12 d-flex justify-content-end">
                        <div className="navbar navbar-expand-lg navbar-light pt-0">
                            <Link to='/' className="navbar-brand align-self-start"><img src={logo} alt="" height="60" width="60" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/aboutus'className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Tours
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link to='/citytour' className="dropdown-item">City Tour</Link>
                                            <div className="dropdown-divider d-none"></div>
                                            <Link to='/seasidetour' className="dropdown-item">Seaside Tour</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item d-none">
                                        <Link to='/citytour' className="nav-link">City Tour</Link>
                                    </li>
                                    <li className="nav-item d-none">
                                        <Link to='/seasidetour' className="nav-link"> Seaside Tour</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/faq' className="nav-link">FAQ</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/contactus' className="nav-link"> Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;