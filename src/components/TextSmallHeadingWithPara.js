import React from 'react';

const TextSmallHeadingWithPara = ({ textData }) => {
    return (
        <div className="gradient-background" id="celebHomesTour">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-8 text-center mt-2 pt-2 mb-0 pb-0 text-center">
                        <div>
                            <div className="tour-details-box celebrity-homes">
                                <h2 className="display-4">{textData.title}</h2>
                                {
                                    textData.text.map(text => <Para key={text.id} paragraph={text.text}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Para = ({paragraph}) => {
    return (
        <p>{paragraph}</p>
    );
}


export default TextSmallHeadingWithPara;