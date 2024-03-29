import React, { useState }  from 'react';
import {  Modal, ModalHeader, ModalBody  } from 'reactstrap';

const BookingModal = ( {linkType, text} ) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [input, setInput] = useState({});
    const handleInputChange = (e) => {
        setInput({
        ...input, [e.currentTarget.name]: e.currentTarget.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Current state is: ' + JSON.stringify(input));
        alert('You entered: ' + JSON.stringify(input));
    };

    const ButtonType = ({text, toggle}) => {
        return(
            <button type="button" className="btn px-3 py-1 btn-secondary btn-main btn-text text-nowrap text-center" onClick={toggle}>{text} &rarr;</button>
        );
    };

    const TextType = ({text, toggle}) => {
        return (
            <p className="card-link" onClick={toggle}>{text} &rarr;</p>
        );
    };

    return (
        <div>
            {linkType === 'text' ? <TextType text={text} toggle={toggle} /> : <ButtonType text={text} toggle={toggle} /> }
            <Modal isOpen={modal} toggle={toggle} className='modal-lg' id="bookingModal">
                <ModalHeader toggle={toggle}>Book a Tour</ModalHeader>
                <ModalBody>
                    <div className="container-fluid">
                        <form>
                            <div className="row form-group">
                                <label htmlFor="num-passengers" className="col-12 col-sm-6 col-form-label modal-text pl-0">Number of Passengers</label>
                                <div className="col">
                                    <input type="number" className="form-control form-control-sm" id="num-passengers"
                                    name="numPassengers" onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="date" className="col col-sm-6 col-form-label modal-text">Date:</label>
                                <div className="col-12 col-sm-6">
                                    <input type="date" id="date" name="date" placeholder="mm/dd/yyyy" className="form-control" onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <label className="col-sm-6 col-form-label modal-text">Tour Type:</label>
                                <fieldset id="tourType">
                                    <div className="col-4 btn-group btn-group-toggle" data-toggle="buttons">
                                        <label className="btn radio-btn-1 active text-nowrap">
                                            <input type="radio" name="tourType" autoComplete="off" value="cityTour" checked={'cityTour'}  onChange={handleInputChange} /> City
                                            Tour
                                        </label>
                                        <label className="btn radio-btn-2 text-nowrap">
                                            <input type="radio" name="tourType" autoComplete="off" value="seasideTour" checked={'seasideTour'} onChange={handleInputChange} /> Seaside Tour
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="row form-group">
                                <label className="col-sm-6 col-form-label modal-text">Extras:</label>
                                <div className="col-6 btn-group">
                                    <div className="input-group-text checkbox-container">
                                        <input type="checkbox" aria-label="Checkbox for following text input" name="celebTour"
                                            value="Yes" onChange={handleInputChange} />
                                        <label htmlFor="celebTour" className="pl-3">+ Celebrity Tour</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-group pt-3">
                                <div className="col">
                                    <button type="button" onClick={toggle} className="btn-modal btn-modal-cancel mr-2">Cancel</button>
                                    <button type="submit" className="btn-modal btn-modal-submit" onClick={handleSubmit}>Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default BookingModal;