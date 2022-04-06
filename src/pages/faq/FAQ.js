import Nav from '../../components/Navbar';
import {FAQTitle} from './FAQList';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
// import FAQAccordion from '../../components/FAQAccordion';
import {FAQAccordionData} from './FAQList';
import Accordion from '../../components/AlternatingAccordion';
import BusBackground from '../../components/PreFooterBackground';
import Footer from '../../components/Footer';
// import './App.css';

const FAQHeader = () => {
  console.log(FAQTitle);
    return (
        <Header key={FAQTitle.id} data={FAQTitle}/>
    );
}

const FAQAccordion = () => {
    return (
        <Accordion data={FAQAccordionData} />
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