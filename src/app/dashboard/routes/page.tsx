"use client";

import {
  Menu,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import BackgroundGrid from "@/components/ui/grid/BackgroundGrid";
import Aside from "@/components/ui/aside";
import ChatComponent from "@/components/ui/chat";

export default function Dashboard() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [routeDescription, setRouteDescription] = useState("");
  const [personalNote, setPersonalNote] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to handle error

  // Function to handle form validation
  const handleSubmit = () => {
    if (!routeDescription || routeDescription.trim() === "") {
      setErrorMessage("Route description cannot be empty."); // Set error message
      return; // Do not proceed with submission if empty
    }

    console.log(routeDescription);
    setAlertOpen(false);
    setRouteDescription("");
    setErrorMessage(""); // Clear error message on successful submission
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <BackgroundGrid/>
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
        <div className="pr-10 pl-10 py-6">
          <Card className="bg-zinc-800 px-3">
            <CardHeader>
              <CardTitle className="text-white font-light text-3xl">
                New route
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                size="sm"
                className="bg-green-500 hover:bg-green-700 text-lg"
                onClick={() => setAlertOpen(true)}
              >
                <Plus className="mr-1 h-4 w-4" />
                Create route
              </Button>

              {/* Alert Dialog */}
              <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
                <AlertDialogContent className="bg-zinc-900 w-[90%] h-[90%] max-w-none max-h-none">
                  <BackgroundGrid/>
                  <AlertDialogHeader className="mb-2">
                    <AlertDialogTitle className="text-white font-light text-4xl text-left">
                      Create a new trip
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  {/* Display error message if routeDescription is empty */}
                  {errorMessage && (
                    <p className="text-red-500 text-center mt-2">
                      {errorMessage}
                    </p>
                  )}

                  {/* Pod textareou. */}
                  <div className="">
                    <ChatComponent/>
                    {/* Add Input for personal information */}
                  </div>
                  <div className="flex justify-center items-center text-center px-6">
                    <AlertDialogFooter className="flex justify-center space-x-4">
                      {/* Flexbox layout and spacing */}
                      <AlertDialogCancel
                        className="text-xl p-2"
                        onClick={() => setAlertOpen(false)}
                      >
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
            <CardFooter>
              {/* Add any footer content if needed */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
