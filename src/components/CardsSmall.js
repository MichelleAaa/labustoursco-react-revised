import React from 'react';

const CardsSmall = (props) => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center py-5 px-2">
                {
                    props.data.map(card => <SmallCard key={card.id} data={card}/>)
                }
            </div>
        </div>
    );
}

const SmallCard = (props) => {
    return (
        <div className="col-9 col-sm-8 col-md-5 col-lg-4 col-xl-3 m-0 p-0 px-md-2 py-5">
            <div className="card card-tour">
                <img src={props.data.img} alt="" className="img-fluid card-img-tour"/>
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's
                        content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        props.data.listText.map(item => <ListItem key={item.id} data={item}/>)
                    }
                </ul>
                <div className="card-body">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-10">
                            <div className="card-link-bottom text-center">
                                <a href={props.data.button.text} className="card-link">{props.data.button.text} &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ListItem = (props) => {
    return (
            <li className="list-group-item">{props.data.text}</li>
    );
}

// const CardsSmall = () => {
//     return (
//         <div className="container">
//             <div className="row d-flex justify-content-center py-5 px-2">
//                 <div className="col-9 col-sm-8 col-md-5 col-lg-4 col-xl-3 m-0 p-0 px-md-2 py-5">
//                     <div className="card card-tour">
//                         <img src="/img/city-tour-card-beverly-hills.jpg" alt="" className="img-fluid card-img-tour"/>
//                         <div className="card-body">
//                             <h5 className="card-title">Tons of Stops</h5>
//                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of
//                                 the card's
//                                 content.</p>
//                         </div>
//                         <ul className="list-group list-group-flush">
//                             <li className="list-group-item">Cras justo odio</li>
//                             <li className="list-group-item">Dapibus ac facilisis in</li>
//                             <li className="list-group-item">Vestibulum at eros</li>
//                         </ul>
//                         <div className="card-body">
//                             <div className="row d-flex justify-content-center align-items-center">
//                                 <div className="col-10">
//                                     <div className="card-link-bottom text-center">
//                                         <a href="#stops" className="card-link">Learn More About the Tour Schedule &rarr;</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-9 col-sm-7 col-md-5 col-lg-4 col-xl-3 m-0 p-0 px-md-2 py-5">
//                     <div className="card card-tour">
//                         <img src="/img/citytourbanner.jpg" alt="" className="img-fluid card-img-tour"/>
//                         <div className="card-body">
//                             <h5 className="card-title">See the City</h5>
//                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of
//                                 the card's
//                                 content.</p>
//                         </div>
//                         <ul className="list-group list-group-flush">
//                             <li className="list-group-item">Cras justo odio</li>
//                             <li className="list-group-item">Dapibus ac facilisis in</li>
//                             <li className="list-group-item">Vestibulum at eros</li>
//                         </ul>
//                         <div className="card-body">
//                             <div className="row d-flex justify-content-center align-items-center">
//                                 <div className="col-6">
//                                     <div className="card-link-bottom text-center">
//                                         <a href="#" className="card-link" data-toggle="modal" data-target="#bookingModal">Book the City Tour Now &rarr;</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-9 col-sm-7 col-md-5 col-lg-4 col-xl-3 m-0 p-0 px-md-2 py-5">
//                     <div className="card card-tour">
//                         <img src="/img/city-tour-card-palms.jpg" alt="" className="img-fluid card-img-tour"/>
//                         <div className="card-body">
//                             <h5 className="card-title">Optional Celebrity Tour</h5>
//                             <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repellendus?</p>
//                         </div>
//                         <ul className="list-group list-group-flush">
//                             <li className="list-group-item">Cras justo odio</li>
//                             <li className="list-group-item">Dapibus ac facilisis in</li>
//                             <li className="list-group-item">Vestibulum at eros</li>
//                         </ul>
//                         <div className="card-body">
//                             <div className="row d-flex justify-content-center align-items-center">
//                                 <div className="col-11">
//                                     <div className="card-link-bottom text-center">
//                                         <a href="#celebHomesTour" className="card-link">Learn More About the Celebrity Homes Tour &rarr;</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


export default CardsSmall;