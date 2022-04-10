import Nav from '../../components/Navbar';
import {AboutTitle} from './AboutList';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
import MediaImgTitleText from '../../components/MediaImgTitleText';
import {AboutData} from './AboutList';
import BusBackground from '../../components/PreFooterBackground';
import Footer from '../../components/Footer';

const AboutUsHeader = () => {
    return (
        <Header key={AboutTitle.id} headerData={AboutTitle}/>
    );
}

const AboutPageMedia = () => {
    return (
        <MediaImgTitleText data={AboutData} />
    );
}

function AboutUs() {
  return (
    <>
      <Nav />
      <AboutUsHeader />
      {/* <BookingModal /> */}
      <AboutPageMedia />
      <BusBackground/>
      <Footer />
    </>
  );
}

export default AboutUs;