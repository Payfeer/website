"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import SimpleSteps from "./SimpleSteps";

import Feature1 from "@/public/assets/images/feature-1.png";
import Feature2 from "@/public/assets/images/feature-2.png";
import Feature3 from "@/public/assets/images/feature-3.png";

const FeaturePackedFun = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className="bg-[#FAFAFD]">
      <div
        id="features"
        className="max-w-screen-xl mx-auto px-4 md:px-6 py-16 md:py-20 text-black flex flex-col gap-8 md:gap-16"
      >
        <span
          className="flex flex-col md:flex-row gap-2 md:gap-8 justify-between"
          data-aos="fade-up"
        >
          <h2 className="font-semibold text-xl md:text-3xl max-w-2xl w-full">
            Feature-Packed Fun: Discover What Payfeer Can Do!
          </h2>
          <p className="md:text-right text-xs md:text-base">
            From secure multi-currency wallets to fast, flexible withdrawals,
            Payfeer is built to simplify your financial transactions. Discover
            features that let you convert, transfer, and withdraw with
            ease—giving you the power to manage your money, your way.
          </p>
        </span>

        {/* Features Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-9"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            className="bg-[#3B46F1] text-white rounded-lg px-3 md:px-6 pt-6 flex flex-col justify-between gap-8 overflow-hidden group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="space-y-2">
              <h3 className="font-medium text-xl md:text-2xl">
                Multi-Currency Wallet
              </h3>
              <p className="text-sm">
                Manage all your currencies in one place with seamless
                conversions between them.
              </p>
            </span>
            <span className="group-hover:scale-105 duration-300">
              <Image
                src={Feature1}
                alt="feature"
                className="mx-auto"
                width={219}
                height={453}
                quality={90}
              />
            </span>
          </div>

          <div
            className="bg-[#8B3BF1] max-h-[401px] text-white rounded-lg px-3 md:px-6 pt-6 flex flex-col justify-between gap-8 overflow-hidden group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="space-y-2">
              <h3 className="font-medium text-xl md:text-2xl">
                Multi-Currency Wallet
              </h3>
              <p className="text-sm">
                Manage all your currencies in one place with seamless
                conversions between them.
              </p>
            </span>
            <span className="group-hover:scale-105 duration-300">
              <Image
                src={Feature2}
                alt="feature"
                className="mx-auto"
                width={219}
                height={453}
                quality={90}
              />
            </span>
          </div>

          <div
            className="bg-[#0A8D48] text-white rounded-lg px-3 md:px-6 pt-6 flex flex-col justify-between gap-8 overflow-hidden group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span className="space-y-2">
              <h3 className="font-medium text-xl md:text-2xl">
                Multi-Currency Wallet
              </h3>
              <p className="text-sm">
                Manage all your currencies in one place with seamless
                conversions between them.
              </p>
            </span>
            <span className="group-hover:scale-105 duration-300">
              <Image
                src={Feature3}
                alt="feature"
                className="mx-auto"
                width={219}
                height={453}
                quality={90}
              />
            </span>
          </div>
        </div>

        {/* Simple Steps  */}
        <div data-aos="fade-up" data-aos-delay="600">
          <SimpleSteps />
        </div>
      </div>
    </section>
  );
};

export default FeaturePackedFun;
