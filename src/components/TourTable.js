import React from 'react';

const TourTable = () => {
    return (
        <div className="container-fluid pt-5" id="stops">
            <div className="row d-flex justify-content-center">
                <div className="col-11 col-sm-9 col-lg-6 px-0">
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col">Tour Package</th>
                                <th scope="col">1 Passenger</th>
                                <th scope="col">2 Passengers</th>
                                <th scope="col">3+ Passengers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">City Scapes</th>
                                <td>$100 per Ticket</td>
                                <td>$80 per Ticket</td>
                                <td>$75 per Ticket</td>
                            </tr>
                            <tr>
                                <th scope="row">City Scapes & Celebrity Homes</th>
                                <td>$120 per Ticket</td>
                                <td>$100 per Ticket</td>
                                <td>$95 per Ticket</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col pt-4 mt-3 mt-xl-0 mx-auto text-center">
                        <button type="button" id="reserveOpenModal" className="btn btn-secondary btn-main" data-toggle="modal" data-target="#bookingModal">
                            <a href="#" className="btn-text text-nowrap text-center">Reserve Now &rarr;</a>
                        </button>
                </div>
            </div>
        </div>
    );
}


export default TourTable;