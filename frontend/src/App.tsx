import React, { useEffect } from "react";
import { Layout } from "./components/layout";
import { CityCardList } from "./components/city-card-list";
import { CityCard } from "./components/city-card";
import { Map } from "./components/map";
import { useCities } from "./hooks/cities";

function App() {
  const { cities, selectedCity, populateCities } = useCities();

  useEffect(() => {
    populateCities();
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
        <Map city={selectedCity} />
      }
    />
  );
}

export default App;
