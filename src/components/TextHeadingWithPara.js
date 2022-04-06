import React from 'react';

const TextHeadingWithPara = (props) => {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-11 col-sm-10 col-lg-8 text-center home-about mt-2 pt-2 mb-0 pb-0">
                    <h1 className="display-4">{props.data.title}</h1>
                    {
                        props.data.text.map(text => <Para key={text.id} data={text.text}/>)
                    }
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


export default TextHeadingWithPara;