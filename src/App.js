import './App.css';
import Navbar from './components/common/navbar/Navbar';
import Footer from './components/common/footer/Footer';
import Main from './components/home/main/Main';
function App() {
  const pages=['Home', 'About Us', 'Classes','Pages','Contact Us']
  const footerParts=['Get In Touch']
  return (
    <div className="App">
     <Navbar name='Kider' pages={pages} button='Join Us'/>
     <Main/>
    <Footer footerParts={footerParts} />
    </div>
  );
}

export default App;
