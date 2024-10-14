"use client"

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Menu, Plus, MapPin, Search, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import 'leaflet/dist/leaflet.css';


interface Route {
  id: string;
  name: string;
  distance: string;
  duration: string;
}

const sampleRoutes: Route[] = [
  { id: '1', name: 'Home to Work', distance: '5.2 km', duration: '15 min' },
  { id: '2', name: 'Yearly Thailand', distance: '7544 km', duration: '9 h' },
  { id: '3', name: 'Weekend Park Visit', distance: '7.5 km', duration: '20 min' },
  { id: '4', name: 'Shopping Center', distance: '4.1 km', duration: '10 min' },
  { id: '5', name: 'Airport Run', distance: '32.0 km', duration: '45 min' },
];

const LocationMarker = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    // Get the user's location
    const handleLocation = (position: GeolocationPosition) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    };

    // Request the user's location
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(handleLocation);
    }
  }, []);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Your current location</Popup>
    </Marker>
  );
};

export default function RoutePlannerDashboard() {
  return (
    <div className="flex flex-col h-screen bg-zinc-900 text-zinc-100">
      {/* Header */}
      <header className="p-4 flex justify-between items-center bg-zinc-800/30 backdrop-blur-lg">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
          Triptify
        </h1>
        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-100">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden px-4 py-6 space-y-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
          <Input 
            type="search" 
            placeholder="Search destinations..." 
            className="rounded-2xl w-full pl-10 bg-zinc-800/50 border-zinc-700 text-zinc-100 placeholder-zinc-400"
          />
        </div>

        {/* Saved Routes */}
        <Card className="bg-zinc-800/30 backdrop-blur-lg border-zinc-700">
          <CardContent className="p-0">
            <h2 className="text-lg font-semibold p-4 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500">
              Saved Routes
            </h2>
            <ScrollArea className="h-64">
              {sampleRoutes.map((route) => (
                <div key={route.id} className="flex items-center justify-between p-4 border-b border-zinc-700/50 last:border-b-0 hover:bg-zinc-700/30 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-zinc-400 to-zinc-600 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-zinc-900" />
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-100">{route.name}</h3>
                      <p className="text-sm text-zinc-400">{route.distance} • {route.duration}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-zinc-500" />
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card className="aspect-square flex items-center justify-center bg-zinc-800/50 border-zinc-700 overflow-hidden relative">
          <MapContainer center={[51.505, -0.09]} zoom={13} className="w-full h-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
          </MapContainer>
        </Card>
      </main>

      {/* Floating Action Button */}
      <Button className="fixed bottom-8 right-8 rounded-full shadow-lg bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500 text-zinc-900 hover:from-zinc-300 hover:via-zinc-500 hover:to-zinc-600 transition-all duration-300" size="icon">
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
}
