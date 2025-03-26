"use client";

import {MapContainer, TileLayer, Marker, useMap} from "react-leaflet";
import {LatLngExpression, LatLngTuple} from "leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import {useEffect} from "react";

// Set custom icon
const DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
}

const defaults = {
  zoom: 13,
};

function UpdateMapView({posix}: {posix: LatLngExpression}) {
  const map = useMap();

  useEffect(() => {
    map.setView(posix, map.getZoom());
  }, [posix]);

  return null;
}

const SingleMap = (Map: MapProps) => {
  const {zoom = defaults.zoom, posix} = Map;

  return (
    <MapContainer
      center={posix}
      scrollWheelZoom={false}
      style={{height: "100%", width: "100%"}}
      zoom={zoom}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={posix} />
      <UpdateMapView posix={posix} />
    </MapContainer>
  );
};

export default SingleMap;
