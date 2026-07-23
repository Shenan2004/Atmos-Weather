import { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState("");

  function handleSearch() {
    if (city.trim() === "") return;

    onSearch(city);
  }

  return (
    <div className="flex justify-center w-full">
      <div
        className="
          flex
          items-center
          w-full
          max-w-3xl
          bg-white/20
          backdrop-blur-xl
          rounded-2xl
          border
          border-white/20
          shadow-xl
          overflow-hidden
        "
      >
        <Search className="ml-5 text-white" size={22} />

        <input
          type="text"
          placeholder="Search any city in the world..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="
            flex-1
            px-4
            py-5
            bg-transparent
            text-white
            placeholder-white/70
            outline-none
            text-lg
          "
        />

        <button
          onClick={handleSearch}
          className="
            px-8
            py-5
            bg-blue-500
            hover:bg-blue-600
            transition
            text-white
            font-semibold
          "
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;