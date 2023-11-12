import './App.css';
import MainMenu from './components/header/MainMenu';
import FeaturedVideo from './sections/FeaturedVideo/FeaturedVideo';
import TrendingNow from './sections/TrendingNow/TrendingNow';

function App() {
  return (
    <div className="App">
      <MainMenu />
      <FeaturedVideo />
      <TrendingNow />
    </div>
  );
}

export default App;
