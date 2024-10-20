"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Footer from "@/components/ui/footer";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");
  const plans = [
    {
      name: "Basic",
      price: billingCycle === "monthly" ? 0 : 0,
      features: [
        "Standard route optimization",
        "Up to 20 stops per route",
        "Basic traffic avoidance",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? 13 : 130,
      features: [
        "Advanced route optimization",
        "Up to 200 stops per route",
        "Real-time traffic updates",
        "Priority email and chat support",
        "Multi-vehicle planning",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Cutting-edge AI-powered route optimization",
        "Unlimited stops per route",
        "Predictive traffic modeling",
        "24/7 dedicated support",
        "Fleet management integration",
        "Custom API access",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100 p-8">
      <MaxWidthWrapper>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl mt-7 text-center mb-8 font-light text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
            Choose Your Optimal Route to Success
          </h1>

          <div className="flex justify-center mb-8">
            <div className="bg-zinc-800 p-1 rounded-full">
              <button
                className={`px-4 py-2 rounded-full transition ${billingCycle === "monthly" ? "bg-green-600" : "text-gray-400"}`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-zinc-800 rounded-lg p-8 flex flex-col">
                <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 mb-4">
                  {plan.name}
                </h2>
                <div className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 mb-4">
                  {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
                  {typeof plan.price === "number" && <span className="text-xl font-normal">{billingCycle === "monthly" ? "/mo" : "/yr"}</span>}
                </div>
                <ul className="flex-grow mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center mb-2">
                      <Check className="text-green-500 mr-2" />
                      <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl">
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 mb-10 text-center">
            <h2 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 mb-4">
              All plans include:
            </h2>
            <ul className="grid md:grid-cols-3 gap-4">
              {[
                "Quantum-inspired algorithms",
                "AI-powered route suggestions",
                "Real-time GPS tracking",
                "Mobile app for iOS and Android",
                "Seamless multi-platform sync",
                "256-bit encryption",
              ].map((feature) => (
                <li key={feature} className="flex items-center justify-center">
                  <Check className="text-green-500 mr-2" />
                  <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </MaxWidthWrapper>
    </div>
  );
}
