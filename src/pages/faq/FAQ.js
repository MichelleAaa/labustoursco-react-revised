import Nav from '../../components/Navbar';
import {FAQTitle} from './FAQList';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
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
            {/* <BookingModal /> */}
            <FAQAccordion />
            <BusBackground/>
        </>
    );
}

export default FAQ;