import { useEffect,useState } from "react";

const FAKE_WEATHER_DB = {
  aguascalientes: { 
    temp: 26,
    condition: "Soleado",
    humidity: "30"
  },
  guadalajara: {
    temp: 24,
    condition: "Parcialmente nublado",
    humidity: 40
  },
  monterrey: {
    temp: 45,
    condition: "Calor seco",
    humidity: 20
  }

}
export default function WeatherCard({city}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setLoading(true);

    const timeOutId = setTimeout(() => {
      console.log('inicio timeout');
      
      const info = FAKE_WEATHER_DB[city.toLowerCase()];
      if (info) {
        setData(info);
        setLoading(false);
      } else {
        setError('Error, la ciudad no existe en la base de datos');
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timeOutId);
  }, []);

  if (loading) { return <div>Loading...</div> };
  if (error) {return <div>{error}</div>};
  
  const cardStyle = {
    background: "#111",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "1rem",
    marginBottom: "1rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)"
  }

  console.log(data);
  return (
    data && (
      <div style={cardStyle}>
      <h2>{city}</h2>
      <p><strong>{data.temp}</strong></p>
      <p>Humedad: {data.humidity}</p>
    </div>
    )
    
  );
}