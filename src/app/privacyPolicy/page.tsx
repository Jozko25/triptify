"use client";

import { motion } from 'framer-motion';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';
import { FloatingNav } from '@/components/ui/floating-navbar';
import Link from 'next/link';
import Footer from '../components/functionality/Footer';

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

export default function PrivacyPolicy() {
  return (
    <ToastProvider>
      <ToastViewport />
      <FloatingNav navItems={navItems} className="" />
      <div className="min-h-screen bg-zinc-300 flex flex-col py-12 px-4">
        <main className="container mx-auto text-left">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-4"><strong>Effective Date:</strong> 10/05/2024</p>

          <h2 className="text-2xl font-semibold mt-8">1. Introduction</h2>
          <p>
            This Privacy Policy explains how Triptify (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares your information when you use our route planning software (&quot;the Service&quot;). By using the Service, you consent to the data practices described in this policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8">2. Information We Collect</h2>
          <p>
            We may collect the following types of information:
          </p>
          <ul className="list-disc ml-6">
            <li><strong>Personal Information:</strong> Information that you provide directly to us, such as your name, email address, and contact information when you create an account.</li>
            <li><strong>Usage Data:</strong> Information about how you use the Service, including your interactions, the features you access, and the time spent on the Service.</li>
            <li><strong>Device Information:</strong> Information about the device you use to access the Service, including IP address, browser type, operating system, and device identifiers.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">3. How We Use Your Information</h2>
          <p>
            We may use your information for the following purposes:
          </p>
          <ul className="list-disc ml-6">
            <li>To provide and maintain the Service.</li>
            <li>To personalize your experience and improve our Service.</li>
            <li>To communicate with you, including sending updates and promotional materials.</li>
            <li>To monitor and analyze usage trends and activities to improve the Service.</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">4. Sharing Your Information</h2>
          <p>
            We may share your information in the following circumstances:
          </p>
          <ul className="list-disc ml-6">
            <li>With service providers who assist us in operating the Service and conducting our business.</li>
            <li>With law enforcement or government agencies as required by law.</li>
            <li>In connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">5. Your Choices</h2>
          <p>
            You have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc ml-6">
            <li>The right to access, correct, or delete your personal information.</li>
            <li>The right to withdraw consent to our processing of your information.</li>
            <li>The right to opt out of marketing communications.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">6. Data Security</h2>
          <p>
            We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-8">7. Children&apos;s Privacy</h2>
          <p>
            Our Service is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information.
          </p>

          <h2 className="text-2xl font-semibold mt-8">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with a new effective date. Your continued use of the Service after changes have been made constitutes your acceptance of the revised policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-5"><strong>Email:</strong> info@triptify.lol</li>
          </ul>
        </main>
        <Footer/>
      </div>
    </ToastProvider>
  );
}
