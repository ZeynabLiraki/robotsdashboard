import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface RobotMapProps {
  latitude: number;
  longitude: number;
  height?: string;
  width?: string;
}

const RobotMap: React.FC<RobotMapProps> = ({
  latitude,
  longitude,
  height = "300px",
  width = "100%",
}) => {
  return (
    <div
      style={{ height, width }}
      role="region"
      aria-label="Robot location map"
      tabIndex={0}
    >
      <MapContainer
        center={[latitude, longitude]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", borderRadius: "12px" }}
        aria-describedby="map-description"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            <span id="map-description">
              Robot current location marked on the map.
            </span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default RobotMap;
