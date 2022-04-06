import React from 'react';

const CardsLarge = (props) => {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center py-5">
                {
                    props.data.map(card => <LargeCard key={card.id} data={card}/>)
                }
            </div>
        </div>
    );
}

const LargeCard = (props) => {
    return(
            <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-3 px-5 pl-xl-0 pb-5 pb-md-0">
                <div className="card home-card mb-5">
                    <img src={props.data.img} alt="" className="img-fluid card-img" />
                    <div className="card-body" >
                        <h5 className="card-title">{props.data.title}</h5>
                        <p className="card-text">{props.data.subtext}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            props.data.listText.map(item => <ListItem key={item.id} data={item}/>)
                        }
                    </ul>
                    <div className="card-body">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-5">
                                <div className="card-link-bottom">
                                    <a href={props.data.button1.link} className="card-link" data-toggle="modal" data-target="#bookingModal">{props.data.button1.text}</a>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card-link-bottom">
                                    <a href={props.data.button2.link} className="card-link">{props.data.button2.text} &rarr;</a>
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

export default CardsLarge;

