import Nav from '../../components/Navbar';
import {SeasideTourTitle, SeasideTourHeadingText, SeasideTourCardDetails, CelebrityHomesTourDetails, SeasideTourDetailsText, SeasideTourPricingDetails} from './SeasideTourList';
import Header from '../../components/Header';
import TextHeadingWithPara from "../../components/TextHeadingWithPara";
import CardsSmall from "../../components/CardsSmall";
import TextSmallHeadingWithPara from "../../components/TextSmallHeadingWithPara";
import BusBackground from "../../components/PreFooterBackground";
import Table from '../../components/Table';

function SeasideTour() {
    return (
        <>
            <Nav page={'seasidetour'} />
            <Header key={SeasideTourTitle.id} headerData={SeasideTourTitle}/>
            <TextHeadingWithPara textData={SeasideTourHeadingText}/>
            <CardsSmall tourCardsData={SeasideTourCardDetails}/>
            <TextSmallHeadingWithPara textData={CelebrityHomesTourDetails}/>
            <TextHeadingWithPara textData={SeasideTourDetailsText}/>
            <Table key={SeasideTourPricingDetails.id} pricingTableData={SeasideTourPricingDetails}/>
            <BusBackground/>
        </>
    );
}

export default SeasideTour;