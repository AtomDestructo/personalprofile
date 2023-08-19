import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Blurb from './Components/Blurb';
import './Styles/App.css';
import './Styles/Navbar.css';
import './Styles/w3.css';
import './Styles/index.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Blurb/>
      <Footer/>
    </div>
  );
}

export default App;
