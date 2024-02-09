import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./Pages/Landing"
import Navbar from './Components/Navbar';
import Store from './Pages/Store';
import Service from './Pages/Servicess';



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Routes>
        <Route path={"/"} element={<Landing/>}/>
        <Route path={"/store"} element={<Store/>}/>
        <Route path={"/service"} element={<Service/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default AppRoutes