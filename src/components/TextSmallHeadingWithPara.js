import React from 'react';

const TextSmallHeadingWithPara = ({ textData }) => {
    const Para = ({paragraph}) => {
        return <p>{paragraph}</p>;
    }

    return (
        <div className="gradient-background" id="celebHomesTour">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-8 text-center mt-2 pt-2 mb-0 pb-0 text-center celebrity-homes">
                        <div class="celebrity-homes-buffer"></div>
                        <h2 className="display-4">{textData.title}</h2>
                        {textData.text.map(text => <Para key={text.id} paragraph={text.text}/>)}
                        <div class="celebrity-homes-buffer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextSmallHeadingWithPara;