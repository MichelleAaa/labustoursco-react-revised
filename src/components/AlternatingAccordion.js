import React, { useContext } from 'react';

const ItemContext = React.createContext();

const Accordion = (props) => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="container pl-0 pr-0 ml-0 mr-0">
                    {
                    props.data.map(item => {
                        if(parseInt(item.id) % 2 === 0) {
                            return (
                            <ItemContext.Provider value={{ item }}>
                                    <AccordionItemLeft key={item.id} title={item.title} img={item.img} content={item.content} />
                            </ItemContext.Provider>
                            );
                        } else {
                            return (
                                    <ItemContext.Provider value={{ item }}>
                                <AccordionItemRight key={item.id} title={item.title} img={item.img} content={item.content} id={item.id} />
                                </ItemContext.Provider>
                            )
                        }
                    })
                }
                </div>
            </div>
        </>
    );
}

const AccordionItemLeft = (item) => {
    console.log("this is the item in accordionitemleft");
    console.log(item);
    const props = useContext(ItemContext);
    console.log('props.item.id value in accordionitemleft');
    console.log(props.item.id);

    const val = props.item.id;
    console.log("this is the value of va, which is item.key in accoridonitemleft" + val);
    return (
            <>
                <div className="row">
                    <div className="col mb-0 pb-0">
                        <h3 className="mb-3 about-text about-heading-text text-center">{item.title}</h3>
                    </div>
                </div>
                <div className="row mb-5 mt-3 d-flex justify-content-center align-items-center">
                    <div className="col-md-4 d-none d-md-block">
                        <div className="faq-zoom-img-container">
                            <img className="mr-3 faq-img" src={item.img}
                            alt="Breadcrumb Trail" />
                        </div>
                    </div>
                    <div className="col-10 col-sm-11 col-md-7 about-text">
                        <div className="faq-accordion-size">
                            <div className="accordion" id={"accordion" + props.item.id}>
                                <AccordionInnerContent key={props.item.id} data={item} val={props.item.id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
}

const AccordionInnerContent = (data) => {
    let val = data.val;
    return(
            data.data.content.map((item) => {
                return (
                    <div key={item.id} className="card faq-card">
                        <div role="tab" className="card-header">
                            <h4>
                                <a data-toggle="collapse" data-target={"#q" + item.id}>
                                    {item.title}</a>
                            </h4>
                            <div className="collapse" id={"q" + item.id} data-parent={"#accordion" + val}>
                                <div className="card-body">
                                    <p className="">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        )
    )
}

const AccordionItemRight = (item) => {
    const props = useContext(ItemContext);
    const val = props.item.id;
    console.log("this is the value of va, which is item.key in accoridonitemright" + val);
    return (
            <>
                <div className="row">
                    <div className="col mb-0 pb-0">
                        <h3 className="mb-3 about-text about-heading-text text-center">{item.title}</h3>
                    </div>
                </div>
                <div className="row mb-5 mt-3 d-flex justify-content-center align-items-center">
                    <div className="col-10 col-sm-11 col-md-7 about-text">
                        <div className="faq-accordion-size">
                            <div className="accordion" id={"accordion" + props.item.id}>
                                <AccordionInnerContent key={props.item.id} data={item} val={props.item.id}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <div className="faq-zoom-img-container">
                            <img className="mr-3 faq-img" src={item.img} alt="Breadcrumb Trail" />
                        </div>
                    </div>
                </div>
            </>
    );
}

export default Accordion;