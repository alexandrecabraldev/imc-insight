import { useState } from "react";
import style from "./App.module.css"

function App() {
  const [result, setResult] = useState(0);
  const [weight,setWeight] = useState('');
  const [height, setHeight] = useState('');
  const suport ={
    weightSuport:0,
    heightSuport:0,
    result:0,
  }

  function handleWeight(event){
    suport.weightSuport = Number(event.target.value);
    setWeight(suport.weightSuport);
  }

  function handleHeight(event){
    suport.heightSuport = Number(event.target.value);
    setHeight(suport.heightSuport) 
  }

  function handleResult(event){
    event.preventDefault();
    // transformando altura de centímetros para metros
    suport.heightSuport = height/100;

    //imc é igual ao peso em kilos dividido pela altura em metros ao quadrado: peso/(altura)²
    suport.result = weight/Math.pow(suport.heightSuport,2);
    setResult(Number(suport.result.toFixed(2)));

    reset();
  }

  function reset(){
    setHeight('');
    setWeight('');
  }
  
  return (

        <form className={style.container}>

          <fieldset>

            <legend>
              <h1>Imc Calculator</h1>
            </legend>

            <div className={style.containerInputLabel}>

              <label htmlFor="peso">Peso (kg)</label>
              <input type="number" 
                id="peso" min={1} 
                onChange={handleWeight} 
                value={weight}
              />

            </div>
  
            <div className={style.containerInputLabel}>

              <label htmlFor="altura">Altura (cm)</label>
              <input type="number" 
                id="altura" 
                min={1} 
                onChange={handleHeight} 
                value={height}/>

            </div>
  
            <button type="submit" onClick={handleResult}>Calculate</button>
  
            <div className={style.resultCentralize}>
              {
                (result!=0 && result != Infinity) && <h2>IMC: {result}</h2>
              }

              { ((result!=0 && result != Infinity) && result< 18.5) && <h2>Magreza</h2>}

              {(result>= 18.5 && result<=24.9) && <h2>Normal</h2>}

              {(result>= 25 && result<=29.9) && <h2>Sobrepeso</h2>}

              {(result>= 30) && <h2>Obesidade</h2>}
            </div>

          </fieldset>

        </form>

  )
}

export default App;
