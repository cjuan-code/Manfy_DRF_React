import './App.css';
import HomeList from './pages/Home/home';
import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'
import Cookies from './components/Cookies/AlertCookies'
import Login from './pages/Login/Login';
function App() {
  return (
    <div className="App">
        <Cookies/>
        <Navbar/>
        <HomeList/>
        <Footer/>
    </div>
  );
}

export default App;
