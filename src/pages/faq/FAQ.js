import Nav from '../../components/Navbar';
import {FAQTitle} from './FAQList';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
import {FAQAccordionData} from './FAQList';
import Accordion from '../../components/AlternatingAccordion';
import BusBackground from '../../components/PreFooterBackground';
import Footer from '../../components/Footer';
// import './App.css';

const FAQHeader = () => {
    return (
        <Header key={FAQTitle.id} data={FAQTitle}/>
    );
}

const FAQAccordion = () => {
    return (
        <Accordion key='faq' data={FAQAccordionData} />
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
            <Footer />
        </>
    );
}

export default FAQ;