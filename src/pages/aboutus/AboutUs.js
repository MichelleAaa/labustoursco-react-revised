import Nav from '../../components/Navbar';
import {AboutTitle} from './AboutList';
import Header from '../../components/Header';
import MediaImgTitleText from '../../components/MediaImgTitleText';
import {AboutData} from './AboutList';
import BusBackground from '../../components/PreFooterBackground';
import React from 'react';

function AboutUs() {
  return (
    <React.Fragment>
      <Nav page={'aboutus'} />
      <Header key={AboutTitle.id} headerData={AboutTitle}/>
      <MediaImgTitleText data={AboutData} />
      <BusBackground/>
    </React.Fragment>
  );
}

export default AboutUs;