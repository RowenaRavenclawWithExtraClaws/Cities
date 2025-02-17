import React, { useEffect } from "react";
import { Layout } from "./components/layout";
import { CityCardList } from "./components/city-card-list";
import { CityCard } from "./components/city-card";
import { Map } from "./components/map";
import { useCities } from "./hooks/cities";

function App() {
  const { cities, selectedCity, populateCities } = useCities();

  useEffect(() => {
    populateCities([
      {
        id: "1",
        name: "Sydney",
        nameNative: "Sydney",
        country: "Australia",
        continent: "Australia",
        latitude: -33.865143,
        longitude: 151.2099,
        population: 5312000,
        founded: 1788,
        landmarks: [
          "Sydney Opera House",
          "Sydney Harbour Bridge",
          "Queen Victoria Building",
        ],
      },
      {
        id: "2",
        name: "New York City",
        nameNative: "New York City",
        country: "USA",
        continent: "North America",
        latitude: 40.73061,
        longitude: -73.935242,
        population: 8419000,
        founded: 1624,
        landmarks: [
          "Chrysler Building",
          "Brooklyn Bridge",
          "Madison Square Garden",
        ],
      },
      {
        id: "3",
        name: "Madrid",
        nameNative: "Madrid",
        country: "Spain",
        continent: "Europe",
        latitude: 40.416775,
        longitude: -3.70379,
        population: 3223000,
        founded: 1083,
        landmarks: ["Royal Palace", "Plaza Mayor", "Plaza de Cibeles"],
      },
      {
        id: "4",
        name: "Moscow",
        nameNative: "Москва",
        country: "Russia",
        continent: "Europe",
        latitude: 55.751244,
        longitude: 37.618423,
        population: 11920000,
        founded: 1147,
        landmarks: ["Saint Basil's Cathedral", "Kremlin", "Bolshoi Theatre"],
      },
      {
        id: "5",
        name: "Tokyo",
        nameNative: "東京",
        country: "Japan",
        continent: "Asia",
        latitude: 35.652832,
        longitude: 139.839478,
        population: 13960000,
        founded: 1603,
        landmarks: ["Meji Shrine", "Asakusa", "Tokyo Skytree"],
      },
      {
        id: "6",
        name: "Lagos",
        nameNative: "Lagos",
        country: "Nigeria",
        continent: "Africa",
        latitude: 6.465422,
        longitude: 3.406448,
        population: 14800000,
        founded: 1914,
        landmarks: [
          "Iga Idungaran",
          "Freedom Park",
          "The Cathedral Church of Christ",
        ],
      },
      {
        id: "7",
        name: "Sao Paulo",
        nameNative: "São Paulo",
        country: "Brazil",
        continent: "South America",
        latitude: -23.533773,
        longitude: -46.62529,
        population: 12330000,
        founded: 1554,
        landmarks: [
          "Mosteiro De Sao Bento",
          "Italian Building",
          "Farol Santander",
        ],
      },
      {
        id: "8",
        name: "Munich",
        nameNative: "München",
        country: "Germany",
        continent: "Europe",
        latitude: 48.137154,
        longitude: 11.576124,
        population: 1472000,
        founded: 1158,
        landmarks: ["Bavaria statue", "Marienplatz", "ottonova office"],
      },
    ]);
  }, [cities, populateCities]);

  return (
    <Layout
      left={
        <CityCardList>
          {cities.map((city) => (
            <CityCard key={city.id} {...city} />
          ))}
        </CityCardList>
      }
      right={
        <Map {...selectedCity} />
      }
    />
  );
}

export default App;
