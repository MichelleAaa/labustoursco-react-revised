import Nav from '../../components/Navbar';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
import HeadingWithParagraphs from "../../components/TextHeadingWithPara";
import ThreeTourCards from "../../components/CardsSmall";
import CelebrityTourDetails from "../../components/TextSmallHeadingWithPara";
import BusBackground from "../../components/PreFooterBackground";
import TourTable from '../../components/TourTable';
import Footer from '../../components/Footer';
// import './App.css';

function CityTour() {
  return (
    <>
      <Nav />
      <Header />
      {/* <BookingModal /> */}
      <HeadingWithParagraphs />
      <ThreeTourCards />
      <CelebrityTourDetails />
      <HeadingWithParagraphs />
      <TourTable />
      <BusBackground/>
      <Footer />
    </>
  );
}

export default CityTour;