import React from 'react';

const Table = (props) => {
    return (
        <div className="container-fluid pt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-11 col-sm-9 col-lg-6 px-0">
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                {props.data.headings.map(heading => <THead key={heading.id} headingData={heading}/>)}
                            </tr>
                        </thead>
                        <tbody>
                                {props.data.rowData.map(row => {
                                    return ( 

                                        <tr key={row.id}>
                                            <TRow cells={row.cells}/>
                                        </tr>
                                        );
                                })}
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

const THead = (props) => {
    return (
        <th scope="col">{props.headingData.title}</th>
    );
}

const TRow = (props) => {
    console.log(props.cells);
    console.log(props);
    return (
        props.cells.map(cell => cell.id === 0 ? <th key={cell.id} scope="row">{cell.title}</th> : <td key={cell.id}>{cell.title}</td> )
    );
}

export default Table;