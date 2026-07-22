import { Droplets, Wind, Eye, Sun } from "lucide-react";
import type { WeatherData } from "../../types/weather";

interface WeatherCardProps {
  weather: WeatherData;
}

function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div
      className="
        w-[460px]
        rounded-3xl
        bg-white/15
        backdrop-blur-xl
        border
        border-white/20
        shadow-2xl
        p-8
        text-white
        transition
        duration-300
        hover:scale-105
      "
    >
      <div className="text-center">

        <div className="flex justify-center">
          <Sun size={70} />
        </div>

        <h1 className="text-7xl font-bold mt-4">
          {weather.temperature}°
        </h1>

        <h2 className="text-2xl font-semibold mt-3">
          {weather.city}
        </h2>

        <p className="text-white/80">
          {weather.country}
        </p>

        <p className="mt-3 text-lg capitalize">
          {weather.description}
        </p>

        <p className="text-white/70 mt-2">
          Feels like {weather.feelsLike}°
        </p>

      </div>

      <div className="my-6 h-px bg-white/20"></div>

      <div className="grid grid-cols-3 text-center">

        <div>
          <Droplets className="mx-auto mb-2" />
          <p className="text-sm">Humidity</p>
          <p className="font-semibold">
            {weather.humidity}%
          </p>
        </div>

        <div>
          <Wind className="mx-auto mb-2" />
          <p className="text-sm">Wind</p>
          <p className="font-semibold">
            {weather.windSpeed} km/h
          </p>
        </div>

        <div>
          <Eye className="mx-auto mb-2" />
          <p className="text-sm">Visibility</p>
          <p className="font-semibold">
            {weather.visibility} km
          </p>
        </div>

      </div>
    </div>
  );
}

export default WeatherCard;