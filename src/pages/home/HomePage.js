import Nav from '../../components/Navbar';
import {HomeTitle} from './HomeList';
import Header from '../../components/Header';
import {HomeHeadingText, HomeAboutToursText, TourCardDetails} from './HomeList';
import TextHeadingWithPara from "../../components/TextHeadingWithPara";
import {ThreeImgData} from './HomeList';
import ThreeImgGrid from "../../components/ThreeImgGrid";
import CardsLarge from '../../components/CardsLarge';
import PreFooterBackground from '../../components/PreFooterBackground';
import React from 'react';

function HomePage() {
  return (
    <React.Fragment>
      <Nav page={'homepage'} />
      <Header key={HomeTitle.id} headerData={HomeTitle}/>
      <TextHeadingWithPara textData={HomeHeadingText}/>
      <ThreeImgGrid img={ThreeImgData} />
      <TextHeadingWithPara textData={HomeAboutToursText}/>
      <CardsLarge cardsData={TourCardDetails}/>
      <PreFooterBackground showReviewCarousel={true}/>
    </React.Fragment>
  );
}

export default HomePage;