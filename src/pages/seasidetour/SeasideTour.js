import Nav from '../../components/Navbar';
import {SeasideTourTitle, SeasideTourHeadingText, SeasideTourCardDetails, CelebrityHomesTourDetails, SeasideTourDetailsText, SeasideTourPricingDetails} from './SeasideTourList';
import Header from '../../components/Header';
import BookingModal from "../../components/BookingModal";
import TextHeadingWithPara from "../../components/TextHeadingWithPara";
import CardsSmall from "../../components/CardsSmall";
import TextSmallHeadingWithPara from "../../components/TextSmallHeadingWithPara";
import BusBackground from "../../components/PreFooterBackground";
import Table from '../../components/Table';

const SeasideTourHeader = () => {
    return (
        <Header key={SeasideTourTitle.id} headerData={SeasideTourTitle}/>
    );
}

const SeasideTourHeading = () => {
    return <TextHeadingWithPara textData={SeasideTourHeadingText}/>
}

const SeasideTourCards = () => {
    return(
        <CardsSmall tourCardsData={SeasideTourCardDetails}/>
    );
}

const CelebrityTourDetails = () => {
    return <TextSmallHeadingWithPara textData={CelebrityHomesTourDetails}/>
}

const SeasideTourDetails = () => {
    return <TextHeadingWithPara textData={SeasideTourDetailsText}/>
}

const SeasideTourTable = () => {
    return <Table key={SeasideTourPricingDetails.id} pricingTableData={SeasideTourPricingDetails}/>
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
        </>
    );
}

export default SeasideTour;