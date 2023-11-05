import { useState } from "react";
import axios from "axios";
import "./App.css";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  async function getLocation(event) {
    event.preventDefault();
    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=pk.b2c55258026e3d544eb03f8061f56597&format=json`;
    const res = await axios.get(API);
    setLocation(res.data[0]);
  }

  return (
    <>
      <h1>WeatherLOCA!!!</h1>
      <form onSubmit={getLocation}>
        <input onChange={handleChange} placeholder="Enter Location" />
        <button>Get Location</button>
      </form>

      <h2>Location: {location.display_name}</h2>
      <h3>Latitude: {location.lat}</h3>
      <h3>Longitude: {location.lon}</h3>
    </>
  );
}

export default App;
