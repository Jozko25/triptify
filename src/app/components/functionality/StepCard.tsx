"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';
import Loading from '@/components/ui/loader';
import AnimatedTie from '@/components/ui/animatedTie/animatedTie';

const StepCard = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading placeholder
  }

  return (
    <motion.section className="mb-8 sm:mb-12 flex justify-center">
      <div className="relative z-10 p-4 sm:p-6 bg-zinc-300 rounded-lg shadow-lg transform transition-all hover:shadow-2xl w-full max-w-6xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Card className="cursor-grab hover:scale-105 transition bg-zinc-800 border-none text-black shadow-2xl hover:text-rose-400 w-full h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-lg sm:text-xl text-white">
                <RiNumber1 className="mr-2 text-white text-6xl" />
                Your details.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white text-base sm:text-xl">
                Provide the information to triptify, click submit.
                <img src="/1.png" className="mt-3 rounded-2xl w-full" />
                <img src="/2.png" className="mt-3 rounded-2xl w-full" />
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="cursor-grab hover:scale-105 transition bg-zinc-800 border-none text-black shadow-2xl hover:text-rose-400 w-full h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg sm:text-xl text-white">
                <RiNumber2 className="mr-2 text-6xl" />
                Let us process.
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <CardDescription className="text-white text-base sm:text-xl text-center mb-8">
                Let triptify utilize the best performing algorithms to find the best results for you.
              </CardDescription>
              {/* Center the loader directly below the description */}
              <div className="flex justify-center items-center h-24 w-full">
                <Loading/>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-grab hover:scale-105 transition bg-zinc-800 
           border-none text-black shadow-2xl hover:text-rose-400 w-full h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-lg sm:text-xl text-white">
                <RiNumber3 className="mr-2 text-6xl" />
                Get the output.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white text-base sm:text-xl">
                Get information you need, tailored, in real-time updates.
                <div className="flex justify-center">
                  <AnimatedTie/>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StepCard;

