import React from "react";
import pokeball from "../../assets/pokeball.png";
import "./styles.css";


function Header() {
    return (
      <div className="header">
        <img src={pokeball} alt="pokeball" className="pokeball" /> 
        <a className="header-text" href="/"> Calcular trocas</a>
        <a className="header-text" href="/trocas"> Registros de trocas</a>
        <a className="header-text" href="/faq"> FAQ </a>
      </div>
    );
  }
  
  export default Header;
  // para mostrar a pokebola, cole o item abaixo logo apos a linha 8
  // <img src={pokeball} alt="pokeball" className="pokeball" /> 