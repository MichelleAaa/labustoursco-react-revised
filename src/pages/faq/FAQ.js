import Nav from '../../components/Navbar';
import {FAQTitle} from './FAQList';
import Header from '../../components/Header';
import {FAQAccordionData} from './FAQList';
import Accordion from '../../components/AlternatingAccordion';
import BusBackground from '../../components/PreFooterBackground';

const FAQHeader = () => {
    return (
        <Header key={FAQTitle.id} headerData={FAQTitle}/>
    );
}

const FAQAccordion = () => {
    return (
        <Accordion key='faq' accordionData={FAQAccordionData} />
    );
}

function FAQ() {
    return (
        <>
            <Nav />
            <FAQHeader />
            <main>
                <FAQAccordion />
            </main>
                <BusBackground/>
        </>
    );
}

export default FAQ;