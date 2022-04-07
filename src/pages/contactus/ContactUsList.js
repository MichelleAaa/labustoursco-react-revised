import React from 'react';
// import img0 from '../../assets/venice-beach-sand.jpg';
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
    formImg: [
        {
            id: 0,
            img: img1
        },
        {
            id: 1,
            img: img2
        }
    ],
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
        questionType: {
            1: 'Select an option Below',
            2: 'City Tour Information',
            3: 'Seaside Tour Information',
            4: 'Celebrity Tour Information',
            5: 'Payment',
            6: 'Boarding',
            7: 'Other'
        },
        textBox: {
            text: 'Comments and/or Questions'
        } 
    }

}
