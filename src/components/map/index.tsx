import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useCoordinates } from "./coordinates";

type Props = Pick<City, "latitude" | "longitude">;

export const Map = ({ latitude, longitude }: Props) => {
  const coordinates = useCoordinates({ latitude, longitude });

  return (
    <MapContainer
      key={`${latitude}.${latitude}`}
      center={coordinates}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coordinates} />
    </MapContainer>
  );
};
