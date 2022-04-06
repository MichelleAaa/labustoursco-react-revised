import React from 'react';


const ThreeImgGrid = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-11 mx-auto home-img-grid mt-0 pt-0">
                    <div className="row mx-auto px-5 text-center d-flex justify-content-center">
                        <div className="col-sm-6 col-lg-3 px-lg-1 mx-auto">
                                <img src={props.img.img1} alt="" className="home-img-about home-img-about--1" />
                        </div>
                        <div className="col-sm-6 col-lg-3 p-lg-1 mx-auto d-none d-lg-block">
                            <img src={props.img.img2} alt="" className="home-img-about home-img-about--2" />
                        </div>
                        <div className="col-sm-6 col-lg-3 p-lg-1 mx-auto d-none d-sm-block">
                            <img src={props.img.img3} alt="" className="home-img-about home-img-about--3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThreeImgGrid;