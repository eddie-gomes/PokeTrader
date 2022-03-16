import Header from "../../components/header/index"
import "./styles.css"



function Trades() {
  
  const giverLog = sessionStorage.getItem('Giver');
  const trainer1 = giverLog.replace(/["]+/g, '').split(",[");
  // const str1 = trainer1.replace(/["]+/g, '')
  // trainer1 = trainer1.shift();
  const receiverLog = sessionStorage.getItem('Receiver');
  const trainer2 = receiverLog.replace(/["]+/g, '').split(",[");


  return (

    <div className="trades">
      <Header/>
      <div className="a-box">
        <div className="trainer-box">
          <p className="trainer"> Treinador 1</p>
          <div className="box"> 
          {trainer1.map(
            (data, key) => {
              return (<><p className="poke-name" key={key}>Troca n.º {key}:<br/>{data}</p><hr/></>)
            }
            
            )}

          </div>
        </div>
        <div className="trainer-box">
            <p className="trainer">Treinador 2</p>
            <ul className="box"> 
            {trainer2.map(
            (data, key) => {
              return (<><p className="poke-name" key={key}>Troca n.º {key}:<br/>{data}</p><hr/></>)
            }
            
            )}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Trades;
