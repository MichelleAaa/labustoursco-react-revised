import React from 'react';

const TextSmallHeadingWithPara = (props) => {
    return (
        <div className="gradient-background" id="celebHomesTour">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-8 text-center mt-2 pt-2 mb-0 pb-0 text-center">
                        <div>
                            <div className="tour-details-box celebrity-homes">
                                <h1 className="display-4">{props.data.title}</h1>
                                {
                                    props.data.text.map(text => <Para key={text.id} data={text.text}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Para = (props) => {
    return (
        <p>{props.data}</p>
    );
}


export default TextSmallHeadingWithPara;