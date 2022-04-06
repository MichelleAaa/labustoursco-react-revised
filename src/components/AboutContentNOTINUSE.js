import React from 'react';
import img1 from '../assets/la-sky.jpg';
import img2 from '../assets/hollywood-tower-cropped.jpg';
import img3 from '../assets/santa-monica-beach.jpg';

const AboutContent = () => {
    return (
        <>        
            <div className="container">
                <div className="row row-content align-items-center mb-5 mt-5">
                    <div className="col">
                        <div className="media about-text">
                            <img className="mr-3 img-thumbnail media-img align-self-center" src={img1} alt="Breadcrumb Trail" />
                            <div className="media-body align-self-center">
                                <h3 className="mb-3 about-heading-text text-center">Our Company</h3>
                                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus molestias nihil rerum et ipsa, totam accusamus mollitia perferendis quod commodi quis ipsum distinctio! Velit, quis!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-content align-items-center mb-5 mt-5">
                    <div className="col">
                        <div className="media about-text">
                            <div className="media-body align-self-center">
                                <h3 className="mb-3 about-heading-text text-center">History</h3>
                                <p className="text-right mr-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus molestias nihil rerum et
                                    ipsa, totam accusamus mollitia perferendis quod commodi quis ipsum distinctio! Velit!
                                </p>
                            </div>
                            <img className="mr-3 img-thumbnail media-img align-self-center" src={img2} alt="Breadcrumb Trail" />
                        </div>
                    </div>
                </div>
                <div className="row row-content align-items-center mb-5 mt-5">
                    <div className="col">
                        <div className="media about-text">
                            <img className="mr-3 img-thumbnail media-img align-self-center" src={img3}
                                alt="Breadcrumb Trail" />
                            <div className="media-body align-self-center">
                                <h3 className="mb-3 about-heading-text text-center">Our Buses</h3>
                                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus molestias nihil rerum et
                                    ipsa, totam accusamus mollitia perferendis quod commodi quis ipsum distinctio! Velit, quis!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    );
}

export default AboutContent;