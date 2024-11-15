import Image from "next/image";
import Link from "next/link";

import GooglePlay from "@/public/assets/svg/google-play-cta.svg";
import AppStore from "@/public/assets/svg/app-store-cta.svg";

const CTA = () => {
  return (
    <section className="px-4 md:px-6">
      <div className="max-w-screen-xl mx-auto rounded-[46px] px-6 py-8 md:p-10 lg:p-20 flex flex-col gap-10 justify-center items-center text-center text-white bg-[#200063] drop-shadow-xl">
        <h2 className="text-lg md:text-xl lg:text-3xl">
          Ready to take control of your currency exchanges? Join Payfeer today
          and experience fast, reliable, and seamless transactions. Start
          converting with confidence!
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
          <Link href="" className="active:scale-95 duration-200">
            <Image
              src={GooglePlay}
              alt="Google Play"
              width={223}
              height={64}
              quality={90}
            />
          </Link>
          <Link href="" className="active:scale-95 duration-200">
            <Image
              src={AppStore}
              alt="App Store"
              width={223}
              height={64}
              quality={90}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
