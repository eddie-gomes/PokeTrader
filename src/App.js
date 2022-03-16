import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Trades from './pages/trades';


function App() {
  const title = "PokeTrader";
  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);


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
