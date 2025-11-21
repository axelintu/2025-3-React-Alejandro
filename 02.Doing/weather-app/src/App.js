import { useState } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';

function App() {
  const [cityInput, setCityInput] = useState("");
  const [cities, setCities] = useState([]);
  function handleAddCity (e) {
    e.preventDefault();
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
        <p>Busca una ciduad y guárdala en tu lista</p>
        <form onSubmit={handleAddCity}>
          <input type="text" value={cityInput} onChange={(e) => { setCityInput(e.target.value)}} />
          <button type='submit'>Agregar ciudad</button>
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
