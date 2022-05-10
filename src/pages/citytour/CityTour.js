import Nav from '../../components/Navbar';
import {CityTourTitle, CityTourHeadingText, CityTourCardDetails, CelebrityHomesTourDetails, CityTourDetailsText, CityTourPricingDetails} from './CityTourList';
import Header from '../../components/Header';
import TextHeadingWithPara from "../../components/TextHeadingWithPara";
import CardsSmall from "../../components/CardsSmall";
import TextSmallHeadingWithPara from "../../components/TextSmallHeadingWithPara";
import BusBackground from "../../components/PreFooterBackground";
import Table from '../../components/Table';

const CityTourHeader = () => {
    return (
        <Header key={CityTourTitle.id} headerData={CityTourTitle}/>
    );
}

const CityTourHeading = () => {
    return <TextHeadingWithPara textData={CityTourHeadingText}/>
}

const CityTourCards = () => {
  return(
    <CardsSmall tourCardsData={CityTourCardDetails}/>
  );
}

const CelebrityTourDetails = () => {
    return <TextSmallHeadingWithPara textData={CelebrityHomesTourDetails}/>
}

const CityTourDetails = () => {
    return <TextHeadingWithPara textData={CityTourDetailsText}/>
}

const CityTourTable = () => {
    return <Table key={CityTourPricingDetails.id} pricingTableData={CityTourPricingDetails}/>
}

function CityTour() {
  return (
    <>
      <Nav />
      <CityTourHeader />
      <CityTourHeading />
      <CityTourCards />
      <CelebrityTourDetails />
      <CityTourDetails />
      <CityTourTable />
      <BusBackground/>
    </>
  );
}

export default CityTour;