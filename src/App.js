import './App.css';
import SlidingCards from './shared/SlidingCards/SlidingCards';
import Navbar from './shared/Navigation/Navbar';
import StatsCarousel from './components/statsCarousel/StatsCarousel';
import Services from './components/services/services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SlidingCards />
      <StatsCarousel />
      <Services />
    </div>
  );
}

export default App;
