"use client";

import { useState } from "react";
import CTA from "./CTA";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Testimonial1 from "@/public/assets/images/person.png";
import Image from "next/image";
import { Star } from "lucide-react";
import { BsStarFill } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    text: "Switching to Payfeer for my currency needs was the best decision I’ve made this year. The withdrawals are quick, and I feel confident with every transaction I make. Highly recommend it!",
    name: "Adeola, 17",
    image: Testimonial1,
  },
  {
    id: 2,
    text: "Switching to Payfeer for my currency needs was the best decision I’ve made this year. The withdrawals are quick, and I feel confident with every transaction I make. Highly recommend it!",
    name: "Ada, 17",
    image: Testimonial1,
  },
  {
    id: 3,
    text: "Switching to Payfeer for my currency needs was the best decision I’ve made this year. The withdrawals are quick, and I feel confident with every transaction I make. Highly recommend it!",
    name: "Adeola, 17",
    image: Testimonial1,
  },
  {
    id: 4,
    text: "Switching to Payfeer for my currency needs was the best decision I’ve made this year. The withdrawals are quick, and I feel confident with every transaction I make. Highly recommend it!",
    name: "Ada, 17",
    image: Testimonial1,
  },
  {
    id: 5,
    text: "Switching to Payfeer for my currency needs was the best decision I’ve made this year. The withdrawals are quick, and I feel confident with every transaction I make. Highly recommend it!",
    name: "Adeola, 17",
    image: Testimonial1,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-[#F2F5FD]">
      <div
        id="testimonials"
        className="max-w-screen-xl mx-auto px-4 md:px-6 py-16 md:py-20 text-black flex flex-col gap-8 md:gap-16"
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-semibold text-xl md:text-3xl">
            What Our Users Are Saying
          </h2>
          <p className="max-w-[900px] md:text-lg/relaxed">
            Discover why Payfeer is the preferred choice for seamless currency
            exchange and secure transfers. Hear directly from our users about
            their experiences managing funds with ease and confidence.
          </p>
        </div>

        <div className="relative flex gap-6 items-center overflow-scroll">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id}>
              <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg w-[330px]">
                <div className="flex gap-1">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <span key={i} className="text-[#E9D206] text-base">
                        <BsStarFill />
                      </span>
                    ))}
                </div>
                <p className="text-sm">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="size-[49px] rounded-xl"
                    width={49}
                    height={49}
                    quality={90}
                  />
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="-mb-24">
        <CTA />
      </div>
    </section>
  );
};

export default Testimonials;
