import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Routes
import Home from './components/routes/Home';
import Products from './components/routes/Products';
import Services from './components/routes/Services';
import SignUp from './components/routes/SignUp';

const App = () => {
   return (
      <>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/products' element={<Products />} />
               <Route path='/services' element={<Services />} />
               <Route path='/signup' element={<SignUp />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
};
 
export default App;