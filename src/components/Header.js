import { Link } from 'react-router-dom';
import React from 'react';
import BookingModal from './BookingModal';

const Header = ({ headerData }) => {
    return (
        <React.Fragment>
            <header className="jumbotron jumbotron-fluid">
                <div className="container-fluid">
                    <div className="jumbotron-content">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-11 col-sm-6 ml-0 pl-0 d-flex justify-content-center text-center">
                                <h1 className="jumbotron-title text-center text-nowrap "> <span className="jumbotron-title-subtext"> {headerData.supertitle ? headerData.supertitle : ''} </span>{headerData.title}</h1>
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
                                    <p className="text-center m-4 jumbotron-subtitle">{headerData.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col pt-4 mt-3 mt-xl-0 mx-auto text-center">
                                <BookingModal linkType={'button'} text={'Reserve Now'}/>
                            </div>
                            <p className="my-5"></p>
                        </div>  
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;