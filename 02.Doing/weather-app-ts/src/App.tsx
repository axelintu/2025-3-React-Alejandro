import { useState } from 'react'
import WeatherCard from './WeatherCard';
import './App.css'

function App() {
  const [cityInput, setCityInput] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  function handleAddCity (e: any) {
    e.preventDefault();
    const trimmed : string = cityInput.trim();
    if (!trimmed) return;
    const trimmedLowerCase: string = trimmed.toLowerCase();
    const isAlreadyIncluded : boolean = cities.includes(trimmedLowerCase);

    if (isAlreadyIncluded) return;

    setCities([...cities, trimmed.toLowerCase()]);
    setCityInput("");
  }

  function handleRemove (cityToRemove: string) {
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
        { cities.length === 0 
          ? <p>Todavía no hay ciudades guardadas</p>
          : (
            cities.map((city) => {
              return <div key={city}>
                <button onClick={()=> handleRemove(city)}>x</button>
                <WeatherCard city={city} />
              </div>
            })
          )
        }
      </div>
    </>
  )
}

export default App
