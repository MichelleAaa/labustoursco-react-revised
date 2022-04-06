import Nav from '../../components/Navbar';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
import HeadingWithParagraphs from "../../components/TextHeadingWithPara";
import HomeThreePictures from '../../components/ThreeImgGrid';
import CardDetails from '../../components/CardsLarge';
import BusBackground from '../../components/PreFooterBackground';
import Footer from '../../components/Footer';
// import './App.css';

function HomePage() {
  return (
    <>
      <Nav />
      <Header />
      {/* <BookingModal /> */}
      <HeadingWithParagraphs />
      <HomeThreePictures />
      <HeadingWithParagraphs />
      <CardDetails />
      <BusBackground showReviewCarousel={true}/>
      <Footer />
    </>
  );
}

export default HomePage;