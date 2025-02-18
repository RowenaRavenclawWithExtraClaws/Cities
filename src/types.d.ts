interface City {
  id: string;
  name?: string;
  nameNative?: string;
  country: string;
  continent?: string;
  latitude?: number;
  longitude?: number;
  population: number;
  founded?: number;
  landmarks?: string[];
}

interface JsonApiResponse<T> {
  data: {
    type: string;
    id: string;
    attributes: T;
  }[];
}
