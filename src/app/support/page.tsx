"use client";

import { motion } from 'framer-motion';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';
import Footer from '@/components/ui/footer';
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper';

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
    <MaxWidthWrapper>
      <div className='bg-[#02021a] rounded-3xl px-6 mt-7 w-full text-white'> {/* Added text-white here */}
        <ToastProvider>
          <div className="relative min-h-screen overflow-hidden">
            <ToastViewport />
            <div className="relative z-10 min-h-screen flex flex-col">
              <header className="p-6 flex flex-col items-center"></header>

              <main className="container mx-auto px-4 py-12 text-center">
                <motion.h1
                  className="text-7xl mb-6 bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 flex justify-center items-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className="leading-relaxed py-2">
                    <span>Support</span>
                  </div>
                </motion.h1>

                <motion.p
                  className="text-center mb-8 text-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Frequently asked questions.
                </motion.p>

                {/* Animated Accordion Section */}
                <motion.div
                  className="space-y-4 text-left text-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-white">Couldn&apos;t find what you were looking for?</AccordionTrigger>
                      <AccordionContent className="text-2xl">
                        Contact us about anything you need here: <Link className="hover:text-blue-500 hover:underline" href="mailto:info@triptify.lol">info@triptify.lol</Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What can I do with your service?</AccordionTrigger>
                      <AccordionContent className="text-2xl">
                        You can find the best routes for your trips, discover interesting local spots, and get recommendations tailored to what you like.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How does the route planning work?</AccordionTrigger>
                      <AccordionContent className="text-2xl">
                        We help you find the quickest or most scenic routes by considering things like traffic and your preferences, so you can enjoy your journey.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Can I adjust the recommendations to fit my interests?</AccordionTrigger>
                      <AccordionContent className="text-2xl">
                      Definitely! You can use our service on both your computer and smartphone, so you can plan and explore wherever you are.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-8">
                      <AccordionTrigger>How up-to-date is the information?</AccordionTrigger>
                      <AccordionContent className="text-2xl">
                        We keep everything current by regularly updating our data, so you get the latest information about traffic, attractions, and more.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-9">
                      <AccordionTrigger>Can I use the service without an internet connection?</AccordionTrigger>
                      <AccordionContent className="text-2xl">
                        Yes, you can download important details and access them offline, so you don't have to worry about losing connection.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-10">
                      <AccordionTrigger>How can I give feedback or report a problem?</AccordionTrigger>
                      <AccordionContent className="text-2xl">
                        You can easily send us your feedback or report any issues through our support page. We're here to help!
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-11">
                      <AccordionTrigger>What subscription plans do you offer?</AccordionTrigger>
                      <AccordionContent className="text-2xl">
                        We have a few different plans to choose from, depending on how many features you need. You can check out the options on our pricing page to find what works best for you.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              </main>
            </div>
          </div>
          <Link href="/">
            <div className="mb-10">
              <h1 className="text-center transition hover:text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 text-2xl">Back to home</h1>
            </div>
          </Link>
          <Footer />
        </ToastProvider>
      </div>
    </MaxWidthWrapper>
  );
}
