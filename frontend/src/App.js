import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'
import Cookies from './components/Cookies/AlertCookies'
import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';

const Home = React.lazy(() => import("./pages/Home/home"))
const Reservations = React.lazy(() => import("./pages/Reservations/Reservations"))
const Login = React.lazy(()=> import("./pages/Login/Login"))


function App() {
  return (
    <div className="App">
        <Cookies/>
        <BrowserRouter>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Navbar/>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='reservations' element={<Reservations/>} />
              <Route exact path='login' element={<Login/>}/>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
