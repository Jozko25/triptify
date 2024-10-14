"use client";

import { motion } from 'framer-motion';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';
import { FloatingNav } from '@/components/ui/floating-navbar';
import Link from 'next/link';


const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Support",
    link: "/support",
  },
];

export default function Support() {
  return (
    <ToastProvider>
      <ToastViewport />
      <FloatingNav navItems={navItems} className="" />
      <div className="min-h-screen bg-zinc-900 flex flex-col justify-center items-center">
        <header className="p-6 flex flex-col items-center"></header>

        <main className="container mx-auto px-4 py-12 text-center">
          <motion.h1
            className="text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 via-black to-zinc-800 flex justify-center items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">Stay tuned.</span>
            </div>
          </motion.h1>

          <motion.p
            className="text-center mb-8 text-black text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Add any additional text you want here */}
          </motion.p>

          {/* Motion Button to Go Home */}
          <motion.button
            className="mt-6 bg-zinc-300 text-white py-2 px-4 rounded-lg transition duration-200 hover:text-rose-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 underline text-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/">Go Home</Link>
          </motion.button>
        </main>

      </div>
    </ToastProvider>
  );
}
