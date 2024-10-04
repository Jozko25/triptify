import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BarChart3, Home, Map, Menu, PlusCircle, Settings, Users } from "lucide-react";
import Image from "next/image";
import { GiArtificialIntelligence } from "react-icons/gi";
import Link from "next/link";

export default function Test() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden w-64 bg-white shadow-md sm:block">
        <div className="flex h-20 items-center justify-center border-b">
          <Map className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold">RouteMapper</span>
        </div>
        <nav className="mt-6">
          <Link
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <Home className="h-5 w-5" />
            <span className="mx-3">Dashboard</span>
          </Link>
          <Link
            href="#"
            className="flex items-center bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <PlusCircle className="h-5 w-5" />
            <span className="mx-3">New Route</span>
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <Users className="h-5 w-5" />
            <span className="mx-3">Team</span>
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <BarChart3 className="h-5 w-5" />
            <span className="mx-3">Analytics</span>
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <Settings className="h-5 w-5" />
            <span className="mx-3">Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex h-20 items-center justify-between border-b bg-white px-6">
          <div className="flex items-center">
            <button className="text-gray-500 focus:outline-none sm:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="ml-4 text-2xl font-semibold text-gray-800">New Route</h1>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Image
                src="/placeholder.svg?height=32&width=32"
                width={32}
                height={32}
                className="rounded-full"
                alt="User avatar"
              />
              <span className="sr-only">User menu</span>
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-zinc-200 p-6">
          <div className="mx-auto max-w-6xl space-y-6">
            {/* Route Input Form */}
            <Card>
              <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start" className="text-2xl">Start Location</Label>
                      <Input
                        className='bg-zinc-300 text-white mb-2 mt-2 text-base sm:text-3xl rounded-xl'
                        id="start"
                        type="text"
                        required
                        placeholder=""
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end" className="text-2xl">End Location</Label>
                      <Input
                        className='bg-zinc-300 text-white mb-2 mt-2 text-base sm:text-3xl rounded-xl'
                        id="end"
                        type="text"
                        required
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="waypoints" className="text-2xl">Comments/Preferences</Label>
                    </div>
                    <Textarea
                      id="waypoints"
                      className='bg-zinc-300 text-white mb-2 mt-2 text-base sm:text-3xl rounded-xl'
                      placeholder=""
                    />
                    <p className="text-sm bg-gradient-to-r from-red-500 to-pink-800 text-transparent bg-clip-text ml-4 text-right">
                      Powered by AI
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="transport" className="text-2xl">Mode of Transport</Label>
                      <Select>
                        <SelectTrigger id="transport">
                          <SelectValue placeholder="Select transport mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="driving">Driving</SelectItem>
                          <SelectItem value="walking">Walking</SelectItem>
                          <SelectItem value="bicycling">Bicycling</SelectItem>
                          <SelectItem value="transit">Transit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="optimize" className="text-2xl">Optimize Route</Label>
                      <Select>
                        <SelectTrigger id="optimize">
                          <SelectValue placeholder="Select optimization" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fastest">Fastest</SelectItem>
                          <SelectItem value="shortest">Shortest</SelectItem>
                          <SelectItem value="balanced">Balanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-xl">
                    Submit
                  </Button>
                  <p className="text-sm bg-gradient-to-r from-red-500 to-pink-800 text-transparent bg-clip-text ml-4 text-right">
                    Powered by AI
                  </p>
                </form>
              </CardContent>
            </Card>
            {/* Additional Widgets */}
            <div className="flex flex-col gap-6">
              {/* Recent Routes */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Routes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>New York to Los Angeles</span>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Chicago to Miami</span>
                      <span className="text-sm text-gray-500">5 days ago</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Seattle to San Francisco</span>
                      <span className="text-sm text-gray-500">1 week ago</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-1 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Total Routes</dt>
                      <dd className="text-3xl font-semibold">1,234</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Total Distance</dt>
                      <dd className="text-3xl font-semibold">87,654 km</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Average Time</dt>
                      <dd className="text-3xl font-semibold">12 hours</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Routes in Progress</dt>
                      <dd className="text-3xl font-semibold">5</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
