import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Trades from './pages/trades';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route exact path="/"  element={<Home/>} />
              <Route path="/trocas" element={<Trades/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
