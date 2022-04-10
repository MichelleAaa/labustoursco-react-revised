import React from 'react';

const CardsSmall = ({ tourCardsData }) => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center py-5 px-2">
                {
                    tourCardsData.map(card => <SmallCard key={card.id} tourCardData={card}/>)
                }
            </div>
        </div>
    );
}

const SmallCard = ({ tourCardData }) => {
    return (
        <div className="col-9 col-sm-8 col-md-5 col-lg-4 col-xl-3 m-0 p-0 px-md-2 py-5">
            <div className="card card-tour">
                <img src={tourCardData.img} alt="" className="img-fluid card-img-tour"/>
                <div className="card-body">
                    <h5 className="card-title">{tourCardData.title}</h5>
                    <p className="card-text">{tourCardData.subtext}.</p>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        tourCardData.listText.map(item => <ListItem key={item.id} listItemData={item}/>)
                    }
                </ul>
                <div className="card-body">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-10">
                            <div className="card-link-bottom text-center">
                                <a href={tourCardData.button.text} className="card-link">{tourCardData.button.text} &rarr;</a>
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

export default CardsSmall;