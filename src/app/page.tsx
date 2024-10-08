"use client";

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import supabase from '@/utils/supabaseClient';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import {
  ToastProvider,
  ToastViewport,
} from '@/components/ui/toast';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import { MapPin} from 'lucide-react'; // Import icons
import { TbArrowZigZag } from "react-icons/tb";
import { FloatingNav } from '@/components/ui/floating-navbar';
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper';
import AboutCard from './components/functionality/AboutCard';
import Footer from './components/functionality/Footer';
import StepCard from './components/functionality/StepCard';

const MAX_SUBMISSIONS = 4;
const TIME_LIMIT = 4 * 60 * 1000; // 4 minutes in milliseconds

export default function Home() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [emailId, setEmailId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const [emailSubmissions, setEmailSubmissions] = useState<number[]>([]);
  const [phoneSubmissions, setPhoneSubmissions] = useState<number[]>([]);
  const checkRateLimit = (submissions: number[]) => {
    const now = Date.now();
    const recentSubmissions = submissions.filter(time => now - time < TIME_LIMIT);
    return recentSubmissions.length < MAX_SUBMISSIONS;
  };
  const addSubmission = (submissions: number[]) => {
    const now = Date.now();
    const updatedSubmissions = [...submissions.filter(time => now - time < TIME_LIMIT), now];
    return updatedSubmissions;
  };

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

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    if (!checkRateLimit(emailSubmissions)) {
      toast({
        title: 'Rate Limit Exceeded',
        description: 'For security reasons we have a rate limit applied. Thank you for using our services. Try again later.',
        variant: 'destructive',
      });
      return;
    }

    const { data, error } = await supabase
      .from('emails')
      .insert([{ email }])
      .select('id')
      .single();

    if (error) {
      console.error('Error inserting email:', error.message);
      toast({
        title: 'Already registered',
        description: 'Your email has already been registered. Stay tuned!',
        variant: 'destructive',
      });
    } else {
      setEmailId(data.id);
      setIsEmailSubmitted(true);
      setIsDialogOpen(true);
      setEmail('');
      setEmailSubmissions(addSubmission(emailSubmissions));
    }
  };


  const handlePhoneNumberSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkRateLimit(phoneSubmissions)) {
      toast({
        title: 'Rate Limit Exceeded',
        description: 'You have exceeded the rate limit for phone number submissions. Please try again later.',
        variant: 'destructive',
      });
      return;
    }

    if (!emailId) {
      toast({
        title: 'Error',
        description: 'No email ID found.',
        variant: 'destructive',
      });
      return;
    }

    if (!phoneNumber) {
      toast({
        title: 'Invalid number',
        description: 'Please enter a valid phone number.',
        variant: 'destructive',
      });
      return;
    }

    const { data: existingPhoneNumber, error: checkError } = await supabase
      .from('phone_numbers')
      .select('id')
      .eq('phone_number', phoneNumber)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking phone number:', checkError.message);
      toast({
        title: 'Error',
        description: 'Error checking phone number.',
        variant: 'destructive',
      });
      return;
    }

    if (existingPhoneNumber) {
      toast({
        title: 'Already registered',
        description: 'Your number has already been registered. If it has not been you, contact support',
        variant: 'destructive',
      });
      return;
    }

    const { error: phoneNumberError } = await supabase
      .from('phone_numbers')
      .insert([{ email_id: emailId, phone_number: phoneNumber }]);

    if (phoneNumberError) {
      console.error('Error inserting phone number:', phoneNumberError.message);
      toast({
        title: 'Error',
        description: 'Error saving phone number. Please check for formatting or contact support.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Success',
        description: 'Phone number added successfully.',
        className: "bg-white text-black shadow-xl"
      });
      setPhoneNumber(undefined);
      setIsDialogOpen(false);
      setIsEmailSubmitted(false);
      setEmailId(null);
      setIsSuccess(true);
      setPhoneSubmissions(addSubmission(phoneSubmissions));
    }
  };
  
  if (isSuccess) {
    return (
      <MaxWidthWrapper>
        <div className="flex items-center justify-center min-h-screen bg-zinc-300 text-primary-foreground pt-8 px-4 sm:px-8">
          <div className="max-w-4xl w-full">
            <motion.h1
              className="text-4xl sm:text-6xl text-center mb-6 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Done!
            </motion.h1>
            <motion.p
              className="text-center mb-8 text-black text-lg sm:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Thank you for registering. Please wait for further updates. 
              If you have any questions, contact <Link href="/support" className='hover:text-cyan-400 hover:underline'>support</Link>.
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl bg-rose-400 rounded-xl p-4 text-white text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              And no, we won&apos;t spam you with useless emails. We only send emails you really need.
            </motion.p>
            <div className="flex justify-center mt-6">
              <motion.button
                onClick={() => setIsSuccess(false)}
                className="bg-white text-black py-2 px-4 rounded-full text-lg sm:text-xl hover:bg-rose-400 hover:scale-120 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Go Back
              </motion.button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    );
  }

  return (
    <MaxWidthWrapper>
      <ToastProvider>
        <ToastViewport />
        <FloatingNav navItems={navItems} className="" />

        <motion.div
          className="min-h-screen text-black w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <header className="p-4 sm:p-6 flex flex-col items-center">
            {/* Optional header animations */}
          </header>
          
          <main className="mx-auto px-4 py-8 sm:py-12 text-center w-full">
          <motion.h1
  className="text-3xl sm:text-5xl md:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-600 to-zinc-800"
  style={{ lineHeight: '1.2', padding: '0.25rem 0' }} // Adjust line height and add padding
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Plan your routes the easiest way in seconds
</motion.h1>


            <motion.p
              className="text-center text-black text-lg sm:text-xl mb-3 mt-6 px-2 sm:px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {!isEmailSubmitted
                ? "Leave us your email to be the first to get notified."
                : "Please provide your phone number to get instantly notified."}
            </motion.p>

            <form onSubmit={handleEmailSubmit} className="flex flex-col items-center">
              {!isEmailSubmitted ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full max-w-md px-2 sm:px-0"
                  >
                    <div>
                      <Input
                        className='bg-zinc-800 text-white mb-2 mt-2 text-base sm:text-3xl rounded-xl'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder=""
                      />
                      <h1 className="text-center text-xs sm:text-sm text-zinc-400">Enter your email above</h1>
                    </div>
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="hover:scale-105 transition bg-gradient-to-r from-black via-black to-zinc-400 text-white py-2 px-4 rounded-full text-base sm:text-2xl mt-4 sm:mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    Join the waitlist


                  </motion.button>

                </>
              ) : null}
            </form>

            <div className="flex justify-center rounded-xl mt-4 sm:mt-8">
              <motion.button
                className={`text-lg sm:text-xl ${isEmailSubmitted ? 'block' : 'hidden'}`}
                onClick={() => setIsDialogOpen(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <p className="rounded-xl text-lg sm:text-3xl mx-auto shadow-2xl px-4 py-2 sm:px-6 sm:py-3">Enter my phone number</p>
              </motion.button>
            </div>
            
            <AlertDialog open={isDialogOpen} onOpenChange={(open) => setIsDialogOpen(open)}>
              <AlertDialogContent className='bg-zinc-300'>
                <AlertDialogHeader>
                  <h2 className="text-2xl sm:text-3xl text-black">
                    Just one more thing.
                  </h2>
                  <p className="text-sm sm:text-md text-black mt-2">
                    Leave us your phone number if you&apos;re interested.
                  </p>
                </AlertDialogHeader>
                <form onSubmit={handlePhoneNumberSubmit} className="flex flex-col">
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    defaultCountry="US"
                    className="custom-phone-input mb-4 text-black rounded-lg p-2 focus:outline-none text-base sm:text-2xl transition"
                  />

                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setIsDialogOpen(false)} className="hover:scale-105 transition hover:bg-zinc-400 text-black py-2 px-4 rounded-full text-sm sm:text-base">Cancel</AlertDialogCancel>
                    <AlertDialogAction type="submit"
                      className="bg-white hover:scale-105 transition hover:bg-rose-400 text-black py-2 px-4 rounded-full text-sm sm:text-base"
                    >
                      Submit
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </form>
              </AlertDialogContent>
            </AlertDialog>
          </main>

          {/* New Content Section */}
          <motion.div
            className="container mx-auto px-4 py-8 sm:py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <main className="container mx-auto px-4 py-1">
              <section className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-4xl mb-4 sm:mb-7 text-black">About Triptify</h2>
                <p className="text-lg sm:text-2xl max-w-2xl mx-auto px-2 sm:px-0">
                  Triptify is your intelligent companion for planning efficient and enjoyable routes. 
                  Whether you&apos;re commuting, road-tripping, or exploring a new city, we&apos;ve got you covered.
                </p>
              </section>
              
               <AboutCard/>
              
              <h1 className="text-center text-4xl mb-3">Know everything you need in three steps</h1>
              <p className="text-center text-xl mb-3">Never know the hassle of planning a trip all night again.</p>
              
              <StepCard/>
              
              <div className="flex justify-center mt-6 sm:mt-10 text-8xl sm:text-9xl">
                <TbArrowZigZag className='text-8xl sm:text-9xl hover:text-rose-400 transition' />
              </div>

              <div className="flex justify-center mt-6 sm:mt-10 text-lg sm:text-3xl hover:underline hover:text-rose-400">
                <Link href="/support"><p>I want to ask something</p></Link>
              </div>

              <Card className="bg-white backdrop-blur-lg border-none text-black text-center shadow-2xl mt-8 sm:mt-12 p-4 sm:p-6 rounded-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-lg sm:text-xl">
                    <MapPin className="mr-2" />
                    Ready to Plan Smarter Routes?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black text-base sm:text-xl">
                    Join thousands of satisfied users and start optimizing your journeys today.
                  </CardDescription>
                </CardContent>
              </Card>
            </main>
          </motion.div>
          
          <footer className="mb-5 text-black flex text-center py-4 mt-2 px-2 sm:px-4">
            <Footer/>
          </footer>
        </motion.div>
      </ToastProvider>
    </MaxWidthWrapper>
  );
}
