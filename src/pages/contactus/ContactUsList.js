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

// export const ContactUsFormData = [
//     {
//         id: 0,
//         title: 'Tours Info',
//         img: img0,
//         content: [
//                 {
//                 id: 't0',
//                 title: 'What if I book a large group and we would like to swap out one stop with another?',
//                 text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odio sint atque! Molestias distinctio eaque necessitatibus illum, nemo totam quis quas, asperiores laudantium praesentium voluptas!'
//             },
//             {
//                 id: 't1',
//                 title: 'Can we pick which celebrity homes we will get to see?',
//                 text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere deserunt eum, magni tempora consequuntur blanditiis voluptatibus sit deleniti asperiores!'
//             },
//             {
//                 id: 't2',
//                 title: 'Can my large group book a bus entirely for ourselves?',
//                 text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste possimus sit, quas eum itaque.'
//             }
//         ]
//     },
//     {
//         id: 1,
//         title: 'Boarding',
//         img: img1,
//         content: [
//                 {
//                 id: 'b0',
//                 title: "What happens if I can't get back to the bus on time?",
//                 text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus reprehenderit veritatis eum, voluptatem deleniti suscipit labore voluptate? Laudantium, tempora.'
//             },
//             {
//                 id: 'b1',
//                 title: 'Are there any drinks provided?',
//                 text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis cum at fugiat architecto voluptas similique officia, ab sed nisi soluta.'
//             },
//             {
//                 id: 'b2',
//                 title: 'Am I guaranteed to be able to sit with my group on the bus?',
//                 text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, eum. Delectus cupiditate excepturi aspernatur atque accusantium numquam?'
//             }
//         ]
//     },
//     {
//         id: 2,
//         title: 'Payment',
//         img: img2,
//         content: [
//                 {
//                 id: 'p0',
//                 title: "Do we pay as a group or individually?",
//                 text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
//             },
//             {
//                 id: 'p1',
//                 title: 'I received a discount code. How can it be applied?',
//                 text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, repudiandae.'
//             },
//             {
//                 id: 'p2',
//                 title: 'What is your refund policy?',
//                 text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae nesciunt, sit voluptatibus at in, mollitia modi dolor quia voluptatem, harum dolorum optio! Delectus eaque culpa beatae nisi!'
//             }
//         ]
//     }
// ]