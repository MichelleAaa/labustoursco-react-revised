import Nav from '../../components/Navbar';
import {HomeTitle} from './HomeList';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
import {HomeHeadingText, HomeAboutToursText, TourCardDetails} from './HomeList';
import TextHeadingWithPara from "../../components/TextHeadingWithPara";
import {ThreeImgData} from './HomeList';
import ThreeImgGrid from "../../components/ThreeImgGrid";

import CardsLarge from '../../components/CardsLarge';
import PreFooterBackground from '../../components/PreFooterBackground';
import ReviewCarousel from '../../components/ReviewCarousel';
import Footer from '../../components/Footer';
// import './App.css';

const HomePageHeader = () => {
    return (
        <Header key={HomeTitle.id} data={HomeTitle}/>
    )
}

const WelcomeHeading = () => {
    return <TextHeadingWithPara data={HomeHeadingText}/>
}

const HomeThreeImg = () => {
  return (
    <ThreeImgGrid img={ThreeImgData} />
  )
}

const ToursHeading = () => {
  return (
    <TextHeadingWithPara data={HomeAboutToursText}/>
  );
}

const AboutTourCards = () => {
  return(
    <CardsLarge data={TourCardDetails}/>
  );
}

function HomePage() {
  return (
    <>
      <Nav />
      <HomePageHeader />
      <WelcomeHeading />
      {/* <BookingModal /> */}
      {/* <HeadingWithParagraphs /> */}
      <HomeThreeImg />
      {/* <HeadingWithParagraphs /> */}
      {/* <CardDetails /> */}
      <ToursHeading />
      <AboutTourCards />
      <PreFooterBackground showReviewCarousel={true}/>
      <Footer />
    </>
  );
}

export default HomePage;