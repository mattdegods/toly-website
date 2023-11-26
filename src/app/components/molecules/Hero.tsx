"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { smallClickAnimation } from "@/app/configs/framer.config";

const Hero: FC = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-2 py-24 px-5 text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/images/toly-img.png"
        width={250}
        height={250}
        alt="toly coin image"
        priority
      />
      <h1 className="text-[70px] md:text-[90px] leading-[88px] font-base-b">
        $TOLY COIN
      </h1>
      <p>Launched in May 2023</p>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        &quot;FUCK A ROLY, BUY SOME $TOLY&quot;
      </p>
      <div className="flex flex-col items-center justify-center gap-2">
        <a
          href="https://birdeye.so/token/to1yVXiNRMVVgS8i54Yjj3xB51MTorFrCMz7N8cirbK?chain=solana"
          target="_blank"
          rel="noreferrer noopener"
        >
          <motion.button
            className="border-4 border-black px-8 py-4 bg-gradient-to-tr uppercase text-lg
          bg-white text-black font-bold rounded-xl flex items-center gap-2"
            {...smallClickAnimation}
          >
            <Image
              src="/images/birdeye.png"
              width={32}
              height={32}
              alt="jupiter logo"
              priority
            />
            <p>Buy on Birdeye</p>
          </motion.button>
        </a>
        <a
          href="https://jup.ag/swap/SOL-TOLY"
          target="_blank"
          rel="noreferrer noopener"
        >
          <motion.button
            className="border-4 border-black px-8 py-4 bg-gradient-to-tr uppercase text-lg
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
      </div>
    </motion.section>
  );
};

export default Hero;
