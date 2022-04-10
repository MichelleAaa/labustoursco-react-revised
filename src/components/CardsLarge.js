import React from 'react';
import BookingModal from './BookingModal';

const CardsLarge = ({ cardsData }) => {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center py-5">
                {
                    cardsData.map(card => <LargeCard key={card.id} CardData={card}/>)
                }
            </div>
        </div>
    );
}

const LargeCard = ({ CardData }) => {
    return(
            <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-3 px-5 pl-xl-0 pb-5 pb-md-0">
                <div className="card home-card mb-5">
                    <img src={CardData.img} alt="" className="img-fluid card-img" />
                    <div className="card-body" >
                        <h5 className="card-title">{CardData.title}</h5>
                        <p className="card-text">{CardData.subtext}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            CardData.listText.map(item => <ListItem key={item.id} listItemData={item}/>)
                        }
                    </ul>
                    <div className="card-body">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-5">
                                <div className="card-link-bottom">
                                    <a href={CardData.button1.link} className="card-link" data-toggle="modal" data-target="#bookingModal">{CardData.button1.text}</a>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card-link-bottom">
                                    <a href={CardData.button2.link} className="card-link">{CardData.button2.text} &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

const ListItem = ({ listItemData }) => {
    return (
            <li className="list-group-item">{listItemData.text}</li>
    );
}

export default CardsLarge;

