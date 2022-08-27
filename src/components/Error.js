import React from 'react';
import { HomeTitle } from '../pages/home/HomeList';
import Nav from './Navbar';
import Header from './Header';

const Error = () => {
    return (
        <React.Fragment>
            <Nav page={'homepage'} />
            <Header key={HomeTitle.id} headerData={HomeTitle}/>
            <main className='container-fluid pt-5 error'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-9 d-flex justify-content-center align-items-center error'>
                        <h1 className='py-5 jumbotron-subtitle'>Unfortunately, there was an error. Please use the navbar above to navigate to your desired page again. If the problem persists, please contact us at <a role="button" className="" href="mailto:office@labustours.com">office@labustours.com</a>.</h1>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Error;
