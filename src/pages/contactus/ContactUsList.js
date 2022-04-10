import React from 'react';
import img1 from '../../assets/city-tour-card-beverlyhills.jpg';
import img2 from '../../assets/city-tour-card-palms.jpg';

export const ContactUsTitle = {
    id: 0,
    title: 'Contact Us',
    subtitle: 'We look forward to hearing from you!'
}

export const WelcomeText = {
    id: 0,
    title: "Welcome",
    text: [
        {
            id: 0,
            text: "We are always open to answering your questions and receiving your feedback. Please don't hesitate to contact us using the form below."
        }
    ]
}

export const ContactUsFormData = {
    formImg: [img1, img2],
    formTitle: "Contact Us",
    formData: {
        firstName: {
            input: 'First Name',
            placeholder: 'Your First Name'
        },
        lastName: {
            input: "Last Name",
            placeholder: 'Your Last Name'
        },
        email: {
            input: "Email Address",
            placeholder: 'name@example.com'
        },
        question: {
            title: 'What is the general nature of your question?',
            selections: [
                    {
                        id: 0,
                        optionText: 'Select an option Below'
                    },
                    {
                        id: 1,
                        optionText: 'City Tour Information'
                    },
                    {
                        id: 2,
                        optionText: 'Seaside Tour Information'
                    },
                    {
                        id: 3,
                        optionText: 'Celebrity Tour Information'
                    },
                    {
                        id: 4,
                        optionText: 'Payment'
                    },
                    {
                        id: 5,
                        optionText: 'Boarding'
                    },
                    {
                        id: 6,
                        optionText: 'Other'
                    }
                ]
            },
            textBox: {
            title: 'Comments and/or Questions'
            },
            submitButton: {
                text: "Submit"
            }
        }
    }

