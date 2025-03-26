import React, {useEffect, useRef, useState} from "react";
import L, {LatLngExpression, Marker} from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";

import {PropertyResponse} from "@/@types/types";

// Set custom icon
const DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Property {
  title?: string;
  price?: string;
  link?: string;
  latitude: number;
  longitude: number;
}

interface MapComponentProps {
  properties: PropertyResponse[];
}

const MapComponent: React.FC<MapComponentProps> = ({properties}) => {
  console.log(properties);
  const propertiesList = properties
    .map((item) => {
      if (!item?.property_address?.coordinates?.length) return;

      return {
        image: item.gallery.length ? item.gallery[0] : "",
        title: item.property_title,
        price: item.price,
        link: `/${item.type}/${item._id}`,
        latitude: item.property_address.coordinates[0],
        longitude: item.property_address.coordinates[1],
      };
    })
    .filter((item) => item !== undefined);

  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return; // Ensure ref is available

    const newMap = L.map(mapRef.current).setView([9.082, 8.6753], 6);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(newMap);

    setMap(newMap);

    return () => {
      if (newMap) {
        newMap.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (map && properties) {
      map.eachLayer((layer) => {
        if (layer instanceof Marker) {
          map.removeLayer(layer);
        }
      });

      propertiesList.forEach((property) => {
        if (property.latitude && property.longitude) {
          const latLng: LatLngExpression = [property.latitude, property.longitude];
          const marker = L.marker(latLng).addTo(map);

          marker.bindPopup(`
            <img src="${property.image}" />
            <b>${property.title}</b><br>
            Price: ₦${property.price}<br>
            <a href="${property.link}">View Details</a>
          `);
        }
      });
    }
  }, [map, properties]);

  return <div ref={mapRef} id="map" style={{height: "500px", width: "100%"}} />;
};

export default MapComponent;
