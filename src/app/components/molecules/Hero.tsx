"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { smallClickAnimation } from "@/app/configs/framer.config";

const Hero: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-20 px-5 text-center">
      <Image
        src="/images/toly-img.png"
        width={250}
        height={250}
        alt="toly coin image"
        priority
      />
      <h1 className="text-[70px] md:text-[90px] leading-[88px] font-bold">
        $TOLY COIN
      </h1>
      <p>Launched in May 2023</p>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        &quot;FUCK A ROLY, BUY SOME $TOLY&quot;
      </p>
      <a
        href="https://jup.ag/swap/SOL-TOLY"
        target="_blank"
        rel="noreferrer noopener"
      >
        <motion.button
          className="border-4 border-black mt-8 px-6 py-3 bg-gradient-to-tr uppercase
          to-solana-green from-solana-purple text-white font-bold rounded-xl flex items-center gap-2"
          {...smallClickAnimation}
        >
          <Image
            src="/images/jupiter-logo.svg"
            width={24}
            height={24}
            alt="jupiter logo"
            priority
          />
          <p>Swap on Jupiter</p>
        </motion.button>
      </a>
    </section>
  );
};

export default Hero;
