import Nav from '../../components/Navbar';
import {FAQTitle} from './FAQList';
import Header from '../../components/Header';
import {FAQAccordionData} from './FAQList';
import Accordion from '../../components/AlternatingAccordion';
import BusBackground from '../../components/PreFooterBackground';
import React from 'react';

function FAQ() {
    return (
        <React.Fragment>
            <Nav page={'faq'} />
            <Header key={FAQTitle.id} headerData={FAQTitle}/>
            <main>
                <Accordion key='faq' accordionData={FAQAccordionData} />
            </main>
            <BusBackground/>
        </React.Fragment>
    );
}

export default FAQ;