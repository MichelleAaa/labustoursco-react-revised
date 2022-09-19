import imgTourCard1 from '../../assets/beach-trip.jpg';
import imgTourCard2 from '../../assets/venice-beach-skating.jpg';
import imgTourCard3 from '../../assets/hollywood-brush.jpg';

export const SeasideTourTitle = {
    id: 0,
    title: 'Seaside Tour',
    subtitle: 'Visit Three Beaches in one Day!'
};

export const SeasideTourHeadingText = {
    id: 0,
    title: "Lorem ipsum dolor sit amet",
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

export const SeasideTourCardDetails = [
    {
        id: 0,
        title: 'See the Shore',
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
        button: {
                text: 'Learn More About the Tour Schedule Here',
                link: '#stops'
            }
    },
    {
        id: 1,
        title: 'Spend Time with Family',
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
        button: {
                text: 'Click Here to Book the Seaside Tour Now',
                link: ''
            }
    },
    {
        id: 2,
        title: 'Optional Celebrity Tour',
        subtext: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: imgTourCard3,
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
        button: {
                text: 'Learn More About the Celebrity Homes Tour',
                link: '#celebHomesTour'
            }
    }
];

export const CelebrityHomesTourDetails = {
    id: 0,
    title: "Optional 2-Hour Celebrity Homes Tour",
    text: [
        {
            id: 0,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni explicabo saepe quidem fugit earum, a nemo excepturi illum, consectetur natus beatae cum iste, fuga ratione possimus error labore deserunt nostrum!"
        },
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab impedit libero odio harum quidem praesentium ducimus quae minus quibusdam alias! At libero sit pariatur nobis error cupiditate, obcaecati voluptas."
        }
    ]
};


export const SeasideTourDetailsText = {
    id: 0,
    htmlId: 'stops',
    title: "Visit Venice Beach, Santa Monica Beach, and More",
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

export const SeasideTourPricingDetails = {
    id: 3,
    title: "Seaside Adventure Package",
    headings: [
        {
            id: 0,
            title: "Tour Package"
        },
        {
            id: 1,
            title: "1 Traveler"
        },
        {
            id: 2,
            title: "2 Travelers"
        },
        {
            id: 3,
            title: "3+ Travelers"
        }
    ],
    rowData: [
            {
                id: 0,
                cells: [
                    {
                        id: 0,
                        title: "Seaside Trip"
                    },
                    {
                        id: 1,
                        title: "$100 per Ticket"
                    },
                    {
                        id: 2,
                        title: "$80 per Ticket"
                    },
                    {
                        id: 3,
                        title: "$75 per Ticket"
                    }
                ]
            },
            {
                id: 1,
                cells: [
                {
                    id: 0,
                    title: "Seaside Trip & Celebrity Homes"
                },
                {
                    id: 1,
                    title: "$120 per Ticket"
                },
                {
                    id: 2,
                    title: "$100 per Ticket"
                },
                {
                    id: 3,
                    title: "$95 per Ticket"
                }
            ]
        }
    ]
};
