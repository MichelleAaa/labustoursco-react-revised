import React from 'react';

const Header = () => {
    return (
        <header className="jumbotron jumbotron-fluid jumbotron-citytour pt-0 mt-0 pr-0 mr-0 mt-0">
            <div className="center-vertically">
                <div className="center-vertically-child">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-center">
                            <div className="row mx-auto d-flex justify-content-center">
                                <div className="col-11 mx-auto">
                                    <div className="d-flex justify-content-start text-center">
                                        <div className="col-11 col-sm-6 ml-0 pl-0">
                                            <h5 className="jumbotron-title text-center text-nowrap "> <span className="jumbotron-la"> L.A </span>Bus Tours</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-11">
                                    <hr className="header-line"/>
                                </div>
                            </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-11 col-md-8 col-xl-10 mb-xl-0">
                                <div>
                                    <h1 className="text-center m-4"> <span className="header-tour-descrip">City and Seaside Adventures in the Los Angeles Area</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col pt-4 mt-3 mt-xl-0 mx-auto text-center">
                                <button type="button" className="btn btn-secondary btn-main"><a href="#home-card" className="btn-text text-nowrap text-center">Learn More
                                        &rarr;</a></button>
                            </div>
                            <p className="my-5"></p>
                        </div>  
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;