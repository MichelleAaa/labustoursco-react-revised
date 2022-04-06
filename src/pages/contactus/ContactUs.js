import Nav from '../../components/Navbar';
import {ContactUsTitle} from './ContactUsList';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
import {WelcomeText} from './ContactUsList';
import TextHeadingWithPara from "../../components/TextHeadingWithPara";
import ContactForm from '../../components/ContactForm';
import BusBackground from '../../components/PreFooterBackground';
import Footer from '../../components/Footer';
// import './App.css';

const ContactUsHeader = () => {
  console.log(ContactUsTitle);
    return (
        <Header key={ContactUsTitle.id} data={ContactUsTitle}/>
    );
}

const WelcomeHeading = () => {
    return <TextHeadingWithPara data={WelcomeText}/>
}

function ContactUs() {
    return (
            <>
                <Nav />
                <ContactUsHeader />
                {/* <BookingModal /> */}
                <WelcomeHeading />
                {/* <ContactForm /> */}
                <BusBackground/>
                <Footer />
            </>
    );
}

export default ContactUs;