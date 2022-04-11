import React from 'react';
import {ReviewCarouselData} from '../pages/home/HomeList';

const ReviewCarousel = () => {
    return (
        <div className="row carousel-box comment-bottom text-center p-0 p-lg-5 ">
            <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4 carousel-box-child mx-auto p-0">
                <div className="comment-box-countainer">
                    <div className="comment-box">
                        <div className="carousel slide pb-5 px-5" id="carousel-reviews" data-ride="carousel">
                            <ol className="carousel-indicators">
                                {
                                ReviewCarouselData.map(review => <CarouselSliders key={review.id} reviewData={review}/>)
                                }
                            </ol>
                            <div className="carousel-inner">   
                                {
                                ReviewCarouselData.map(review => <Review key={review.id} reviewData={review}/>)
                                }
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

const CarouselSliders = ({ reviewData }) => {
    if(reviewData.id === 0) {
        return <li data-target="#carousel-reviews" data-slide-to="0"></li>;
    }else {
        return <li data-target="#carousel-reviews" data-slide-to={reviewData.id}></li>;
    }
}

const Review = ({ reviewData }) => {
    return (  
        <div className={reviewData.id === 0 ? 'carousel-item active' : 'carousel-item'}>
            <div className="d-block">
                <div className="m-0 m-md-1 mb-3 pt-0">
                    <h2 className="pt-0 testimonial-heading pb-lg-4 ">{reviewData.heading}</h2>
                    <div className="p-1">
                        <p>My rating:</p>
                    </div>
                    <div className="star p-1">
                        <ReviewStars stars={reviewData.stars}/>
                    </div>
                    <p className="p-1">{reviewData.text}</p>
                </div>
                <div className="p-1 pt-3">
                    <i>{reviewData.name} from {reviewData.location}</i>
                </div>
            </div>
        </div>
    );
}

const ReviewStars = ({ stars }) => {  
    let starsArr = Array.from(Array(stars).keys());

    return (
        starsArr.map(star => <i key={star} className="fa fa-star" aria-hidden="true"></i>)
    );
}

export default ReviewCarousel;