import React from 'react';

const ContactForm = (props) => {
    let { formImg, formTitle, formData } = props.ContactUsFormData;
    return (
        <div className="d-flex justify-content-center">
            <div className="container-fluid pl-0 pr-0 ml-0 mr-0">
                <div className="row mb-5 mt-3 d-flex justify-content-center align-items-center">
                    <div className="col-md-3 col-xl-2 ">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-12 col-md-12 pr-md-5 pb-5 pb-md-4 d-flex d-md-block align-items-center justify-content-center">
                                <div className="zoom-img-container">
                                    <img className="mr-3 contactus-img" src={formImg[0]} alt="Breadcrumb Trail" />
                                </div>
                            </div>
                            <div className="col-md-12 pr-5 pt-4 d-none d-md-block">
                                <div className="zoom-img-container">
                                    <img className="mr-3 contactus-img" src={formImg[1]} alt="Breadcrumb Trail" />
                                </div>
                            </div>
                        </div>               
                    </div>
                    <div className="col-10 col-sm-9 col-md-7 col-lg-5 about-text p-3 contactus-form">
                        <h3 className="mb-3 about-text about-heading-text text-center">{formTitle}</h3>
                        <form>
                            <div className="row form-group">
                                <div className="col">
                                    <label htmlFor="first-name">{formData.firstName.input}</label>
                                    <input id="first-name" type="text" className="form-control" placeholder={formData.firstName.placeholder}/>
                                </div>
                                <div className="col">
                                    <label htmlFor="last-name">{formData.lastName.input}</label>
                                    <input id="last-name" type="text" className="form-control" placeholder={formData.lastName.placeholder}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">{formData.email.input}</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={formData.email.placeholder}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">{formData.question.title}</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    {
                                    formData.question.selections.map(question => <SelectionItem key={question.id} optionText={question.optionText} />)
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">{formData.textBox.title}</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button className="btn btn-secondary" type="submit">{formData.submitButton.text}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SelectionItem = ({ optionText }) => {
    return(
        <option>{optionText}</option>
    );
}

export default ContactForm;