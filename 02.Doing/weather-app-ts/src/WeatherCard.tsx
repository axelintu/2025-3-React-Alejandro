import { useEffect,useState } from "react";

interface DataDef {
  temp: number;
  condition: string;
  humidity: number;
}
const FAKE_WEATHER_DB: Record<string, DataDef> = {
  aguascalientes: { 
    temp: 26,
    condition: "Soleado",
    humidity: 30
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
interface WeatherCardProps  {
  city: string;
}
export default function WeatherCard( {city} : WeatherCardProps) {
  const [data, setData] = useState<DataDef | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string |null>(null);

  useEffect(()=>{
    setLoading(true);

    const timeOutId = setTimeout(() => {
      
      const info : DataDef = FAKE_WEATHER_DB[city.toLowerCase()];
      if (info) {
        setData(info);
        setLoading(false);
      } else {
        setError('Error, la ciudad no existe en la base de datos');
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timeOutId);
  }, [city]);

  if (loading) { return <div>Loading...</div> }
  if (error) {return <div>{error}</div>}
  
  const cardStyle = {
    background: "#111",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "1rem",
    marginBottom: "1rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)"
  }

  
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