import Nav from '../../components/Navbar';
import {CityTourTitle, CityTourHeadingText, CityTourCardDetails, CelebrityHomesTourDetails, CityTourDetailsText, CityTourPricingDetails} from './CityTourList';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
import TextHeadingWithPara from "../../components/TextHeadingWithPara";
import CardsSmall from "../../components/CardsSmall";
import TextSmallHeadingWithPara from "../../components/TextSmallHeadingWithPara";
import BusBackground from "../../components/PreFooterBackground";
import Table from '../../components/Table';
import Footer from '../../components/Footer';
// import './App.css';

const CityTourHeader = () => {
    return (
        <Header key={CityTourTitle.id} data={CityTourTitle}/>
    );
}

const CityTourHeading = () => {
    return <TextHeadingWithPara data={CityTourHeadingText}/>
}

const CityTourCards = () => {
  return(
    <CardsSmall data={CityTourCardDetails}/>
  );
}

const CelebrityTourDetails = () => {
    return <TextSmallHeadingWithPara data={CelebrityHomesTourDetails}/>
}

const CityTourDetails = () => {
    return <TextHeadingWithPara data={CityTourDetailsText}/>
}

const CityTourTable = () => {
    return <Table key={CityTourPricingDetails.id} data={CityTourPricingDetails}/>
}

function CityTour() {
  return (
    <>
      <Nav />
      <CityTourHeader />
      <CityTourHeading />
      {/* <BookingModal /> */}
      <CityTourCards />
      <CelebrityTourDetails />
      <CityTourDetails />
      <CityTourTable />
      <BusBackground/>
      <Footer />
    </>
  );
}

export default CityTour;