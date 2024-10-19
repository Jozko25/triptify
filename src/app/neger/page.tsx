"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MapPin, Clock, Calendar, Car, Sun, Droplets, Edit2, Fuel, DollarSign, Coffee, Utensils, Droplet, Hotel, LayoutGrid } from "lucide-react"
import BackgroundGrid from "@/components/ui/grid/BackgroundGrid"
import { Textarea } from "@/components/ui/textarea"

const initialStops = [
  { id: 1, name: "San Jose", description: "Quick break", coordinates: { x: 30, y: 40 }, duration: 15, type: "break" },
  { id: 2, name: "Gilroy", description: "Lunch", coordinates: { x: 70, y: 60 }, duration: 45, type: "food" },
  { id: 3, name: "San Luis Obispo", description: "Refuel", coordinates: { x: 110, y: 30 }, duration: 20, type: "fuel" },
  { id: 4, name: "Santa Barbara", description: "Coffee break", coordinates: { x: 150, y: 50 }, duration: 30, type: "break" },
]


const weatherForecast = [
  { city: "San Francisco", temp: 68, condition: "Partly Cloudy" },
  { city: "San Jose", temp: 72, condition: "Sunny" },
  { city: "Gilroy", temp: 75, condition: "Clear" },
  { city: "San Luis Obispo", temp: 70, condition: "Windy" },
  { city: "Santa Barbara", temp: 73, condition: "Partly Cloudy" },
  { city: "Los Angeles", temp: 75, condition: "Sunny" },
]

