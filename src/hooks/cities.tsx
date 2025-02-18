import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

const API_URL = 'http://localhost:4000/api/cities';

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

  const populateCities = async (cities: City[]) => {
    const response = await fetch(API_URL);
    const body: JsonApiResponse<City> = await response.json();

    setCities(body.data.map((entry) => entry.attributes));
  }

  return (
    <CitiesContext.Provider value={{ cities, selectedCity, selectCity, populateCities }}>
      {children}
    </CitiesContext.Provider>
  );
};

export const useCities = () => {
  const context = useContext(CitiesContext);

  return {
    ...context,
  };
};
