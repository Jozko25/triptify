'use client'

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Menu, Plus, MapPin, Search, ChevronRight, Train, Plane, Car, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import 'leaflet/dist/leaflet.css';

interface Route {
  id: string;
  name: string;
  distance: string;
  duration: string;
  startLocation: string;
  endLocation: string;
  transportOptions: TransportOption[];
}

interface TransportOption {
  type: 'train' | 'flight' | 'car';
  price: number;
  duration: string;
  departureTime: string;
  arrivalTime: string;
  provider: string;
}

interface UserPreferences {
  maxPrice: number;
  preferredTransport: 'train' | 'flight' | 'car' | 'any';
  ecoFriendly: boolean;
}

const initialRoutes: Route[] = [
  {
    id: '1',
    name: 'Home to Work',
    distance: '5.2 km',
    duration: '15 min',
    startLocation: 'Home',
    endLocation: 'Office',
    transportOptions: [
      { type: 'car', price: 2, duration: '15 min', departureTime: '08:00', arrivalTime: '08:15', provider: 'Personal' },
      { type: 'train', price: 3, duration: '20 min', departureTime: '07:55', arrivalTime: '08:15', provider: 'Metro' },
    ]
  },
  {
    id: '2',
    name: 'Yearly Thailand',
    distance: '7544 km',
    duration: '9 h',
    startLocation: 'New York',
    endLocation: 'Bangkok',
    transportOptions: [
      { type: 'flight', price: 850, duration: '19 h', departureTime: '23:00', arrivalTime: '18:00', provider: 'Thai Airways' },
      { type: 'flight', price: 920, duration: '18 h', departureTime: '10:00', arrivalTime: '04:00', provider: 'Emirates' },
    ]
  },
  {
    id: '3',
    name: 'Weekend Park Visit',
    distance: '7.5 km',
    duration: '20 min',
    startLocation: 'Home',
    endLocation: 'Central Park',
    transportOptions: [
      { type: 'car', price: 3, duration: '20 min', departureTime: '10:00', arrivalTime: '10:20', provider: 'Personal' },
      { type: 'train', price: 2.75, duration: '25 min', departureTime: '09:55', arrivalTime: '10:20', provider: 'Metro' },
    ]
  },
];

const LocationMarker = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition([e.latitude, e.longitude]);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Your current location</Popup>
    </Marker>
  );
};

