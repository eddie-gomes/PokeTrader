import Header from "../../components/header/index"
import Box from "../../components/box/index"
import "./styles.css"
import {  useEffect, useLayoutEffect, useState } from "react";


function Home() {
  const [expGiver, setExpGiver] = useState(0);
  const [expReceiver, setExpReceiver] = useState(0);
  const [value, setValue] = useState();
  const [aux, setAux] = useState(0);
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [nameList, setNameList] = useState([]);
  const [nameList2, setNameList2] = useState([]);

  const baseExpG = (exp) => {  
    setExpGiver(exp);
    setAux(0);
  };
  const baseExpR = (exp) => {  
    setExpReceiver(exp);
    setAux(0);
  };

  // Localstorage

  const [tradeLog, setTradeLog] = useState([]);
  const [tradeLog2, setTradeLog2] = useState([]);
   

  function Trade() {
    const giverPoke = JSON.stringify(nameList.toString());
    setTradeLog((prevState) => [...prevState, giverPoke]);
    const receiverPoke = JSON.stringify(nameList2.toString());
    setTradeLog2((prevState)=> [...prevState, receiverPoke]);   

    localStorage.setItem('Giver', tradeLog);
    localStorage.setItem('Receiver', tradeLog2);
  }

  useEffect (() => {

    console.log(tradeLog);
    console.log(tradeLog2);

  }, [tradeLog, tradeLog2]);

  return (
    <div className="Home">
        <Header/>
        <div className="h-box">
            <Box className="giver" baseExp={baseExpG} list={list} setList={setList} setNameList={setNameList}/>
            <div className="buttons">
{/* This logic enable show specific text box */}
              {expGiver===0 || expReceiver===0 ? (
                <p className="a-text">Informe os Pokémon de ambos os lados antes de calcular a troca!</p>
                ):null}
{/* Chose a button to show */}
                { aux===0 ? 
                (<button 
                  className="c-button" 
                  disabled={(expGiver===0 || expReceiver===0)} 
                  onClick={()=>{setAux(1);setValue(Math.abs(expGiver-expReceiver))}} >
                    Calcular troca
                  </button>) : 
                (<button 
                  className="c-button"
                  disabled={(expGiver===0 || expReceiver===0)}
                  onClick={()=> {
                    Trade();
                  }}
                  >
                    Trocar
                  </button>)}
{/* Trade Allert */}
                {expGiver>0 && expReceiver> 0 && value <= 50 && aux===1 ? (
                <p className="a-yes">Esta troca é justa!</p>
                ):null
                }

                {expGiver>0 && expReceiver> 0 && value > 50 && aux===1 ? (
                <p className="a-not">Esta troca não é justa!</p>
                ):null
                }
            </div>
            <Box className="receiver" baseExp={baseExpR} list={list2} setList={setList2} setNameList={setNameList2}/>
        </div>
        {tradeLog}
    </div>
  );
}

export default Home;
