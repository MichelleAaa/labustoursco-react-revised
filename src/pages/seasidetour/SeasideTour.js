import Nav from '../../components/Navbar';
import {SeasideTourTitle, SeasideTourHeadingText, SeasideTourCardDetails, CelebrityHomesTourDetails, SeasideTourDetailsText, SeasideTourPricingDetails} from './SeasideTourList';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
import TextHeadingWithPara from "../../components/TextHeadingWithPara";
import CardsSmall from "../../components/CardsSmall";
import TextSmallHeadingWithPara from "../../components/TextSmallHeadingWithPara";
import BusBackground from "../../components/PreFooterBackground";
import Table from '../../components/Table';
import Footer from '../../components/Footer';
// import './App.css';

const SeasideTourHeader = () => {
    return (
        <Header key={SeasideTourTitle.id} data={SeasideTourTitle}/>
    );
}

const SeasideTourHeading = () => {
    return <TextHeadingWithPara data={SeasideTourHeadingText}/>
}

const SeasideTourCards = () => {
  return(
    <CardsSmall data={SeasideTourCardDetails}/>
  );
}

const CelebrityTourDetails = () => {
    return <TextSmallHeadingWithPara data={CelebrityHomesTourDetails}/>
}

const SeasideTourDetails = () => {
    return <TextHeadingWithPara data={SeasideTourDetailsText}/>
}

const SeasideTourTable = () => {
    return <Table key={SeasideTourPricingDetails.id} data={SeasideTourPricingDetails}/>
}

function SeasideTour() {
  return (
        <>
            <Nav />
            <SeasideTourHeader />
            <SeasideTourHeading />
            {/* <BookingModal /> */}
            <SeasideTourCards />
            <CelebrityTourDetails />
            <SeasideTourDetails />
            <SeasideTourTable />
            <BusBackground/>
            <Footer />
        </>
    );
}

export default SeasideTour;