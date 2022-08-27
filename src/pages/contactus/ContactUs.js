import Nav from '../../components/Navbar';
import {ContactUsTitle, ContactUsFormData} from './ContactUsList';
import Header from '../../components/Header';
import {WelcomeText} from './ContactUsList';
import TextHeadingWithPara from "../../components/TextHeadingWithPara";
import ContactForm from '../../components/ContactForm';
import BusBackground from '../../components/PreFooterBackground';

function ContactUs() {
    return (
            <>
                <Nav page={'contactus'} />
                <Header key={ContactUsTitle.id} headerData={ContactUsTitle}/>
                <TextHeadingWithPara textData={WelcomeText}/>
                <ContactForm ContactUsFormData={ContactUsFormData}/>
                <BusBackground/>
            </>
    );
}

export default ContactUs;