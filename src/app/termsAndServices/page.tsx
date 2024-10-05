"use client";

import { motion } from 'framer-motion';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';
import { FloatingNav } from '@/components/ui/floating-navbar';
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

export default function TermsAndServices() {
  return (
    <ToastProvider>
      <ToastViewport />
      <FloatingNav navItems={navItems} className="" />
      <div className="min-h-screen bg-zinc-300 flex flex-col py-12 px-4">
        <main className="container mx-auto text-left">
          <h1 className="text-5xl font-bold mb-6">Terms and Services for Triptify</h1>
          <p className="text-gray-600 mb-4"><strong>Effective Date:</strong> 10/05/2024</p>

          <h2 className="text-2xl font-semibold mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the route planning software (“the Service”) provided by Triptify (“we,” “us,” or “our”), you agree to comply with and be bound by these Terms and Services (“Terms”). If you do not agree with any part of these Terms, please do not use the Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8">2. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page with a new effective date. Your continued use of the Service after changes have been made constitutes your acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8">3. Description of the Service</h2>
          <p>
            Triptify provides a route planning software that allows users to create, customize, and manage travel itineraries. The Service may include features such as mapping, navigation, and trip optimization.
          </p>

          <h2 className="text-2xl font-semibold mt-8">4. Eligibility</h2>
          <p>
            To use our Service, you must be at least 18 years old or have parental consent. By using the Service, you represent and warrant that you meet these eligibility requirements.
          </p>

          <h2 className="text-2xl font-semibold mt-8">5. User Account</h2>
          <p>
            To access certain features of the Service, you may be required to create an account. You agree to provide accurate and complete information when creating your account and to update such information as necessary. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-semibold mt-8">6. User Obligations</h2>
          <p>
            You agree not to use the Service for any unlawful or prohibited purpose, including but not limited to:
          </p>
          <ul className="list-disc ml-6">
            <li>Using the Service in any manner that could damage, disable, overburden, or impair the Service.</li>
            <li>Attempting to gain unauthorized access to any part of the Service or any other systems or networks connected to the Service.</li>
            <li>Disrupting or interfering with the security, integrity, or performance of the Service.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">7. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the Service, including but not limited to text, graphics, logos, and software, are the exclusive property of Triptify and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.
          </p>

          <h2 className="text-2xl font-semibold mt-8">8. Third-Party Links</h2>
          <p>
            Our Service may contain links to third-party websites or services that are not owned or controlled by Triptify. We do not endorse or assume any responsibility for any third-party sites, information, materials, or services. You acknowledge and agree that we shall not be responsible for any damages or losses caused or alleged to be caused by your use of any third-party services.
          </p>

          <h2 className="text-2xl font-semibold mt-8">9. Disclaimers</h2>
          <p>
            The Service is provided on an “as-is” and “as-available” basis. We make no warranties, express or implied, regarding the reliability, availability, or suitability of the Service for your needs. We do not warrant that the Service will be uninterrupted or error-free.
          </p>

          <h2 className="text-2xl font-semibold mt-8">10. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Triptify shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service, even if we have been advised of the possibility of such damages. Our total liability to you for all claims arising out of or relating to these Terms or the Service shall not exceed the amount you paid to us, if any, in the twelve (12) months preceding the claim.
          </p>

          <h2 className="text-2xl font-semibold mt-8">11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Triptify, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys’ fees) arising out of or related to your use of the Service, your violation of these Terms, or your violation of any rights of another party.
          </p>

          <h2 className="text-2xl font-semibold mt-8">12. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Your State/Country, without regard to its conflict of law principles. You agree to submit to the personal jurisdiction of the courts located in Your State/Country for the resolution of any disputes.
          </p>

          <h2 className="text-2xl font-semibold mt-8">13. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul className="list-disc ml-6">
            <li><strong>Email:</strong> info@triptify.lol</li>
          </ul>
        </main>
        <Footer/>
      </div>
    </ToastProvider>
  );
}
