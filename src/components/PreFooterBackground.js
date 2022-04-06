import React from 'react';
import ReviewCarousel from './ReviewCarousel';

const PreFooterBackground = (props) => {
    return (
        <div className="bus-background pt-5">
            <div className="container-fluid">
                {props.showReviewCarousel === true ? <ReviewCarousel /> : ''}
            </div>
        </div>
    );
}


export default PreFooterBackground;