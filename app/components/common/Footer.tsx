"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";

import Logo from "@/public/assets/images/Payfeer-logo.png";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const navigation = [
    { title: "Home", path: "#" },
    { title: "Features", path: "#features" },
    { title: "Get Started", path: "#get-started" },
    { title: "Testimonials", path: "#testimonials" },
    { title: "FAQs", path: "#faqs" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bottom-0 z-0 bg-[#200063] text-white min-h-[344px]">
      <div className="relative px-4 md:px-6 pt-28 md:pt-32 lg:px-10">
        <div className="p-4 max-w-screen-md mx-auto flex flex-col gap-6 items-center">
          <Link href="/" className="text-3xl text-black font-bold uppercase">
            <Image
              src={Logo}
              alt="Payfeer Logo"
              width={165}
              height={46}
              quality={90}
              priority
            />
          </Link>

          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 text-center">
            {navigation.map((item, idx) => (
              <li key={idx} className="">
                <Link
                  href={item.path}
                  className="hover:text-gray-400 duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-center text-sm md:text-base">
            Payfeer—your trusted partner in seamless currency exchange. Connect,
            convert, and manage your money effortlessly. Wherever you are,
            we&quot;re here to help you make the most of your funds.
          </p>

          <div className="overflow-hidden relative pt-12">
            <div className="px-4 relative z-10">
              <div className="flex justify-center space-x-3 md:space-x-6">
                <Link
                  href="#"
                  className="hover:text-gray-400 duration-200 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF className="size-4 md:size-6" />
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-400 duration-200 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="size-4 md:size-6" />
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-400 duration-200 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedinIn className="size-4 md:size-6" />
                </Link>
                <Link
                  href="/"
                  className="hover:text-gray-400 duration-200 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <BsInstagram className="size-4 md:size-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Left shape */}
        <div className="absolute left-0 bottom-0 w-1/4 md:w-2/5 h-[52px] bg-[#150043] rounded-tr-full" />
        {/* Right shape */}
        <div className="absolute right-0 bottom-0 w-1/4 md:w-2/5 h-[52px] bg-[#150043] rounded-tl-full" />
      </div>
    </footer>
  );
};

export default Footer;
