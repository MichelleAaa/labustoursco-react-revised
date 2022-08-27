import React from 'react';

const Accordion = ({ accordionData }) => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center">
                <div className="container pl-0 pr-0 ml-0 mr-0">
                    {
                    accordionData.map(item => {
                        if(parseInt(item.id) % 2 === 0) {
                            return (
                                <AccordionItemLeft key={item.id} accordionInfo={item} />
                            );
                        } else {
                            return (
                                <AccordionItemRight key={item.id} accordionInfo={item} />
                            )
                        }
                    })
                }
                </div>
            </div>
        </React.Fragment>
    );
}

const AccordionItemLeft = ({ accordionInfo }) => {
    return (
            <React.Fragment>
                <div className="row">
                    <div className="col mb-0 pb-0">
                        <h2 className="mb-3 section-text section-heading text-center">{accordionInfo.title}</h2>
                    </div>
                </div>
                <div className="row mb-5 mt-3 d-flex justify-content-center align-items-center">
                    <div className="col-md-4 d-none d-md-block">
                        <div className="faq-zoom-img-container">
                            <img className="mr-3 faq-img" src={accordionInfo.img}
                            alt="Breadcrumb Trail" />
                        </div>
                    </div>
                    <div className="col-10 col-sm-11 col-md-7 section-text">
                        <div className="faq-accordion-size">
                            <div className="accordion" id={"accordion" + accordionInfo.id}>
                                <AccordionInnerContent key={accordionInfo.id} accordionContent={accordionInfo} val={accordionInfo.id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    );
}

const AccordionInnerContent = ({ accordionContent }) => {
    return(
            accordionContent.content.map((item) => {
                return (
                    <div key={item.id} className="card faq-card">
                        <div role="tab" className="card-header">
                            <h3>
                                <a data-toggle="collapse" data-target={"#q" + item.id}>
                                    {item.title}</a>
                            </h3>
                            <div className="collapse" id={"q" + item.id} data-parent={"#accordion" + accordionContent.id}>
                                <div className="card-body">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        )
    )
}

const AccordionItemRight = ({ accordionInfo }) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col mb-0 pb-0">
                    <h2 className="mb-3 section-text section-heading text-center">{accordionInfo.title}</h2>
                </div>
            </div>
            <div className="row mb-5 mt-3 d-flex justify-content-center align-items-center">
                <div className="col-10 col-sm-11 col-md-7 section-text">
                    <div className="faq-accordion-size">
                        <div className="accordion" id={"accordion" + accordionInfo.id}>
                            <AccordionInnerContent key={accordionInfo.id} accordionContent={accordionInfo} val={accordionInfo.id}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-none d-md-block">
                    <div className="faq-zoom-img-container">
                        <img className="mr-3 faq-img" src={accordionInfo.img} alt="Breadcrumb Trail" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Accordion;