export default function RoutePlannerDashboard() {
  const [routes, setRoutes] = useState<Route[]>(initialRoutes);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    maxPrice: 1000,
    preferredTransport: 'any',
    ecoFriendly: false,
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleRouteSelect = (route: Route) => {
    setSelectedRoute(route);
  };

  const handleCloseRoute = () => {
    setSelectedRoute(null);
  };

  const handlePreferenceChange = (key: keyof UserPreferences, value: any) => {
    setUserPreferences(prev => ({ ...prev, [key]: value }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredRoutes = routes.filter(route =>
    route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    route.startLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    route.endLocation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addNewRoute = () => {
    const newRoute: Route = {
      id: (routes.length + 1).toString(),
      name: 'New Route',
      distance: '0 km',
      duration: '0 min',
      startLocation: 'Start',
      endLocation: 'End',
      transportOptions: []
    };
    setRoutes([...routes, newRoute]);
    setSelectedRoute(newRoute);
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-zinc-100">
      {/* Header */}
      <header className="p-4 flex justify-between items-center bg-zinc-800/30 backdrop-blur-lg">
        <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
          Triptify
        </h1>
        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-100">
          <Menu className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden px-4 py-6 space-y-4 md:space-y-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4 md:h-5 md:w-5" />
          <Input 
            type="search" 
            placeholder="Search destinations..." 
            className="rounded-2xl w-full pl-10 bg-zinc-800/50 border-zinc-700 text-zinc-100 placeholder-zinc-400 text-sm md:text-base"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Saved Routes */}
        <Card className="bg-zinc-800/30 backdrop-blur-lg border-zinc-700">
          <CardContent className="p-0">
            <h2 className="text-base md:text-lg font-semibold p-3 md:p-4 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500">
              Saved Routes
            </h2>
            <ScrollArea className="h-48 md:h-64">
              {filteredRoutes.map((route) => (
                <div 
                  key={route.id} 
                  className="flex items-center justify-between p-3 md:p-4 border-b border-zinc-700/50 last:border-b-0 hover:bg-zinc-700/30 transition-colors cursor-pointer"
                  onClick={() => handleRouteSelect(route)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-zinc-400 to-zinc-600 p-1.5 md:p-2 rounded-full">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-zinc-900" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm md:text-base text-zinc-100">{route.name}</h3>
                      <p className="text-xs md:text-sm text-zinc-400">{route.distance} • {route.duration}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-zinc-500" />
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Route Details */}
        {selectedRoute ? (
          <Card className="bg-zinc-800/30 backdrop-blur-lg border-zinc-700">
            <CardContent className="p-3 md:p-4">
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <h2 className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500">
                  {selectedRoute.name}
                </h2>
                <Button variant="ghost" size="icon" onClick={handleCloseRoute}>
                  <X className="h-4 w-4 md:h-5 md:w-5 text-zinc-400" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                <div>
                  <p className="text-xs md:text-sm text-zinc-400">From</p>
                  <p className="text-sm md:text-base text-zinc-100">{selectedRoute.startLocation}</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-zinc-400">To</p>
                  <p className="text-sm md:text-base text-zinc-100">{selectedRoute.endLocation}</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-zinc-400">Distance</p>
                  <p className="text-sm md:text-base text-zinc-100">{selectedRoute.distance}</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-zinc-400">Duration</p>
                  <p className="text-sm md:text-base text-zinc-100">{selectedRoute.duration}</p>
                </div>
              </div>
              <Tabs defaultValue="transport">
                <TabsList className="bg-zinc-700/50">
                  <TabsTrigger value="transport" className="text-xs md:text-sm">Transport Options</TabsTrigger>
                  <TabsTrigger value="preferences" className="text-xs md:text-sm">Preferences</TabsTrigger>
                </TabsList>
                <TabsContent value="transport" className="mt-3 md:mt-4">
                  {selectedRoute.transportOptions.map((option, index) => (
                    <div key={index} className="mb-3 md:mb-4 p-2 md:p-3 bg-zinc-700/30 rounded-lg">
                      <div className="flex items-center justify-between mb-1 md:mb-2">
                        <div className="flex items-center space-x-2">
                          {option.type === 'train' && <Train className="h-4 w-4 md:h-5 md:w-5 text-zinc-300" />}
                          {option.type === 'flight' && <Plane className="h-4 w-4 md:h-5 md:w-5 text-zinc-300" />}
                          {option.type === 'car' && <Car className="h-4 w-4 md:h-5 md:w-5 text-zinc-300" />}
                          <span className="text-xs md:text-sm text-zinc-100 capitalize">{option.type}</span>
                        </div>
                        <span className="text-xs md:text-sm text-zinc-300">${option.price}</span>
                      </div>
                      <div className="flex justify-between text-xs md:text-sm text-zinc-400">
                        <span>{option.departureTime} - {option.arrivalTime}</span>
                        <span>{option.duration}</span>
                      </div>
                      <div className="text-xs md:text-sm text-zinc-500 mt-1">{option.provider}</div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="preferences" className="mt-3 md:mt-4">
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <label className="text-xs md:text-sm text-zinc-400 mb-1 block">Max Price</label>
                      <Slider
                        min={0}
                        max={2000}
                        step={10}
                        value={[userPreferences.maxPrice]}
                        onValueChange={(value) => handlePreferenceChange('maxPrice', value[0])}
                        className="bg-red-200"
                      />
                      <p className="text-right text-xs md:text-sm text-zinc-500 mt-1">${userPreferences.maxPrice}</p>
                    </div>
                    <div>
                      <label className="text-xs md:text-sm text-zinc-400 mb-1 block">Preferred Transport</label>
                      <select
                        className="w-full bg-zinc-700/50 border border-zinc-600 rounded-md p-1.5 md:p-2 text-xs md:text-sm text-zinc-100"
                        value={userPreferences.preferredTransport}
                        onChange={(e) => handlePreferenceChange('preferredTransport', e.target.value as 'train' | 'flight' | 'car' | 'any')}
                      >
                        <option value="any">Any</option>
                        <option value="train">Train</option>
                        <option value="flight">Flight</option>
                        <option value="car">Car</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-xs md:text-sm text-zinc-400">Eco-Friendly Options</label>
                      <Switch
                        checked={userPreferences.ecoFriendly}
                        
                        onCheckedChange={(checked) => handlePreferenceChange('ecoFriendly', checked)}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ) : (
          // Map (only shown when no route is selected)
          <Card className="aspect-square flex items-center justify-center bg-zinc-800/50 border-zinc-700 overflow-hidden relative">
            <MapContainer center={[51.505, -0.09]} zoom={13} className="w-full h-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <LocationMarker />
            </MapContainer>
          </Card>
        )}
      </main>

      {/* Floating Action Button */}
      <Button 
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 rounded-full shadow-lg bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500 text-zinc-900 hover:from-zinc-300 hover:via-zinc-500 hover:to-zinc-600 transition-all duration-300" 
        size="icon"
        onClick={addNewRoute}
      >
        <Plus className="h-5 w-5 md:h-6 md:w-6" />
      </Button>
    </div>
  );
}