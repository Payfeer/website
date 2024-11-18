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
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <footer className="bottom-0 z-0 bg-[#200063] text-white min-h-[344px]">
      <div className="relative px-4 md:px-6 pt-28 md:pt-32 lg:px-10">
        <div className="p-4 max-w-screen-md mx-auto flex flex-col gap-6 items-center">
          <Link
            href="/"
            className="text-3xl text-black font-bold uppercase"
            data-aos="fade-down"
          >
            <Image
              src={Logo}
              alt="Payfeer Logo"
              width={165}
              height={46}
              quality={90}
              priority
            />
          </Link>

          <ul
            className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {navigation.map((item, idx) => (
              <li key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <Link
                  href={item.path}
                  className="hover:text-gray-400 duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <p
            className="text-center text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Payfeer—your trusted partner in seamless currency exchange. Connect,
            convert, and manage your money effortlessly. Wherever you are,
            we&quot;re here to help you make the most of your funds.
          </p>

          <div
            className="overflow-hidden relative pt-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="px-4 relative z-10">
              <div className="flex justify-center space-x-3 md:space-x-6">
                {[
                  { Icon: FaFacebookF, label: "Facebook" },
                  { Icon: FaTwitter, label: "Twitter" },
                  { Icon: FaLinkedinIn, label: "LinkedIn" },
                  { Icon: BsInstagram, label: "Instagram" },
                ].map((social, idx) => (
                  <Link
                    key={social.label}
                    href="#"
                    className="hover:text-gray-400 duration-200 transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay={500 + idx * 100}
                  >
                    <span className="sr-only">{social.label}</span>
                    <social.Icon className="size-4 md:size-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Left shape */}
        <div
          className="absolute left-0 bottom-0 w-1/4 md:w-2/5 h-[52px] bg-[#150043] rounded-tr-full"
          data-aos="slide-right"
          data-aos-delay="600"
        />
        {/* Right shape */}
        <div
          className="absolute right-0 bottom-0 w-1/4 md:w-2/5 h-[52px] bg-[#150043] rounded-tl-full"
          data-aos="slide-left"
          data-aos-delay="600"
        />
      </div>
    </footer>
  );
};

export default Footer;
