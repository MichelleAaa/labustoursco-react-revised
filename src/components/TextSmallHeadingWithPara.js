import React from 'react';

const TextSmallHeadingWithPara = (props) => {
    return (
        <div class="gradient-background" id="celebHomesTour">
            <div class="container-fluid">
                <div class="row d-flex justify-content-center">
                    <div class="col-12 col-lg-8 text-center mt-2 pt-2 mb-0 pb-0 text-center">
                        <div>
                            <div class="tour-details-box celebrity-homes">
                                <h1 class="display-4">{props.data.title}</h1>
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