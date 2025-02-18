import './App.css';
import SlidingCards from './shared/SlidingCards/SlidingCards';
import Navbar from './shared/Navigation/Navbar';
import StatsCarousel from './components/statsCarousel/StatsCarousel';
import Services from './components/services/services';
// import Testimonials from './components/testimonials/testimonials';
import UserManual from './components/userManual/FAQ';
import AppBanner from './components/appBanner/appBanner';
import ContactUs from './components/contactUs/contactUs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SlidingCards />
      <StatsCarousel />
      <Services />
      {/* <Testimonials /> */}
      <AppBanner />
      <UserManual />
      <ContactUs />
      <Footer />  
      
    </div>
  );
}

export default App;
