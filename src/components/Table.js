import React from 'react';
import BookingModal from './BookingModal';

const Table = ({ pricingTableData }) => {
    return (
        <div className="container-fluid pt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-11 col-sm-9 col-lg-6 px-0">
                    <table className="table table-hover text-center">
                        <caption>Table displaying price of tours based on number of passengers.</caption>
                        <thead>
                            <tr>
                                {pricingTableData.headings.map(heading => <THead key={heading.id} headingData={heading}/>)}
                            </tr>
                        </thead>
                        <tbody>
                                {pricingTableData.rowData.map(row => {
                                    return ( 

                                        <tr key={row.id}>
                                            <TRow cellsData={row.cells}/>
                                        </tr>
                                        );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col pt-4 mt-3 mt-xl-0 mx-auto text-center">
                    <BookingModal linkType={'button'} text={'Reserve Now'} />
                </div>
            </div>
        </div>
    );
}

const THead = ({ headingData }) => {
    return (
        <th scope="col">{headingData.title}</th>
    );
}

const TRow = ({ cellsData }) => {
    return (
        cellsData.map(cell => cell.id === 0 ? <th key={cell.id} scope="row">{cell.title}</th> : <td key={cell.id}>{cell.title}</td> )
    );
}

export default Table;