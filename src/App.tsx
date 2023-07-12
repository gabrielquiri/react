import { useState } from "react"

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc,setImc] = useState(0);
  const [status, setStatus] = useState('Status')

  const handlePesoChange = (event: any) => {
    setPeso(event.target.value);
  }

  const handleAlturaChange = (event: any) => {
    setAltura(event.target.value);
  }

  const handleCalculaImc = () => {
    const newImc = peso / (altura*altura);
    setImc(newImc);

    if (newImc < 18.5) {
      setStatus('Abaixo do peso');
    } else if (newImc >= 18.5 && newImc <= 24.9) {
      setStatus('Normal');
    } else if (newImc >= 25 && newImc <= 29.9) {
      setStatus('Acima do peso');
    } else if (newImc >= 30 && newImc <= 34.9) {
      setStatus('Obesidade grau 1');
    } else if (newImc >= 35 && newImc <= 39.9) {
      setStatus('Obesidade grau 2');
    } else {
      setStatus('Obesidade grau 3');
    }
  }  
  return (
    <div className="container">
      <div className="header">
        <h1>Calculadora de IMC</h1>
      </div>
      <div className="operacao">
        <input type="number" placeholder="Peso em kg" onChange={handlePesoChange} />
        <input type="number" placeholder="Altura ex: 1.60" onChange={handleAlturaChange} />
        <button onClick={handleCalculaImc}>Calcular</button>
      </div>
      <div className="result">
        <h2 id="imcValue">IMC: {imc.toFixed(1)} - {status}</h2>
      </div>
      <img id="img-imc" src="https://viverbem.unimedbh.com.br/wp-content/uploads/2021/06/tabela-IMC.png" alt="Índices de IMC" />
    </div>
  )
}

export default App
