import Nav from '../../components/Navbar';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
import ContactForm from '../../components/ContactForm';
import BusBackground from '../../components/PreFooterBackground';
import Footer from '../../components/Footer';
// import './App.css';

function ContactUs() {
    return (
            <>
                <Nav />
                <Header />
                {/* <BookingModal /> */}
                <ContactForm />
                <BusBackground/>
                <Footer />
            </>
    );
}

export default ContactUs;