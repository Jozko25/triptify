"use client";

import { BarChart, Home, Layers, MapPin, Route, Settings, Settings2, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from './button';
import BackgroundGrid from './grid/BackgroundGrid';

const Aside = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", icon: Home, href: "/dashboard" },
    { name: "Routes", icon: Route, href: "/dashboard/routes" },
    { name: "Analytics", icon: BarChart, href: "/dashboard/analytics" },
    { name: "Team", icon: Users, href: "/dashboard/team" },
    { name: "Settings", icon: Settings, href: "/dashboard/settings" },
  ];

  return (
    <aside className="hidden md:flex w-64 flex-col border-r rounded-r-xl bg-zinc-300 text-black">
      <BackgroundGrid />
      <div className="flex items-center h-16 px-4 border-b border-gray-700">
        <Link className="flex items-center space-x-2 font-semibold" href="/">
          <MapPin className="justify-center h-10 w-10 text-zinc-800" />
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2 text-2xl text-black">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link href={item.href}>
                  <Button
                    variant={isActive ? "black" : "white"}
                    className={`w-full justify-start text-xl transition ${
                      isActive ? 'bg-zinc-800 text-white' : 'bg-zinc-300 hover:bg-zinc-200' 
                    }`}
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
