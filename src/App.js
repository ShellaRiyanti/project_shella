import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import Cuaca from './components/cuaca';
import { RiCustomerService2Fill } from "react-icons/ri";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <Cuaca />
      <Footer />
      <div className="position-fixed bottom-0 end-0 mb-4 me-4">
        <button className="btn btn-primary rounded-circle p-3">
        <RiCustomerService2Fill style={{width: '20px', height: '20px'}}/>
        </button>
      </div>
    </div>
  );
}

export default App;
