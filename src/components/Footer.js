import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer d-block">
            <div className="container-fluid">
                <div className="row px-0 pt-4 d-flex justify-content-center mx-0">
                    <div className="col-5 col-md-4">
                        <div className="d-flex justify-content-start">
                            <div className="text-left">
                        <h5 className="footer-title pb-3">Links</h5>
                        <ul className="list-unstyled footer-item">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="aboutus.html">About</a></li>
                            <li><a href="citytour.html">City Tour</a></li>
                            <li><a href="seasidetour.html">Seaside Tour</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="contactus.html">Contact Us</a></li>
                        </ul>
                    </div>
                    </div>
                    </div>
                    <div className="col-7 col-sm-5 pl-0 ml-0 pr-3">
                        <div className="d-flex justify-content-end">
                            <div className="text-right">
                                <h5 className="footer-title pb-3">Our Location:</h5>
                                <p className="footer-item">123 Beyond St., Ste 456, </p>
                                <p className="footer-item p-1">Beverly Hills, CA 90210</p>
                                <br/>
                                <a role="button" className="contact-links" href="tel:+12345678901"><i className="fa fa-phone footer-p"></i>
                                    1-234-567-8901</a><br />
                                <a role="button" className="contact-links" href="mailto:office@labustours.com"><i className="fa fa-envelope-o footer-p"></i>
                                    office@labustours.com</a><br />
                                <a role="button" className="contact-links" href="tel:+19876543210"><i className="fa fa-fax footer-p"></i>
                                    1-987-654-3210</a><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-7">
                        <hr className=""/>
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
                        <p>&copy; Copyright 2022. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;