import './App.css';
import Episode from './component/Episode';
import Footer from './component/Footer';
import Header from './component/Header';
import data from "./data/data.json"

function App() {
  return (
    <div>
      <Header />
     
      <Episode  data = {data}/>
      <Footer />
    </div>
  );
}

export default App;
