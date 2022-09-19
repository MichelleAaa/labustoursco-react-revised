import Nav from '../../components/Navbar';
import {CityTourTitle, CityTourHeadingText, CityTourCardDetails, CelebrityHomesTourDetails, CityTourDetailsText, CityTourPricingDetails} from './CityTourList';
import Header from '../../components/Header';
import TextHeadingWithPara from "../../components/TextHeadingWithPara";
import CardsSmall from "../../components/CardsSmall";
import TextSmallHeadingWithPara from "../../components/TextSmallHeadingWithPara";
import BusBackground from "../../components/PreFooterBackground";
import Table from '../../components/Table';
import React from 'react';

function CityTour() {
  return (
    <React.Fragment>
      <Nav page={'citytour'} />
      <Header key={CityTourTitle.id} headerData={CityTourTitle}/>
      <TextHeadingWithPara key={1} textData={CityTourHeadingText}/>
      <CardsSmall tourCardsData={CityTourCardDetails}/>
      <TextSmallHeadingWithPara textData={CelebrityHomesTourDetails}/>
      <TextHeadingWithPara key={2} textData={CityTourDetailsText}/>
      <Table key={CityTourPricingDetails.id} pricingTableData={CityTourPricingDetails}/>
      <BusBackground/>
    </React.Fragment>
  );
}

export default CityTour;