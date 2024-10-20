"use client";

import { BarChart, Home, Layers, MapPin, Settings, Settings2, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter
import { Button } from './button';
import BackgroundGrid from './grid/BackgroundGrid';

const Aside = () => {
  const pathname = usePathname(); // Get the current pathname

  // Define your navigation items
  const navItems = [
    { name: "Dashboard", icon: Home, href: "/dashboard" },
    { name: "Routes", icon: Layers, href: "/dashboard/routes" },
    { name: "Analytics", icon: BarChart, href: "/dashboard/analytics" },
    { name: "Team", icon: Users, href: "/dashboard/team" },
    { name: "Preferences", icon: Settings2, href: "/dashboard/preferences" },
    { name: "Settings", icon: Settings, href: "/dashboard/settings" },
  ];

  return (
    <aside className="hidden md:flex w-64 flex-col bg-gray-50 border-r rounded-r-xl bg-transparent">
      <BackgroundGrid />
      <div className="flex items-center h-16 px-4 border-b">
        <Link className="flex items-center space-x-2 font-semibold" href="/">
          <MapPin className="h-6 w-6 text-white" />
          <span className="text-3xl text-white font-light">Triptify</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2 text-white text-2xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href; // Check if the current pathname matches the item's href
            return (
              <li key={item.name}>
                <Link href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start hover:bg-zinc-600 text-xl hover:text-white"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
