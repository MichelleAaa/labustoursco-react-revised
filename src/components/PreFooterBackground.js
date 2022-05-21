import React from 'react';
import ReviewCarousel from './ReviewCarousel';

const PreFooterBackground = (props) => {
    return (
        <div className="bus-background pt-5">
            {props.showReviewCarousel === true ? <ReviewCarousel /> : ''}
        </div>
    );
}


export default PreFooterBackground;