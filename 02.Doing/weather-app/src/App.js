import { useEffect, useState } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';

function App() {
  const [cityInput, setCityInput] = useState("");
  const [cities, setCities] = useState(()=> {
    const saved = localStorage.getItem("weatherCities");
    return saved ? JSON.parse(saved) : [];
  });
  const [unrelatedCount, setUnrelatedCount] = useState(0);
  const [searchCount, setSearchCount] = useState(0);

  useEffect(()=>{
  console.log('guardando ciudades', cities);
  localStorage.setItem("weatherCities", JSON.stringify(cities));
  },[cities]);
  
  function handleAddCity (e) {
    e.preventDefault();
    setSearchCount(searchCount+1);
    let trimmed;
    trimmed = cityInput.trim();
    if (!trimmed) return;
    const trimmedLowerCase = trimmed.toLowerCase();
    const isAlreadyIncluded = cities.includes(trimmedLowerCase);

    if (isAlreadyIncluded) return;

    setCities([...cities, trimmedLowerCase]);
    setCityInput("");
  }

  function handleRemove (cityToRemove) {
    setCities(
      cities.filter((c) => c!==cityToRemove)
    )
  }

  return (
    <>
      <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
        <h1>Mi dashboard del Clima + React</h1>
        <hr/>
        <div>
          <strong>Contador ajeno:</strong> {unrelatedCount}<button onClick={()=>{
            setUnrelatedCount(unrelatedCount+1)
          }}></button>
          <span>Este contador cmabia el estado de App, pero las WeatehrCards NO se re-renderizan con React.Memo</span>
        </div>
        <hr/>
        <p>Busca una ciduad y guárdala en tu lista</p>
        <div>{`Llevas ${searchCount} tokens de búusquda`}</div>
        <form onSubmit={handleAddCity}>
          <input type="text" value={cityInput} onChange={(e) => { setCityInput(e.target.value)}} />
          <button type='submit'>Agregar ciudad</button>
          <button onClick={()=> {
            setCities(null);
          }}>Borrar ciudades</button>
        </form>
        <div>{cities}</div>
        <div>
          {cities.length === 0 
            ? <p>Todavía no hay ciudades guardadas</p>
            : (
              cities.map((city) => {
                return <div key={city}>
                  <button onClick={()=> handleRemove(city)}>x</button>
                  <WeatherCard city={city} />
                </div>
              }
              ))
          }
        </div>
      </div>
    </>
  )
}

export default App;
