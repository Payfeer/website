"use client";

import { X, Plus } from "lucide-react";
import { useState } from "react";

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
        className={`w-full text-left p-6 ${
          isOpen
            ? "bg-[#212897] text-white"
            : "bg-[#3B45EF] hover:bg-[#212897] duration-200"
        }`}
        onClick={onClick}
      >
        <div className="flex items-center justify-between w-full">
          <span className="text-lg md:text-2xl font-semibold">{question}</span>
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
        <div className="p-6">
          <p className="leading-relaxed md:text-lg">{answer}</p>
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
    <section className="w-full py-12 bg-[#FAFAFD]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-lg/relaxed">
            Get answers to common questions and learn everything you need to
            know about using Payfeer. From setting up your account to making
            secure withdrawals, we’ve got you covered!
          </p>
        </div>
        <div className="mx-auto max-w-screen-lg space-y-4 mt-8">
          {faqsList.map((item, index) => (
            <FaqCard
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
