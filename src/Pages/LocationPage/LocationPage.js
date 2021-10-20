import React from 'react';
// import map 
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'


const LocationPage = () => {
    return (
        <div className="location-container">
            <div className="container py-5">
                <h1>Our Location</h1>
                {/* Load Map */}
                <MapContainer center={[23.8191, 90.4526]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[23.8191, 90.4526]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >
                        <Popup>
                            Bashundhara R/A, Dhaka, Bangladesh
                        </Popup>
                    </Marker>
                </MapContainer>
            </div >
        </div>
    );
};

export default LocationPage;