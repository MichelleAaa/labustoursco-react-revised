import React from 'react';

const MediaImgTitleText = (props) => {
    return (
        <div className="container">
            {props.data.map(item => {
                if(parseInt(item.id) % 2 === 0) {
                    return <ListItemEven key={item.id} title={item.title} text={item.text} img={item.img} />
                } else {
                    return <ListItemOdd key={item.id} title={item.title} text={item.text} img={item.img} />
                }
            })}
        </div>
        );
}

const ListItemEven = (item) => {
    let { title, text, img } = item;
    return (
        <div className="row row-content align-items-center mb-5 mt-5">
            <div className="col">
                <div className="media about-text">
                    <img className="mr-3 img-thumbnail media-img align-self-center" src={img} alt="Breadcrumb Trail" />
                    <div className="media-body align-self-center">
                        <h3 className="mb-3 about-heading-text text-center">{title}</h3>
                        <p className="">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 

const ListItemOdd = (item) => {
    console.log(item);
    return (
        <div className="row row-content align-items-center mb-5 mt-5">
            <div className="col">
                <div className="media about-text">
                    <div className="media-body align-self-center">
                        <h3 className="mb-3 about-heading-text text-center">{item.title}</h3>
                        <p className="text-right mr-3">{item.text}</p>
                    </div>
                    <img className="mr-3 img-thumbnail media-img align-self-center" src={item.img} alt="Breadcrumb Trail" />
                </div>
            </div>
        </div>
    );
} 

export default MediaImgTitleText;