import React from 'react';


const FAQAccordion = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="container pl-0 pr-0 ml-0 mr-0">
                <div className="row">
                    <div className="col mb-0 pb-0">
                        <h3 className="mb-3 about-text about-heading-text text-center">Tours Info</h3>
                    </div>
                </div>
                <div className="row mb-5 mt-3 d-flex justify-content-center align-items-center">
                    <div className="col-md-4 d-none d-md-block">
                        <div className="faq-zoom-img-container">
                            <img className="mr-3 faq-img" src="img/venice-beach-sand.jpg"
                            alt="Breadcrumb Trail" />
                        </div>
                    </div>
                    <div className="col-10 col-sm-11 col-md-7 about-text">
                        <div className="faq-accordion-size">
                            <div className="accordion" id="accordion1">
                                <div className="card faq-card">
                                    <div role="tab" className="card-header">
                                        <h4>
                                            <a data-toggle="collapse" data-target="#q1">
                                                What if I book a large group and we would like to swap out one stop with another?</a>
                                        </h4>
                                        <div className="collapse show" id="q1" data-parent="#accordion1">
                                            <div className="card-body">
                                                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odio sint atque! Molestias distinctio eaque necessitatibus illum, nemo totam quis quas, asperiores laudantium praesentium voluptas!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card faq-card">
                                    <div role="tab" className="card-header">
                                        <h4>
                                            <a className="collapsed" data-toggle="collapse" data-target="#q2">
                                                Can we pick which celebrity homes we will get to see?
                                            </a>
                                        </h4>
                                        <div className="collapse" id="q2" data-parent="#accordion1">
                                            <div className="card-body">
                                                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere deserunt eum, magni tempora consequuntur blanditiis voluptatibus sit deleniti asperiores!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card faq-card">
                                    <div role="tab" className="card-header">
                                        <h4>
                                            <a className="collapsed" data-toggle="collapse" data-target="#q3">
                                                Can my large group book a bus entirely for ourselves?
                                            </a>
                                        </h4>
                                        <div className="collapse" id="q3" data-parent="#accordion1">
                                            <div className="card-body">
                                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste possimus sit, quas eum itaque.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-0 pb-0">
                        <h3 className="mb-3 about-text about-heading-text text-center">Boarding</h3>
                    </div>
                </div>
                <div className="row mb-5 mt-3 d-flex justify-content-center align-items-center">
                    <div className="col-10 col-sm-11 col-md-7 about-text">
                        <div className="faq-accordion-size">
                            <div className="accordion" id="accordion2">
                                <div className="card faq-card-2">
                                    <div role="tab" className="card-header">
                                        <h4>
                                            <a data-toggle="collapse" data-target="#qb1">
                                                What happens if I can't get back to the bus on time?</a>
                                        </h4>
                                        <div className="collapse show" id="qb1" data-parent="#accordion2">
                                            <div className="card-body">
                                                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus reprehenderit veritatis eum, voluptatem deleniti suscipit labore voluptate? Laudantium, tempora.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card faq-card-2">
                                    <div role="tab" className="card-header">
                                        <h4>
                                            <a className="collapsed" data-toggle="collapse" data-target="#qb2">
                                                Are there any drinks provided?
                                            </a>
                                        </h4>
                                        <div className="collapse" id="qb2" data-parent="#accordion2">
                                            <div className="card-body">
                                                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis cum at fugiat architecto voluptas similique officia, ab sed nisi soluta.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card faq-card-2">
                                    <div role="tab" className="card-header">
                                        <h4>
                                            <a className="collapsed" data-toggle="collapse" data-target="#qb3">
                                                Am I guaranteed to be able to sit with my group on the bus?
                                            </a>
                                        </h4>
                                        <div className="collapse" id="qb3" data-parent="#accordion2">
                                            <div className="card-body">
                                                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, eum. Delectus cupiditate excepturi aspernatur atque accusantium numquam?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <div className="faq-zoom-img-container">
                            <img className="mr-3 faq-img" src="img/downtownla.jpg" alt="Breadcrumb Trail" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-0 pb-0">
                        <h3 className="mb-3 about-text about-heading-text text-center">Payment</h3>
                    </div>
                </div>
                <div className="row mb-5 mt-3 d-flex justify-content-center align-items-center">
                    <div className="col-sm-4 d-none d-md-block">
                        <div className="faq-zoom-img-container">
                            <img className="mr-3 faq-img" src="img/card-seaside.jpg" alt="Breadcrumb Trail" />
                        </div>
                    </div>
                    <div className="col-10 col-sm-11 col-md-7 about-text">
                        <div className="faq-accordion-size">    
                            <div className="accordion" id="accordion3">
                                <div className="card faq-card">
                                    <div role="tab" className="card-header">
                                        <h4>
                                            <a data-toggle="collapse" data-target="#qp1">
                                                Do we pay as a group or individually?</a>
                                        </h4>
                                        <div className="collapse show" id="qp1" data-parent="#accordion3">
                                            <div className="card-body">
                                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card faq-card">
                                    <div role="tab" className="card-header">
                                        <h4>
                                            <a className="collapsed" data-toggle="collapse" data-target="#qp2">
                                                I received a discount code. How can it be applied?
                                            </a>
                                        </h4>
                                        <div className="collapse" id="qp2" data-parent="#accordion3">
                                            <div className="card-body">
                                                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, repudiandae.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card faq-card">
                                    <div role="tab" className="card-header">
                                        <h4>
                                            <a className="collapsed" data-toggle="collapse" data-target="#qp3">
                                                What is your refund policy?
                                            </a>
                                        </h4>
                                        <div className="collapse" id="qp3" data-parent="#accordion3">
                                            <div className="card-body">
                                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae nesciunt, sit voluptatibus at in, mollitia modi dolor quia voluptatem, harum dolorum optio! Delectus eaque culpa beatae nisi!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default FAQAccordion;