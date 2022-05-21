import Nav from '../../components/Navbar';
import {AboutTitle} from './AboutList';
import Header from '../../components/Header';
import MediaImgTitleText from '../../components/MediaImgTitleText';
import {AboutData} from './AboutList';
import BusBackground from '../../components/PreFooterBackground';

const AboutUsHeader = () => {
    return (
        <Header key={AboutTitle.id} headerData={AboutTitle}/>
    );
}

const AboutPageMedia = () => {
    return (
        <MediaImgTitleText data={AboutData} />
    );
}

function AboutUs() {
  return (
    <>
      <Nav page={'aboutus'} />
      <AboutUsHeader />
      <AboutPageMedia />
      <BusBackground/>
    </>
  );
}

export default AboutUs;