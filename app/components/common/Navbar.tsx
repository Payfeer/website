"use client";

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/Payfeer-logoP.png";
import GooglePlay from "@/public/assets/svg/google-play-icon.svg";
import Apple from "@/public/assets/svg/apple-icon.svg";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "#" },
    { title: "Features", path: "#features" },
    { title: "Get Started", path: "#get-started" },
    { title: "Testimonials", path: "#testimonials" },
    { title: "FAQs", path: "#faqs" },
  ];

  return (
    <nav
      className={`w-full sticky bg-[#FAFAFD] top-0 shadow-sm z-[999] transition-all duration-300`}
    >
      <div className="items-center max-w-screen-xl mx-auto md:flex">
        <div className="flex items-center px-4 md:px-6 justify-between py-3 md:py-5 md:block">
          <Link href="/" className="text-3xl text-black font-bold uppercase">
            <Image
              src={Logo}
              alt="Payfeer Logo"
              width={43}
              height={42}
              quality={90}
              priority
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-black outline-none p-2 rounded-md focus:border-black border border-transparent"
              onClick={() => setState(!state)}
            >
              {state ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <IoMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
            state
              ? "flex justify-center text-center pt-12 absolute h-dvh w-full p-4 backdrop-blur-lg bg-black/80 text-black"
              : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex space-x-6 lg:space-x-10 md:space-y-0">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="text-[22px] md:text-sm lg:text-base capitalize active:scale-95 duration-300"
              >
                <Link
                  href={item.path}
                  className="relative text-white hover:text-payfeer-primary md:text-black md:hover:text-payfeer-primary font-medium group"
                >
                  <span className="relative">
                    {item.title}
                    {/* Underline */}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full active:w-1/2"></span>
                  </span>
                </Link>
              </li>
            ))}

            <div className="flex-1 items-center justify-end gap-x-6 space-y-6 md:hidden">
              <Link
                href="/"
                className="py-4 px-10 block font-medium rounded-2xl text-[22px] md:text-sm lg:text-base text-white border border-[#DCDCDC] active:scale-95 duration-300 hover:bg-[#DCDCDC] hover:text-black"
              >
                Download
              </Link>
            </div>
          </ul>
        </div>
        <div className="hidden md:flex flex-none px-6 xl:px-10 gap-x-2 items-center justify-end mt-6 space-y-6 md:space-y-0 md:mt-0">
          <Link
            href="/"
            className="py-2 px-4 lg:px-6 flex items-center gap-2 font-medium rounded-lg text-[22px] md:text-sm lg:text-base text-white active:scale-95 duration-300 bg-payfeer-primary hover:bg-payfeer-primary/90"
          >
            Download
            <Image src={GooglePlay} alt="Google Play" width={15} height={18} />
            <Image src={Apple} alt="Apple Icon" width={15} height={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
