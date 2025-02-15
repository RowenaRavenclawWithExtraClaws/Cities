import React from "react";

export const CityCard = ({
  name,
  nameNative,
  country,
  population,
  founded,
}: City) => {
  return (
    <div className="bg-grey rounded-xl shadow-lg p-6 max-w-sm mx-auto hover:scale-105 transition-transform duration-300">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        {name}
      </h2>

      <div className="flex flex-wrap gap-3 justify-center">
        <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium">
          👅 {nameNative}
        </div>

        <div className="bg-green-100 text-green-900 px-4 py-2 rounded-full text-sm font-medium">
          🌎 {country}
        </div>

        <div className="bg-yellow-100 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium">
          👥 {population.toLocaleString()} people
        </div>

        <div className="bg-purple-100 text-purple-900 px-4 py-2 rounded-full text-sm font-medium">
          🏛️ Founded: {founded}
        </div>
      </div>
    </div>
  );
};
