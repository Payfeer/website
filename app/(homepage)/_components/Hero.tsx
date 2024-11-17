"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import Mockup1 from "@/public/assets/images/mockup-1.png";
import Mockup2 from "@/public/assets/images/mockup-2.png";
import Mockup3 from "@/public/assets/images/mockup-3.png";
import GooglePlay from "@/public/assets/svg/google-play-icon.svg";
import Apple from "@/public/assets/svg/apple-icon.svg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto h-screen lg:max-h-[896px] pt-8 md:pt-14 lg:pt-16 px-4 md:px-6 z-40 text-black flex flex-col gap-12 lg:gap-16">
        {/* heading and CTA */}
        <div
          className="flex flex-col gap-8 items-center text-center max-w-screen-lg mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col gap-4 text-center">
            <h1 className="max-w-[981px] mx-auto font-semibold text-xl sm:text-2xl md:text-4xl lg:text-5xl ">
              Convert, manage, and withdraw funds with ease—wherever you are.
            </h1>
            <p className="max-w-screen-md mx-auto text-sm sm:text-base lg:text-lg text-payfeer-neutral">
              With Payfeer, currency exchange becomes seamless. Manage
              multi-currency wallets, make instant conversions, and withdraw in
              cash or to your domiciliary account—all from one powerful app.
            </p>
          </div>

          <Link
            href="/"
            className="p-4 px-3 md:px-4 flex items-center gap-2 capitalize font-medium rounded-lg text-sm md:text-base active:scale-95 duration-300 text-white bg-payfeer-primary hover:bg-payfeer-primary/90"
          >
            Download App
            <Image src={GooglePlay} alt="Google Play" width={20} height={22} />
            <Image src={Apple} alt="Apple Icon" width={20} height={22} />
          </Link>
        </div>

        <div className="flex gap-4 justify-center overflow-hidden">
          <Image
            src={Mockup1}
            alt="mockup"
            className="flex-1 w-[118px] h-[242px] md:w-[334px] md:h-[690px]"
            width={334}
            height={690}
            quality={90}
            priority
          />
          <Image
            src={Mockup2}
            alt="mockup"
            className="flex-1 w-[118px] h-[242px] md:w-[334px] md:h-[690px] mt-12"
            width={334}
            height={690}
            quality={90}
            priority
          />
          <Image
            src={Mockup3}
            alt="mockup"
            className="flex-1 w-[118px] h-[242px] md:w-[334px] md:h-[690px]"
            width={334}
            height={690}
            quality={90}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
