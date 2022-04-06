import React from 'react';

const ReviewCarousel = () => {
    return (
        <div className="row carousel-box comment-bottom text-center p-0 p-lg-5 ">
            <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4 carousel-box-child mx-auto p-0">
                <div className="comment-box-countainer">
                    <div className="comment-box">
                        <div className="carousel slide pb-5 px-5" id="carousel-reviews" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-reviews" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-reviews" data-slide-to="1"></li>
                                <li data-target="#carousel-reviews" data-slide-to="2"></li>
                                <li data-target="#carousel-reviews" data-slide-to="3"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="d-block">
                                        <div className="m-0 m-md-1 mb-3 pt-0">
                                            <h2 className="pt-0 testimonial-heading pb-lg-4 ">Excellent!</h2>
                                            <div className="p-1">
                                                <p>My rating:</p>
                                            </div>
                                            <div className="star p-1">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <p className="p-1">It was so much fun! We got to see so many places and took so
                                                many photos to never forget!</p>
                                        </div>
                                        <div className="p-1 pt-3">
                                            <i>Tina from Salt Lake City, UT</i>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-block">
                                        <div className="m-0 m-md-1 mb-3 pt-0">
                                            <h2 className="pt-0 testimonial-heading pb-lg-4 ">A Trip to Never Forget</h2>
                                            <div className="p-1">
                                                <p>My rating:</p>
                                            </div>
                                            <div className="star p-1">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <p className="p-1">The kids had a great time. My only regret is that the time
                                                went by too fast.</p>
                                        </div>
                                        <div className="p-1 pt-3">
                                            <i>Justin from Seattle, WA</i>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-block">
                                        <div className="m-0 m-md-1 mb-3 pt-0">
                                            <h2 className="pt-0 testimonial-heading pb-lg-4 ">We Had a Blast!</h2>
                                            <div className="p-1">
                                                <p>My rating:</p>
                                            </div>
                                            <div className="star p-1">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <p className="p-1">So glad we booked this tour, we got to see so many places
                                                around the city.</p>
                                        </div>
                                        <div className="p-1 pt-3">
                                            <i>Jennifer from Boston, MA</i>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-block">
                                        <div className="m-0 m-md-1 mb-3 pt-0">
                                            <h2 className="pt-0 testimonial-heading pb-lg-4 ">Worth It</h2>
                                            <div className="p-1">
                                                <p>My rating:</p>
                                            </div>
                                            <div className="star p-1">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <p className="p-1">My family and I are considering moving to L.A., so this tour
                                                was great to get a sense of what the area has to offer.</p>
                                        </div>
                                        <div className="p-1 pt-3">
                                            <i>Tony from San Antonio, TX</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carousel-reviews" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-reviews" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ReviewCarousel;