export default function Component() {
  const [startLocation, setStartLocation] = useState("San Francisco, CA")
  const [endLocation, setEndLocation] = useState("Los Angeles, CA")
  const [departureTime, setDepartureTime] = useState("8:00 AM")
  const [departureDate, setDepartureDate] = useState("June 15, 2024")
  const [stops, setStops] = useState(initialStops)
  const [fuelEfficiency, setFuelEfficiency] = useState(30) // mpg
  const [fuelPrice, setFuelPrice] = useState(3.5) // $ per gallon
  const [avoidTolls, setAvoidTolls] = useState(false)
  const [preferHighways, setPreferHighways] = useState(true)

  const totalDistance = 383 // miles
  const totalDuration = 372 // minutes
  const totalStopTime = stops.reduce((acc, stop) => acc + stop.duration, 0)
  const estimatedFuelCost = (totalDistance / fuelEfficiency) * fuelPrice

  const handleStopEdit = (id: number, newName: string, newDescription: string, newDuration: number) => {
    setStops(stops.map(stop => 
      stop.id === id ? { ...stop, name: newName, description: newDescription, duration: newDuration } : stop
    ))
  }

  const addStop = () => {
    const newStop = {
      id: stops.length + 1,
      name: "New Stop",
      description: "Description",
      coordinates: { x: 100, y: 50 },
      duration: 15,
      type: "break"
    }
    setStops([...stops, newStop])
  }

  const removeStop = (id: number) => {
    setStops(stops.filter(stop => stop.id !== id))
  }

  const getStopIcon = (type: string) => {
    switch (type) {
      case "food": return <Utensils className="h-4 w-4" />
      case "fuel": return <Droplet className="h-4 w-4" />
      case "hotel": return <Hotel className="h-4 w-4" />
      default: return <Coffee className="h-4 w-4" />
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
        <BackgroundGrid/>
      <Card className="w-full bg-zinc-900">
      <BackgroundGrid/>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              San Francisco, CA to Los Angeles, CA
              </CardTitle>
              <CardDescription className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">Detailed Trip Summary</CardDescription>
            </div>
            <Badge variant="secondary" className="text-xl px-4 py-2">
              {Math.floor(totalDuration / 60)}h {totalDuration % 60}m
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="rounded-2xl grid w-full grid-cols-4 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              <TabsTrigger className="text-lg font-bold bg-zinc-500" value="details">Route Details</TabsTrigger>
              <TabsTrigger className="text-lg font-bold" value="stops">Stops</TabsTrigger>
              <TabsTrigger className="text-lg font-bold" value="stats">Trip Stats</TabsTrigger>
              <TabsTrigger className="text-lg font-bold" value="weather">Weather</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <Card className="rounded-xl bg-zinc-600">
                <CardHeader className="bg-zinc-600 rounded-xl">
                  <CardTitle className="bg-zinc-600 underline">Route Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 bg-zinc-600 text-lg font-bold">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-primary" />
                    <span>Start: {startLocation}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-primary" />
                    <span>End: {endLocation}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-primary" />
                    <EditableText
                      value={departureTime}
                      onSave={setDepartureTime}
                      placeholder="Departure Time"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-primary" />
                    <EditableText
                      value={departureDate}
                      onSave={setDepartureDate}
                      placeholder="Departure Date"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="text-primary" />
                    <span>Total Distance: {totalDistance} miles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-primary" />
                    <span>Driving Time: {Math.floor(totalDuration / 60)}h {totalDuration % 60}m</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="text-primary" />
                    <span>Total Stop Time: {Math.floor(totalStopTime / 60)}h {totalStopTime % 60}m</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-primary" />
                    <span><Button className="text-md bg-white bg-zinc-500 text-black font-bold">Local activities</Button></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LayoutGrid className="text-primary" />
                    <span><Button className="text-md bg-white bg-zinc-500 text-black font-bold">Useful applications in LA</Button></span>
                  </div>
                  <div>
                  <Textarea
                  id="route-input"
                  placeholder="Enter any changes you would like to take effect."
                  className="min-h-[150px] w-full bg-zinc-700 border-gray-600 placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stops">
              <Card className="bg-zinc-300 text-lg font-bold">
                <CardHeader>
                  <CardTitle>Planned Stops</CardTitle>
                </CardHeader>
                <CardContent className="bg-zinc-300">
                  <ul className="space-y-4">
                    {stops.map((stop) => (
                      <li key={stop.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{stop.id}</Badge>
                          {getStopIcon(stop.type)}
                          <span>{stop.name}</span>
                          <span className="text-sm text-muted-foreground">({stop.duration} min)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="ghost" size="sm"><Edit2 className="h-4 w-4" /></Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="grid gap-4">
                                <div className="space-y-2">
                                  <h4 className="font-medium leading-none">Edit Stop</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Modify the details of this stop.
                                  </p>
                                </div>
                                <div className="grid gap-2">
                                  <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                      id="name"
                                      defaultValue={stop.name}
                                      className="col-span-2 h-8"
                                    />
                                  </div>
                                  <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="description">Description</Label>
                                    <Input
                                      id="description"
                                      defaultValue={stop.description}
                                      className="col-span-2 h-8"
                                    />
                                  </div>
                                  <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="duration">Duration (min)</Label>
                                    <Input
                                      id="duration"
                                      type="number"
                                      defaultValue={stop.duration}
                                      className="col-span-2 h-8"
                                    />
                                  </div>
                                </div>
                                <Button onClick={() => handleStopEdit(
                                  stop.id,
                                  (document.getElementById("name") as HTMLInputElement).value,
                                  (document.getElementById("description") as HTMLInputElement).value,
                                  parseInt((document.getElementById("duration") as HTMLInputElement).value)
                                )}>
                                  Save changes
                                </Button>
                              </div>
                            </PopoverContent>
                          </Popover>
                          <Button variant="ghost" size="sm" onClick={() => removeStop(stop.id)}>
                            Remove
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button onClick={addStop}>Add New Stop</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="stats">
              <Card className="text-lg font-bold bg-zinc-300">
                <CardHeader>
                  <CardTitle>Trip Statistics and cost management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Estimated Fuel Cost:</span>
                    <span className="font-semibold">${estimatedFuelCost.toFixed(2)}</span>
                  </div>
                  <div className="space-y-2">
                    <Label>Fuel Efficiency (mpg)</Label>
                    <div className="flex items-center space-x-2">
                      <Slider
                        value={[fuelEfficiency]}
                        onValueChange={(value) => setFuelEfficiency(value[0])}
                        max={50}
                        step={1}
                      />
                      <span>{fuelEfficiency} mpg</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Fuel Price ($ per gallon)</Label>
                    <div className="flex items-center space-x-2">
                      <Slider
                        value={[fuelPrice]}
                        onValueChange={(value) => setFuelPrice(value[0])}
                        max={6}
                        step={0.1}
                      />
                      <span>${fuelPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Stops:</span>
                    <span className="font-semibold">{stops.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg. Speed:</span>
                    <span className="font-semibold">{Math.round(totalDistance / (totalDuration / 60))} mph</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="avoid-tolls"
                      checked={avoidTolls}
                      onCheckedChange={setAvoidTolls}
                    />
                    <Label htmlFor="avoid-tolls">Avoid Tolls</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="prefer-highways"
                      checked={preferHighways}
                      onCheckedChange={setPreferHighways}
                    />
                    <Label htmlFor="prefer-highways">Prefer Highways</Label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="weather">
              <Card className="bg-zinc-300">
                <CardHeader>
                  <CardTitle>Weather Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {weatherForecast.map((city, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{city.city}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Sun className="text-yellow-500" />
                              <span>{city.temp}°F</span>
                            </div>
                            <span>{city.condition}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="mt-6 flex justify-end space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Export Route</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export your route to GPS or print</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button className="bg-black">Start Navigation</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function EditableText({ value, onSave, placeholder }: { value: string; onSave: (value: string) => void; placeholder?: string }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedValue, setEditedValue] = useState(value)

  const handleSave = () => {
    onSave(editedValue)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="flex items-center space-x-2">
        <Input
          value={editedValue}
          onChange={(e) => setEditedValue(e.target.value)}
          placeholder={placeholder}
          className="max-w-sm"
        />
        <Button onClick={handleSave} size="sm">Save</Button>
      </div>
    )
  }

  return (
    <span className="cursor-pointer hover:underline" onClick={() => setIsEditing(true)}>
      {value}
    </span>
  )
}