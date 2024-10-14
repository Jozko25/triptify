"use client";

import { motion } from 'framer-motion';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';
import { FloatingNav } from '@/components/ui/floating-navbar';
import Link from 'next/link';
import BackgroundGrid from '@/components/ui/grid/BackgroundGrid';

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

export default function TermsOfService() {
  return (
    <ToastProvider>
      <div className="relative min-h-screen overflow-hidden">
        <BackgroundGrid/>
        <ToastViewport />
        <FloatingNav navItems={navItems} className="z-50" />
        <div className="relative z-10 min-h-screen bg-zinc-900/50 flex flex-col py-12 px-4">
          <main className="container mx-auto text-left">
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 leading-[1.2]">Terms of Service</h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 mb-4 "><strong>Effective Date:</strong> 10/05/2024</p>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">1. Acceptance of Terms</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              By accessing or using the route planning software (“the Service”) provided by Triptify (“we,” “us,” or “our”), you agree to comply with and be bound by these Terms and Services (“Terms”). If you do not agree with any part of these Terms, please do not use the Service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">2. Changes to Terms</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page with a new effective date. Your continued use of the Service after changes have been made constitutes your acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">3. Description of the Service</h2>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600'>
              Triptify provides a route planning software that allows users to create, customize, and manage travel itineraries. The Service may include features such as mapping, navigation, and trip optimization.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">4. Eligibility</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              To use our Service, you must be at least 18 years old or have parental consent. By using the Service, you represent and warrant that you meet these eligibility requirements.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">5. User Account</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              To access certain features of the Service, you may be required to create an account. You agree to provide accurate and complete information when creating your account and to update such information as necessary. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">6. User Obligations</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              You agree not to use the Service for any unlawful or prohibited purpose, including but not limited to:
            </p>
            <ul className="list-disc ml-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              <li>Using the Service in any manner that could damage, disable, overburden, or impair the Service.</li>
              <li>Attempting to gain unauthorized access to any part of the Service or any other systems or networks connected to the Service.</li>
              <li>Disrupting or interfering with the security, integrity, or performance of the Service.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">7. Intellectual Property</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              All content, features, and functionality of the Service, including but not limited to text, graphics, logos, and software, are the exclusive property of Triptify and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">8. Third-Party Links</h2>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600'>
              Our Service may contain links to third-party websites or services that are not owned or controlled by Triptify. We do not endorse or assume any responsibility for any third-party sites, information, materials, or services. You acknowledge and agree that we shall not be responsible for any damages or losses caused or alleged to be caused by your use of any third-party services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">9. Disclaimers</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              The Service is provided on an “as-is” and “as-available” basis. We make no warranties, express or implied, regarding the reliability, availability, or suitability of the Service for your needs. We do not warrant that the Service will be uninterrupted or error-free.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">10. Limitation of Liability</h2>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600'>
              To the fullest extent permitted by law, Triptify shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service, even if we have been advised of the possibility of such damages. Our total liability to you for all claims arising out of or relating to these Terms or the Service shall not exceed the amount you paid to us, if any, in the twelve (12) months preceding the claim.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">11. Indemnification</h2>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600'>
              You agree to indemnify, defend, and hold harmless Triptify, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys’ fees) arising out of or related to your use of the Service, your violation of these Terms, or your violation of any rights of another party.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">12. Governing Law</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              These Terms shall be governed by and construed in accordance with the laws of Your State/Country, without regard to its conflict of law principles. You agree to submit to the personal jurisdiction of the courts located in Your State/Country for the resolution of any disputes.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">13. Contact Us</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="list-disc ml-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              <li><strong>Email:</strong> info@triptify.lol</li>
            </ul>
            <div className='text-center transition text-white text-2xl hover:text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600'><Link href='/'>Back to Home</Link></div>
          </main>
        </div>
      </div>
    </ToastProvider>
  );
}
