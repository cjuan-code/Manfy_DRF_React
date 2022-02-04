import './App.css';
import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'
import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home/home"))
const Reservations = React.lazy(() => import("./pages/Reservations/Reservations"))

function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='reservations' element={<Reservations/>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
