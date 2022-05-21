import React from 'react';
import imgGrid1 from '../../assets/card-city.jpg';
import imgGrid2 from '../../assets/hollywoodpalm.jpg';
import imgGrid3 from '../../assets/santamonicacropped.png';
import imgTourCard1 from '../../assets/lacropped.jpg';
import imgTourCard2 from '../../assets/card-seaside.jpg';

export const HomeTitle = {
    id: 0,
    supertitle: 'L.A.',
    title: 'Bus Tours',
    subtitle: 'City and Seaside Adventures in the Los Angeles Area'
};

export const HomeHeadingText = {
    id: 0,
    title: "The Best Bus Tours in L.A.",
    text: [
        {
            id: 0,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ipsa ex rerum similique dolore! Possimus quis sit architecto aut, beatae ut accusantium quasi dolore nobis asperiores minima atque neque eaque?"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur, dolorum excepturi suscipit, illo nesciunt, assumenda eius nulla placeat corrupti recusandae. Minus, id quisquam. Cum necessitatibus eum inventore blanditiis adipisci exercitationem deserunt. Hic placeat quis nulla exercitationem, facilis iure quisquam repellendus nisi eos, aut magnam, rem incidunt nemo inventore dolore."
        }
    ]
};

export const ThreeImgData = {
        img1: imgGrid1,
        img2: imgGrid2,
        img3: imgGrid3
    };

export const HomeAboutToursText = {
    id: 0,
    title: "About Our Tours",
    text: [
        {
            id: 0,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus odit itaque molestias aut omnis eaque quas sint nihil ab earum eligendi repellendus laboriosam velit repudiandae possimus libero magnam facilis suscipit accusamus, repellat magni. Aliquid facilis temporibus nobis repellat neque, harum aspernatur ea magnam, in sapiente rerum ex omnis? Reiciendis!"
        },
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque in reprehenderit, saepe alias iure incidunt rem quaerat sint ab odio quia sequi dolor dicta, distinctio tempore vitae nisi a obcaecati nobis, labore omnis minima? Reprehenderit architecto quam eos eaque."
        }
    ]
};

export const TourCardDetails = [
    {
        id: 0,
        title: 'City Tour',
        subtext: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: imgTourCard1,
        listText: [
            {
                id: 0,
                text: 'Cras justo odio'
            },
            {
                id: 2,
                text: 'Dapibus ac facilisis in'
            },
            {
                id: 3,
                text: 'Vestibulum at eros'
            }
        ],
        button1: {
                text: 'Book Now',
                link: ''
            },
        button2: {
            text: 'Learn More',
            link: '/citytour'
        }
    },
    {
        id: 1,
        title: 'Seaside Tour',
        subtext: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: imgTourCard2,
        listText: [
            {
                id: 0,
                text: 'Cras justo odio'
            },
            {
                id: 2,
                text: 'Dapibus ac facilisis in'
            },
            {
                id: 3,
                text: 'Vestibulum at eros'
            }
        ],
        button1: {
                text: 'Book Now',
                link: ''
            },
        button2: {
            text: 'Learn More',
                link: '/seasidetour'
        }
    }
];

export const ReviewCarouselData = [
    {
        id: 0,
        heading: 'Excellent!',
        stars: 5,
        text: 'It was so much fun! We got to see so many places and took so many photos to never forget!',
        name: 'Tina',
        location: 'Salt Lake City, UT'
    },
    {
        id: 1,
        heading: 'Unforgettable',
        stars: 5,
        text: 'The kids had a great time. My only regret is that the time went by too fast.',
        name: 'Justin',
        location: 'Seattle, WA'
    },
    {
        id: 2,
        heading: 'We Had a Blast!',
        stars: 5,
        text: 'So glad we booked this tour, we got to see so many places around the city.',
        name: 'Jennifer',
        location: 'Boston, MA'
    },
    {
        id: 3,
        heading: 'Worth It',
        stars: 5,
        text: 'My family and I are considering moving to L.A., so this tour was great to get a sense of what the area has to offer.',
        name: 'Tony',
        location: 'San Antonio, TX'
    }
];