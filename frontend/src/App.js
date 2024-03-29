import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'
import Cookies from './components/Cookies/AlertCookies'
import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import { UserContext } from './context/UserContext';
const Home = React.lazy(() => import("./pages/Home/home"))
const Reservations = React.lazy(() => import("./pages/Reservations/Reservations"))
const Login = React.lazy(()=> import("./pages/Login/Login"))
const Profile = React.lazy(()=> import("./pages/Profile/Profile"))


function App() {
  return (
    <div className="App">
        <Cookies/>
          <BrowserRouter>
            <UserContext>
            <Suspense fallback={
              <div className="d-flex justify-content-center m-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>}>
              <Navbar/>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='reservations' element={<Reservations/>} />
                <Route exact path='login' element={<Login/>}/>
                <Route exact path='profile' element={<Profile/>}/>
              </Routes>
            </Suspense>
            <Footer/>
            </UserContext>
          </BrowserRouter>

    </div>
  );
}

export default App;
