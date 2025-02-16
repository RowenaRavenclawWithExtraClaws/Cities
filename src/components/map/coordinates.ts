export const useCoordinates = ({
  latitude,
  longitude,
}: Pick<City, "latitude" | "longitude">) => {
  if (!latitude || !longitude) {
    return { lat: 48.137154, lng: 11.576124 }; // München
  }

  return { lat: latitude, lng: longitude };
};
