import React, { useCallback } from "react";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png'

export const Map = ({ city }: { city?: City }) => {
  const createCustomIcon = useCallback(() => {
    return new L.Icon({
      iconUrl: city?.flag,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
      shadowSize: [50, 64],
      shadowAnchor: [4, 62],
      shadowUrl: markerShadowPng,
    });
  }, [city?.flag]);

  if (!city) {
    return (
      <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center h-screen">
        Select a city to be shown on the map!
      </h2>
    );
  }

  const coordinates = { lat: city.latitude as number, lng: city.longitude as number};

  return (
    <MapContainer
      key={`${city.latitude}.${city.latitude}`}
      center={coordinates}
      zoom={13}
      className="h-screen w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={coordinates} icon={createCustomIcon()}>
        <Popup>
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold mb-2 text-blue-800">
              {city.name}
            </h2>

            <div className="my-3">
              <p>
                <strong>Founded:</strong> {city.founded}
              </p>
            </div>

            <div className="text-left">
              <strong>Landmarks:</strong>
              <ul className="list-disc ml-5">
                {city.landmarks?.map((landmark, index) => (
                  <li key={index}>{landmark}</li>
                ))}
              </ul>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
