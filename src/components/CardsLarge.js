import React from 'react';
import img1 from '../assets/lacropped.jpg';
import img2 from '../assets/card-seaside.jpg';


const CardsLarge = () => {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center py-5">
                <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-3 px-5 pl-xl-0 pb-5 pb-md-0">
                    <div className="card home-card mb-5">
                        <img src={img1} alt="" className="img-fluid card-img" />
                        <div className="card-body" >
                            <h5 className="card-title">City Tour</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div className="card-body">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-5">
                                    <div className="card-link-bottom">
                                        <a href="#" className="card-link" data-toggle="modal" data-target="#bookingModal">Book Now</a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card-link-bottom">
                                        <a href="citytour.html" className="card-link">Learn More &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-3 px-5 pr-xl-0 pb-5 pb-md-0">
                    <div className="card home-card">
                        <img src={img2} alt="" className="img-fluid card-img" />
                        <div className="card-body">
                            <h5 className="card-title">Seaside Tour</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div className="card-body">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-5">
                                    <div className="card-link-bottom">
                                        <a href="#" className="card-link" data-toggle="modal" data-target="#bookingModal">Book Now</a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card-link-bottom">
                                        <a href="#" className="card-link">Learn More &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CardsLarge;

