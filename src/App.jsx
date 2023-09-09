import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App