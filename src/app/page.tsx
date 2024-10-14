"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
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
import { FloatingNav } from '@/components/ui/floating-navbar';
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper';
import BackgroundGrid from '@/components/ui/grid/BackgroundGrid';
import { Button } from '@/components/ui/button';

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
        <div className="flex items-center justify-center min-h-screen bg-zinc-900 text-primary-foreground pt-8 px-4 sm:px-8">
          <div className="max-w-4xl w-full">
          <motion.h1
          className="text-center text-3xl sm:text-4xl md:text-6xl mb-9 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600"
          style={{ lineHeight: '1.2', padding: '0.25rem 0' }} // Adjust line height and add padding
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Done!
        </motion.h1>
            <motion.p
              className="text-center mb-8 text-lg sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Thank you for registering. Please wait for further updates. 
              If you have any questions, contact <Link href="/support" className='hover:text-cyan-400 hover:underline'>support</Link>.
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl rounded-xl p-4 text-white text-center bg-gradient-to-l from-zinc-500 via-zinc-500 to-zinc-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              And no, we won&apos;t spam you with useless emails. We only send emails you really need.
            </motion.p>
            <div className="flex justify-center mt-6">
              <motion.button
                onClick={() => setIsSuccess(false)}
                className="bg-zinc-800 text-white py-2 px-4 rounded-full text-lg sm:text-xl hover:scale-120 transition"
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
      <BackgroundGrid />
      <ToastProvider>
        <ToastViewport />
        <FloatingNav navItems={navItems} className="" />

        <motion.div
          className="min-h-screen text-black w-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          
          <header className="p-4 sm:p-6 flex flex-col items-center relative z-10">
            {/* Optional header animations */}
          </header>
          
          <main className="mx-auto px-4 py-8 sm:py-12 text-center w-full relative z-10">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl mb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600"
              style={{ lineHeight: '1.2', padding: '0.25rem 0' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Let's plan your trip the coolest way.
            </motion.h1>
            <motion.h1
              className="text-md sm:text-md md:text-md text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 mb-6" // Added mb-6 for spacing
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Estimated launch date: 1/1/2025
            </motion.h1>

            <motion.p
              className="text-center text-lg sm:text-xl mb-6 px-2 sm:px-4 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {!isEmailSubmitted
                ? ""
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
                        className='text-white mb-2 mt-2 text-base sm:text-3xl rounded-xl bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-600'
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
                    className="group hover:scale-105 transition-all duration-300 ease-in-out bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 p-[2px] rounded-lg mt-6 sm:mt-12 shadow-lg hover:shadow-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <span className="block bg-zinc-900 rounded-lg px-6 py-3 transition-all duration-300 ease-in-out group-hover:bg-opacity-80">
                      <span className="bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 bg-clip-text text-transparent text-xl sm:text-3xl font-bold transition-all duration-300 ease-in-out group-hover:bg-gradient-to-l">
                        Join Now
                      </span>
                    </span>
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
                <p className="rounded-xl text-lg sm:text-3xl bg-zinc-500 mx-auto shadow-2xl px-4 py-2 sm:px-6 sm:py-3 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">Re-enter my phone number</p>
              </motion.button>
            </div>
            
            <AlertDialog open={isDialogOpen} onOpenChange={(open) => setIsDialogOpen(open)}>
              <AlertDialogContent className="bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl shadow-2xl p-6">
                <AlertDialogHeader className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-300 mb-2">
                    Just one more thing.
                  </h2>
                  <p className="text-sm sm:text-lg text-zinc-400">
                    Leave us your phone number to be notified instantly.
                  </p>
                </AlertDialogHeader>
                <form onSubmit={handlePhoneNumberSubmit} className="flex flex-col">
                  <PhoneInput
                    placeholder="Country code and phone number"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    defaultCountry="US"
                    className="custom-phone-input mb-6 text-zinc-300 bg-zinc-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-zinc-500 text-base sm:text-lg transition"
                    inputClassName="bg-zinc-700 text-zinc-300"
                  />

                  <AlertDialogFooter className="flex justify-end space-x-3 mt-4">
                    <AlertDialogCancel 
                      onClick={() => setIsDialogOpen(false)} 
                      className="px-4 py-2 text-sm sm:text-base font-medium rounded-lg bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors duration-200"
                    >
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction 
                      type="submit"
                      className="px-4 py-2 text-sm sm:text-base font-medium rounded-lg bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-600 text-zinc-900 hover:from-zinc-300 hover:to-zinc-500 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Submit
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </form>
              </AlertDialogContent>
            </AlertDialog>

            {/* Move the About Triptify section here */}
            <motion.div
              className="container mx-auto px-4 py-8 sm:py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <section className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
                <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-7 font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">How?</h2>
                <p className="mb-5 text-base sm:text-lg lg:text-2xl max-w-2xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
                  Triptify simplifies route planning to the easiest steps. Submit your preferences and let us do the rest.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 mt-6">
                  <div className="flex flex-col items-center w-full md:w-auto md:max-w-[400px]">
                    <span className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 glow-number glow-1 leading-relaxed py-2">
                      Login.
                    </span>
                    <img 
                      src="/a.PNG" 
                      alt="Login Step" 
                      className="w-full md:w-[400px] h-auto rounded-3xl shadow-lg" 
                    />
                  </div>
                  <div className="flex flex-col items-center w-full md:w-auto md:max-w-[400px]">
                    <span className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 glow-number glow-1 leading-relaxed py-2">
                      List.
                    </span>
                    <img 
                      src="/b.PNG" 
                      alt="List Step" 
                      className="w-full md:w-[400px] h-auto rounded-3xl shadow-lg" 
                    />
                  </div>
                  <div className="flex flex-col items-center w-full md:w-auto md:max-w-[400px]">
                    <span className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 glow-number glow-1 leading-relaxed py-2">
                      Go.
                    </span>
                    <img 
                      src="/c.PNG" 
                      alt="Go Step" 
                      className="w-full md:w-[400px] h-auto rounded-3xl shadow-lg" 
                    />
                  </div>
                </div>
              </section>
            </motion.div>
          </main>

          {/* Footer links */}
          <div className="flex flex-col items-center sm:mt-10 text-sm sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
            <p>Our <Link className='hover:underline hover:text-blue-500' href="/termsOfService">Terms of service</Link> and <Link className='hover:underline hover:text-blue-500' href="/privacyPolicy">Privacy policy</Link></p>
          </div>
          <div className="mb-6 flex flex-col items-center sm:mt-10 text-sm sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
            <p><Link className='hover:underline hover:text-blue-500' href="/support">Support</Link></p>
          </div>
          
        </motion.div>
      </ToastProvider>
    </MaxWidthWrapper>
  );
}