"use client";

import { X, Plus } from "lucide-react";
import { useState } from "react";

import Questions from "@/public/assets/images/faq-image.png";
import Image from "next/image";

type FaqItem = {
  q: string;
  a: string;
};

function FaqCard({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="overflow-hidden border-0 shadow-sm bg-[#212897] text-white rounded-lg">
      <button
        className={`w-full text-left p-3 md:p-6 ${
          isOpen
            ? "bg-[#212897] text-white"
            : "bg-[#3B45EF] hover:bg-[#212897] duration-200"
        }`}
        onClick={onClick}
      >
        <div className="flex gap-2 items-center justify-between w-full">
          <span className="text-sm md:text-base lg:text-2xl font-semibold">
            {question}
          </span>
          <div
            className={`transition-transform duration-300 transform ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            {isOpen ? (
              <X className="size-5 shrink-0" />
            ) : (
              <Plus className="size-5 shrink-0" />
            )}
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="p-3 md:p-6">
          <p className="leading-relaxed text-xs md:text-sm lg:text-lg">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqsList: FaqItem[] = [
    {
      q: "How do I create an account on Payfeer?",
      a: "Download the app, click on “Get Started,” and enter your full name, email, phone number, and create a password. Verify your details to activate your account.",
    },
    {
      q: "What currencies can I hold and exchange in Payfeer?",
      a: "You can hold and exchange a wide variety of currencies including USD, EUR, GBP, and many others.",
    },
    {
      q: "How do I withdraw funds from my Payfeer wallet?",
      a: "To withdraw funds, go to your wallet, select 'Withdraw,' choose your withdrawal method, and enter the amount. Confirm the details to complete the process.",
    },
    {
      q: "Is there a fee for converting currencies?",
      a: "Yes, a small fee may apply when converting between currencies. Please check the app for the latest rates and fees.",
    },
    {
      q: "Can I track the status of my cash withdrawal?",
      a: "Yes, you can track the status in the 'Transactions' section of your wallet. Notifications will also keep you updated.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-[#FAFAFD]">
      <div id="faqs" className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-semibold text-xl md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[900px] text-sm md:text-lg/relaxed">
            Get answers to common questions and learn everything you need to
            know about using Payfeer. From setting up your account to making
            secure withdrawals, we’ve got you covered!
          </p>
        </div>

        <div className="mx-auto md:max-w-screen-md 2xl:max-w-screen-lg space-y-4 mt-8 relative">
          {faqsList.map((item, index) => (
            <FaqCard
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}

          <Image
            src={Questions}
            alt="questions"
            className="absolute -top-28 xl:-top-36 -right-36 xl:-right-48 hidden lg:block"
            width={220}
            height={220}
            quality={90}
          />
          <Image
            src={Questions}
            alt="questions"
            className="absolute -bottom-10 -left-36 xl:-left-48 hidden lg:block"
            width={220}
            height={220}
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
