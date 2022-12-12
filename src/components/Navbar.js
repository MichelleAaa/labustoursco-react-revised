import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../assets/l.a.bustourslogocropped.png';
import '../utils/NavbarModification';

const Nav = (props) => {
    return (
        <nav className="container-fluid">
            <div className='sticky-top'>
                <div className="row sticky-nav p-auto d-flex justify-content-center" id="sticky-nav">
                    <div className="col-12 d-flex justify-content-end align-items-center">
                        <div className="navbar navbar-expand-lg navbar-light pt-1">
                            <Link to='/' className="navbar-brand align-self-start"><img src={logo} alt="" height="50" width="50" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link to='/' className={props.page === 'homepage' ? "nav-link active" : "nav-link"}>Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/aboutus'className={props.page === 'aboutus' ? "nav-link active" : "nav-link"}>About Us</Link>
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
                                        <Link to='/citytour' className={props.page === 'citytour' ? "nav-link active" : "nav-link"}>City Tour</Link>
                                    </li>
                                    <li className="nav-item d-none">
                                        <Link to='/seasidetour' className={props.page === 'seasidetour' ? "nav-link active" : "nav-link"}> Seaside Tour</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/faq' className={props.page === 'faq' ? "nav-link active" : "nav-link"}>FAQ</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/contactus' className={props.page === 'contactus' ? "nav-link active" : "nav-link"}> Contact Us</Link>
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