import React, { useState }  from 'react';

const ContactForm = (props) => {
    let { formImg, formTitle, formData } = props.ContactUsFormData;

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

    const SelectionItem = ({ optionText }) => {
        return(
            <option>{optionText}</option>
        );
    }

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
                    <div className="col-10 col-sm-9 col-md-7 col-lg-5 section-text p-3 contactus-form">
                        <h3 className="mb-3 section-text section-heading text-center">{formTitle}</h3>
                        <form>
                            <div className="row form-group">
                                <div className="col">
                                    <label htmlFor="first-name">{formData.firstName.input}</label>
                                    <input id="first-name" type="text" className="form-control" placeholder={formData.firstName.placeholder} name="first-name" onChange={handleInputChange}/>
                                </div>
                                <div className="col">
                                    <label htmlFor="last-name">{formData.lastName.input}</label>
                                    <input id="last-name" type="text" className="form-control" placeholder={formData.lastName.placeholder} name="last-name" onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-email">{formData.email.input}</label>
                                <input type="email" className="form-control" id="contact-email" placeholder={formData.email.placeholder} name="email" onChange={handleInputChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-selection">{formData.question.title}</label>
                                <select className="form-control" id="contact-selection" name="question-type" onChange={handleInputChange}>
                                    {
                                    formData.question.selections.map(question => <SelectionItem key={question.id} optionText={question.optionText} />)
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-form">{formData.textBox.title}</label>
                                <textarea className="form-control" id="contact-form" rows="3" name="comment" onChange={handleInputChange}></textarea>
                            </div>
                            <button className="btn btn-secondary" type="submit" onClick={handleSubmit}>{formData.submitButton.text}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;