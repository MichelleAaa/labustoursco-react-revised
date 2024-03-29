import React from 'react';

const MediaImgTitleText = (props) => {
    const ListItemEven = (item) => {
        let { title, text, img } = item;
        return (
            <div className="row align-items-center my-5">
                <div className="col">
                    <article className="media section-text">
                        <img className="mr-3 img-thumbnail media-img align-self-center" src={img} alt="Breadcrumb Trail" />
                        <div className="media-body align-self-center">
                            <h2 className="mb-3 section-heading text-center">{title}</h2>
                            <p>{text}</p>
                        </div>
                    </article>
                </div>
            </div>
        );
    } 

    const ListItemOdd = (item) => {

        return (
            <div className="row align-items-center my-5">
                <div className="col">
                    <article className="media section-text">
                        <div className="media-body align-self-center">
                            <h2 className="mb-3 section-heading text-center">{item.title}</h2>
                            <p className="text-right mr-3">{item.text}</p>
                        </div>
                        <img className="mr-3 img-thumbnail media-img align-self-center" src={item.img} alt="Breadcrumb Trail" />
                    </article>
                </div>
            </div>
        );
    } 
    
    return (
        <section className="container mb-5 pb-5">
            {props.data.map(item => {
                if(parseInt(item.id) % 2 === 0) {
                    return <ListItemEven key={item.id} title={item.title} text={item.text} img={item.img} />
                } else {
                    return <ListItemOdd key={item.id} title={item.title} text={item.text} img={item.img} />
                }
            })}
        </section>
    );
}

export default MediaImgTitleText;