import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer d-block">
            <div className="container-fluid">
                <div className="row px-0 pt-4 d-flex justify-content-center mx-0">
                    <div className="col-5 col-md-4 d-flex justify-content-start flex-column text-left">
                        <h2 className="footer-title pb-3">Links</h2>
                        <ul className="list-unstyled footer-item">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/citytour'>City Tour</Link></li>
                            <li><Link to='/seasidetour'>Seaside Tour</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5 pl-0 ml-0 pr-3">
                        <div className="d-flex justify-content-end">
                            <div className="text-right">
                                <h2 className="footer-title pb-3">Our Location:</h2>
                                <p className="footer-item">123 Beyond St., Ste 456, </p>
                                <p className="footer-item p-1">Beverly Hills, CA 90210</p>
                                <br/>
                                <a role="button" className="contact-links" href="tel:+12345678901"><i className="fa fa-phone footer-p"></i>
                                    {' '}1-234-567-8901</a><br />
                                <a role="button" className="contact-links" href="mailto:office@labus.com"><i className="fa fa-envelope-o footer-p"></i>
                                    {' '}office@labus.com</a><br />
                                <a role="button" className="contact-links" href="tel:+19876543210"><i className="fa fa-fax footer-p"></i>
                                    {' '}1-987-654-3210</a><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-7">
                        <hr />
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6 text-center pb-2">
                        <a className="btn btn-social-icon btn-instagram m-3" href="http://instagram.com/"><i
                                className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-facebook m-3" href="http://facebook.com/"><i
                                className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-twitter m-3" href="http://twitter.com/"><i
                                className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google m-3" href="http://youtube.com/"><i
                                className="fa fa-youtube"></i></a>
                    </div>
                </div>
                <div className="row pl-0 ml-0 pb-1">
                    <div className="col-sm-12 pb-1 copyright">
                        <p>&copy; Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;