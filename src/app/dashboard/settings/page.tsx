import { BarChart, Clock, Home, Layers, MapPin, Menu, MoreVertical, Plus, Search, Settings, Settings2, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Aside from "@/components/ui/aside"

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Aside/>
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
          <Button className="md:hidden" size="icon" variant="ghost">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex items-center ml-auto space-x-4">
            <form className="hidden md:block">
              <Input
                className="w-60 bg-muted rounded-xl"
                placeholder="Search routes..."
                type="search"
              />
            </form>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Card className="flex-1 bg-zinc-800">
              <CardHeader>
                <CardTitle className="text-white font-light">Map View</CardTitle>
                <CardDescription>Current route visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center bg-zinc-800">
                  <MapPin className="h-16 w-16 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:w-[300px]">
              <Card className="bg-zinc-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Total Distance
                  </CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground text-white" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">2,345 km</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Average Time
                  </CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground text-white" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">3.2 hours</div>
                  <p className="text-xs text-muted-foreground">
                    -5% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <Card className="bg-zinc-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Recent Routes</CardTitle>
                <Button size="sm" className="bg-green-500">
                  <Plus className="mr-2 h-4 w-4" />
                  New Route
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-white">
                {[
                  {
                    id: 1,
                    name: "City Tour",
                    distance: "15 km",
                    time: "2 hours",
                  },
                  {
                    id: 2,
                    name: "Mountain Trail",
                    distance: "8 km",
                    time: "3 hours",
                  },
                  {
                    id: 3,
                    name: "Coastal Drive",
                    distance: "100 km",
                    time: "4 hours",
                  },
                ].map((route) => (
                  <div
                    key={route.id}
                    className="flex items-center justify-between space-x-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          {route.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {route.distance} • {route.time}
                        </p>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}