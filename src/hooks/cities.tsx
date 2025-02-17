import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

const CitiesContext = createContext<{
  cities: City[];
  selectedCity?: City;
  selectCity: (cityId: string) => void;
  populateCities: (cities: City[]) => void;
}>({
  cities: [],
  selectCity: (cityId: string) => {},
  populateCities: (cities: City[]) => {},
});

export const CitiesProvider = ({ children }: { children: ReactNode }) => {
  const [cities, setCities] = useState<City[]>([]);

  const [selectedCity, setSelectedCity] = useState<City>();

  const selectCity = (cityId: string) => {
    setSelectedCity(cities.find((city) => city.id === cityId));
  };

  const populateCities = (cities: City[]) => {
    setCities(cities);
  }

  return (
    <CitiesContext.Provider value={{ cities, selectedCity, selectCity, populateCities }}>
      {children}
    </CitiesContext.Provider>
  );
};

export const useCities = () => {
  const context = useContext(CitiesContext);

  console.log(context);

  return {
    ...context,
  };
};
