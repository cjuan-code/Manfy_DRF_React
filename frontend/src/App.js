import './App.css';
import HomeList from './pages/Home/home';
import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'
function App() {
  return (
    <div className="App">
        <Navbar/>
        <HomeList/>
        <Footer/>
    </div>
  );
}

export default App;
