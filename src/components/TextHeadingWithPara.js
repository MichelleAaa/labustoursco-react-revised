import React from 'react';

const TextHeadingWithPara = ({ textData }) => {
    const Para = ({paragraph}) => {
        return <p>{paragraph}</p>;
    }

    return (
        <div className="container-fluid" id={textData.htmlId}>
            <div className="row d-flex justify-content-center">
                <div className="col-11 col-sm-10 col-lg-8 text-center text-detail mt-2 pt-2 mb-0 pb-0">
                    <h2 className="display-4">{textData.title}</h2>
                    {textData.text.map(text => <Para key={text.id} paragraph={text.text}/>)}
                </div>
            </div>
        </div>
    );
}

export default TextHeadingWithPara;