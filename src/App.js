import './App.css';
import Navbar from './components/Navbar' ; 
import {Cards,Paragraphe} from './components/Cards';
import Hakim from './components/Slide';
import Footer from './components/Footer';

function App() {

  return (
    <div>
    <Navbar/>
    <Hakim/>
    <Cards/>
    <Paragraphe/>
    <Footer/>
 
    </div>
  );
}


export default App;
