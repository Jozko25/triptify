import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Navigation, Zap } from 'lucide-react';

const AboutCard = () => {
  return (
    <div><motion.section
    className="mb-8 sm:mb-12 flex justify-center"
  >
    <div className="relative z-10 p-4 sm:p-6 bg-zinc-300 rounded-lg shadow-lg transform transition-all hover:shadow-2xl w-full max-w-6xl">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Card className="cursor-grab hover:scale-105 transition bg-white border-none text-black shadow-2xl hover:text-rose-400 rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg sm:text-xl">
              <MapPin className="mr-2" />
              Real-time route update
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-black text-base sm:text-xl">
              Utilize advanced algorithms to be updated about your route ASAP.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="cursor-grab hover:scale-105 transition bg-white border-none text-black shadow-2xl hover:text-rose-400 rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg sm:text-xl">
              <Navigation className="mr-2" />
              Navigation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-black text-base sm:text-xl">
              We don&apos;t need that here. We got Waze.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="cursor-grab hover:scale-105 transition bg-white border-none text-black shadow-2xl hover:text-rose-400 rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg sm:text-xl">
              <Clock className="mr-2" />
              Itinerary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-black text-base sm:text-xl">
              Setup your itinerary so you know what&apos;s happening.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="cursor-grab hover:scale-105 transition bg-white border-none text-black shadow-2xl hover:text-rose-400 rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg sm:text-xl">
              <Zap className="mr-2" />
              Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-black text-base sm:text-xl">
              Make a checklist to never forget anything.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </motion.section></div>
  )
}

export default AboutCard