import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import ForecastList from "./components/ForecastList";
import { useLocalWeather } from "./hooks/useLocalWeather";
import Loading from "./components/Loading";

const API_KEY = import.meta.VITE_WEATHER_API_KEY;

function App() {
  const { weather, loading, error } = useLocalWeather();

  return (
    <div className="app-container">
      <SearchBar />
      {loading ? (
        <Loading />
      ) : weather ? (
        <>
          <h1>
            {weather.city}{" "}
            <span>
              Nascer do Sol: {weather.sunrise} | Pôr do Sol: {weather.sunset}
            </span>
          </h1>
          <WeatherCard weather={weather} />
          <ForecastList forecasts={weather.forecast.slice(1, 4)} />
        </>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

export default App;
