"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Step1 from "@/public/assets/images/step-1.png";
import Step2 from "@/public/assets/images/step-2.png";
import Step3 from "@/public/assets/images/step-3.png";
import Step4 from "@/public/assets/images/step-4.png";

const SimpleSteps = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Create Your Account",
      description:
        "Sign up quickly and securely by providing your full name, email, and phone number. Start your journey with Payfeer in just a few taps!",
      image: Step1,
    },
    {
      number: 2,
      title: "Fund Your Wallet",
      description:
        "Add funds to your multi-currency wallet using various payment methods. It's quick, easy, and allows you to manage multiple currencies at once.",
      image: Step2,
    },
    {
      number: 3,
      title: "Start Converting",
      description:
        "Choose your currencies, enter the amount, and let Payfeer handle the rest! Enjoy instant conversions at competitive rates, making your financial transactions smoother than ever.",
      image: Step3,
    },
    {
      number: 4,
      title: "Withdraw Your Funds",
      description:
        "Select your preferred withdrawal method—be it cash pickup or interwallet transfer—and receive your funds effortlessly. Your money is always within reach.",
      image: Step4,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div
      id="get-started"
      className="flex flex-col gap-4 md:gap-8"
      data-aos="fade-up"
    >
      <h2 className="font-semibold text-xl md:text-3xl max-w-lg w-full">
        Simple Steps to Effortless Currency Management
      </h2>

      {/* Steps */}
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <div className="bg-[#4339ca] rounded-3xl p-8 flex items-center justify-center">
          <div
            key={activeStep}
            className="transition-transform transform scale-95 animate-fadeIn"
          >
            <Image
              src={steps[activeStep - 1].image}
              alt={`Step ${activeStep} illustration`}
              width={523}
              height={483}
              className="transition-transform duration-500 transform scale-100"
              quality={90}
            />
          </div>
        </div>

        {/* Steps List */}
        <div
          className="relative space-y-6 pl-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Vertical Progress Bar */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-[#3B3BF15C]">
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-1/4 w-full transition-colors duration-300",
                  index + 1 === activeStep ? "bg-[#3B46F1]" : "bg-transparent"
                )}
              />
            ))}
          </div>

          {steps.map((step) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(step.number)}
              className="w-full text-left"
              data-aos="fade-up"
              data-aos-delay={300 + step.number * 100}
            >
              <div className="flex gap-4 items-start group cursor-pointer">
                <div
                  className={cn(
                    "relative z-10 rounded-full size-9 md:size-12 flex items-center justify-center text-sm md:text-lg font-semibold shrink-0 transition-colors duration-300",
                    activeStep === step.number
                      ? "bg-[#4339ca] text-white"
                      : "bg-[#D8D8D8] text-gray-900 group-hover:bg-gray-200"
                  )}
                >
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base md:text-2xl font-semibold">
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm md:text-lg transition-colors duration-300",
                      activeStep === step.number
                        ? "text-gray-900"
                        : "text-gray-500"
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleSteps;
