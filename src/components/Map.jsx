// GoogleMapComponent.jsx
import React from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
} from "react-google-maps";

const Map = () => {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Default location (San Francisco)
        >
            <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
        </GoogleMap>
    );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GoogleMapComponent = () => {
    return (
        <div style={{ width: "100%", height: "400px" }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    );
};

export default GoogleMapComponent;
