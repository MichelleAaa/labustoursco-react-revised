import Nav from '../../components/Navbar';
import {ContactUsTitle, ContactUsFormData} from './ContactUsList';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
import {WelcomeText} from './ContactUsList';
import TextHeadingWithPara from "../../components/TextHeadingWithPara";
import ContactForm from '../../components/ContactForm';
import BusBackground from '../../components/PreFooterBackground';
import Footer from '../../components/Footer';
// import './App.css';

const ContactUsHeader = () => {
    return (
        <Header key={ContactUsTitle.id} headerData={ContactUsTitle}/>
    );
}

const WelcomeHeading = () => {
    return <TextHeadingWithPara textData={WelcomeText}/>
}

const ContactUsForm = () => {
    return (
        <ContactForm ContactUsFormData={ContactUsFormData}/>
    );
}

function ContactUs() {
    return (
            <>
                <Nav />
                <ContactUsHeader />
                {/* <BookingModal /> */}
                <WelcomeHeading />
                {/* <ContactForm /> */}
                <ContactUsForm />
                <BusBackground/>
                <Footer />
            </>
    );
}

export default ContactUs;