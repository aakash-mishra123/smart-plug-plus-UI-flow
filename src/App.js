import './App.css';
import SlidingCards from './shared/SlidingCards/SlidingCards';
import Navbar from './shared/Navigation/Navbar';
import StatsCarousel from './components/statsCarousel/StatsCarousel';
import Services from './components/services/services';
import Testimonials from './components/testimonials/testimonials';
import UserManual from './components/userManual/userManual';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SlidingCards />
      <StatsCarousel />
      <Services />
      <Testimonials />
      <UserManual />
    </div>
  );
}

export default App;
