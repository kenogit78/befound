import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import SignUp from './components/SignIn/SignUp';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    

    <Router>
      {/* <Navbar /> */}

     <Routes>
        <Route path='/' element ={ <LandingPage />} />
        <Route path='/signin' element ={ <SignIn />} />
        <Route path='/signup' element ={ <SignUp />} />
        <Route path='/register' element ={ <Register />} />

      </Routes>

      
     
  
   

    </Router>
 
  )
}

export default App;
