import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import SearchBar from "../components/ui/SearchBar";
import WeatherCard from "../components/weather/WeatherCard";
import backgroundImage from "../assets/images/colombo.jpg";

import { getWeather } from "../services/weatherApi";
import type { WeatherData } from "../types/weather";

function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  async function handleSearch(city: string) {
  try {
    const data = await getWeather(city);
    setWeatherData(data);
  } catch (error) {
    console.error(error);
  }
}

  useEffect(() => {
    async function fetchWeather() {
      try {
        const data = await getWeather("Colombo");
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchWeather();
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        <Navbar />

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            min-h-[80vh]
            gap-10
          "
        >
          <SearchBar onSearch={handleSearch}/>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {weatherData && (
              <WeatherCard weather={weatherData} />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;