import './App.css';
import Card from './Components/card/Card';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ProgramCertifficate from './Components/ProgramCertificates';
import {cardData} from "./Components/constant/cardData"

function App() {
  return (
    <div className="App">
     
         <Home/>
         <div className="card_list_container">
      {cardData.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
         <ProgramCertifficate/>
         <Footer/>
    </div>
  );
}

export default App;
