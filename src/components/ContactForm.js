import React from 'react';

const ContactForm = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-11 col-sm-10 col-md-8 text-center home-about mt-2 pt-2 mb-5 pb-5">
                        <h1 className="display-4">Welcome</h1>
                        <p>We are always open to answering your questions and receiving your feedback. Please don't hesitate to contact us using the form below.</p>
                    </div>
                </div>
            </div>


            <div className="d-flex justify-content-center">
                <div className="container-fluid pl-0 pr-0 ml-0 mr-0">
                    <div className="row mb-5 mt-3 d-flex justify-content-center align-items-center">
                        <div className="col-md-3 col-xl-2 ">
                            <div className="row d-flex align-items-center justify-content-center">
                                <div className="col-12 col-md-12 pr-md-5 pb-5 pb-md-4 d-flex d-md-block align-items-center justify-content-center">
                                    <div className="zoom-img-container">
                                        <img className="mr-3 contactus-img" src="img/city-tour-card-beverlyhills.jpg" alt="Breadcrumb Trail" />
                                    </div>
                                </div>
                                <div className="col-md-12 pr-5 pt-4 d-none d-md-block">
                                    <div className="zoom-img-container">
                                        <img className="mr-3 contactus-img" src="img/city-tour-card-palms.jpg" alt="Breadcrumb Trail" />
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div className="col-10 col-sm-9 col-md-7 col-lg-5 about-text p-3 contactus-form">
                            <h3 className="mb-3 about-text about-heading-text text-center">Contact Us</h3>
                            <form>
                                <div className="row form-group">
                                    <div className="col">
                                        <label for="first-name">First Name</label>
                                        <input id="first-name" type="text" className="form-control" placeholder="Your First Name"/>
                                    </div>
                                    <div className="col">
                                        <label for="last-name">First Name</label>
                                        <input id="last-name" type="text" className="form-control" placeholder="Your Last Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">What is the general nature of your question?</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Select an Option Below...</option>
                                        <option>City Tour Information</option>
                                        <option>Seaside Tour Information</option>
                                        <option>Celebrity Tour Information</option>
                                        <option>Payment</option>
                                        <option>Boarding</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Comments and/or Questions:</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button className="btn btn-secondary" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ContactForm;