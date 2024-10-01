'use client'; // Ensure this is at the top of the file

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React from "react";
import { Progress } from "@/components/ui/progress";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// Updated center with San Francisco coordinates
const center = {
  lat: 37.7749, // Latitude for San Francisco
  lng: -122.4194, // Longitude for San Francisco
};

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapComponent;
