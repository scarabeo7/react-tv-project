import './App.css';
import AllEpisode from './component/AllEpisode';
import Footer from './component/Footer';
import Header from './component/Header';
import data from "./data/data.json"

function App() {
  return (
    <div>
      <Header />
      <AllEpisode  data = {data}/>
      <Footer />
    </div>
  );
}

export default App;
