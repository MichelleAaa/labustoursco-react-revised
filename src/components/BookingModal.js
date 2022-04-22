import React, { useState }  from 'react';
import {  Button, Modal, ModalHeader, ModalBody  } from 'reactstrap';

const BookingModal = () => {
    // const ModalExample = (props) => {
    // const {
    //     buttonLabel,
    //     className
    // } = props;

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
        alert('Current state is: ' + JSON.stringify(input));
    };

    return (
        <div>
        <Button color="danger" onClick={toggle}> Submit </Button>
        <Modal isOpen={modal} toggle={toggle} className='modal-lg' id="bookingModal">
            <ModalHeader toggle={toggle}>Book a Tour</ModalHeader>
            <ModalBody>
                <div class="container-fluid">
                    <form>
                        <div class="row form-group">
                            <label for="num-passengers" class="col-12 col-sm-6 col-form-label modal-text pl-0">Number of Passengers</label>
                            <div class="col">
                                <input type="number" class="form-control form-control-sm" id="num-passengers"
                                placeholder="" name="numPassengers" onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div class="row form-group">
                            <label for="date" class="col col-sm-6 col-form-label modal-text">Date:</label>
                            <div class="col-12 col-sm-6">
                                <input type="date" id="date" name="date" placeholder="mm/dd/yyyy" class="form-control" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div class="row form-group">
                            <label class="col-sm-6 col-form-label modal-text">Tour Type:</label>
                            <fieldset id="tourType">
                                <div class="col-4 btn-group btn-group-toggle" data-toggle="buttons">
                                    <label class="btn radio-btn-1 active text-nowrap">
                                        <input type="radio" name="tourType" autocomplete="off" value="cityTour" checked={'cityTour'}  onChange={handleInputChange} /> City
                                        Tour
                                    </label>
                                    <label class="btn radio-btn-2 text-nowrap">
                                        <input type="radio" name="tourType" autocomplete="off" value="seasideTour" checked={'seasideTour'} onChange={handleInputChange} /> Seaside Tour
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                        <div class="row form-group">
                            <label class="col-sm-6 col-form-label modal-text">Extras:</label>
                            <div class="col-6 btn-group">
                                <div class="input-group-text checkbox-container">
                                    <input type="checkbox" aria-label="Checkbox for following text input" name="celebTour"
                                        value="Yes" onChange={handleInputChange} />
                                    <label for="celebTour" class="pl-3">+ Celebrity Tour</label>
                                </div>
                            </div>
                        </div>
                        <div class="row form-group pt-3">
                            <div class="col">
                                <button type="button" onClick={toggle} class="btn-modal btn-modal-cancel mr-2">Cancel</button>
                                <button type="submit" class="btn-modal btn-modal-submit" onClick={handleSubmit}>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </ModalBody>
        </Modal>
        </div>
    );
}

// const BookingModal = () => {
//     return (
//         <div id="bookingModal" className="modal fade" role="dialog">
//             <div className="modal-dialog modal-lg" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h3 className="modal-title text-center">Book a Tour</h3>
//                         <button type="button" className="close" data-dismiss="modal">&times;</button>
//                     </div>
//                     <div className="modal-body">
//                         <div className="container-fluid">
//                             <form>
//                                 <div className="row form-group">
//                                     <label for="num-passengers" className="col-12 col-sm-6 col-form-label modal-text pl-0">Number of
//                                         Passengers</label>
//                                     <div className="col">
//                                         <input type="number" className="form-control form-control-sm" id="num-passengers"
//                                         placeholder=""/>
//                                     </div>
//                                 </div>
//                                 <div className="row form-group">
//                                     <label for="date" className="col col-sm-6 col-form-label modal-text">Date:</label>
//                                     <div className="col-12 col-sm-6">
//                                         <input type="date" id="date" name="date" placeholder="mm/dd/yyyy" className="form-control" />
//                                     </div>
//                                 </div>
//                                 <div className="row form-group">
//                                     <label className="col-sm-6 col-form-label modal-text">Tour Type:</label>
//                                     <fieldset id="tourType">
//                                         <div className="col-4 btn-group btn-group-toggle" data-toggle="buttons">
//                                             <label className="btn radio-btn-1 active text-nowrap">
//                                                 <input type="radio" name="tourType" autocomplete="off" value="cityTour" checked /> City
//                                                 Tour
//                                             </label>
//                                             <label className="btn radio-btn-2 text-nowrap">
//                                                 <input type="radio" name="tourType" autocomplete="off" value="seasideTour" /> Seaside Tour
//                                             </label>
//                                         </div>
//                                     </fieldset>
//                                 </div>
//                                 <div className="row form-group">
//                                     <label className="col-sm-6 col-form-label modal-text">Extras:</label>
//                                     <div className="col-6 btn-group">
//                                         <div className="input-group-text checkbox-container">
//                                             <input type="checkbox" aria-label="Checkbox for following text input" name="celebTour"
//                                                 value="Yes" />
//                                             <label for="celebTour" className="pl-3">+ Celebrity Tour</label>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="row form-group pt-3">
//                                     <div className="col">
//                                         <button type="submit" data-dismiss="modal" className="btn-modal btn-modal-cancel">Cancel</button>
//                                         <button type="submit" className="btn-modal btn-modal-submit">Search</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




export default BookingModal;

