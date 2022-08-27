import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./utils/ScrollToTop";
import Footer from './components/Footer';
import HomePage from './pages/home/HomePage';
import AboutUs from './pages/aboutus/AboutUs.js';
import ContactUs from './pages/contactus/ContactUs.js';
import FAQ from './pages/faq/FAQ.js';
import CityTour from  './pages/citytour/CityTour';
import SeasideTour from  './pages/seasidetour/SeasideTour';
import Error from './components/Error';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
            <Route index element={<HomePage />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route exact path='citytour' element={<CityTour />}/>
            <Route exact path='seasidetour' element={<SeasideTour />}/>
            <Route path='contactus' element={<ContactUs />}/>
            <Route path='faq' element={<FAQ />}/>
            <Route path='*' element={<Error />} />
        </Routes>
        <ScrollToTop>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
  );
}

export default App;